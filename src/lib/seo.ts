import { SITE } from "./constants";

interface SeoInput {
  title: string; description: string; path: string; image?: string;
  type?: "website" | "article"; jsonLd?: Record<string, unknown>[];
  noindex?: boolean; article?: { published: string; modified?: string; author: string; authorUrl?: string };
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

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Apply per-route SEO: title, meta, OG, Twitter, canonical, JSON-LD. */
export function applySeo({ title, description, path, image, type = "website", jsonLd = [], noindex = false, article }: SeoInput) {
  const url = `${SITE.url}${path === "/" ? "/" : path.replace(/\/+$/, "") + "/"}`;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
  upsertCanonical(url);
  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  if (image) {
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", title);
  }
  if (type === "article" && article) {
    upsertMeta("property", "article:published_time", article.published);
    if (article.modified) upsertMeta("property", "article:modified_time", article.modified);
    upsertMeta("property", "article:author", article.authorUrl ?? article.author);
  }
  upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  if (image) upsertMeta("name", "twitter:image", image);
  document.head.querySelectorAll("script[data-seo-jsonld]").forEach((s) => s.remove());
  for (const schema of jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

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
    item: `${SITE.url}${item.path === "/" ? "/" : item.path.replace(/\/+$/, "") + "/"}`,
  })),
});

export const collectionSchema = (name: string, path: string, description: string) => ({
  "@context": "https://schema.org", "@type": "CollectionPage", name, description,
  url: `${SITE.url}${path.replace(/\/+$/, "") + "/"}`,
  isPartOf: { "@type": "WebSite", name: SITE.name },
});

export const articleSchema = (a: { title: string; description: string; image: string; date: string; dateModified?: string; keywords?: string }, path: string) => ({
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: a.title, description: a.description,
  url: `${SITE.url}${path.replace(/\/+$/, "") + "/"}`,
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
  itemListElement: paths.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}${p.replace(/\/+$/, "") + "/"}` })),
});
