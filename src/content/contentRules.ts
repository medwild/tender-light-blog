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
