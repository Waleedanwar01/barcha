import LegalPage from "../../components/legal-page";
import { legal } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms that apply to projects with Barcha Global.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={legal.terms} />;
}
