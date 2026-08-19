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

/** Registry — add clusters 3–7 here as their semantic fields arrive. */
export const SEMANTIC_FIELDS: Record<string, ClusterSemantic> = {
  [CLUSTER_IDEAS.cluster]: CLUSTER_IDEAS,
  [CLUSTER_POSES.cluster]: CLUSTER_POSES,
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
