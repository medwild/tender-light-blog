export const SITE = {
  name: "Tender Light",
  tagline: "The Engagement Photo Journal",
  script: "photographs worth keeping",
  url: "https://tenderlight.journal",
  description:
    "Engagement photo ideas, poses & inspiration for couples — poses, outfits, locations, save-the-dates and prints, from 400+ real sessions.",
  email: "hello@tenderlight.studio",
  instagram: "@tenderlight.journal",
  pinterest: "https://www.pinterest.com/tenderlight",
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
] as const;

const img = (id: string) => `https://image.qwenlm.ai/generated-images/${id}/_result.png`;
export const IMAGES = {
  hero: img("26dcc4f8-fee1-40a0-b753-16c388e28f8c"),
  posesCover: img("772e24c9-1edc-449f-8bd3-f73b92aec5c3"),
  outfitsCover: img("bc9a6171-816f-430b-a3e0-683acbb27e25"),
  locationsCover: img("3c4964af-5920-41e3-99f0-5e94cdb2e1f4"),
  about: img("94d5152d-699e-4c50-9659-b0089283422f"),
  galleryLaugh: img("dede2b92-9359-4cf9-b649-0933c0543106"),
  gallerySilhouette: img("f2dcb200-e5fa-4398-bb59-1baf1bb05823"),
  galleryRing: img("1aaf0416-a71a-4b6d-bbc7-53f8e7e3bd5b"),
  galleryTwirl: img("f379d658-207e-4cdd-9dbe-2adf819cce63"),
  casualCafe: img("13c3b7f9-328a-4d89-acf2-9c9c9de74c7d"),
  classicDip: img("7b7e1011-050c-4b5c-ab20-e3a4a770b031"),
  indoor: img("39e605fa-7269-4e9b-a353-4422b72e7950"),
} as const;

export const LOGO_URL = `${SITE.url}/logo.svg`;
export const AUTHOR_URL = `${SITE.url}/author/harper-ellis/`;

export const shareUrls = {
  x: (url: string, title: string) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  pinterest: (url: string, image: string) =>
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}`,
  whatsapp: (url: string) => `https://wa.me/?text=${encodeURIComponent(url)}`,
  email: (url: string, title: string) =>
    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
};
