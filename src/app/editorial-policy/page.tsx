import { legalMetadata, legalSchemas } from "../legal-utils";
import { LegalPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const metadata = legalMetadata("editorial-policy");

export default function Page() {
  return (
    <>
      <JsonLd schemas={legalSchemas("editorial-policy")} />
      <LegalPage doc="editorial-policy" />
    </>
  );
}
