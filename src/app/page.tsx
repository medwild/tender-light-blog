import type { Metadata } from "next";
import { IMAGES, SITE } from "../lib/constants";
import { organizationSchema, websiteSchema, personSchema } from "../lib/seo";
import { HomePage } from "../views/home";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Engagement Photo Ideas, Poses & Inspiration | Tender Light",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Engagement Photo Ideas, Poses & Inspiration | Tender Light",
    description: SITE.description,
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: "Engagement photo journal" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd schemas={[organizationSchema(), websiteSchema(), personSchema()]} />
      <HomePage />
    </>
  );
}
