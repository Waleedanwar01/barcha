import CtaBanner from "../../components/cta-banner";
import SectionHeading from "../../components/section-heading";
import TechGrid from "../../components/tech-grid";
import ToolsDirectory from "../../components/tools-directory";

export const metadata = {
  title: "Tech Stack | Barcha Digital",
  description:
    "The frameworks and tools behind Barcha Digital builds: Next.js, Tailwind CSS, GSAP, Lenis, Django, PostgreSQL, Shopify, WordPress, WooCommerce, plus the SEO, ads, and design tools we use daily.",
};

export default function TechPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Premium frameworks and modern devtools."
            text="We choose reliable, fast, and SEO-optimized software stacks. Each tool serves a purpose: security, modular design, smooth interaction, and page performance."
            align="center"
          />
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <TechGrid />
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tools We Use"
            title="Real plugins, apps, and platforms — not buzzwords."
            text="Beyond the core stack, here's exactly what powers WordPress, WooCommerce, Shopify, SEO, and ad campaigns on client projects."
          />
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <ToolsDirectory />
      </section>

      <CtaBanner />
    </>
  );
}
