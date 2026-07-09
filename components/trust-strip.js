"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { credibilityStats } from "../lib/site-data";
import TechMarquee from "./tech-marquee";

export default function TrustStrip() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        const ctx = gsap.context(() => {
          gsap.fromTo(
            "[data-trust]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.06 },
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
    <section ref={rootRef} className="px-6 pb-6 md:px-10">
      <div className="mx-auto max-w-7xl rounded-[34px] border border-white/10 bg-[#08101f] overflow-hidden py-8">
        
        {/* Infinite Autoplay Tech Marquee */}
        <div className="mb-8">
          <p className="text-center text-[10px] uppercase tracking-[0.28em] text-white/35 mb-4">
            Our Core Technologies & Frameworks
          </p>
          <TechMarquee />
        </div>

        {/* Credibility Stats */}
        <div className="px-6 md:px-10 grid gap-5 md:grid-cols-4">
          {credibilityStats.map((item) => (
            <div
              key={item.label}
              data-trust
              className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#0a1120] px-5 py-4 hover:border-primary/40 transition-colors duration-300"
            >
              <div>
                <div className="font-heading text-3xl font-bold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">
                  {item.label}
                </div>
              </div>
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
