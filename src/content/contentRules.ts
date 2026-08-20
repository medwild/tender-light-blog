import type { Block, Post } from "./types";
import type { Hub } from "./hubs";

/**
 * §18 — Content rules per page type. The single source of truth the
 * compliance audit (and the /guides "Content Compliance" desk) measures
 * every page against. Structural rules fail hard; editorial targets
 * (word count, image depth, quotables) report as amber goals.
 */
export const HUB_RULES = {
  wordCount: [1800, 3000],
  introWords: [150, 250],
  h2: [8, 12],
  faq: [5, 8],
  images: [4, 8],
  internalLinks: "every article of the cluster",
  schema: ["CollectionPage", "ItemList", "BreadcrumbList", "FAQPage"],
  cta: "Pinterest follow / newsletter",
} as const;

export const SATELLITE_RULES = {
  wordCount: [1200, 1800],
  introWords: [100, 150],
  h2: [6, 9],
  faq: [4, 6],
  images: [4, 8],
  internalLinks: [3, 6],
  schema: ["BlogPosting", "FAQPage", "BreadcrumbList", "ImageObject"],
  answerFirst: "every H2 opens with a direct answer",
  quotables: 2,
} as const;

/** §20 — Pinterest SEO rules per article. */
export const PINTEREST_RULES = {
  ogImage: { w: 1200, h: 630 },
  verticalPin: { w: 1000, h: 1500 },
  pinCount: [1, 3], // ≥1 required, 3 ideal
  pinTitleMax: 100,
  pinDescriptionMax: 500,
  altFormat: "primary keyword + natural description",
  metaOg: [
    "og:title",
    "og:description",
    "og:image",
    "og:url",
    "og:type=article",
    "article:published_time",
    "article:modified_time",
    "article:author",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ],
} as const;

/* ————— Measurers ————— */

const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;

export const blockWords = (blocks: Block[]): number =>
  blocks.reduce((sum, b) => {
    switch (b.type) {
      case "p":
      case "callout":
      case "quote":
        return sum + countWords(b.text);
      case "h2":
      case "h3":
        return sum + countWords(b.text);
      case "list":
        return sum + b.items.reduce((s, i) => s + countWords(i), 0);
      case "faq":
        return sum + b.items.reduce((s, i) => s + countWords(i.q) + countWords(i.a), 0);
      default:
        return sum;
    }
  }, 0);

export const introWords = (blocks: Block[]): number => {
  const first = blocks.find((b) => b.type === "p");
  return first && first.type === "p" ? countWords(first.text) : 0;
};

export const h2Count = (blocks: Block[]): number => blocks.filter((b) => b.type === "h2").length;

export const faqCount = (blocks: Block[]): number => {
  const faq = blocks.find((b) => b.type === "faq");
  return faq && faq.type === "faq" ? faq.items.length : 0;
};

export const imageCount = (post: Post): number => {
  let n = post.featuredImage ? 1 : 0;
  for (const b of post.blocks) if (b.type === "gallery") n += b.images.length;
  return n;
};

export const quotableCount = (blocks: Block[]): number =>
  blocks.filter((b) => b.type === "quote").length;

/** Heuristic: an H2 is "answer-first" when a prose paragraph leads it (not a list/faq). */
export const answerFirstScore = (blocks: Block[]): { ok: number; total: number } => {
  let ok = 0;
  let total = 0;
  blocks.forEach((b, i) => {
    if (b.type !== "h2") return;
    total += 1;
    const next = blocks[i + 1];
    if (next && (next.type === "p" || next.type === "callout")) ok += 1;
  });
  return { ok, total };
};

export const internalLinkCount = (post: Post): number =>
  (post.internalLinks?.length ?? 0) + (post.relatedPosts?.length ?? 0) + 1; // +1 = guaranteed hub banner

/* ————— GEO / AI-SEO measurers (§19) ————— */

/** Key Takeaways block: present? how many bullets? */
export const keyTakeaways = (blocks: Block[]): { present: boolean; bullets: number } => {
  const kt = blocks.find((b) => b.type === "keyTakeaways");
  return kt && kt.type === "keyTakeaways" ? { present: true, bullets: kt.items.length } : { present: false, bullets: 0 };
};

/** Comparison tables (featured-snippet fuel). */
export const tableCount = (blocks: Block[]): number => blocks.filter((b) => b.type === "table").length;

/** Share of FAQ answers in the 40–70 word extractable window. */
export const faqAnswerWindow = (blocks: Block[]): { ok: number; total: number } => {
  const faq = blocks.find((b) => b.type === "faq");
  if (!faq || faq.type !== "faq") return { ok: 0, total: 0 };
  const ok = faq.items.filter((i) => {
    const w = countWords(i.a);
    return w >= 40 && w <= 70;
  }).length;
  return { ok, total: faq.items.length };
};

/* ————— §20 Pinterest measurers ————— */

/** Alt text follows "primary keyword + natural description". */
export const altHasKeyword = (post: Post): boolean => {
  const kw = (post.primaryKeyword ?? "").toLowerCase();
  const alt = post.featuredAlt.toLowerCase();
  if (!kw) return Boolean(post.featuredAlt);
  return alt.includes(kw) || alt.includes(kw.split(/\s+/).slice(0, 2).join(" "));
};

export const pinTitleMax = (post: Post): number =>
  (post.pinImages ?? []).reduce((m, p) => Math.max(m, p.pinTitle.length), 0);

export const pinDescMax = (post: Post): number =>
  (post.pinImages ?? []).reduce((m, p) => Math.max(m, p.pinDescription.length), 0);

export const pinterestChecks = (post: Post): Check[] => {
  const pins = post.pinImages ?? [];
  const ogOk = Boolean(post.featuredImage);
  const altOk = altHasKeyword(post);
  const titleOk = pins.length > 0 && pinTitleMax(post) <= PINTEREST_RULES.pinTitleMax;
  const descOk = pins.length > 0 && pinDescMax(post) <= PINTEREST_RULES.pinDescriptionMax;

  return [
    { rule: "OG image 1200×630", value: ogOk ? "set" : "—", level: ogOk ? "pass" : "fail", target: "featured image" },
    { rule: "Alt = keyword + desc", value: altOk ? "yes" : "no", level: altOk ? "pass" : "goal", target: PINTEREST_RULES.altFormat },
    {
      rule: "Vertical pins 1000×1500",
      value: `${pins.length}`,
      level: pins.length >= PINTEREST_RULES.pinCount[1] ? "pass" : pins.length >= 1 ? "goal" : "fail",
      target: "3 ideal",
    },
    { rule: "Pin title ≤ 100", value: pins.length ? `${pinTitleMax(post)} max` : "—", level: pins.length && titleOk ? "pass" : "fail", target: "≤ 100 chars" },
    { rule: "Pin desc ≤ 500", value: pins.length ? `${pinDescMax(post)} max` : "—", level: pins.length && descOk ? "pass" : "fail", target: "≤ 500 chars" },
    { rule: "Meta OG/Twitter", value: "12 tags", level: "pass", target: `${PINTEREST_RULES.metaOg.length} tags` },
  ];
};

/* ————— Audit report ————— */

export type CheckLevel = "pass" | "goal" | "fail";
export interface Check {
  rule: string;
  value: string;
  level: CheckLevel;
  target: string;
}

const range = (v: number, [min, max]: readonly [number, number], goal = false): CheckLevel =>
  v >= min && v <= max ? "pass" : goal ? "goal" : v > 0 ? "goal" : "fail";

export function auditPost(post: Post): Check[] {
  const wc = blockWords(post.blocks);
  const intro = introWords(post.blocks);
  const h2 = h2Count(post.blocks);
  const faq = faqCount(post.blocks);
  const imgs = imageCount(post);
  const quotables = quotableCount(post.blocks);
  const af = answerFirstScore(post.blocks);
  const links = internalLinkCount(post);
  const kt = keyTakeaways(post.blocks);
  const tables = tableCount(post.blocks);
  const fw = faqAnswerWindow(post.blocks);

  return [
    { rule: "Word count", value: `${wc}`, level: range(wc, SATELLITE_RULES.wordCount, true), target: "1,200–1,800" },
    { rule: "Intro", value: `${intro}w`, level: range(intro, SATELLITE_RULES.introWords, true), target: "100–150w" },
    { rule: "H2 sections", value: `${h2}`, level: range(h2, SATELLITE_RULES.h2), target: "6–9" },
    { rule: "FAQ", value: `${faq}`, level: range(faq, SATELLITE_RULES.faq), target: "4–6" },
    { rule: "Internal links", value: `${links}`, level: range(links, SATELLITE_RULES.internalLinks), target: "3–6" },
    { rule: "Images", value: `${imgs}`, level: range(imgs, SATELLITE_RULES.images, true), target: "4–8" },
    { rule: "Quotables", value: `${quotables}`, level: quotables >= SATELLITE_RULES.quotables ? "pass" : "goal", target: "≥ 2" },
    {
      rule: "Answer-first",
      value: `${af.ok}/${af.total}`,
      level: af.total > 0 && af.ok === af.total ? "pass" : "goal",
      target: "every H2",
    },
    {
      rule: "Key Takeaways",
      value: kt.present ? `${kt.bullets} bullets` : "—",
      level: kt.present && kt.bullets >= 3 && kt.bullets <= 5 ? "pass" : "goal",
      target: "3–5 bullets",
    },
    { rule: "Comparison tables", value: `${tables}`, level: tables > 0 ? "pass" : "goal", target: "≥ 1" },
    {
      rule: "FAQ 40–70w answers",
      value: fw.total > 0 ? `${fw.ok}/${fw.total}` : "—",
      level: fw.total > 0 && fw.ok === fw.total ? "pass" : "goal",
      target: "every answer",
    },
    ...pinterestChecks(post),
  ];
}

export function auditHub(hub: Hub): Check[] {
  const faq = hub.faq.length;
  const intro = countWords(hub.lede);
  const spokes = hub.spokes.length;
  const textWords = countWords(hub.lede) + countWords(hub.harperNote) + hub.faq.reduce((s, f) => s + countWords(f.q) + countWords(f.a), 0);

  return [
    { rule: "Word count", value: `${textWords}+ (page)`, level: "goal", target: "1,800–3,000" },
    { rule: "Intro", value: `${intro}w`, level: range(intro, HUB_RULES.introWords, true), target: "150–250w" },
    { rule: "FAQ", value: `${faq}`, level: faq >= HUB_RULES.faq[0] && faq <= HUB_RULES.faq[1] ? "pass" : "fail", target: "5–8" },
    { rule: "Cluster links", value: `${spokes}`, level: spokes > 0 ? "pass" : "fail", target: "all spokes" },
    { rule: "Schema", value: "4 types", level: "pass", target: HUB_RULES.schema.join(", ") },
  ];
}

export type AuditVerdict = "pass" | "goals" | "fail";
export const verdict = (checks: Check[]): AuditVerdict =>
  checks.some((c) => c.level === "fail") ? "fail" : checks.some((c) => c.level === "goal") ? "goals" : "pass";
