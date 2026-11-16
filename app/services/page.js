import { CtaBanner, PageHero, ProcessGrid, SectionHeading, ServiceCard } from "../../components/ui";
import { processSteps, services } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, e-commerce, WordPress, UI/UX, branding, SEO, performance marketing and AI automation — delivered by one senior team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        lines={["Strategy, design,", "engineering & *growth.*"]}
        text="Bring us in for a single service or end-to-end. Every engagement is led by the founders and scoped in writing before work starts."
      />

      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="theme-dark section bg-paper">
        <div className="container">
          <SectionHeading eyebrow="Process" title="How every project *runs.*" />
          <ProcessGrid steps={processSteps} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
