"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const defaultItems = [
  "Web Development",
  "SEO",
  "Shopify",
  "WordPress",
  "Google Ads",
  "Branding",
  "AI Design",
  "Social Media",
];

export default function MarqueeBanner({ items = defaultItems, reverse = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset to a single row in case a previous mount left a clone behind
    // (e.g. React StrictMode's dev-mode double-invoke of effects).
    container.querySelectorAll(".marquee-row").forEach((el, i) => {
      if (i > 0) el.remove();
    });
    gsap.set(container.querySelectorAll(".marquee-row"), { x: 0 });

    const row = container.querySelector(".marquee-row");
    if (!row) return;

    const clone = row.cloneNode(true);
    container.appendChild(clone);

    const rowWidth = row.offsetWidth;
    const rows = container.querySelectorAll(".marquee-row");

    const tween = reverse
      ? gsap.fromTo(
          rows,
          { x: -rowWidth },
          { x: 0, duration: 22, ease: "none", repeat: -1, force3D: true },
        )
      : gsap.to(rows, { x: -rowWidth, duration: 22, ease: "none", repeat: -1, force3D: true });

    const onEnter = () => tween.timeScale(0.25);
    const onLeave = () => tween.timeScale(1);

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      tween.kill();
      clone.remove();
    };
  }, [reverse]);

  return (
    <div className="-rotate-1 overflow-hidden border-y-2 border-black bg-highlight py-4 md:py-5">
      <div ref={containerRef} className="flex overflow-hidden select-none">
        <div className="marquee-row flex shrink-0 items-center gap-8 min-w-full px-4">
          {items.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8">
              <span className="font-heading text-2xl font-bold uppercase tracking-tight text-black md:text-3xl">
                {item}
              </span>
              <span className="h-3 w-3 shrink-0 rounded-full bg-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
