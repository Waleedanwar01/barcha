import AutoSlider from "../components/auto-slider";
import CtaBanner from "../components/cta-banner";
import HomeHero from "../components/home-hero";
import InProgressStrip from "../components/in-progress-strip";
import MarqueeBanner from "../components/marquee-banner";
import ProcessTimeline from "../components/process-timeline";
import Reveal from "../components/reveal";
import ResourcesSection from "../components/resources-section";
import SectionHeading from "../components/section-heading";
import { getPortfolioIcon } from "../components/portfolio-icons";
import PortfolioThumb from "../components/portfolio-thumb";
import { getServiceIcon } from "../components/service-icons";
import ServiceCard from "../components/service-card";
import TestimonialsMarquee from "../components/testimonials-marquee";
import TrustStrip from "../components/trust-strip";
import VerticalTicker from "../components/vertical-ticker";
import {
  featuredWork,
  priorityIndustries,
  processSteps,
  services,
  whyChooseUs,
} from "../lib/site-data";

const featuredServices = services.slice(0, 6);

export const metadata = {
  title: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
  description:
    "Barcha Digital is a premium digital agency for local businesses — custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO.",
  keywords: "web development, SEO agency, digital marketing, branding, Next.js development, custom websites, local business marketing",
  openGraph: {
    title: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
    description: "We build clear, conversion-focused websites and growth systems for local businesses. Web development, SEO, ads, branding & AI design.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MarqueeBanner />
      <TrustStrip />

      <section id="services" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Services"
            title="Everything your brand needs in one premium system."
            text="Website, SEO, branding, paid growth, and automation — not treated separately, but as one connected growth stack."
          />

          <Reveal className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

      <section id="priority-industries" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Who We Serve Best"
            title="Built for the businesses that need to rank and convert."
            text="We focus where our systems perform strongest — home service and content-driven businesses that live or die by search visibility."
          />

          <VerticalTicker items={priorityIndustries} />
        </div>
      </section>

      <TestimonialsMarquee />

      <section id="why-barcha" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Barcha Digital"
            title="Design isn't just pretty — it's purposeful."
            text="Every section builds trust, clarifies the offer, and naturally guides users toward their next action."
          />

          <Reveal className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="panel p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03]" />
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="featured-work" className="py-20">
        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Work"
              title="Real projects, not mockups."
              text="A few live sites we've shipped recently. Click through to see them in action."
            />
          </div>
        </div>

        <div className="mt-12">
          <AutoSlider speed={30}>
            {featuredWork.slice(0, 4).map((project) => {
              const icon = project.iconSlug
                ? getServiceIcon(project.iconSlug)
                : getPortfolioIcon(project.iconKey);

              return (
                <a
                  key={project.title}
                  href={project.link || "/portfolio"}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="group panel block w-[320px] shrink-0 overflow-hidden transition hover:-translate-y-1 hover:border-primary/40 md:w-[360px]"
                >
                  <PortfolioThumb
                    src={project.thumbnail}
                    alt={`${project.title} website screenshot`}
                    icon={icon}
                    className="h-44"
                  />
                  <div className="space-y-3 p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {project.category}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-6 text-white/65">{project.result}</p>
                  </div>
                </a>
              );
            })}
          </AutoSlider>
        </div>

        <div className="mt-8 px-6 text-center md:px-10">
          <div className="mx-auto max-w-7xl">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-highlight"
            >
              View Full Portfolio
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <InProgressStrip />

      <MarqueeBanner
        reverse
        items={["Book a Call", "Let's Build Something", "Local Businesses Win Online", "Barcha Digital"]}
      />

      <ResourcesSection />

      <section id="process" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="From idea to launch — a structured flow."
            text="No guesswork. Every phase has a clear role so design, development, and business outcomes stay aligned."
          />

          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
