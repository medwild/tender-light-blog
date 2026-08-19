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
};

/** Registry — add clusters 2–7 here as their semantic fields arrive. */
export const SEMANTIC_FIELDS: Record<string, ClusterSemantic> = {
  [CLUSTER_IDEAS.cluster]: CLUSTER_IDEAS,
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
