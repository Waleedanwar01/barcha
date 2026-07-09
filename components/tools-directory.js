"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { toolsDirectory } from "../lib/site-data";

export default function ToolsDirectory() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const groups = root.querySelectorAll("[data-tool-group]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const group = entry.target;
          const chips = group.querySelectorAll("[data-tool-chip]");

          gsap.fromTo(
            group.querySelector("[data-tool-heading]"),
            { opacity: 0, x: -16 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          );

          gsap.fromTo(
            chips,
            { opacity: 0, y: 14, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.045,
            },
          );

          observer.unobserve(group);
        });
      },
      { threshold: 0.2 },
    );

    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="mx-auto max-w-7xl space-y-10">
      {toolsDirectory.map((group) => (
        <div
          key={group.category}
          data-tool-group
          className="panel p-7 md:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <h3
              data-tool-heading
              className="font-heading text-xl font-bold uppercase tracking-tight text-white md:text-2xl"
            >
              {group.category}
            </h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {group.tools.map((tool) => (
              <span
                key={tool}
                data-tool-chip
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
