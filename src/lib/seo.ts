import { SITE } from "./constants";
import { postPath } from "../content/posts";

/**
 * SEO manager — the SPA equivalent of Next.js `generateMetadata`.
 * On every route change it rewrites <title>, description, canonical,
 * Open Graph / Twitter tags and swaps the JSON-LD structured data.
 */
export interface SeoInput {
  title: string; // keep ≤ 60 chars, site suffix appended by caller
  description: string; // keep ≤ 155 chars
  path: string; // e.g. "/blog/some-slug"
  image?: string;
  imageWidth?: number; // OG image dims (1200×630) — helps Pinterest Rich Pins
  imageHeight?: number;
  type?: "website" | "article";
  jsonLd?: object[];
  noindex?: boolean; // legal/utility pages — keep out of the index, follow links
  /** Article-only meta (§20 Pinterest/Rich Pins): published/modified/author. */
  article?: { published: string; modified?: string; author: string; authorUrl?: string };
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function applySeo({ title, description, path, image, imageWidth, imageHeight, type = "website", jsonLd = [], noindex = false, article }: SeoInput) {
  // Canonical URLs match the pre-rendered static paths (clean dirs, trailing slash).
  const url = `${SITE.url}${path === "/" ? "/" : path.replace(/\/+$/, "") + "/"}`;
  const img = image ?? "";

  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", url);
  if (img) {
    upsertMeta("property", "og:image", img);
    if (imageWidth) upsertMeta("property", "og:image:width", String(imageWidth));
    if (imageHeight) upsertMeta("property", "og:image:height", String(imageHeight));
    upsertMeta("property", "og:image:alt", title);
  }

  // Article meta (§20 — Pinterest Rich Pins + social graph freshness)
  if (type === "article" && article) {
    upsertMeta("property", "article:published_time", article.published);
    if (article.modified) upsertMeta("property", "article:modified_time", article.modified);
    upsertMeta("property", "article:author", article.authorUrl ?? article.author);
  }

  upsertMeta("name", "twitter:card", img ? "summary_large_image" : "summary");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  if (img) upsertMeta("name", "twitter:image", img);

  // Canonical
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  // JSON-LD structured data (replaces previous route's schema)
  document.querySelectorAll('script[data-seo="jsonld"]').forEach((n) => n.remove());
  jsonLd.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "jsonld");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

/* ————— Schema builders (mirror lib/seo schema helpers in a Next build) ————— */

export const LOGO_URL = `${SITE.url}/logo.svg`;
export const PINTEREST_URL = "https://www.pinterest.com/tenderlight";
export const AUTHOR_URL = `${SITE.url}/author/harper-ellis/`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  sameAs: [PINTEREST_URL],
});

/** Harper Ellis — the founder Person node (homepage + author page). */
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/author/harper-ellis/#person`,
  name: "Harper Ellis",
  url: AUTHOR_URL,
  image: "https://image.qwenlm.ai/generated-images/94d5152d-699e-4c50-9659-b0089283422f/_result.png",
  jobTitle: "Engagement Photography Blogger",
  worksFor: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name },
  knowsAbout: [
    "engagement photos",
    "engagement photo poses",
    "engagement photo outfits",
    "engagement photo locations",
    "save the date photos",
    "proposal photography",
    "candid couple photography",
  ],
  sameAs: [PINTEREST_URL],
});

/** About page — AboutPage + Person + Organization (E-E-A-T). */
export const aboutSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE.url}/about/#page`,
      url: `${SITE.url}/about/`,
      name: `About ${SITE.name}`,
      description:
        "The story of Tender Light and its founder Harper Ellis — 8 years and 400+ engagement sessions behind the lens.",
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
      about: [{ "@id": `${SITE.url}/#organization` }, { "@id": `${SITE.url}/author/harper-ellis/#person` }],
      mainEntity: { "@id": `${SITE.url}/author/harper-ellis/#person` },
    },
    organizationSchema(),
    personSchema(),
  ],
});

/** Contact page — ContactPage + Organization. */
export const contactSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE.url}/contact/#page`,
      url: `${SITE.url}/contact/`,
      name: "Book a Session or Collaborate | Tender Light",
      description:
        "Plan your engagement shoot with Harper Ellis — photographer shortlists, collaborations, press and partnerships.",
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
      mainEntity: { "@id": `${SITE.url}/#organization` },
    },
    organizationSchema(),
  ],
});

/** Author page — ProfilePage wrapping the Person entity. */
export const authorPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/author/harper-ellis/#profile`,
      url: AUTHOR_URL,
      name: "Harper Ellis — Founder & Engagement Photo Editor",
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
      mainEntity: { "@id": `${SITE.url}/author/harper-ellis/#person` },
    },
    personSchema(),
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.url}${item.path === "/" ? "/" : item.path + "/"}`,
  })),
});

export const articleSchema = (post: {
  title: string;
  slug: string;
  date: string;
  dateModified?: string;
  image: string;
  description: string;
  author: { name: string; role: string; handle?: string };
  keywords?: string[];
  articleSection?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  url: `${SITE.url}${postPath(post.slug)}/`,
  mainEntityOfPage: `${SITE.url}${postPath(post.slug)}/`,
  datePublished: post.date,
  dateModified: post.dateModified ?? post.date,
  image: { "@type": "ImageObject", url: post.image },
  keywords: (post.keywords ?? []).join(", "),
  articleSection: post.articleSection ?? "Engagement Photos",
  author:
    post.author.handle === "harper-ellis"
      ? { "@id": `${SITE.url}/author/harper-ellis/#person` }
      : { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: LOGO_URL },
  },
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const collectionSchema = (name: string, path: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: `${SITE.url}${path}`,
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
});
