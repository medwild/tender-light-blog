import { SITE } from "./constants";

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
  type?: "website" | "article";
  jsonLd?: object[];
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

export function applySeo({ title, description, path, image, type = "website", jsonLd = [] }: SeoInput) {
  // Canonical URLs match the pre-rendered static paths (clean dirs, trailing slash).
  const url = `${SITE.url}${path === "/" ? "/" : path.replace(/\/+$/, "") + "/"}`;
  const img = image ?? "";

  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", "index, follow");

  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", url);
  if (img) upsertMeta("property", "og:image", img);

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

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
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
  image: string;
  description: string;
  author: { name: string; role: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
  author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
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
