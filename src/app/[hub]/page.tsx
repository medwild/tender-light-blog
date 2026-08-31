import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HUBS, getHub } from "../../content/hubs";
import { getPostsByHub, postPath } from "../../lib/content";
import { breadcrumbSchema, collectionSchema, faqSchema, itemListSchema } from "../../lib/seo";
import { HubPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

export function generateMetadata({ params }: { params: { hub: string } }): Metadata {
  const hub = getHub(params.hub);
  if (!hub) return {};
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: { canonical: `/${hub.slug}/` },
    openGraph: {
      type: "website",
      url: `/${hub.slug}/`,
      title: hub.metaTitle,
      description: hub.metaDescription,
    },
  };
}

export default function Page({ params }: { params: { hub: string } }) {
  const hub = getHub(params.hub);
  if (!hub) notFound();
  const spokes = getPostsByHub(hub.slug);
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: hub.name, path: `/${hub.slug}` },
          ]),
          collectionSchema(hub.name, `/${hub.slug}`, hub.lede),
          faqSchema(hub.faq),
          itemListSchema(spokes.map((p) => postPath(p.slug))),
        ]}
      />
      <HubPage slug={hub.slug} />
    </>
  );
}
