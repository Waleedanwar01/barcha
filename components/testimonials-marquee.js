"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeading from "./section-heading";
import { testimonials } from "../lib/site-data";

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-highlight" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsMarquee() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset to a single row in case a previous mount left a clone behind
    // (e.g. React StrictMode's dev-mode double-invoke of effects).
    container.querySelectorAll(".testimonial-row").forEach((el, i) => {
      if (i > 0) el.remove();
    });
    gsap.set(container.querySelectorAll(".testimonial-row"), { x: 0 });

    const row = container.querySelector(".testimonial-row");
    if (!row) return;

    const clone = row.cloneNode(true);
    container.appendChild(clone);

    const rowWidth = row.offsetWidth;

    const tween = gsap.to(container.querySelectorAll(".testimonial-row"), {
      x: -rowWidth,
      duration: 42,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    const onEnter = () => gsap.to(tween, { timeScale: 0.15, duration: 0.4 });
    const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      tween.kill();
      clone.remove();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Proof that speaks louder than words."
          text="Hear from clients who experienced the real impact of clarity, structure, and premium execution."
        />
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          ref={containerRef}
          className="flex select-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, white 8%, white 92%, transparent)",
          }}
        >
          <div className="testimonial-row flex shrink-0 gap-6 pr-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="panel flex w-[360px] shrink-0 flex-col justify-between border-t-2 border-t-highlight p-7"
              >
                <div>
                  <StarRow />
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                    {item.name ? item.name.charAt(0) : "C"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name || "Client"}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
