"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "./magnetic-button";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.08 },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="px-6 pb-10 pt-16 md:px-10 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#0a1120] px-7 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <div
              data-hero
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-white/70" />
              {eyebrow}
            </div>

            <h1
              data-hero
              className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-7xl"
            >
              {title}
            </h1>

            <p data-hero className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            {primary ? (
              <div data-hero>
                <MagneticButton href={primary.href} className="w-full justify-center lg:min-w-[220px]">
                  {primary.label}
                </MagneticButton>
              </div>
            ) : null}
            {secondary ? (
              <div data-hero>
                <MagneticButton
                  href={secondary.href}
                  variant="outline"
                  className="w-full justify-center lg:min-w-[220px]"
                >
                  {secondary.label}
                </MagneticButton>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

