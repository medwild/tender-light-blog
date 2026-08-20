/**
 * Content model — the Vite/SPA equivalent of MDX + frontmatter.
 * Each post is a typed block tree rendered by <PostBody />.
 */
export type CategorySlug = "ideas" | "poses" | "outfits" | "locations" | "tips";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  longDescription: string;
  accent: "rose" | "gold" | "sage" | "blush";
}

/** §21 — the five canonical AdSense placements, in reading order.
 *  `"in-article"` / `"end-of-section"` are kept as legacy aliases (normalized
 *  via `normalizeAdSlot`) so pre-§21 content keeps compiling and counting. */
export type AdSlotName =
  | "after-intro"
  | "after-first-h2"
  | "mid-article"
  | "before-faq"
  | "end-of-article"
  | "in-article" // legacy → mid-article
  | "end-of-section"; // legacy → before-faq

/** §21 — named affiliate sections (outfits, location gear, props, prints, display, gifts). */
export type AffiliateSectionName =
  | "outfits"
  | "location-accessories"
  | "props"
  | "prints"
  | "display"
  | "gifts";

/** §21 — the four lead magnets in the registry. */
export type LeadMagnetId =
  | "engagement-shoot-checklist"
  | "pose-cheat-sheet"
  | "outfit-planning-guide"
  | "pinterest-board-template";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "rose" | "gold" | "sage"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "gallery"; images: { src: string; alt: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  /** GEO §19 — "Key Takeaways": 3–5 extractable bullets near the top. */
  | { type: "keyTakeaways"; items: string[] }
  /** GEO §19 — comparison table for featured snippets (Casual vs Formal, etc.). */
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  /** Reserved AdSense slot — labeled placeholder until ad units are wired. §21. */
  | { type: "ad"; slot: AdSlotName }
  /** Affiliate-ready product links (rel="sponsored"). §21 — `section` names the placement. */
  | { type: "shop"; section?: AffiliateSectionName; title?: string; items: { label: string; store: string; href: string }[] }
  /** Pinterest production kit (STEP 2 spec): 3 angle variants + boards. */
  | {
      type: "pinKit";
      pins: {
        angle: "Outfit/Style" | "How-To/List" | "Aesthetic/Mood";
        image: string;
        overlay: string; // on-image text, max 8 words
        pinTitle: string; // SEO title, max 100 chars
        pinDescription: string; // 2–3 keyword sentences + CTA
        note: string; // visual description for the designer
      }[];
      boards: string[];
    }
  /** "Pin this guide" call to action. */
  | { type: "pinCta"; url: string; image: string }
  /** [LEAD MAGNET] — free-download opt-in. §21: `productId` pulls from the LEAD_MAGNETS
   *  registry; inline fields override it when both are present. */
  | { type: "leadMagnet"; productId?: LeadMagnetId; title?: string; subtitle?: string; bullets?: string[]; cta?: string }
  /** Editorial internal links. */
  | { type: "keepReading"; items: { label: string; to: string; note: string }[] };

export interface Author {
  handle: string; // "/author/{handle}" page
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  instagram: string;
}

/** Pinterest pin asset attached to the article frontmatter. */
export interface PinImage {
  image: string;
  pinTitle: string; // ≤ 100 chars, keyword-first
  pinDescription: string; // ≤ 500 chars, keyword-rich + soft CTA
}

/** Per-article monetization switches (gate ad / affiliate / lead-magnet blocks). */
export interface Monetization {
  adsense: boolean;
  affiliate: boolean;
  leadMagnet: boolean;
}

/**
 * External source for a verifiable claim (§16 — Citations & Trust Signals).
 * Rules: never invent sources, never cite direct competitors, only verifiable
 * facts. Experience-based advice stays in Harper's voice (callouts), never here.
 */
export interface Citation {
  title: string;
  url: string;
  /** The verifiable claim this source supports. */
  claim?: string;
}

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: CategorySlug;
  date: string; // ISO datePublished
  dateModified?: string;
  featuredImage: string;
  featuredAlt: string;
  tags: string[];
  author: Author;
  blocks: Block[];

  /* ——— Frontmatter §3 (plan SEO) — cluster = silo hub, derived via POST_HUB ——— */
  cluster?: string;
  pillar?: boolean;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  lsiKeywords?: string[];
  searchIntent?: "informational" | "commercial" | "navigational";
  pinImages?: PinImage[];
  citations?: (string | Citation)[];
  internalLinks?: { url: string; anchor: string }[];
  relatedPosts?: string[]; // explicit override; falls back to same-category
  monetization?: Monetization;
}

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}
