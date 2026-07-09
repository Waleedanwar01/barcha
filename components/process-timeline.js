"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProcessTimeline({ steps }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ctx;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-line-fill]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: root,
              start: "top 75%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          },
        );

        gsap.fromTo(
          "[data-step-card]",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
            },
          },
        );
      }, root);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [steps]);

  return (
    <div ref={rootRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-6 top-2 h-[calc(100%-16px)] w-[2px] bg-white/10 md:left-8" />
      <div
        data-line-fill
        className="absolute left-6 top-2 h-[calc(100%-16px)] w-[2px] scale-y-0 bg-primary md:left-8"
      />

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.step}
            data-step-card
            className="relative flex gap-5 pl-16 md:gap-6 md:pl-24"
          >
            <div className="absolute left-0 top-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-[#050914] font-heading text-sm font-bold text-white md:h-16 md:w-16 md:text-base">
              {step.step}
            </div>
            <div className="panel w-full p-6 transition duration-300 hover:-translate-x-1 hover:border-primary/40">
              <h3 className="font-heading text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
