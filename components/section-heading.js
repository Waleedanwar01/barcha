"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        const ctx = gsap.context(() => {
          const parts = root.querySelectorAll("[data-heading]");
          gsap.fromTo(
            parts,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.08 },
          );
        }, root);

        observer.disconnect();
        return () => ctx.revert();
      },
      { threshold: 0.25 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`max-w-3xl space-y-5 ${aligned}`}>
      {eyebrow ? (
        <div
          data-heading
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-white/70" />
          {eyebrow}
        </div>
      ) : null}
      <div className="space-y-4">
        <h2
          data-heading
          className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-white md:text-6xl"
        >
          {title}
        </h2>
        {text ? (
          <p data-heading className="text-base leading-7 text-white/65 md:text-lg">
            {text}
          </p>
        ) : null}
      </div>
    </div>
  );
}
