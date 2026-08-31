import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "../../../lib/constants";
import { articleItems, getPost, POSTS, postPath } from "../../../lib/content";
import { getHub } from "../../../content/hubs";
import {
  articleItemListSchema, articleSchema, breadcrumbSchema, faqSchema,
} from "../../../lib/seo";
import { ArticlePage } from "../../../views/detail";
import JsonLd from "../../../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.filter((p) => p.cluster).map((p) => ({ hub: p.cluster as string, slug: p.slug }));
}

export function generateMetadata({ params }: { params: { hub: string; slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post || post.cluster !== params.hub) return {};
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const canonical = `/${post.cluster}/${post.slug}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: [{ url: post.featuredImage, width: 1200, height: 630, alt: title }],
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [`${SITE.url}/author/harper-ellis/`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.featuredImage],
    },
  };
}

export default function Page({ params }: { params: { hub: string; slug: string } }) {
  const post = getPost(params.slug);
  if (!post || post.cluster !== params.hub) notFound();

  const hub = getHub(post.cluster);
  const crumbs = [{ name: "Home", path: "/" }];
  if (hub) crumbs.push({ name: hub.name, path: `/${hub.slug}` });
  crumbs.push({ name: post.title, path: postPath(post.slug) });

  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema(crumbs),
    articleSchema(
      {
        title: post.title, description: post.seoDescription, image: post.featuredImage,
        date: post.date, dateModified: post.dateModified, keywords: post.primaryKeyword,
      },
      postPath(post.slug),
    ),
  ];
  const faqBlock = post.blocks.find((b) => b.type === "faq");
  if (faqBlock && faqBlock.type === "faq") schemas.push(faqSchema(faqBlock.items));
  const items = articleItems(post);
  if (items) schemas.push(articleItemListSchema(`${post.title} — itemized`, items));

  return (
    <>
      <JsonLd schemas={schemas} />
      <ArticlePage hub={post.cluster} slug={post.slug} />
    </>
  );
}
