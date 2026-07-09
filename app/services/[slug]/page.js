import { notFound } from "next/navigation";
import CtaBanner from "../../../components/cta-banner";
import MagneticButton from "../../../components/magnetic-button";
import Reveal from "../../../components/reveal";
import SectionHeading from "../../../components/section-heading";
import { getServiceIcon } from "../../../components/service-icons";
import {
  getServiceBySlug,
  serviceDetails,
  services,
} from "../../../lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Barcha Digital`,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const details = serviceDetails[params.slug];
  const iconData = getServiceIcon(service.slug);

  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            {iconData ? (
              <span
                className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full [&_svg]:h-4 [&_svg]:w-4"
                style={{ backgroundColor: `${iconData.color}25` }}
              >
                {iconData.icon}
              </span>
            ) : null}
            {service.category}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68">
                {details?.intro || service.short}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <MagneticButton href="/contact" className="justify-center">
                  Discuss This Service
                </MagneticButton>
                <MagneticButton
                  href="/services"
                  variant="outline"
                  className="justify-center"
                >
                  Back to Services
                </MagneticButton>
              </div>
            </div>

            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Key Outcomes
              </p>
              <div className="mt-6 space-y-4">
                {service.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Benefits"
            title="Get a practical business edge."
            text="More important than fancy labels is how this output directly improves your market positioning and lead generation flow."
          />

          <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
            {details?.benefits?.map((item, index) => (
              <div key={item} className="panel p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Deliverables"
            title="A structured, predictable scope."
            text="Exact deliverables can vary depending on project scale, but this serves as our standard roadmap framework."
          />

          <Reveal className="mt-12 grid gap-5 md:grid-cols-2">
            {details?.deliverables?.map((item) => (
              <div key={item} className="panel flex items-center gap-4 p-6">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <p className="text-sm leading-7 text-white/68">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {details?.tools?.length ? (
        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Tools & Platforms"
              title="Real tools, not just buzzwords."
              text="A look at some of the platforms, plugins, and apps we use to get this work done well."
            />

            <Reveal className="mt-12 flex flex-wrap gap-3" y={14}>
              {details.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/75 transition hover:border-primary/40 hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
