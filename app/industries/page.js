import AutoSlider from "../../components/auto-slider";
import CtaBanner from "../../components/cta-banner";
import Reveal from "../../components/reveal";
import SectionHeading from "../../components/section-heading";
import { industries } from "../../lib/site-data";

export const metadata = {
  title: "Industries We Serve | Barcha Digital",
  description:
    "Explore how Barcha Digital builds custom web layouts, branding materials, and targeted conversion funnels tailored for local industries like healthcare, restaurants, home services, law firms, and real estate.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Industries"
            title="Every industry requires a tailored solution."
            text="Different markets demand specific trust signals, user flows, and conversion paths. Our design and messaging strategies are fully market-aware."
            align="center"
          />
        </div>
      </section>

      <section className="pb-12">
        <AutoSlider speed={26}>
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                {industry}
              </span>
            </div>
          ))}
        </AutoSlider>
      </section>

      <section className="px-6 py-12 md:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="panel p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-white">{industry}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Strategy, copywriting, and frontend component structures are customized to match user behaviors in this market segment.
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
