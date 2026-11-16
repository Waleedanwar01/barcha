import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../../components/icons";
import { CtaBanner, PageHero, ProjectCard, ServiceCard } from "../../../components/ui";
import { getServiceBySlug, projects, services } from "../../../lib/site-data";
import { buildMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({ title: service.title, description: service.intro, path: `/services/${slug}` });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);
  const index = services.findIndex((s) => s.slug === slug);
  const showcase = projects[index % projects.length];

  return (
    <>
      <PageHero eyebrow={`Service ${String(index + 1).padStart(2, "0")}`} lines={[service.title]} text={service.intro}>
        <Link href="/contact" className="btn-primary !px-8 !py-4">
          Discuss your project
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container grid gap-4 lg:grid-cols-12">
          <div data-reveal className="card p-8 md:p-12 lg:col-span-8">
            <span className="eyebrow">What&apos;s included</span>
            <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {service.deliverables.map((d, i) => (
                <li key={d} className="flex items-center gap-4 border-t border-line py-5 text-ink/85">
                  <span className="font-mono text-xs text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <aside data-reveal style={{ "--d": "100ms" }} className="card flex flex-col p-8 md:p-10 lg:col-span-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/45">Tools we use</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink/80">
                  {t}
                </li>
              ))}
            </ul>
            <p className="muted mt-auto pt-10 text-sm leading-relaxed">
              Every project is scoped in writing with fixed deliverables and a clear timeline.
            </p>
          </aside>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4" data-reveal>
            <span className="eyebrow">From our portfolio</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Recent work</h2>
            <Link href="/work" className="btn-ghost mt-8">
              View all projects
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <ProjectCard project={showcase} large />
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container">
          <h2 data-reveal className="mb-12 text-3xl font-semibold md:text-4xl">Other services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
