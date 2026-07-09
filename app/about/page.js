import Image from "next/image";
import CtaBanner from "../../components/cta-banner";
import Reveal from "../../components/reveal";
import SectionHeading from "../../components/section-heading";
import TrustStrip from "../../components/trust-strip";

const values = [
  {
    title: "Innovation",
    text: "We do not chase temporary trends; we thoroughly test practical tools and only deploy solutions that create real business value.",
  },
  {
    title: "Transparency",
    text: "Reporting, timelines, and strategic decisions are always crystal clear. Straightforward communication is preferred over fancy jargon.",
  },
  {
    title: "Results First",
    text: "Every single redesign and marketing campaign is measured directly against actual KPIs, lead flow, and conversion improvements.",
  },
  {
    title: "Partnership",
    text: "We act as a collaborative growth partner that deeply understands long-term scale and sustainable development.",
  },
];

export const metadata = {
  title: "About Us | Barcha Digital",
  description:
    "Our mission is to equip ambitious local businesses with premium digital systems that drive measurable growth and establish strong online positioning.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Who We Are"
            title="We make premium digital execution accessible."
            text="Barcha Digital was built for ambitious local businesses ready to move beyond generic templates and step into premium positioning and measurable growth."
            align="center"
          />
        </div>
      </section>

      <TrustStrip />

      <section className="px-6 py-12 md:px-10">
        <Reveal
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          y={30}
        >
          <div className="panel overflow-hidden p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Our Story</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              Ambitious brands deserve big-league digital quality.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/67">
              <p>
                Barcha Digital started from a frustration: premium design and robust digital systems were typically reserved for enterprise brands. Local and small-to-medium businesses were left with generic templates or subpar execution.
              </p>
              <p>
                We built a structured process where strategy, UI, messaging, frontend architecture, and growth marketing align seamlessly. The outcome is a website that looks premium and functions as a high-performing business tool.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/portfolio_ecommerce.png"
                alt="Ecommerce storefront redesign delivered by Barcha Digital"
                width={900}
                height={520}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
          </div>

          <div className="grid gap-6">
            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Founded</p>
              <p className="mt-3 font-heading text-5xl font-bold text-white">2020</p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Starting from local consulting to becoming a multi-industry digital growth partner.
              </p>
            </div>
            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Focus</p>
              <p className="mt-3 font-heading text-3xl font-bold text-white">
                Design, development, growth
              </p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Connecting branding, performance marketing, and workflow automation into a single cohesive system.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Values"
            title="What we protect in every project."
            text="High-quality outcomes are built on strong principles, not just visual styles."
          />

          <Reveal className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.title} className="panel p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{value.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
