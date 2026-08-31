import { SITE } from "./constants";

/**
 * SEO layer for the Next.js static export.
 *
 * Head/meta is emitted per-route via `generateMetadata` (Next's Metadata API,
 * resolved against `metadataBase`); the JSON-LD builders below are pure
 * functions rendered inline by <JsonLd /> in each page — so every schema sits
 * in the prerendered HTML, exactly like the old static mirrors did.
 */

/** Site-wide trailing-slash URL math (was internal to applySeo). */
export const canonicalUrl = (path: string) =>
  path === "/" ? "/" : path.replace(/\/+$/, "") + "/";

/** Absolute URL helper for metadata fields that need it (og:url, canonical). */
export const absoluteUrl = (path: string) => `${SITE.url}${canonicalUrl(path)}`;

/* ————— Schema builders ————— */
export const organizationSchema = () => ({
  "@context": "https://schema.org", "@type": "Organization",
  "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url,
  email: SITE.email, description: SITE.description,
  logo: { "@type": "ImageObject", url: `${SITE.url}/logo.svg` },
  sameAs: [SITE.pinterest],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url,
  potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/guides?q={search_term_string}` }, "query-input": "required name=search_term_string" },
});

export const personSchema = () => ({
  "@context": "https://schema.org", "@type": "Person",
  "@id": `${SITE.url}/author/harper-ellis/#person`,
  name: "Harper Ellis", url: `${SITE.url}/author/harper-ellis/`,
  jobTitle: "Engagement Photography Blogger",
  worksFor: { "@type": "Organization", name: SITE.name },
  knowsAbout: ["engagement photos", "engagement photo poses", "engagement photo outfits", "engagement photo locations", "save the date photos", "photo printing"],
  sameAs: [SITE.pinterest],
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem", position: i + 1, name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const collectionSchema = (name: string, path: string, description: string) => ({
  "@context": "https://schema.org", "@type": "CollectionPage", name, description,
  url: absoluteUrl(path),
  isPartOf: { "@type": "WebSite", name: SITE.name },
});

export const articleSchema = (a: { title: string; description: string; image: string; date: string; dateModified?: string; keywords?: string }, path: string) => ({
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: a.title, description: a.description,
  url: absoluteUrl(path),
  image: { "@type": "ImageObject", url: a.image },
  datePublished: a.date, dateModified: a.dateModified ?? a.date,
  keywords: a.keywords,
  author: { "@id": `${SITE.url}/author/harper-ellis/#person` },
  publisher: { "@id": `${SITE.url}/#organization` },
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
});

/** Article-level ItemList (gate B2) — machine-readable 1:1 item map. */
export const articleItemListSchema = (name: string, items: string[]) => ({
  "@context": "https://schema.org", "@type": "ItemList", name,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it })),
});

/** Hub-level ItemList — the collection's article URLs. */
export const itemListSchema = (paths: string[]) => ({
  "@context": "https://schema.org", "@type": "ItemList",
  itemListElement: paths.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(p) })),
});
