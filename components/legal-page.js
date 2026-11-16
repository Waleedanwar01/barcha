import { PageHero } from "./ui";
import { legal, siteConfig } from "../lib/site-data";

export default function LegalPage({ title, sections }) {
  return (
    <>
      <PageHero eyebrow={`Last updated ${legal.updated}`} lines={[title]} />
      <section className="section">
        <div className="container max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <div key={s.heading} className="grid gap-3 border-t border-line pt-8 md:grid-cols-[60px_1fr]">
              <span className="font-mono text-xs text-ink/35">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-2xl font-semibold">{s.heading}</h2>
                <p className="muted mt-3 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
          <p className="border-t border-line pt-8 text-sm text-ink/45">
            Questions? Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-4">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
