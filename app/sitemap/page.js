import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import { buildMetadata } from "../../lib/seo";
import { footerLinks, navLinks, services } from "../../lib/site-data";

export const metadata = buildMetadata({
  title: "Sitemap | Barcha Digital",
  description: "View the list of all pages and service listings available on our website.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const baseRoutes = [...navLinks, ...footerLinks];

  return (
    <section className="px-6 pb-20 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          as="h1"
          eyebrow="Sitemap"
          title="All major routes in one place."
          text="This page displays our Next.js project routing structure for search engine crawl efficiency."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="panel p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Main Pages
            </p>
            <div className="mt-5 grid gap-3">
              {baseRoutes.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className="text-sm text-white/68 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="panel p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Service Pages
            </p>
            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/68 transition hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
