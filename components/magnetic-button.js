"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

const base =
  "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0";

const variants = {
  solid:
    "btn-solid bg-white text-black hover:bg-white/85",
  outline:
    "border border-white/15 bg-transparent text-white hover:border-white/35 hover:bg-white/[0.04]",
  highlight:
    "bg-highlight text-black hover:bg-highlight/85 shadow-[0_0_0_1px_rgba(255,212,0,0.3)]",
};

export default function MagneticButton({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const shineRef = useRef(null);
  const arrowRef = useRef(null);

  const Comp = href ? Link : "button";

  const variantClass = useMemo(() => variants[variant] ?? variants.solid, [variant]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    const arrow = arrowRef.current;

    if (!wrap || !inner) return;

    const xTo = gsap.quickTo(inner, "x", { duration: 0.55, ease: "power3" });
    const yTo = gsap.quickTo(inner, "y", { duration: 0.55, ease: "power3" });

    const shineX = shine
      ? gsap.quickTo(shine, "x", { duration: 0.35, ease: "power3" })
      : null;
    const shineY = shine
      ? gsap.quickTo(shine, "y", { duration: 0.35, ease: "power3" })
      : null;

    function onMove(event) {
      const rect = wrap.getBoundingClientRect();
      const relX = event.clientX - rect.left;
      const relY = event.clientY - rect.top;
      const moveX = (relX - rect.width / 2) * 0.22;
      const moveY = (relY - rect.height / 2) * 0.22;

      xTo(moveX);
      yTo(moveY);

      if (shineX && shineY) {
        shineX((relX - rect.width / 2) * 0.32);
        shineY((relY - rect.height / 2) * 0.32);
      }
    }

    function onEnter() {
      gsap.to(inner, { scale: 1.04, duration: 0.35, ease: "power3.out" });
      if (shine) {
        gsap.to(shine, { opacity: 1, duration: 0.25, ease: "power2.out" });
      }
      if (arrow) {
        gsap.to(arrow, { x: 4, rotate: -45, duration: 0.35, ease: "power3.out" });
      }
    }

    function onLeave() {
      xTo(0);
      yTo(0);
      gsap.to(inner, { scale: 1, duration: 0.45, ease: "power3.out" });
      if (shine) {
        gsap.to(shine, { opacity: 0, duration: 0.3, ease: "power2.out" });
      }
      if (arrow) {
        gsap.to(arrow, { x: 0, rotate: 0, duration: 0.4, ease: "power3.out" });
      }
    }

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Comp
      ref={wrapRef}
      href={href}
      className={`${base} ${variantClass} ${className}`}
      {...props}
    >
      <span
        ref={shineRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl opacity-0 transition-opacity"
      />
      <span ref={innerRef} className="relative inline-flex items-center gap-2">
        {children}
        <svg
          ref={arrowRef}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Comp>
  );
}
