"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./logo";
import Icon from "./icons";
import { navLinks, siteConfig } from "../lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  const headerStyle = open
    ? "border-line bg-paper"
    : scrolled
      ? "border-line bg-paper/85 backdrop-blur-xl"
      : "border-transparent";

  return (
    <>
      <header className={`theme-dark fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${headerStyle}`}>
        <div
          className={`container relative flex items-center justify-between transition-all duration-500 ${
            scrolled || open ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <Logo />

          <nav
            aria-label="Main"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-ink/[0.04] p-1.5 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  isActive(link.href) ? "bg-ink/[0.06] text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-primary hidden !py-2.5 md:inline-flex">
              Let&apos;s talk
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-ink/[0.06] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-[1.5px] w-4 bg-ink transition duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-4 bg-ink transition duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — outside the header so it always covers the full screen */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`theme-dark fixed inset-0 z-40 overflow-y-auto bg-paper transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container flex min-h-[100dvh] flex-col pb-10 pt-24">
          <span className="eyebrow mb-2">Menu</span>
          {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
              className={`flex items-baseline gap-4 border-b border-line py-5 transition duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="font-mono text-xs text-ink/35">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`font-display text-4xl font-semibold tracking-[-0.03em] ${
                  pathname === link.href ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}

          <div
            style={{ transitionDelay: open ? "400ms" : "0ms" }}
            className={`mt-auto pt-12 transition duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">Get in touch</p>
            <a href={`mailto:${siteConfig.email}`} tabIndex={open ? 0 : -1} className="mt-3 block text-lg text-ink">
              {siteConfig.email}
            </a>
            <Link href="/contact" tabIndex={open ? 0 : -1} className="btn-accent mt-6 w-full !py-4 text-base">
              Start a project
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
