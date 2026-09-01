import type { Metadata } from "next";
import { breadcrumbSchema, collectionSchema } from "../../lib/seo";
import { HubIndexPage } from "../../views/home";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Engagement Photo Guides — Start Here | Tender Light",
  description:
    "The engagement photo topical map: seven hubs covering ideas, poses, outfits, locations, save-the-dates, prints and wedding-day logistics.",
  alternates: { canonical: "/guides/" },
};

export default function Page() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          collectionSchema(
            "Engagement Photo Guides",
            "/guides",
            "Seven topic hubs covering ideas, poses, outfits, locations, save-the-dates, prints and wedding-day logistics.",
          ),
        ]}
      />
      <HubIndexPage />
    </>
  );
}
