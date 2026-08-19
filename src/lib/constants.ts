/**
 * Global site configuration — single source of truth for SEO metadata,
 * URLs and the photo library used across the journal.
 */
export const SITE = {
  name: "Tender Light",
  wordmark: "Tender Light",
  tagline: "The Engagement Photo Journal",
  script: "photographs worth keeping",
  url: "https://tenderlight.journal",
  description:
    "Engagement photo ideas & poses for 2026 — couple poses, outfit guides, golden-hour tips and the best fiancé photo locations.",
  email: "hello@tenderlight.studio",
  instagram: "@tenderlight.journal",
  location: "Austin, TX",
  founded: 2019,
} as const;

export const NAV_LINKS = [
  { label: "Guides", to: "/guides" },
  { label: "Ideas", to: "/engagement-photo-ideas" },
  { label: "Poses", to: "/engagement-photo-poses" },
  { label: "Outfits", to: "/engagement-photo-outfits" },
  { label: "Locations", to: "/engagement-photo-locations" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

/** Photo library (analog-film editorial series, golden hour palette). */
export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/26dcc4f8-fee1-40a0-b753-16c388e28f8c/_result.png",
  posesCover:
    "https://image.qwenlm.ai/generated-images/772e24c9-1edc-449f-8bd3-f73b92aec5c3/_result.png",
  outfitsCover:
    "https://image.qwenlm.ai/generated-images/bc9a6171-816f-430b-a3e0-683acbb27e25/_result.png",
  locationsCover:
    "https://image.qwenlm.ai/generated-images/3c4964af-5920-41e3-99f0-5e94cdb2e1f4/_result.png",
  about: "https://image.qwenlm.ai/generated-images/94d5152d-699e-4c50-9659-b0089283422f/_result.png",
  galleryLaugh:
    "https://image.qwenlm.ai/generated-images/dede2b92-9359-4cf9-b649-0933c0543106/_result.png",
  gallerySilhouette:
    "https://image.qwenlm.ai/generated-images/f2dcb200-e5fa-4398-bb59-1baf1bb05823/_result.png",
  galleryRing:
    "https://image.qwenlm.ai/generated-images/1aaf0416-a71a-4b6d-bbc7-53f8e7e3bd5b/_result.png",
  galleryTwirl:
    "https://image.qwenlm.ai/generated-images/f379d658-207e-4cdd-9dbe-2adf819cce63/_result.png",
  casualCafe:
    "https://image.qwenlm.ai/generated-images/13c3b7f9-328a-4d89-acf2-9c9c9de74c7d/_result.png",
  classicDip:
    "https://image.qwenlm.ai/generated-images/7b7e1011-050c-4b5c-ab20-e3a4a770b031/_result.png",
} as const;

/** Social share intent builders (no SDK, no tracking). */
export const shareUrls = {
  x: (url: string, title: string) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  pinterest: (url: string, image: string) =>
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}`,
  whatsapp: (url: string) => `https://wa.me/?text=${encodeURIComponent(url)}`,
  email: (url: string, title: string) =>
    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
};
