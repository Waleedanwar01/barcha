import Icon from "../../components/icons";
import { Accent, CtaBanner, PageHero, SectionHeading, StatsBand, VentureShowcase } from "../../components/ui";
import { about, founders, highlights, principles, siteConfig, ventures } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Barcha Global is a remote-first digital agency founded by Waleed Anwar and Asad Anwar, and the parent company of Territory Growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" lines={["A small, senior team", "with *global reach.*"]} text={about.intro} />

      {/* Story */}
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-5xl">
              <Accent text="One partner for the *whole picture.*" />
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-ink/65 lg:col-span-7 md:text-xl">
            {about.story.map((p, i) => (
              <p key={i} data-reveal style={{ "--d": `${i * 100}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <StatsBand items={highlights} />
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Founders"
            title="The people you'll *actually work with.*"
            text="No hand-offs to junior teams. Every project is led by the founders from kickoff to launch."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {founders.map((f, i) => (
              <article key={f.name} data-reveal style={{ "--d": `${i * 120}ms` }} className="card spotlight flex flex-col p-8 md:p-12">
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-ink font-display text-xl font-semibold text-paper">
                    {f.initials}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold">{f.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{f.role}</p>
                  </div>
                </div>
                <p className="muted mt-8 leading-relaxed">{f.bio}</p>
                <blockquote className="mt-auto border-t border-line pt-8 font-serif text-2xl italic leading-snug text-ink/90 md:text-[1.7rem]">
                  “{f.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-y border-line bg-paper-2">
        <div className="container">
          <SectionHeading eyebrow="Values" title="Four rules we *don't bend.*" align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.title} data-reveal style={{ "--d": `${i * 80}ms` }} className="card spotlight p-8">
                <span className="font-serif text-5xl italic text-ink/20">0{i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold">{p.title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group structure */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Group structure"
            title="Barcha Global & *Territory Growth.*"
            text="Barcha Global is the parent company. Territory Growth is our specialist division for local service businesses, with its own focus, pricing and playbooks."
          />
          {ventures.map((v) => (
            <VentureShowcase key={v.name} venture={v} />
          ))}
        </div>
      </section>

      {/* Where */}
      <section className="pb-24 md:pb-36">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            { icon: "globe", title: "Remote-first", text: `Team across Pakistan and the UAE. Clients across ${siteConfig.markets}.` },
            { icon: "mail", title: "Talk to us", text: siteConfig.email },
            { icon: "chat", title: "Fast replies", text: "We respond to every enquiry within 24 hours." },
          ].map((item, i) => (
            <div key={item.title} data-reveal style={{ "--d": `${i * 80}ms` }} className="card flex gap-5 p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line text-accent">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="muted mt-1 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Let's build something *remarkable.*" />
    </>
  );
}
