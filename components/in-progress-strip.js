"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { inProgressProjects } from "../lib/site-data";

export default function InProgressStrip() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        gsap.fromTo(
          root.querySelectorAll("[data-chip]"),
          { opacity: 0, y: 12, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 },
        );
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-10 md:px-10">
      <div
        ref={rootRef}
        className="panel mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:gap-5 md:px-8"
      >
        <p className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Currently Building
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {inProgressProjects.map((project) => (
            <span
              key={project}
              data-chip
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80"
            >
              {project}
            </span>
          ))}
          <span
            data-chip
            className="rounded-full border border-dashed border-white/15 px-4 py-2 text-sm font-medium text-white/40"
          >
            + more
          </span>
        </div>
      </div>
    </section>
  );
}
