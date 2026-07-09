import SectionHeading from "../../components/section-heading";
import Reveal from "../../components/reveal";
import { legalSections } from "../../lib/site-data";

export const metadata = {
  title: "Terms of Service | Barcha Digital",
  description: "Read our terms of service and client deliverables agreements framework.",
};

export default function TermsPage() {
  return (
    <section className="px-6 pb-20 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Terms"
          title="Terms of service and delivery expectations."
          text="These terms govern general client engagements. Detailed project agreements are finalized separately during onboarding."
        />

        <Reveal className="mt-10 space-y-5" y={16}>
          {legalSections.terms.map((item) => (
            <div key={item} className="panel p-6 text-sm leading-7 text-white/68">
              {item}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
