/**
 * Content model — the Vite/SPA equivalent of MDX + frontmatter.
 * Each post is a typed block tree rendered by <PostBody />.
 */
export type CategorySlug = "poses" | "outfits" | "locations" | "tips";

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
  /** Pinterest production kit: the pin variants planned for this article. */
  | { type: "pinKit"; pins: { image: string; overlay: string; note: string }[] }
  /** "Pin this guide" call to action. */
  | { type: "pinCta"; url: string; image: string }
  /** Editorial internal links. */
  | { type: "keepReading"; items: { label: string; to: string; note: string }[] };

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  instagram: string;
}

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: CategorySlug;
  date: string; // ISO
  featuredImage: string;
  featuredAlt: string;
  tags: string[];
  author: Author;
  blocks: Block[];
}

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}
