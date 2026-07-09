"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "./magnetic-button";
import PaintHighlight from "./paint-highlight";

export default function CtaBanner() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.fromTo(
            "[data-cta='heading']",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
          )
            .fromTo(
              "[data-cta='text']",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.7 },
              "-=0.4",
            )
            .fromTo(
              "[data-cta='buttons']",
              { opacity: 0, y: 18, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6 },
              "-=0.3",
            );
        }, root);

        observer.disconnect();
        return () => ctx.revert();
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="cta-block relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0e1c36] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <div className="relative space-y-6">
            <h2
              data-cta="heading"
              className="mx-auto max-w-2xl font-heading text-4xl font-bold text-white md:text-5xl"
            >
              Ready to <PaintHighlight rotate="-2deg">grow</PaintHighlight> your
              business online?
            </h2>
            <p
              data-cta="text"
              className="mx-auto max-w-xl text-lg leading-8 text-white/65"
            >
              Let&apos;s discuss your project. We&apos;ll share a clear plan with scope,
              timeline, and direction — no vague estimates.
            </p>
            <div data-cta="buttons" className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton href="/contact" variant="highlight">
                Start Your Project
              </MagneticButton>
              <MagneticButton href="/services" variant="outline">
                Explore Services
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
