import CtaBanner from "../../components/cta-banner";
import FaqAccordion from "../../components/faq-accordion";
import SectionHeading from "../../components/section-heading";
import { buildMetadata, faqJsonLd } from "../../lib/seo";
import { faqItems } from "../../lib/site-data";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions | Barcha Digital",
  description:
    "Find answers to frequently asked questions about website redesigns, Next.js tech stacks, AI-assisted design, custom styling, timelines, and ongoing project maintenance support.",
  path: "/faq",
});

const faqSchema = faqJsonLd(faqItems);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before redesign & development."
            text="If you are considering moving your current website to a modern, performant frontend stack, these answers clarify our direction."
            align="center"
          />
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-5xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
