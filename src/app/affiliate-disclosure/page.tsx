import { legalMetadata, legalSchemas } from "../legal-utils";
import { LegalPage } from "../../views/detail";
import JsonLd from "../../components/JsonLd";

export const metadata = legalMetadata("affiliate-disclosure");

export default function Page() {
  return (
    <>
      <JsonLd schemas={legalSchemas("affiliate-disclosure")} />
      <LegalPage doc="affiliate-disclosure" />
    </>
  );
}
