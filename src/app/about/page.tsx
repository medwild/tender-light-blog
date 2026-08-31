import type { Metadata } from "next";
import { breadcrumbSchema, personSchema } from "../../lib/seo";
import { AboutPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "About Harper Ellis | Tender Light",
  description:
    "Harper Ellis — former engagement photographer, 400+ sessions, now writing the guides every couple deserves.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Harper", path: "/about" },
          ]),
          personSchema(),
        ]}
      />
      <AboutPage />
    </>
  );
}
