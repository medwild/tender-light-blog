import type { Metadata } from "next";
import { breadcrumbSchema } from "../lib/seo";

export type LegalDoc = "privacy-policy" | "affiliate-disclosure" | "editorial-policy";

const label = (doc: LegalDoc) => doc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** Legal pages are noindex, follow — same contract as the old applySeo call. */
export function legalMetadata(doc: LegalDoc): Metadata {
  return {
    title: `${label(doc)} | Tender Light`,
    description: `${doc.replace(/-/g, " ")} for Tender Light.`,
    alternates: { canonical: `/${doc}/` },
    robots: { index: false, follow: true },
  };
}

export function legalSchemas(doc: LegalDoc) {
  return [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: doc, path: `/${doc}` },
    ]),
  ];
}
