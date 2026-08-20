import { CalendarCheck, ImageDown, ListChecks, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AdSlotName, AffiliateSectionName, Block, LeadMagnetId, Post } from "./types";

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

/** Which affiliate sections an article covers. */
export const affiliateCoverage = (blocks: Block[]): Set<AffiliateSectionName> => {
  const covered = new Set<AffiliateSectionName>();
  for (const b of blocks) if (b.type === "shop" && b.section) covered.add(b.section);
  return covered;
};

export const hasLeadMagnet = (blocks: Block[]): boolean =>
  blocks.some((b) => b.type === "leadMagnet");

/** True when an article carries at least one ad, one affiliate block and one lead magnet. */
export const monetizationReady = (post: Post): boolean =>
  post.blocks.some((b) => b.type === "ad") &&
  post.blocks.some((b) => b.type === "shop") &&
  hasLeadMagnet(post.blocks);
