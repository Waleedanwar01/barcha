"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function VerticalTicker({ items, itemHeight = 96, visibleCount = 2 }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Reset to a single row in case a previous mount left a clone behind
    // (e.g. React StrictMode's dev-mode double-invoke of effects).
    inner.querySelectorAll(".ticker-col").forEach((el, i) => {
      if (i > 0) el.remove();
    });
    gsap.set(inner.querySelectorAll(".ticker-col"), { y: 0 });

    const col = inner.querySelector(".ticker-col");
    if (!col) return;

    const clone = col.cloneNode(true);
    inner.appendChild(clone);

    const colHeight = col.offsetHeight;

    const tween = gsap.to(inner.querySelectorAll(".ticker-col"), {
      y: -colHeight,
      duration: items.length * 2.8,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    const onEnter = () => gsap.to(tween, { timeScale: 0.15, duration: 0.4 });
    const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });

    outer.addEventListener("mouseenter", onEnter);
    outer.addEventListener("mouseleave", onLeave);

    return () => {
      outer.removeEventListener("mouseenter", onEnter);
      outer.removeEventListener("mouseleave", onLeave);
      tween.kill();
      clone.remove();
    };
  }, [items]);

  return (
    <div
      ref={outerRef}
      className="relative overflow-hidden"
      style={{
        height: itemHeight * visibleCount,
        maskImage:
          "linear-gradient(to bottom, transparent, white 18%, white 82%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, white 18%, white 82%, transparent)",
      }}
    >
      <div ref={innerRef}>
        <div className="ticker-col flex flex-col gap-4 pb-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="panel flex items-center gap-4 px-7 transition duration-300 hover:border-primary/40"
              style={{ height: itemHeight - 16 }}
            >
              <span className="font-heading text-2xl font-bold text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="font-heading text-xl font-bold text-white md:text-2xl">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
