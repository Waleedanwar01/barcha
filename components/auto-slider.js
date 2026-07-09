"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AutoSlider({ children, speed = 32, gap = "gap-6" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset to a single row in case a previous mount left a clone behind
    // (e.g. React StrictMode's dev-mode double-invoke of effects).
    container.querySelectorAll(".slider-row").forEach((el, i) => {
      if (i > 0) el.remove();
    });
    gsap.set(container.querySelectorAll(".slider-row"), { x: 0 });

    const row = container.querySelector(".slider-row");
    if (!row) return;

    const clone = row.cloneNode(true);
    container.appendChild(clone);

    const rowWidth = row.offsetWidth;

    const tween = gsap.to(container.querySelectorAll(".slider-row"), {
      x: -rowWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    const onEnter = () => gsap.to(tween, { timeScale: 0.15, duration: 0.4 });
    const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        gsap.fromTo(
          row.children,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 },
        );
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(container);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
      tween.kill();
      clone.remove();
    };
  }, [speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex select-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 6%, white 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 6%, white 94%, transparent)",
        }}
      >
        <div className={`slider-row flex shrink-0 ${gap} pr-6`}>{children}</div>
      </div>
    </div>
  );
}
