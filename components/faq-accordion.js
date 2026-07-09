"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const panelRefs = useRef([]);

  function toggle(index) {
    const isOpening = openIndex !== index;

    items.forEach((_, i) => {
      const panel = panelRefs.current[i];
      if (!panel) return;

      if (i === index && isOpening) {
        gsap.set(panel, { height: "auto" });
        const fullHeight = panel.offsetHeight;
        gsap.fromTo(
          panel,
          { height: 0 },
          {
            height: fullHeight,
            duration: 0.4,
            ease: "power3.out",
            onComplete: () => gsap.set(panel, { height: "auto" }),
          },
        );
      } else if (i === index || openIndex === i) {
        gsap.to(panel, { height: 0, duration: 0.3, ease: "power2.in" });
      }
    });

    setOpenIndex(isOpening ? index : null);
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="panel overflow-hidden transition hover:border-primary/30">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={open}
            >
              <span className="font-heading text-xl font-bold text-white md:text-2xl">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-300 ${
                  open
                    ? "rotate-45 border-primary/60 bg-primary/15 text-white"
                    : "border-white/15 text-white/60"
                }`}
              >
                +
              </span>
            </button>
            <div
              ref={(el) => (panelRefs.current[index] = el)}
              style={{ height: index === openIndex ? "auto" : 0, overflow: "hidden" }}
            >
              <p className="px-6 pb-6 text-sm leading-7 text-white/65">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
