import { legalMetadata, legalSchemas } from "../legal-utils";
import { LegalPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const metadata = legalMetadata("privacy-policy");

export default function Page() {
  return (
    <>
      <JsonLd schemas={legalSchemas("privacy-policy")} />
      <LegalPage doc="privacy-policy" />
    </>
  );
}
