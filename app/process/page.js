import CtaBanner from "../../components/cta-banner";
import ProcessTimeline from "../../components/process-timeline";
import SectionHeading from "../../components/section-heading";
import { processSteps } from "../../lib/site-data";

export const metadata = {
  title: "Our Process | Barcha Digital",
  description:
    "Learn about Barcha Digital's step-by-step digital process from auditing and strategic alignment, to custom design, high-fidelity development, launch, and growth optimizations.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="How We Work"
            title="A structured process for clear execution."
            text="Whether it's a website redesign or a brand-new custom build, our process is intentionally structured to minimize friction and maximize velocity."
            align="center"
          />
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
