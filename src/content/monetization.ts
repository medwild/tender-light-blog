import { CalendarCheck, ImageDown, ListChecks, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AdSlotName, AffiliateSectionName, Block, LeadMagnetId, PinImage, Post } from "./types";
import { IMAGES } from "../lib/constants";

/**
 * §21 — Monetization registry. The single source of truth for where revenue
 * blocks live: the five canonical AdSense slots, the named affiliate sections,
 * and the four lead magnets. The compliance audit measures every article
 * against these; the PostBody renderer pulls labels from here.
 */

/* ————— AdSense ————— */

export const AD_SLOTS: { id: AdSlotName; label: string; hint: string }[] = [
  { id: "after-intro", label: "After the intro", hint: "First impression slot — highest viewability." },
  { id: "after-first-h2", label: "After the first H2", hint: "Readers are committed; engagement is climbing." },
  { id: "mid-article", label: "Mid-article", hint: "The natural scroll pause between the two halves." },
  { id: "before-faq", label: "Before the FAQ", hint: "Last content beat before the extractable section." },
  { id: "end-of-article", label: "End of article", hint: "Pairs with the Related Posts / next-up CTA." },
];

/** Canonical five slots, in reading order. */
export const CANONICAL_AD_SLOTS: AdSlotName[] = [
  "after-intro",
  "after-first-h2",
  "mid-article",
  "before-faq",
  "end-of-article",
];

/** Map legacy slot names onto the canonical five. */
export function normalizeAdSlot(slot: AdSlotName): AdSlotName {
  if (slot === "in-article") return "mid-article";
  if (slot === "end-of-section") return "before-faq";
  return slot;
}

export const adSlotLabel = (slot: AdSlotName): string =>
  AD_SLOTS.find((s) => s.id === normalizeAdSlot(slot))?.label ?? slot;

/* ————— Affiliate ————— */

export const AFFILIATE_SECTIONS: { id: AffiliateSectionName; label: string; example: string }[] = [
  { id: "outfits", label: "Outfit sections", example: "dresses, knits, sneakers" },
  { id: "location-accessories", label: "Location accessories", example: "blankets, tripods, reflectors" },
  { id: "props", label: "Props", example: "coffee mugs, signs, vintage pieces" },
  { id: "prints", label: "Prints", example: "print labs, paper stocks, sizes" },
  { id: "display", label: "Display products", example: "frames, ledges, gallery hardware" },
  { id: "gifts", label: "Gift guides", example: "lockets, albums, keepsakes" },
];

export const affiliateSectionLabel = (id?: AffiliateSectionName): string =>
  AFFILIATE_SECTIONS.find((s) => s.id === id)?.label ?? "Shop the look";

/* ————— Lead magnets ————— */

export interface LeadMagnet {
  id: LeadMagnetId;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  accent: "rose" | "gold" | "sage";
}

export const LEAD_MAGNETS: Record<LeadMagnetId, LeadMagnet> = {
  "engagement-shoot-checklist": {
    id: "engagement-shoot-checklist",
    icon: CalendarCheck,
    title: "The Engagement Shoot Checklist",
    subtitle: "Everything handled, in order — 3 months out to 1 hour before.",
    bullets: [
      "The 3-month / 1-month / week-of / day-of timeline",
      "The 10 things to pack (most couples forget #7)",
      "Rain-plan and reschedule scripts that work",
      "Golden-hour timing worksheet for your exact date",
    ],
    cta: "Send me the checklist",
    accent: "rose",
  },
  "pose-cheat-sheet": {
    id: "pose-cheat-sheet",
    icon: ListChecks,
    title: "The 30-Pose Cheat Sheet",
    subtitle: "Print it, hand it to your photographer, relax.",
    bullets: [
      "30 poses grouped classic / fun / romantic",
      "The exact direction words photographers use",
      "Camera-shy variations for every pose",
      "A one-page version sized for your phone",
    ],
    cta: "Send me the cheat sheet",
    accent: "gold",
  },
  "outfit-planning-guide": {
    id: "outfit-planning-guide",
    icon: Palette,
    title: "The Outfit Planning Guide",
    subtitle: "Coordinate, don't match — a printable palette + formula.",
    bullets: [
      "The 70/20/10 coordination rule, visualized",
      "Season-by-season color palettes",
      "What to avoid (and why it dates a photo)",
      "A fill-in-the-blank outfit planner for two",
    ],
    cta: "Send me the outfit guide",
    accent: "sage",
  },
  "pinterest-board-template": {
    id: "pinterest-board-template",
    icon: ImageDown,
    title: "The Pinterest Board Template",
    subtitle: "Steal the exact board structure I recommend to couples.",
    bullets: [
      "The 6-section board layout (poses, outfits, spots…)",
      "25 pin descriptions written for you",
      "The 1000×1500 pin spec + text-overlay rules",
      "A link-ready list of the best idea pins",
    ],
    cta: "Send me the board template",
    accent: "rose",
  },
};

/* ————— Coverage audit (§18 desk) ————— */

/** Which canonical AdSense slots an article covers. */
export const adSlotCoverage = (blocks: Block[]): Set<AdSlotName> => {
  const covered = new Set<AdSlotName>();
  for (const b of blocks) if (b.type === "ad") covered.add(normalizeAdSlot(b.slot));
  return covered;
};

/** Which affiliate sections an article covers (inline blocks + registry kits). */
export const affiliateCoverage = (blocks: Block[], slug?: string): Set<AffiliateSectionName> => {
  const covered = new Set<AffiliateSectionName>();
  for (const b of blocks) if (b.type === "shop" && b.section) covered.add(b.section);
  if (slug) for (const kit of ARTICLE_SHOPS[slug] ?? []) covered.add(kit.section);
  return covered;
};

export const hasLeadMagnet = (blocks: Block[]): boolean =>
  blocks.some((b) => b.type === "leadMagnet");

/** True when an article carries at least one ad, one affiliate block and one lead magnet. */
export const monetizationReady = (post: Post): boolean =>
  post.blocks.some((b) => b.type === "ad") &&
  post.blocks.some((b) => b.type === "shop") &&
  hasLeadMagnet(post.blocks);

/* ————— Phase 4 · Monetization cluster kits ————— */

/**
 * Per-article affiliate kits for the Prints / Display / Gifts cluster.
 * Rendered by ArticlePage as a "shop rail" (sponsored links carry
 * rel="sponsored noopener noreferrer" per FTC guidance). Swap the hrefs
 * for real Amazon Associates / LTK URLs before going live.
 */
export interface AffiliateKit {
  section: AffiliateSectionName;
  items: { label: string; store: string; href: string }[];
}

export const ARTICLE_SHOPS: Record<string, AffiliateKit[]> = {
  "locket-photo-print-guide": [
    {
      section: "gifts",
      items: [
        { label: "Custom photo locket", store: "Amazon", href: "https://www.amazon.com/s?k=custom+photo+locket+necklace" },
        { label: "Tiny locket prints (100-pack)", store: "Amazon", href: "https://www.amazon.com/s?k=mini+locket+photo+prints" },
        { label: "Heirloom keepsake box", store: "Amazon", href: "https://www.amazon.com/s?k=wooden+keepsake+memory+box" },
      ],
    },
  ],
  "photo-booth-strip-ideas": [
    {
      section: "prints",
      items: [
        { label: "Photo strip template pack", store: "Etsy", href: "https://www.etsy.com/search?q=photo+booth+strip+template" },
        { label: "Self-serve strip printer", store: "Amazon", href: "https://www.amazon.com/s?k=photo+strip+printer" },
        { label: "Matte strip print paper", store: "Amazon", href: "https://www.amazon.com/s?k=matte+photo+paper+4x6" },
      ],
    },
  ],
  "engagement-photo-display-ideas": [
    {
      section: "display",
      items: [
        { label: "24x36 oversized frame", store: "Amazon", href: "https://www.amazon.com/s?k=24x36+picture+frame+black" },
        { label: "Floating gallery ledge", store: "Amazon", href: "https://www.amazon.com/s?k=floating+picture+ledge+shelf" },
        { label: "Gallery wall frame set", store: "Amazon", href: "https://www.amazon.com/s?k=gallery+wall+frame+set" },
      ],
    },
  ],
  "mini-photo-print-ideas": [
    {
      section: "prints",
      items: [
        { label: "Wallet-size print pack", store: "Amazon", href: "https://www.amazon.com/s?k=wallet+size+photo+prints" },
        { label: "Mini wooden display easels", store: "Amazon", href: "https://www.amazon.com/s?k=mini+wooden+photo+easel" },
        { label: "Fridge gallery magnet set", store: "Amazon", href: "https://www.amazon.com/s?k=photo+magnets+custom" },
      ],
    },
  ],
  "polaroid-style-engagement-prints": [
    {
      section: "gifts",
      items: [
        { label: "Polaroid-border print set", store: "Etsy", href: "https://www.etsy.com/search?q=polaroid+style+photo+prints" },
        { label: "Instant camera + film", store: "Amazon", href: "https://www.amazon.com/s?k=instant+camera+with+film" },
        { label: "Hanging clip & string kit", store: "Amazon", href: "https://www.amazon.com/s?k=photo+display+string+lights+clips" },
      ],
    },
  ],
  "flip-book-engagement-photo-ideas": [
    {
      section: "gifts",
      items: [
        { label: "Custom flip book maker", store: "Etsy", href: "https://www.etsy.com/search?q=custom+flip+book+from+photos" },
        { label: "Mini desktop flip stand", store: "Amazon", href: "https://www.amazon.com/s?k=mini+book+display+stand" },
        { label: "Burst-mode memory card", store: "Amazon", href: "https://www.amazon.com/s?k=high+speed+sd+card" },
      ],
    },
  ],
};

/**
 * Per-article Pinterest pin kits (gift / display / keepsake angles).
 * Merged into `post.pinImages` by withMeta when the article has none —
 * the PinterestBoard and Rich-Pin meta pick them up automatically.
 */
export const ARTICLE_PINS: Record<string, PinImage[]> = {
  "locket-photo-print-guide": [
    {
      image: IMAGES.galleryRing,
      pinTitle: "The Locket Print Guide: Tiny Photos, Big Gift",
      pinDescription:
        "How to print engagement photos for a locket — sizing, crops and finishes that turn one frame into an heirloom. The most personal gift you can give. Save for gift season.",
    },
    {
      image: IMAGES.classicDip,
      pinTitle: "Heirloom Engagement Gift Ideas He'll Keep Forever",
      pinDescription:
        "Locket prints, keepsake boxes and the tiny crops that make them work. Engagement gift ideas with real sentiment — not another candle. Tap for the full guide.",
    },
    {
      image: IMAGES.galleryTwirl,
      pinTitle: "One Photo → The Sweetest Anniversary Keepsake",
      pinDescription:
        "Shrink your favorite engagement frame to locket size. Sizing chart, crop rules and the finishes that survive decades. Pin this before you order.",
    },
  ],
  "photo-booth-strip-ideas": [
    {
      image: IMAGES.galleryLaugh,
      pinTitle: "12 Photo Booth Strip Ideas for Your Engagement",
      pinDescription:
        "Four frames, one vertical strip, zero formality. How to make photobooth-style prints from your engagement session — poses, templates and where to use them.",
    },
    {
      image: IMAGES.casualCafe,
      pinTitle: "The Fun Print Your Guests Will Actually Keep",
      pinDescription:
        "Photo strips as wedding favors, save-the-date inserts and fridge art. The playful artifact every engagement session should produce. Tap for the pose list.",
    },
    {
      image: IMAGES.galleryTwirl,
      pinTitle: "DIY Photo Strips: Template + Pose Cheat Sheet",
      pinDescription:
        "The exact strip layout plus 12 poses that fill it with real laughs. Print them at home or order matte strips. Save this for your session day.",
    },
  ],
  "engagement-photo-display-ideas": [
    {
      image: IMAGES.classicDip,
      pinTitle: "16 Ways to Display Engagement Photos (No Clutter)",
      pinDescription:
        "Gallery walls, ledges, oversized hero prints — the layouts that make your session feel collected, not cluttered. Includes the odd-number rule. Pin for your wall.",
    },
    {
      image: IMAGES.hero,
      pinTitle: "The Gallery Wall Rule Interior Designers Swear By",
      pinDescription:
        "One hero print, two mid-size, three small — arranged in odds. The engagement photo display formula that always looks intentional. Tap for 16 layouts.",
    },
    {
      image: IMAGES.posesCover,
      pinTitle: "Matte vs Glossy: Which Print Finish Wins?",
      pinDescription:
        "Why matte and lustre flatter golden-hour light — and where glossy still earns its place. The print-finish decision, settled. Save before you order.",
    },
  ],
  "mini-photo-print-ideas": [
    {
      image: IMAGES.galleryTwirl,
      pinTitle: "15 Mini Photo Print Ideas: Small Prints, Big Uses",
      pinDescription:
        "Wallet-size prints as favors, fridge galleries, gift tags and desk sets. The most versatile order you can make from an engagement session. Tap for all 15.",
    },
    {
      image: IMAGES.galleryRing,
      pinTitle: "Tiny Engagement Prints Guests Actually Treasure",
      pinDescription:
        "Mini prints on the favor table, in thank-you cards, on the fridge at home. Fifteen small-format ideas that stretch one session into a hundred moments.",
    },
    {
      image: IMAGES.galleryLaugh,
      pinTitle: "The $20 Print Order That Beats the $200 One",
      pinDescription:
        "Wallet prints are the best value in photo printing — here's every way to use them, from escort cards to grandparents' purses. Pin the list.",
    },
  ],
  "polaroid-style-engagement-prints": [
    {
      image: IMAGES.about,
      pinTitle: "10 Polaroid-Style Print Ideas for a Retro Feel",
      pinDescription:
        "White borders, handwritten captions, faded color — how to make a digital session feel like found film. The retro print guide couples keep re-pinning.",
    },
    {
      image: IMAGES.gallerySilhouette,
      pinTitle: "Make Your Digital Photos Look Like Found Film",
      pinDescription:
        "The instant-film look without buying a Polaroid: border specs, caption pens and hanging ideas. Retro engagement prints, demystified. Save this.",
    },
    {
      image: IMAGES.casualCafe,
      pinTitle: "The Retro Print Trend That Never Actually Left",
      pinDescription:
        "Polaroid-style prints on a string light wall, in albums, on the fridge. Ten layouts that make your engagement gallery feel like a box of memories.",
    },
  ],
  "flip-book-engagement-photo-ideas": [
    {
      image: IMAGES.gallerySilhouette,
      pinTitle: "Flip Book Ideas: Your Engagement Session in Motion",
      pinDescription:
        "Turn one burst of frames into a tiny animated keepsake. Which moments to shoot, how many frames you need, and where to order. The gift that moves.",
    },
    {
      image: IMAGES.galleryLaugh,
      pinTitle: "The Animated Keepsake Nobody Expects",
      pinDescription:
        "A flip book of your twirl, your laugh, your walk-away — 40 frames that play like a memory. How to shoot the burst and make the book. Tap for the guide.",
    },
    {
      image: IMAGES.hero,
      pinTitle: "40 Frames → One Tiny Book You'll Flip Forever",
      pinDescription:
        "The flip book is the most surprising artifact an engagement session can produce. Burst settings, moment picks and ordering tips, all in one guide.",
    },
  ],
};
