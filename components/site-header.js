"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { navLinks, serviceCategories, services, siteConfig } from "../lib/site-data";
import MagneticButton from "./magnetic-button";
import ThemeToggle from "./theme-toggle";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-3.5 w-3.5 ${className}`}>
      <path
        d="m6 9 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ServicesDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (open) {
      gsap.killTweensOf(panel);
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { opacity: 0, y: 12, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" },
      );
    } else {
      gsap.killTweensOf(panel);
      gsap.to(panel, {
        opacity: 0,
        y: 8,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }
  }, [open]);

  function show() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function hide() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href="/services"
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white xl:px-4"
      >
        Services
        <ChevronIcon className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </Link>

      <div
        ref={panelRef}
        style={{ display: "none" }}
        className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#070d1b] p-6 shadow-2xl"
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {serviceCategories.map((category) => {
            const items = services.filter((service) => service.category === category);

            return (
              <div key={category}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  {category}
                </p>
                <div className="space-y-1">
                  {items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={onNavigate}
                      className="block rounded-xl px-2 py-1.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-xs text-white/40">Not sure which service fits? We&apos;ll help you decide.</p>
          <Link
            href="/services"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-highlight"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const mobileIconRef = useRef(null);
  const mobileServicesPanelRef = useRef(null);
  const mobileServicesChevronRef = useRef(null);
  const lastScrollRef = useRef(0);
  const hiddenRef = useRef(false);

  function closeMobileMenu() {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const items = header.querySelectorAll("[data-animate]");
      gsap.fromTo(
        items,
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.06 },
      );
    }, header);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const yTo = gsap.quickTo(header, "y", { duration: 0.35, ease: "power3.out" });

    function onScroll() {
      const current = window.scrollY || 0;
      const last = lastScrollRef.current;
      const delta = current - last;
      lastScrollRef.current = current;

      if (current < 40) {
        hiddenRef.current = false;
        yTo(0);
        return;
      }

      if (Math.abs(delta) < 6) return;

      if (delta > 0 && !hiddenRef.current) {
        hiddenRef.current = true;
        yTo(-120);
      } else if (delta < 0 && hiddenRef.current) {
        hiddenRef.current = false;
        yTo(0);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const panel = mobilePanelRef.current;
    const icon = mobileIconRef.current;
    if (!panel) return;

    if (isOpen) {
      gsap.set(panel, { display: "block", height: "auto", overflow: "hidden" });
      const fullHeight = panel.offsetHeight;
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          // Once open, let the panel grow with its content (e.g. the
          // services accordion expanding inside it) instead of staying
          // clipped at the height it had when the menu first opened.
          onComplete: () => gsap.set(panel, { height: "auto", overflow: "visible" }),
        },
      );
      gsap.fromTo(
        panel.querySelectorAll("[data-mobile-item]"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.1, ease: "power3.out" },
      );
    } else {
      gsap.set(panel, { height: panel.offsetHeight, overflow: "hidden" });
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }

    if (icon) {
      gsap.to(icon, { rotate: isOpen ? 90 : 0, duration: 0.3, ease: "power2.out" });
    }

    if (!isOpen) {
      setMobileServicesOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const panel = mobileServicesPanelRef.current;
    const chevron = mobileServicesChevronRef.current;
    if (!panel) return;

    if (mobileServicesOpen) {
      gsap.set(panel, { display: "block", height: "auto", overflow: "hidden" });
      const fullHeight = panel.offsetHeight;
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
          onComplete: () => gsap.set(panel, { height: "auto", overflow: "visible" }),
        },
      );
    } else {
      gsap.set(panel, { height: panel.offsetHeight, overflow: "hidden" });
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }

    if (chevron) {
      gsap.to(chevron, { rotate: mobileServicesOpen ? 180 : 0, duration: 0.3, ease: "power2.out" });
    }
  }, [mobileServicesOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/92 backdrop-blur-xl"
    >
      <div className="flex h-20 items-stretch justify-between md:h-24">
        <Link
          href="/"
          data-animate
          className="flex items-center bg-white px-4 md:px-6"
        >
          <Image
            src="/logo/logo-barcha-digital.png"
            alt={`${siteConfig.name} logo`}
            width={200}
            height={134}
            className="h-14 w-auto md:h-20"
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-3 px-4 md:px-6 xl:px-8">
          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" data-animate>
            {navLinks.map((link) => {
              const active = pathname === link.href;

              if (link.href === "/services") {
                return <ServicesDropdown key={link.href} />;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-sm transition xl:px-4 ${
                    active
                      ? "bg-primary/15 text-white ring-1 ring-inset ring-primary/40"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div data-animate>
            <ThemeToggle />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            data-animate
          >
            <span ref={mobileIconRef} className="inline-flex">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>

        <Link
          href="/contact"
          data-animate
          className="hidden items-center bg-white px-8 text-sm font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black/5 lg:flex"
        >
          Book a Call
        </Link>
      </div>

      <div
        ref={mobilePanelRef}
        style={{ display: "none", height: 0, overflow: "hidden" }}
        className="border-t border-white/10 bg-[#050914] lg:hidden"
      >
        <div className="flex flex-col gap-2 px-6 py-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            if (link.href === "/services") {
              const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

              return (
                <div key={link.href} data-mobile-item className="flex flex-col">
                  <div
                    className={`flex items-center gap-1 rounded-2xl pr-2 ${
                      servicesActive
                        ? "bg-primary/15 text-white ring-1 ring-inset ring-primary/40"
                        : "bg-white/5 text-white/75"
                    }`}
                  >
                    <Link
                      href="/services"
                      className="flex-1 rounded-2xl px-4 py-3 text-sm hover:text-white"
                      onClick={closeMobileMenu}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services list"
                      aria-expanded={mobileServicesOpen}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/60 hover:text-white"
                      onClick={() => setMobileServicesOpen((value) => !value)}
                    >
                      <span ref={mobileServicesChevronRef} className="inline-flex">
                        <ChevronIcon />
                      </span>
                    </button>
                  </div>

                  <div
                    ref={mobileServicesPanelRef}
                    style={{ display: "none", height: 0, overflow: "hidden" }}
                  >
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 py-4 pl-2 sm:grid-cols-2">
                      {serviceCategories.map((category) => {
                        const items = services.filter((service) => service.category === category);

                        return (
                          <div key={category}>
                            <p className="mb-1.5 px-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                              {category}
                            </p>
                            <div className="space-y-0.5">
                              {items.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block rounded-xl px-4 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                                  onClick={closeMobileMenu}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                data-mobile-item
                className={`rounded-2xl px-4 py-3 text-sm ${
                  active
                    ? "bg-primary/15 text-white ring-1 ring-inset ring-primary/40"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            );
          })}

          <div data-mobile-item>
            <MagneticButton
              href="/contact"
              className="mt-2 w-full justify-center"
              onClick={closeMobileMenu}
            >
              Start Your Project
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  );
}
