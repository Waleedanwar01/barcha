import SectionHeading from "../../components/section-heading";
import ContactForm from "../../components/contact-form";
import Reveal from "../../components/reveal";
import TrustStrip from "../../components/trust-strip";
import { buildMetadata } from "../../lib/seo";
import { contactHighlights, siteConfig } from "../../lib/site-data";

const contactIcons = {
  email: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#22D3EE" strokeWidth="1.7">
      <path d="M4 5h16v14H4V5Zm0 0 8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#3B82F6" strokeWidth="1.7">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#2DD4BF" strokeWidth="1.7">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  ),
};

export const metadata = buildMetadata({
  title: "Contact Us | Barcha Digital",
  description:
    "Get in touch with Barcha Digital to discuss website redesigns, WordPress and Shopify builds, Google & social ads, branding systems, and AI-assisted design — serving clients across the US, Canada, UK, and Australia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Ready to build a better site with premium design?"
            text="Share your project idea. Whether it's a redesign, a new build, or frontend/routing cleanup, we start with clear strategic direction."
          />
        </div>
      </section>

      <TrustStrip />

      <section className="px-6 py-10 md:px-10">
        <Reveal
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]"
          y={30}
        >
          <div className="panel p-8 md:p-10">
            <h2 className="font-heading text-3xl font-bold uppercase text-white">
              Start Your Project
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
              Fill out the form below to submit an inquiry. We will analyze your inputs and coordinate a custom proposal setup for your business requirements.
            </p>

            <ContactForm />
          </div>

          <div className="grid gap-6">
            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Contact</p>
              <div className="mt-5 space-y-4 text-sm text-white/68">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                    {contactIcons.email}
                  </span>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                    {contactIcons.phone}
                  </span>
                  {siteConfig.phone}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                    {contactIcons.whatsapp}
                  </span>
                  {siteConfig.whatsapp}
                </a>
                <p className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                    {contactIcons.location}
                  </span>
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                What Happens Next
              </p>
              <div className="mt-5 space-y-4">
                {contactHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/68">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
