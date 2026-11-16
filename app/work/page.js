import { CtaBanner, PageHero, ProjectCard, SectionHeading, StatsBand, VentureShowcase } from "../../components/ui";
import { highlights, projects, ventures } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected websites, platforms and e-commerce stores designed and built by Barcha Global for clients in the UK, UAE, US and Australia.",
  path: "/work",
});

export default function WorkPage() {
  const [first, ...rest] = projects;

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        lines={["Work that", "*speaks for itself.*"]}
        text="Booking platforms, corporate websites, e-commerce stores and lead-generation funnels — designed, engineered and launched by our team."
      />

      <section className="section">
        <div className="container">
          <ProjectCard project={first} large />
          <div className="mt-24 grid gap-x-8 gap-y-20 md:grid-cols-2">
            {rest.map((p, i) => (
              <div key={p.title} className={i % 2 === 1 ? "md:mt-32" : ""}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
          <p className="mt-24 text-center text-sm text-ink/40">
            Client names are kept confidential. Detailed case studies are available on request.
          </p>
        </div>
      </section>

      <section className="container pt-24 md:pt-32">
        <StatsBand items={highlights} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our ventures" title="Companies we *build & operate.*" />
          {ventures.map((v) => (
            <VentureShowcase key={v.name} venture={v} />
          ))}
        </div>
      </section>

      <CtaBanner title="Want results *like these?*" />
    </>
  );
}
