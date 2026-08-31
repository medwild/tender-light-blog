import type { Metadata } from "next";
import { breadcrumbSchema, organizationSchema } from "../../lib/seo";
import { ContactPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Book an Engagement Session | Tender Light",
  description:
    "Book an engagement session or ask about poses, outfits and locations. Replies within 48 hours.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          organizationSchema(),
        ]}
      />
      <ContactPage />
    </>
  );
}
