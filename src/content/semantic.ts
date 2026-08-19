/**
 * LSI / semantic field per cluster (§13 of the SEO plan).
 *
 * The vocabulary bank that serves two jobs:
 *  1. WRITING   — when drafting a cluster-N article, weave terms from that
 *                 cluster's `lsi` list so the page covers the full entity
 *                 universe around its primary keyword (GEO/AI-SEO §6d).
 *  2. LINKING   — `hubForTerm` turns a semantic term into the matching hub
 *                 URL, which powers the on-page "topical field" chips and any
 *                 future automated internal-link suggestions (maillage).
 *
 * Clusters 2–7 (Poses, Locations, Outfits, Save the Date, Prints, Oklahoma)
 * plug into SEMANTIC_FIELDS as their term lists are supplied.
 */

export interface ClusterSemantic {
  /** Hub slug this cluster maps to. */
  cluster: string;
  name: string;
  /** Head terms the cluster targets. */
  primaryKeywords: string[];
  /** LSI / entity vocabulary to weave into cluster articles. */
  lsi: string[];
  /** Optional style descriptors (visual vocabulary for the ideas cluster). */
  styles?: string[];
  /**
   * Entity-level internal links: exact term (lowercase) → target URL.
   * Stronger than hub stem-matching — these are spoke-level cross-links
   * (maillage interne). Checked before `hubForTerm`.
   */
  linkOverrides?: Record<string, string>;
}

/* ————— Cluster 1 · Engagement Photo Ideas ————— */
export const CLUSTER_IDEAS: ClusterSemantic = {
  cluster: "engagement-photo-ideas",
  name: "Engagement Photo Ideas",
  primaryKeywords: [
    "engagement photo ideas",
    "engagement photos ideas",
    "engagement picture ideas",
    "ideas for engagement pics",
    "ideas for engagement photo shoot",
    "engagement photoshoot ideas",
    "engagement photo inspiration",
  ],
  lsi: [
    "engagement session",
    "engagement shoot",
    "engaged couple",
    "couple photos",
    "couple portrait",
    "pre-wedding photos",
    "save the date",
    "engagement announcement",
    "golden hour",
    "candid moments",
    "natural light",
    "romantic vibe",
    "playful poses",
    "ring reveal",
    "props",
    "location",
    "outfits",
    "seasonal themes",
    "outdoor session",
    "indoor session",
    "at home session",
    "city session",
    "beach session",
    "park session",
    "garden session",
    "vintage style",
    "classic style",
    "modern style",
    "boho style",
    "moody style",
    "light and airy style",
  ],
  styles: ["vintage", "classic", "modern", "boho", "moody", "light and airy"],
  linkOverrides: {
    "engagement announcement": "/save-the-date-photos/engagement-announcement-photo-ideas",
    "ring reveal": "/engagement-photo-poses/ring-engagement-photo-poses",
    "at home session": "/engagement-photo-locations/at-home-engagement-photo-ideas",
    "garden session": "/engagement-photo-locations/park-garden-engagement-photo-ideas",
    "beach session": "/engagement-photo-locations/beach-engagement-photo-ideas",
    "city session": "/engagement-photo-locations/urban-engagement-photo-ideas",
    "candid moments": "/engagement-photo-ideas/candid-engagement-photo-ideas",
    "playful poses": "/engagement-photo-ideas/fun-engagement-photo-ideas",
    "romantic vibe": "/engagement-photo-ideas/romantic-engagement-photo-ideas",
    props: "/engagement-photo-ideas/unique-engagement-photo-ideas",
    "vintage style": "/engagement-photo-ideas/vintage-engagement-photo-ideas",
    "classic style": "/engagement-photo-ideas/classic-engagement-photo-ideas",
    "moody style": "/engagement-photo-ideas/night-engagement-photo-ideas",
    "light and airy style": "/engagement-photo-ideas/elegant-engagement-photo-ideas",
  },
};

/* ————— Cluster 2 · Engagement Photo Poses ————— */
export const CLUSTER_POSES: ClusterSemantic = {
  cluster: "engagement-photo-poses",
  name: "Engagement Photo Poses",
  primaryKeywords: [
    "engagement photo poses",
    "engagement poses",
    "poses for engagement photos",
    "engagement picture poses",
    "engagement photography poses",
    "engagement session poses",
    "engagement posing",
  ],
  lsi: [
    "natural poses",
    "unposed photos",
    "candid poses",
    "romantic poses",
    "cute poses",
    "fun poses",
    "camera shy couples",
    "awkward posing",
    "forehead touch",
    "walking away",
    "looking back",
    "hand placement",
    "arm placement",
    "embrace",
    "dip kiss",
    "cheek kiss",
    "laughing together",
    "sitting poses",
    "standing poses",
    "twirl",
    "piggyback",
    "forehead to forehead",
    "ring close up",
    "ring detail",
    "hand on chest",
    "hand in pocket",
    "leaning pose",
    "silhouette",
    "backlit pose",
    "golden hour pose",
    "couple interaction",
    "movement",
    "authentic moments",
  ],
  linkOverrides: {
    "natural poses": "/engagement-photo-poses/natural-engagement-photo-poses",
    "unposed photos": "/engagement-photo-poses/natural-engagement-photo-poses",
    "candid poses": "/engagement-photo-poses/natural-engagement-photo-poses",
    "walking away": "/engagement-photo-poses/natural-engagement-photo-poses",
    "looking back": "/engagement-photo-poses/natural-engagement-photo-poses",
    "romantic poses": "/engagement-photo-ideas/romantic-engagement-photo-ideas",
    "cute poses": "/engagement-photo-ideas/cute-engagement-photo-ideas",
    "fun poses": "/engagement-photo-ideas/fun-engagement-photo-ideas",
    "cheek kiss": "/engagement-photo-ideas/romantic-engagement-photo-ideas",
    "camera shy couples": "/engagement-photo-poses/camera-shy-engagement-poses",
    "awkward posing": "/engagement-photo-poses/camera-shy-engagement-poses",
    "forehead touch": "/engagement-photo-poses/couple-engagement-poses",
    "forehead to forehead": "/engagement-photo-poses/couple-engagement-poses",
    "sitting poses": "/engagement-photo-poses/couple-engagement-poses",
    "standing poses": "/engagement-photo-poses/couple-engagement-poses",
    "dip kiss": "/engagement-photo-poses/classic-engagement-photos",
    twirl: "/engagement-photo-poses/classic-engagement-photos",
    "ring close up": "/engagement-photo-poses/ring-engagement-photo-poses",
    "ring detail": "/engagement-photo-poses/ring-engagement-photo-poses",
    "hand on chest": "/engagement-photo-poses/ring-engagement-photo-poses",
    "golden hour pose": "/engagement-photo-poses/outdoor-engagement-photo-poses",
    silhouette: "/engagement-photo-poses/outdoor-engagement-photo-poses",
    "backlit pose": "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    "laughing together": "/engagement-photo-ideas/candid-engagement-photo-ideas",
    "authentic moments": "/engagement-photo-ideas/candid-engagement-photo-ideas",
  },
};

/* ————— Cluster 3 · Engagement Photo Locations ————— */
export const CLUSTER_LOCATIONS: ClusterSemantic = {
  cluster: "engagement-photo-locations",
  name: "Engagement Photo Locations",
  primaryKeywords: [
    "engagement photo locations",
    "outdoor engagement photo ideas",
    "engagement photo ideas outside",
    "engagement photo ideas outdoors",
    "where to take engagement photos",
    "best places for engagement pictures",
  ],
  lsi: [
    "outdoor session",
    "indoor session",
    "at home session",
    "backyard",
    "park",
    "garden",
    "botanical garden",
    "beach",
    "lake",
    "mountain",
    "forest",
    "trail",
    "field",
    "downtown",
    "city street",
    "urban setting",
    "coffee shop",
    "brewery",
    "restaurant",
    "rooftop",
    "staircase",
    "architecture",
    "texture",
    "brick wall",
    "natural background",
    "open shade",
    "sunset",
    "sunrise",
    "golden hour",
    "blue hour",
    "weather backup",
    "privacy",
    "permits",
    "crowds",
    "travel time",
    "meaningful location",
    "first date location",
    "proposal location",
  ],
  linkOverrides: {
    "outdoor session": "/engagement-photo-locations/outdoor-engagement-photo-locations",
    "indoor session": "/engagement-photo-locations/at-home-engagement-photo-ideas",
    "at home session": "/engagement-photo-locations/at-home-engagement-photo-ideas",
    backyard: "/engagement-photo-locations/at-home-engagement-photo-ideas",
    privacy: "/engagement-photo-locations/at-home-engagement-photo-ideas",
    park: "/engagement-photo-locations/park-garden-engagement-photo-ideas",
    garden: "/engagement-photo-locations/park-garden-engagement-photo-ideas",
    "botanical garden": "/engagement-photo-locations/park-garden-engagement-photo-ideas",
    beach: "/engagement-photo-locations/beach-engagement-photo-ideas",
    lake: "/engagement-photo-locations/engagement-photo-ideas-outside",
    forest: "/engagement-photo-locations/engagement-photo-ideas-outside",
    trail: "/engagement-photo-locations/engagement-photo-ideas-outside",
    field: "/engagement-photo-locations/engagement-photo-ideas-outside",
    "natural background": "/engagement-photo-locations/outdoor-engagement-photo-locations",
    downtown: "/engagement-photo-locations/urban-engagement-photo-ideas",
    "city street": "/engagement-photo-locations/urban-engagement-photo-ideas",
    "urban setting": "/engagement-photo-locations/urban-engagement-photo-ideas",
    architecture: "/engagement-photo-locations/urban-engagement-photo-ideas",
    "brick wall": "/engagement-photo-locations/urban-engagement-photo-ideas",
    restaurant: "/engagement-photo-locations/urban-engagement-photo-ideas",
    "coffee shop": "/engagement-photo-locations/coffee-shop-engagement-photo-ideas",
    brewery: "/engagement-photo-locations/coffee-shop-engagement-photo-ideas",
    mountain: "/oklahoma-wedding-locations/how-to-elope-in-oklahoma",
    rooftop: "/engagement-photo-ideas/night-engagement-photo-ideas",
    staircase: "/engagement-photo-ideas/elegant-engagement-photo-ideas",
    "open shade": "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    sunset: "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    sunrise: "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    "golden hour": "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    crowds: "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    "blue hour": "/engagement-photo-ideas/night-engagement-photo-ideas",
    "weather backup": "/engagement-photo-ideas/engagement-photo-checklist",
    permits: "/engagement-photo-locations/top-engagement-photo-locations-oklahoma",
    "meaningful location": "/engagement-photo-ideas/unique-engagement-photo-ideas",
    "first date location": "/engagement-photo-ideas/unique-engagement-photo-ideas",
    "proposal location": "/save-the-date-photos/surprise-proposal-ideas",
  },
};

/* ————— Cluster 4 · Engagement Photo Outfits ————— */
export const CLUSTER_OUTFITS: ClusterSemantic = {
  cluster: "engagement-photo-outfits",
  name: "Engagement Photo Outfits",
  primaryKeywords: [
    "what to wear for engagement photos",
    "engagement photo outfits",
    "engagement picture outfit ideas",
    "casual engagement photo outfits",
    "fall engagement photo outfits",
    "summer engagement photo outfits",
    "spring engagement photo outfits",
  ],
  lsi: [
    "outfit coordination",
    "matching outfits",
    "complementary colors",
    "neutral tones",
    "earth tones",
    "soft colors",
    "pastel colors",
    "avoid loud patterns",
    "avoid logos",
    "flowy dress",
    "midi dress",
    "maxi dress",
    "jeans",
    "white jeans",
    "knit sweater",
    "blazer",
    "button down shirt",
    "clean sneakers",
    "ankle boots",
    "heels",
    "sandals",
    "accessories",
    "hat",
    "scarf",
    "jewelry",
    "seasonal outfits",
    "layering",
    "comfortable clothing",
    "movement friendly outfits",
    "fabric texture",
    "timeless outfits",
    "dressy casual",
    "smart casual",
  ],
  linkOverrides: {
    // color & coordination vocabulary → the palette guide
    "neutral tones": "/engagement-photo-outfits/engagement-photo-color-palette",
    "earth tones": "/engagement-photo-outfits/engagement-photo-color-palette",
    "soft colors": "/engagement-photo-outfits/engagement-photo-color-palette",
    "complementary colors": "/engagement-photo-outfits/engagement-photo-color-palette",
    "fabric texture": "/engagement-photo-outfits/engagement-photo-color-palette",
    // the "coordinate, don't match" concept → casual guide
    "outfit coordination": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "matching outfits": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    // casual garments & comfort → casual outfits
    jeans: "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "white jeans": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "clean sneakers": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "comfortable clothing": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "movement friendly outfits": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "dressy casual": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    "smart casual": "/engagement-photo-outfits/casual-engagement-photo-outfits",
    // cool-weather layering → fall outfits
    "knit sweater": "/engagement-photo-outfits/fall-engagement-photo-outfits",
    layering: "/engagement-photo-outfits/fall-engagement-photo-outfits",
    scarf: "/engagement-photo-outfits/fall-engagement-photo-outfits",
    // warm-weather pieces → summer outfits
    "flowy dress": "/engagement-photo-outfits/summer-engagement-photo-outfits",
    "midi dress": "/engagement-photo-outfits/summer-engagement-photo-outfits",
    sandals: "/engagement-photo-outfits/summer-engagement-photo-outfits",
    hat: "/engagement-photo-outfits/summer-engagement-photo-outfits",
    // spring palette → spring outfits
    "pastel colors": "/engagement-photo-outfits/spring-engagement-photo-outfits",
    // avoid-rules, timeless pieces & accessories → the main stylist guide
    "avoid loud patterns": "/engagement-photo-outfits/best-outfits-engagement-photos",
    "avoid logos": "/engagement-photo-outfits/best-outfits-engagement-photos",
    "timeless outfits": "/engagement-photo-outfits/best-outfits-engagement-photos",
    "maxi dress": "/engagement-photo-outfits/best-outfits-engagement-photos",
    blazer: "/engagement-photo-outfits/best-outfits-engagement-photos",
    "button down shirt": "/engagement-photo-outfits/best-outfits-engagement-photos",
    "ankle boots": "/engagement-photo-outfits/best-outfits-engagement-photos",
    heels: "/engagement-photo-outfits/best-outfits-engagement-photos",
    accessories: "/engagement-photo-outfits/best-outfits-engagement-photos",
    jewelry: "/engagement-photo-outfits/best-outfits-engagement-photos",
    "seasonal outfits": "/engagement-photo-outfits/best-outfits-engagement-photos",
  },
};

/* ————— Cluster 5 · Save the Date & Proposal ————— */
export const CLUSTER_SAVETHEDATE: ClusterSemantic = {
  cluster: "save-the-date-photos",
  name: "Save the Date & Proposal",
  primaryKeywords: [
    "save the date photoshoot ideas",
    "save the date photo ideas",
    "save the date poses",
    "save the date engagement photos",
    "engagement announcement photos",
    "surprise proposal ideas",
    "proposal poses",
  ],
  lsi: [
    "engagement announcement",
    "newly engaged",
    "just engaged",
    "proposal moment",
    "surprise proposal",
    "ring reveal",
    "ring box",
    "wedding website",
    "save the date cards",
    "timeline",
    "romantic proposal",
    "public proposal",
    "private proposal",
    "hidden photographer",
    "candid proposal",
    "proposal location",
    "proposal setup",
    "flowers",
    "signage",
    "pet proposal",
    "travel proposal",
    "sunset proposal",
    "city proposal",
    "home proposal",
  ],
  linkOverrides: {
    // announcement vocabulary → the announcement guide
    "engagement announcement": "/save-the-date-photos/engagement-announcement-photo-ideas",
    "newly engaged": "/save-the-date-photos/engagement-announcement-photo-ideas",
    "just engaged": "/save-the-date-photos/engagement-announcement-photo-ideas",
    // the proposal itself → surprise proposal setups
    "proposal moment": "/save-the-date-photos/surprise-proposal-ideas",
    "surprise proposal": "/save-the-date-photos/surprise-proposal-ideas",
    "romantic proposal": "/save-the-date-photos/surprise-proposal-ideas",
    "public proposal": "/save-the-date-photos/surprise-proposal-ideas",
    "hidden photographer": "/save-the-date-photos/surprise-proposal-ideas",
    "candid proposal": "/save-the-date-photos/surprise-proposal-ideas",
    // ring details → ring poses & detail shots (poses cluster)
    "ring reveal": "/engagement-photo-poses/ring-engagement-photo-poses",
    "ring box": "/engagement-photo-poses/ring-engagement-photo-poses",
    // the card & website destination → save the date photo ideas
    "save the date cards": "/save-the-date-photos/save-the-date-photo-ideas",
    "wedding website": "/save-the-date-photos/save-the-date-photo-ideas",
    // planning cadence → the full engagement checklist
    timeline: "/engagement-photo-ideas/engagement-photo-checklist",
    // the kneel geometry → proposal poses (poses cluster)
    "proposal setup": "/engagement-photo-poses/proposal-poses",
    // quiet / destination spots → Oklahoma proposal guides
    "private proposal": "/oklahoma-wedding-locations/places-to-propose-in-oklahoma",
    "proposal location": "/oklahoma-wedding-locations/best-places-to-propose-in-oklahoma",
    "travel proposal": "/oklahoma-wedding-locations/best-places-to-propose-in-oklahoma",
    // props & set dressing → unique engagement ideas
    flowers: "/engagement-photo-ideas/unique-engagement-photo-ideas",
    signage: "/engagement-photo-ideas/unique-engagement-photo-ideas",
    "pet proposal": "/engagement-photo-ideas/unique-engagement-photo-ideas",
    // light & setting → golden hour tips, urban & at-home locations
    "sunset proposal": "/engagement-photo-ideas/golden-hour-photography-tips-couples",
    "city proposal": "/engagement-photo-locations/urban-engagement-photo-ideas",
    "home proposal": "/engagement-photo-locations/at-home-engagement-photo-ideas",
  },
};

/** Registry — add clusters 6–7 here as their semantic fields arrive. */
export const SEMANTIC_FIELDS: Record<string, ClusterSemantic> = {
  [CLUSTER_IDEAS.cluster]: CLUSTER_IDEAS,
  [CLUSTER_POSES.cluster]: CLUSTER_POSES,
  [CLUSTER_LOCATIONS.cluster]: CLUSTER_LOCATIONS,
  [CLUSTER_OUTFITS.cluster]: CLUSTER_OUTFITS,
  [CLUSTER_SAVETHEDATE.cluster]: CLUSTER_SAVETHEDATE,
};

export const getSemanticField = (cluster: string): ClusterSemantic | undefined =>
  SEMANTIC_FIELDS[cluster];

/**
 * Map a semantic term to the hub whose slug covers it (stem-matched).
 * Drives internal linking: "outfits" → /engagement-photo-outfits,
 * "location" → /engagement-photo-locations, "save the date" → /save-the-date-photos.
 * Returns null when no hub claims the term (render a plain chip instead).
 */
export function hubForTerm(term: string, hubSlugs: string[]): string | null {
  const tokens = term
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 3);
  if (tokens.length === 0) return null;
  for (const slug of hubSlugs) {
    const slugTokens = slug.split("-");
    const covered = tokens.every((t) =>
      slugTokens.some((st) => st.startsWith(t) || t.startsWith(st))
    );
    if (covered) return slug;
  }
  return null;
}

export type TermLinkKind = "entity" | "hub";
export interface TermLink {
  url: string;
  kind: TermLinkKind;
}

/**
 * Resolve a semantic term to an internal link, strongest signal first:
 *  1. `linkOverrides` — explicit entity-level target (spoke cross-link).
 *  2. Hub stem-match — but never the article's own hub (no self-linking).
 * Returns null → render a plain topical chip.
 */
export function resolveTermLink(
  term: string,
  opts: { field?: ClusterSemantic; ownHub?: string; hubSlugs: string[] }
): TermLink | null {
  const key = term.toLowerCase().trim();
  const override = opts.field?.linkOverrides?.[key];
  if (override) return { url: override, kind: "entity" };
  const hub = hubForTerm(term, opts.hubSlugs);
  if (hub && hub !== opts.ownHub) return { url: `/${hub}`, kind: "hub" };
  return null;
}
