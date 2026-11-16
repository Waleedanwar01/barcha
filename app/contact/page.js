import ContactForm from "../../components/contact-form";
import Icon from "../../components/icons";
import { Faq, PageHero } from "../../components/ui";
import { faqs, siteConfig, ventures } from "../../lib/site-data";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Start a project with Barcha Global. Email ${siteConfig.email} — we reply within 24 hours.`,
  path: "/contact",
});

const channels = [
  { icon: "mail", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "chat", label: "WhatsApp", value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsappHref}` },
  { icon: "phone", label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
];

export default function ContactPage() {
  const local = ventures[0];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={["Let's build", "*something great.*"]}
        text="Share a few details about your project and we'll come back within 24 hours with questions, ideas and next steps."
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8" data-reveal>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-4 lg:col-span-4">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                data-reveal
                style={{ "--d": `${i * 70}ms` }}
                className="card spotlight group flex items-center gap-5 p-6 transition hover:border-ink/20"
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line text-accent transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={c.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">{c.label}</span>
                  <span className="mt-1 block truncate font-medium text-ink">{c.value}</span>
                </span>
              </a>
            ))}

            <div data-reveal style={{ "--d": "220ms" }} className="card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">Local service business?</p>
              <p className="mt-3 leading-relaxed text-ink/75">
                Roofing, HVAC and plumbing companies are served by our dedicated division,{" "}
                <span className="text-ink">{local.name}</span>.
              </p>
              <a href={local.link} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-ink">
                Visit {local.domain}
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-4xl font-semibold">Common questions</h2>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
