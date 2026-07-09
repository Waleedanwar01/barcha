"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { siteConfig } from "../lib/site-data";

export default function FloatingCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    gsap.to(wrap, {
      opacity: visible ? 1 : 0,
      scale: visible ? 1 : 0.6,
      pointerEvents: visible ? "auto" : "none",
      duration: 0.4,
      ease: "back.out(1.6)",
    });
  }, [visible]);

  useEffect(() => {
    const ring = wrapRef.current?.querySelector("[data-ping]");
    if (!ring) return;

    gsap.to(ring, {
      scale: 1.6,
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
      repeat: -1,
    });
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-6 right-6 z-40 opacity-0 md:bottom-8 md:right-8"
      style={{ transformOrigin: "center" }}
    >
      <a
        href={`mailto:${siteConfig.email}`}
        className="keep-round group relative flex h-16 w-16 items-center justify-center rounded-full bg-highlight text-black shadow-[0_8px_30px_rgba(255,212,0,0.35)] transition hover:scale-105 md:h-20 md:w-20"
      >
        <span
          data-ping
          className="keep-round absolute inset-0 rounded-full bg-highlight/70"
        />
        <span className="relative font-heading text-[11px] font-bold uppercase leading-tight tracking-tight text-center">
          Let&apos;s
          <br />
          Talk
        </span>

        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#050914] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {siteConfig.email}
        </span>
      </a>
    </div>
  );
}
