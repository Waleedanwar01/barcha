import CtaBanner from "../../components/cta-banner";
import PageHero from "../../components/page-hero";
import ServiceScrollStack from "../../components/service-scroll-stack";
import { serviceCategories, services } from "../../lib/site-data";

export const metadata = {
  title: "Our Services | Barcha Digital",
  description:
    "Barcha Digital offers custom web development, WordPress, Shopify storefronts, Django backends, SEO, Google & social ads, branding, AI-powered design, and automated workflows.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to ship a clear website."
        subtitle="Every service is focused on a singular goal: eliminate user confusion, clarify your value proposition, and make the next step obvious. Design, development, and growth connected in one system."
        primary={{ href: "/contact", label: "Book a Call" }}
        secondary={{ href: "/process", label: "View Process" }}
      />

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {serviceCategories.map((category) => (
            <div
              key={category}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.24em] text-white/65"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl space-y-24">
          {serviceCategories.map((category, index) => {
            const categoryServices = services.filter(
              (service) => service.category === category,
            );

            return (
              <div
                key={category}
                className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-14"
              >
                <div className="lg:sticky lg:top-32">
                  <p className="font-heading text-6xl font-bold text-white/10 md:text-7xl">
                    0{index + 1}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-white">
                    {category}
                  </p>
                  <div className="mt-4 h-px w-16 bg-primary/50" />
                  <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/45">
                    {categoryServices.length} service
                    {categoryServices.length === 1 ? "" : "s"} in this category
                  </p>
                </div>

                <ServiceScrollStack services={categoryServices} />
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
