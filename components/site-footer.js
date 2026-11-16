import Link from "next/link";
import Logo from "./logo";
import Icon from "./icons";
import { navLinks, services, siteConfig, socialLinks, ventures } from "../lib/site-data";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-dark relative overflow-hidden border-t border-line bg-paper">
      <div className="container grid gap-12 pb-12 pt-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="muted mt-6 max-w-sm leading-relaxed">{siteConfig.tagline}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-8 inline-flex items-center gap-2 font-display text-xl font-medium text-ink md:text-2xl"
          >
            <span className="link-underline">{siteConfig.email}</span>
            <Icon name="arrowUpRight" className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <FooterCol title="Services" className="md:col-span-3">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-ink">
              {s.title}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Company" className="md:col-span-2">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
          {socialLinks.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {s.label}
            </a>
          ))}
        </FooterCol>

        <FooterCol title="Ventures" className="md:col-span-2">
          {ventures.map((v) => (
            <a key={v.link} href={v.link} target="_blank" rel="noopener" className="hover:text-ink">
              {v.name}
            </a>
          ))}
        </FooterCol>
      </div>

      <div className="container">
        <p
          aria-hidden="true"
          className="text-outline select-none whitespace-nowrap text-center font-display text-[17vw] font-bold leading-[0.8] tracking-tighter md:text-[15.5vw] 2xl:text-[13.5rem]"
        >
          Barcha Global
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col gap-3 py-6 text-xs text-ink/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.markets}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h2 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink/40">{title}</h2>
      <div className="flex flex-col gap-3 text-sm text-ink/65">{children}</div>
    </div>
  );
}
