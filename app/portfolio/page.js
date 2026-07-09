import AutoSlider from "../../components/auto-slider";
import CtaBanner from "../../components/cta-banner";
import PageHero from "../../components/page-hero";
import { getPortfolioIcon } from "../../components/portfolio-icons";
import PortfolioThumb from "../../components/portfolio-thumb";
import { getServiceIcon } from "../../components/service-icons";
import TrustStrip from "../../components/trust-strip";
import { featuredWork } from "../../lib/site-data";

export const metadata = {
  title: "Portfolio | Barcha Digital",
  description:
    "Real projects shipped by Barcha Digital — booking platforms, Shopify stores, insurance quote tools, construction sites, and full-stack apps.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Where clarity becomes results."
        subtitle="Real, live projects — not mockups. Click any card to visit the actual site."
        primary={{ href: "/contact", label: "Start a Project" }}
        secondary={{ href: "/services", label: "View Services" }}
      />

      <TrustStrip />

      <section className="py-10">
        <AutoSlider speed={44}>
          {featuredWork.map((project) => {
            const icon = project.iconSlug
              ? getServiceIcon(project.iconSlug)
              : getPortfolioIcon(project.iconKey);

            return (
              <a
                key={project.title}
                href={project.link || "/contact"}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group panel relative w-[320px] shrink-0 overflow-hidden transition hover:-translate-y-1 hover:border-primary/40 md:w-[360px]"
              >
                <PortfolioThumb
                  src={project.thumbnail}
                  alt={`${project.title} website screenshot`}
                  icon={icon}
                  className="h-44"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#050914]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  {project.category}
                </span>
                <div className="space-y-3 p-6">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/65">{project.result}</p>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary opacity-0 transition duration-300 group-hover:opacity-100">
                    Visit Live Site
                    <span aria-hidden="true">↗</span>
                  </p>
                </div>
              </a>
            );
          })}
        </AutoSlider>
      </section>

      <CtaBanner />
    </>
  );
}
