import Link from "next/link";
import Icon from "../components/icons";
import {
  Accent,
  AnimatedHeadline,
  CtaBanner,
  ProcessGrid,
  ProjectCard,
  SectionHeading,
  ServiceList,
  Showreel,
  StatsBand,
  TextMarquee,
  VentureShowcase,
} from "../components/ui";
import {
  founders,
  hero,
  highlights,
  principles,
  processSteps,
  projects,
  services,
  ventures,
} from "../lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero (dark) ── */}
      <section className="theme-dark relative overflow-hidden bg-paper">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative pt-40 md:pt-52">
          <div className="rise flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-ink/60">Now booking new projects</span>
          </div>

          <AnimatedHeadline
            lines={hero.lines}
            delay={100}
            className="mt-8 text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <p className="rise muted max-w-xl text-lg leading-relaxed md:col-span-6 md:text-xl" style={{ "--d": "450ms" }}>
              {hero.text}
            </p>
            <div className="rise flex flex-wrap gap-3 md:col-span-6 md:justify-end" style={{ "--d": "550ms" }}>
              <Link href="/contact" className="btn-accent !px-8 !py-4 text-base">
                Start a project
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn-ghost !px-8 !py-4 text-base">
                View our work
              </Link>
            </div>
          </div>
        </div>

        <div className="rise relative mt-20 pb-20 md:mt-28 md:pb-28" style={{ "--d": "700ms" }}>
          <Showreel projects={projects} />
        </div>
      </section>

      {/* ── 2. Brand band ── */}
      <TextMarquee items={services.map((s) => s.title)} />

      {/* ── 3. Intro + stats (white) ── */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3" data-reveal>
              <span className="eyebrow">Who we are</span>
            </div>
            <div className="lg:col-span-9">
              <p data-reveal className="font-display text-3xl font-medium leading-[1.2] tracking-[-0.025em] text-ink md:text-5xl">
                <Accent text="Barcha Global is an independent digital agency. We help ambitious companies *look world-class* online — and turn that into real growth." />
              </p>
              <div data-reveal style={{ "--d": "120ms" }} className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  {founders.map((f) => (
                    <span
                      key={f.name}
                      className="grid h-12 w-12 place-items-center rounded-full border-2 border-paper bg-ink font-display text-sm font-semibold text-paper"
                    >
                      {f.initials}
                    </span>
                  ))}
                </div>
                <p className="muted text-sm">
                  Led by founders <span className="text-ink">{founders.map((f) => f.name).join(" & ")}</span>
                </p>
                <Link href="/about" className="link-underline text-sm font-semibold text-ink">
                  Our story →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20 md:mt-28">
            <StatsBand items={highlights} />
          </div>
        </div>
      </section>

      {/* ── 4. Services (dark) ── */}
      <section className="theme-dark section bg-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="One team for *everything* digital."
            text="Strategy, design, engineering and marketing under one roof — so nothing gets lost between agencies."
            action={
              <Link href="/services" className="btn-ghost shrink-0">
                All services
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            }
          />
          <ServiceList services={services} />
        </div>
      </section>

      {/* ── 5. Selected work (white) ── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Work that *performs.*"
            text="Platforms, websites and stores we've designed and built for clients across the UK, UAE, US and Australia."
            action={
              <Link href="/work" className="btn-primary shrink-0">
                All projects
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            }
          />
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <div key={p.title} className={i % 2 === 1 ? "md:mt-32" : ""}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Process (soft) ── */}
      <section className="section bg-paper-2">
        <div className="container">
          <SectionHeading eyebrow="Process" title="Clear steps. *No surprises.*" />
          <ProcessGrid steps={processSteps} />
        </div>
      </section>

      {/* ── 8. Ventures (white) ── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our ventures"
            title="Specialist brands, *built in-house.*"
            text="Some markets deserve a dedicated team. We build and operate focused companies around them."
          />
          {ventures.map((v) => (
            <VentureShowcase key={v.name} venture={v} />
          ))}
        </div>
      </section>

      {/* ── 9. Principles (white) ── */}
      <section className="section pt-0">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <span className="eyebrow">Why Barcha Global</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl">
              <Accent text="Four rules we *don't bend.*" />
            </h2>
            <p className="muted mt-6 text-lg leading-relaxed">
              You work directly with the founders — the same people who plan, build and report on your project.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {principles.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--d": `${i * 80}ms` }} className="spotlight bg-paper p-8 md:p-10">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 10. CTA (dark) ── */}
      <CtaBanner />
    </>
  );
}
