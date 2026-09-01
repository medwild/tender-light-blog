/**
 * Priority keyword mapping (Part 12 of the SEO plan).
 * Phase 1 — quick wins (low KD, publish first).
 * Phase 2 — pillars (high volume, topical anchors).
 * Phase 3 — monetization cluster (prints / display, AdSense + affiliate).
 *
 * Drives the "publishing ledger" surfaced on the guides map and is the
 * single source of truth for per-page keyword targeting.
 */
export interface KeywordTarget {
  path: string; // canonical silo path (no trailing slash)
  keyword: string; // primary keyword
  volume: number; // monthly searches
  kd: number; // keyword difficulty
  intent: "Informational" | "Commercial" | "Navigational";
  phase: 1 | 2 | 3;
}

export const KEYWORD_MAP: KeywordTarget[] = [
  /* ———— Phase 1 · Quick wins ———— */
  { path: "/engagement-photo-locations/outdoor-engagement-photo-locations", keyword: "outdoor engagement photo ideas", volume: 320, kd: 1, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/casual-engagement-photo-ideas", keyword: "casual engagement photos", volume: 320, kd: 8, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/unique-engagement-photo-ideas", keyword: "unique engagement pics", volume: 210, kd: 1, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/cute-engagement-photo-ideas", keyword: "cute engagement picture ideas", volume: 140, kd: 5, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/fun-engagement-photo-ideas", keyword: "fun engagement photo ideas", volume: 170, kd: 7, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/classic-engagement-photos", keyword: "classic engagement photos", volume: 110, kd: 1, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-ideas/candid-engagement-photo-ideas", keyword: "candid engagement photos", volume: 90, kd: 0, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-poses/proposal-poses", keyword: "proposal poses", volume: 110, kd: 1, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-poses/natural-engagement-photo-poses", keyword: "natural engagement photo poses", volume: 260, kd: 4, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-poses/ring-engagement-photo-poses", keyword: "ring engagement photo poses", volume: 140, kd: 3, intent: "Informational", phase: 1 },
  { path: "/save-the-date-photos/save-the-date-poses", keyword: "save the date poses", volume: 90, kd: 7, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-locations/at-home-engagement-photo-ideas", keyword: "at home engagement photos", volume: 40, kd: 0, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-outfits/casual-engagement-photo-outfits", keyword: "casual engagement photo outfits", volume: 210, kd: 6, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-outfits/fall-engagement-photo-outfits", keyword: "what to wear for fall pictures", volume: 90, kd: 0, intent: "Informational", phase: 1 },
  { path: "/engagement-photo-outfits/spring-summer-engagement-outfits", keyword: "summer photoshoot outfit ideas", volume: 50, kd: 0, intent: "Informational", phase: 1 },

  /* ———— Phase 2 · Pillars ———— */
  { path: "/engagement-photo-ideas", keyword: "engagement photo ideas", volume: 3600, kd: 11, intent: "Informational", phase: 2 },
  { path: "/engagement-photo-poses", keyword: "engagement photo poses", volume: 1900, kd: 14, intent: "Informational", phase: 2 },
  { path: "/engagement-photo-locations", keyword: "outdoor engagement photo ideas", volume: 320, kd: 1, intent: "Informational", phase: 2 },
  { path: "/engagement-photo-outfits", keyword: "what to wear for engagement photos", volume: 0, kd: 0, intent: "Informational", phase: 2 }, // volume à valider

  /* ———— Phase 3 · Monetization cluster ———— */
  { path: "/engagement-photo-prints/locket-photo-print-guide", keyword: "locket photo prints", volume: 3600, kd: 12, intent: "Commercial", phase: 3 },
  { path: "/engagement-photo-prints/photo-booth-strip-ideas", keyword: "photo booth strip", volume: 1300, kd: 24, intent: "Commercial", phase: 3 },
  { path: "/engagement-photo-prints/mini-photo-print-ideas", keyword: "mini photo prints", volume: 1300, kd: 28, intent: "Commercial", phase: 3 },
  { path: "/engagement-photo-prints/polaroid-style-prints", keyword: "polaroid prints", volume: 1600, kd: 17, intent: "Commercial", phase: 3 },
];

export const PHASE_LABELS: Record<1 | 2 | 3, string> = {
  1: "Phase 1 · Quick wins",
  2: "Phase 2 · Pillars",
  3: "Phase 3 · Monetization",
};

export const keywordsByPhase = (phase: 1 | 2 | 3) => KEYWORD_MAP.filter((k) => k.phase === phase);

/** Look up the targeting for a given canonical path. */
export const keywordsFor = (path: string) => KEYWORD_MAP.find((k) => k.path === path);

/**
 * §23 — Anti-cannibalization: intent ownership map.
 *
 * Each intent has exactly ONE owner page. The rule: when a secondary article
 * *mentions* an intent owned elsewhere, it must link to the owner page —
 * never attempt to rank for that intent itself. `cannibalizationAudit`
 * (contentRules.ts) enforces this against every article's body + internalLinks.
 */
export const INTENT_OWNERSHIP: Record<string, string> = {
  "engagement photo ideas": "/engagement-photo-ideas",
  "engagement photo poses": "/engagement-photo-poses",
  "casual engagement photos": "/engagement-photo-ideas/casual-engagement-photo-ideas",
  "casual engagement photo outfits": "/engagement-photo-outfits/casual-engagement-photo-outfits",
  "outdoor engagement photo ideas": "/engagement-photo-locations/outdoor-engagement-photo-locations",
  "ring engagement photo poses": "/engagement-photo-poses/ring-engagement-photo-poses",
  // NOTE: "outdoor engagement photo poses" and "save the date poses" were listed
  // as owned intents pointing at un-built slugs — an unsatisfiable §23 trap.
  // Restored when those spokes are actually wired.
  "proposal poses": "/save-the-date-photos/proposal-poses",
  "surprise proposal ideas": "/save-the-date-photos/surprise-proposal-ideas",
  "locket photo prints": "/engagement-photo-prints/locket-photo-print-guide",
  "photo booth strip": "/engagement-photo-prints/photo-booth-strip-ideas", // owner lands in the next CREATE batch
  "mini photo prints": "/engagement-photo-prints/mini-photo-print-ideas",
};

/** Owner path for an intent, or undefined when the intent is unowned. */
export const ownerOf = (intent: string) => INTENT_OWNERSHIP[intent.toLowerCase().trim()];
