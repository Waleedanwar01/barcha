"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide micro-interactions:
 *  - [data-reveal]  → fades in when scrolled into view
 *  - [data-count]   → counts up to its number when visible (e.g. data-count="100" data-suffix="%")
 *  - .spotlight     → soft glow that follows the cursor
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduce || !target) {
        el.textContent = `${target}${suffix}`;
        return;
      }
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const targets = document.querySelectorAll("[data-reveal]:not(.is-visible), [data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.hasAttribute("data-count")) countUp(el);
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => observer.observe(el));

    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [pathname]);

  return null;
}
