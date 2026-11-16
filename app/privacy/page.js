import LegalPage from "../../components/legal-page";
import { legal } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Barcha Global collects and uses personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={legal.privacy} />;
}
