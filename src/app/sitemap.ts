import type { MetadataRoute } from "next";
import { HUBS } from "../content/hubs";
import { POSTS } from "../content/posts";
import { absoluteUrl } from "../lib/seo";

/**
 * The sitemap is generated from the content model at build time — the
 * mirror-keeping step of the old Shadow-SSG flow disappears with it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const statics: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/guides"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.5 },
  ];
  const hubs: MetadataRoute.Sitemap = HUBS.map((h) => ({
    url: absoluteUrl(`/${h.slug}`),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.filter((p) => p.cluster).map((p) => ({
    url: absoluteUrl(`/${p.cluster}/${p.slug}`),
    lastModified: p.dateModified ?? p.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...statics, ...hubs, ...posts];
}
