export type CategorySlug = "ideas" | "poses" | "outfits" | "locations" | "tips";

export interface TocItem { id: string; text: string; depth: 2 | 3; }
export interface Citation { title: string; url: string; claim?: string; }
export interface PinImage { image: string; pinTitle: string; pinDescription: string; overlayText?: string; }
export interface InternalLink { url: string; anchor: string; }
export type AdSlotName =
  | "after-intro"
  | "after-first-h2"
  | "mid-article"
  | "before-faq"
  | "end-of-article"
  /* legacy aliases — mapped onto the canonical five by normalizeAdSlot() */
  | "in-article"
  | "end-of-section";
export type AffiliateSectionName =
  | "outfits"
  | "location-accessories"
  | "props"
  | "prints"
  | "display"
  | "gifts";
export type LeadMagnetId =
  | "engagement-shoot-checklist"
  | "pose-cheat-sheet"
  | "outfit-planning-guide"
  | "pinterest-board-template";
export interface Monetization { adsense: boolean; affiliate: boolean; leadMagnet: boolean; }

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone: "rose" | "gold" | "sage"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "gallery"; images: { src: string; alt: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "keyTakeaways"; items: string[] }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "ad"; slot: AdSlotName }
  | { type: "shop"; section: AffiliateSectionName; items: { label: string; store: string; href: string }[] }
  | { type: "leadMagnet"; title: string; subtitle: string; bullets: string[]; cta: string }
  | { type: "keepReading"; items: { label: string; to: string; note: string }[] };

export interface Author {
  handle: string; name: string; role: string; bio: string; avatar?: string; instagram: string;
}

export interface Post {
  slug: string; title: string; seoTitle: string; seoDescription: string; excerpt: string;
  category: CategorySlug; date: string; dateModified?: string;
  featuredImage: string; featuredAlt: string; tags: string[];
  author: Author; primaryKeyword?: string; cluster?: string;
  lsiKeywords?: string[]; searchIntent?: string;
  relatedPosts?: string[]; internalLinks?: InternalLink[];
  monetization?: Monetization; pinImages?: PinImage[];
  blocks: Block[];
}

export interface Hub {
  slug: string; name: string; keyword: string; volume: string; kd: string;
  metaTitle: string; metaDescription: string; lede: string; harperNote: string;
  accent: "rose" | "gold" | "sage" | "blush";
  spokes: string[]; related: string[]; faq: { q: string; a: string }[];
}
