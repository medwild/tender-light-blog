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

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "rose" | "gold" | "sage"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "gallery"; images: { src: string; alt: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  /** Reserved AdSense slot — labeled placeholder until ad units are wired. */
  | { type: "ad"; slot: "in-article" | "end-of-section" }
  /** Affiliate-ready product links (rel="sponsored"). */
  | { type: "shop"; items: { label: string; store: string; href: string }[] }
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
  /** [LEAD MAGNET] — free-download opt-in (cheat sheet / PDF guide). */
  | { type: "leadMagnet"; title: string; subtitle: string; bullets: string[]; cta: string }
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
  citations?: string[];
  internalLinks?: { url: string; anchor: string }[];
  relatedPosts?: string[]; // explicit override; falls back to same-category
  monetization?: Monetization;
}

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}
