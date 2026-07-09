"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const rowA = ["Web Development", "SEO", "Shopify", "WordPress"];
const rowB = ["Google Ads", "Branding", "AI Design", "Social Media"];

function MarqueeRow({ items, reverse, tint, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Skip entirely on mobile — this is decorative background text and
    // running two continuous transforms behind the hero is expensive
    // enough on weaker GPUs to make the whole page feel like it's
    // stuttering while it animates.
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    if (!container) return;

    container.querySelectorAll(".ghost-row").forEach((el, i) => {
      if (i > 0) el.remove();
    });
    gsap.set(container.querySelectorAll(".ghost-row"), { x: 0 });

    const row = container.querySelector(".ghost-row");
    if (!row) return;

    const clone = row.cloneNode(true);
    container.appendChild(clone);

    const rowWidth = row.offsetWidth;
    const rows = container.querySelectorAll(".ghost-row");

    const tween = reverse
      ? gsap.fromTo(
          rows,
          { x: -rowWidth },
          { x: 0, duration: 38, ease: "none", repeat: -1, force3D: true },
        )
      : gsap.to(rows, { x: -rowWidth, duration: 38, ease: "none", repeat: -1, force3D: true });

    return () => {
      tween.kill();
      clone.remove();
    };
  }, [reverse]);

  return (
    <div
      ref={containerRef}
      className={`hidden whitespace-nowrap md:flex ${className}`}
    >
      <div className="ghost-row flex shrink-0 items-center gap-16 pr-16">
        {items.map((item, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center gap-16 font-heading text-[90px] font-bold uppercase leading-none md:text-[150px] ${tint}`}
          >
            {item}
            <span className="h-3 w-3 rounded-full bg-white/10" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroMarqueeBg() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      <MarqueeRow items={rowA} tint="text-white/[0.05]" className="absolute left-0 top-[4%] -rotate-2" />
      <MarqueeRow
        items={rowB}
        reverse
        tint="text-primary/[0.09]"
        className="absolute left-0 top-[56%] rotate-2"
      />
    </div>
  );
}
