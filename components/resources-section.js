"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeading from "./section-heading";
import { resources } from "../lib/site-data";

export default function ResourcesSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ctx;

    // Dynamically import ScrollTrigger to ensure SSR compatibility
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Continuous mouse-scroll driven scroll trigger animation
        gsap.fromTo(
          "[data-resource]",
          { opacity: 0.2, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: root,
              start: "top 85%",
              end: "top 35%",
              scrub: 1.2,
            },
          }
        );
      }, root);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={rootRef} id="resources" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resources"
          title="Thinking that supports clarity."
          text="This section signals expertise — not just portfolio, but process and deep knowledge."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((item) => (
            <div key={item.title} data-resource className="panel p-7 group hover:border-white/20 transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                {item.tag}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                {item.title}
              </h3>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-6 text-sm leading-7 text-white/65">
                {item.description || "Short insight blocks that position your brand as premium and trustworthy in the eyes of visitors."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
