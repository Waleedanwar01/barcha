import Image from "next/image";
import Link from "next/link";
import Icon from "./icons";
import { siteConfig } from "../lib/site-data";

/** Renders "*word*" as an italic serif accent. */
export function Accent({ text }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") ? (
      <em key={i} className="accent">
        {part.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/** Headline that slides up line by line on load. */
export function AnimatedHeadline({ lines, as: Tag = "h1", className = "", delay = 0 }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span style={{ "--d": `${delay + i * 110}ms` }}>
            <Accent text={line} />
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, text, action, align = "left" }) {
  const center = align === "center";
  return (
    <div
      data-reveal
      className={`mb-14 flex flex-col gap-8 md:mb-20 ${
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className="max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl">
          <Accent text={title} />
        </h2>
        {text && <p className={`muted mt-6 max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""}`}>{text}</p>}
      </div>
      {action}
    </div>
  );
}

/** Dark page header used on inner pages. */
export function PageHero({ eyebrow, lines, text, children }) {
  return (
    <section className="theme-dark relative overflow-hidden bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative pb-20 pt-40 md:pb-28 md:pt-52">
        {eyebrow && <span className="eyebrow rise">{eyebrow}</span>}
        <AnimatedHeadline
          lines={lines}
          delay={80}
          className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl lg:text-[5.5rem]"
        />
        {text && (
          <p className="rise muted mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ "--d": "350ms" }}>
            {text}
          </p>
        )}
        {children && (
          <div className="rise mt-10" style={{ "--d": "450ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Browser-window frame around a screenshot. */
export function BrowserFrame({ src, alt, priority = false, sizes = "(min-width: 768px) 50vw, 100vw", className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-card ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-ink/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

/** Infinite scrolling strip of project screenshots. */
export function Showreel({ projects }) {
  const row = [...projects, ...projects];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
      <div className="flex w-max animate-marquee-slow gap-6 hover:[animation-play-state:paused]">
        {row.map((p, i) => (
          <div key={i} className="group w-[300px] shrink-0 md:w-[480px]" aria-hidden={i >= projects.length}>
            <BrowserFrame src={p.image} alt={p.title} sizes="480px" priority={i < 3} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Big scrolling words on a solid brand band. */
export function TextMarquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-brand-500 py-6 text-white md:py-8" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            {t}
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/70 md:h-8 md:w-8">
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

export function StatsBand({ items }) {
  return (
    <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
      {items.map((s, i) => (
        <div
          key={s.label}
          data-reveal
          style={{ "--d": `${i * 90}ms` }}
          className={`flex flex-col-reverse justify-end px-4 py-10 md:px-8 md:py-14 ${
            i % 2 === 1 ? "border-l border-line" : ""
          } ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <dt className="muted mt-3 text-sm">{s.label}</dt>
          <dd className="font-display text-5xl font-semibold tracking-[-0.04em] text-ink md:text-7xl">
            <span data-count={s.count} data-suffix={s.suffix}>
              {s.count}
              {s.suffix}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Big numbered list of services. */
export function ServiceList({ services }) {
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => (
        <li key={s.slug} data-reveal style={{ "--d": `${(i % 4) * 60}ms` }}>
          <Link
            href={`/services/${s.slug}`}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 overflow-hidden border-b border-line py-7 md:grid-cols-[80px_1fr_1fr_auto] md:gap-8 md:py-9"
          >
            <span
              className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink/[0.04] transition-transform duration-500 ease-out group-hover:scale-y-100"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-ink/35">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] transition duration-500 group-hover:translate-x-2 md:text-4xl">
              {s.title}
            </h3>
            <p className="muted hidden text-sm leading-relaxed md:block">{s.short}</p>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-ink/70 transition duration-500 group-hover:rotate-45 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
              <Icon name="arrowUpRight" className="h-5 w-5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      data-reveal
      style={{ "--d": `${(index % 4) * 70}ms` }}
      className="card spotlight group flex flex-col p-8 transition duration-500 hover:-translate-y-1 hover:border-ink/25"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-paper transition duration-500 group-hover:bg-brand-500 group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>
      <p className="muted mt-3 flex-1 text-sm leading-relaxed">{service.short}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
        Explore
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/** Project card — no outbound links or domains (client confidentiality). */
export function ProjectCard({ project, index = 0, large = false }) {
  return (
    <article data-reveal style={{ "--d": `${(index % 2) * 120}ms` }} className="group">
      <div className="overflow-hidden rounded-3xl bg-paper-2 p-3 md:p-5">
        <BrowserFrame
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          sizes={large ? "(min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
          className="shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 px-1 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {project.category} · {project.region}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{project.title}</h3>
          <p className="muted mt-3 text-sm leading-relaxed">{project.text}</p>
        </div>
        <ul className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink/60">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Territory Growth (and future ventures) — dark feature block. */
export function VentureShowcase({ venture }) {
  return (
    <div data-reveal className="theme-dark relative overflow-hidden rounded-[2rem] bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            A Barcha Global company
          </span>
          <h3 className="mt-7 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">{venture.name}</h3>
          <p className="mt-2 font-serif text-2xl italic text-accent">{venture.label}</p>
          <p className="muted mt-6 max-w-lg leading-relaxed">{venture.text}</p>
          <a href={venture.link} target="_blank" rel="noopener" className="btn-primary mt-10">
            Visit {venture.domain}
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
        </div>
        <a href={venture.link} target="_blank" rel="noopener" className="group block" tabIndex={-1}>
          <BrowserFrame src={venture.image} alt={`${venture.name} website`} />
        </a>
      </div>

      <div className="relative grid gap-px border-t border-line bg-line md:grid-cols-12">
        <div className="bg-paper p-8 md:col-span-7 md:p-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">Services</p>
          <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {venture.services.map((s, i) => (
              <li key={s} className="flex items-center gap-3 border-b border-line py-3.5 text-ink/85">
                <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-2 gap-px bg-line md:col-span-5 md:grid-cols-1">
          {venture.facts.map((f) => (
            <div key={f.label} className="bg-paper px-8 py-6 md:px-10">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">{f.label}</dt>
              <dd className="mt-2 font-medium text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function ProcessGrid({ steps }) {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.step} data-reveal style={{ "--d": `${i * 100}ms` }} className="card spotlight relative p-8">
          <div className="flex items-center justify-between">
            <span className="font-serif text-6xl italic leading-none text-accent">{s.step}</span>
            {i < steps.length - 1 && <Icon name="arrow" className="hidden h-5 w-5 text-ink/25 md:block" />}
          </div>
          <h3 className="mt-10 text-2xl font-semibold">{s.title}</h3>
          <p className="muted mt-3 text-sm leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBanner({ title = "Have a project *in mind?*" }) {
  return (
    <section className="theme-dark relative overflow-hidden border-b border-line bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span data-reveal className="eyebrow">Start a project</span>
            <h2 data-reveal style={{ "--d": "80ms" }} className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              <Accent text={title} />
            </h2>
          </div>
          <div data-reveal style={{ "--d": "160ms" }} className="lg:col-span-4">
            <p className="muted text-lg">Tell us what you&apos;re building. We reply to every enquiry within 24 hours.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="btn-accent !px-8 !py-4 text-base">
                Start a project
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="btn-ghost !px-6 !py-4 text-base">
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500 group-open:text-white">
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <p className="muted mt-4 max-w-2xl leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
