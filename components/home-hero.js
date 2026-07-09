"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroDemoVisual from "./hero-demo-visual";
import HeroMarqueeBg from "./hero-marquee-bg";
import MagneticButton from "./magnetic-button";
import { heroStats, siteConfig } from "../lib/site-data";

export default function HomeHero() {
  const rootRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const glow = glowRef.current;
    if (!root || !glow) return;

    const glowX = gsap.quickTo(glow, "x", { duration: 0.9, ease: "power3" });
    const glowY = gsap.quickTo(glow, "y", { duration: 0.9, ease: "power3" });

    function onMove(event) {
      const rect = root.getBoundingClientRect();
      glowX(event.clientX - rect.left);
      glowY(event.clientY - rect.top);
    }

    root.addEventListener("mousemove", onMove);
    return () => root.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero='badge']",
        { opacity: 0, y: 18, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65 },
      )
        .fromTo(
          "[data-hero='title'] span",
          { opacity: 0, y: 42, rotateX: 45, transformOrigin: "bottom center" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.95,
            stagger: 0.07,
          },
          "-=0.25",
        )
        .fromTo(
          "[data-hero='subtitle']",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          "[data-hero='cta']",
          { opacity: 0, y: 18, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          "[data-hero='stats'] > div",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          "[data-hero='visual']",
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.8",
        );

      // Floating orb animations
      gsap.to("[data-hero='orb']", {
        y: -24,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.45,
      });

      // Continuous subtle pulse on stat values
      gsap.to("[data-hero='stats'] .font-heading", {
        textShadow: "0 0 20px rgba(59,130,246,0.35)",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="grid-noise relative overflow-hidden px-6 pb-14 pt-8 md:px-10 md:pb-20 md:pt-14"
    >
      <HeroMarqueeBg />

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[110px]"
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          data-hero="orb"
          className="absolute left-0 top-0 h-px w-full bg-white/8"
        />
        <div
          data-hero="orb"
          className="absolute left-0 top-24 h-px w-32 bg-white/8"
        />
        <div
          data-hero="orb"
          className="absolute bottom-0 right-0 h-px w-52 bg-white/8"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div
            data-hero="badge"
            className="inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-white/70 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse" />
            Web · SEO · Ads · Branding · AI Design
          </div>

          <div className="space-y-5">
            <h1
              data-hero="title"
              className="text-balance font-heading text-4xl font-bold uppercase leading-[0.94] tracking-tight text-white md:text-6xl xl:text-[72px]"
              style={{ perspective: "600px" }}
            >
              <span className="inline-block">We</span>{" "}
              <span className="inline-block">build</span>{" "}
              <span className="inline-block text-highlight">growth</span>{" "}
              <span className="inline-block">engines</span>{" "}
              <span className="inline-block">for</span>{" "}
              <span className="inline-block">local</span>{" "}
              <span className="inline-block">businesses.</span>
            </h1>
            <p
              data-hero="subtitle"
              className="max-w-2xl text-lg leading-8 text-white/68"
            >
              {siteConfig.name} designs websites, brand systems, SEO structures,
              ad campaigns, and AI-assisted design so every visitor instantly
              understands what your business does and what their next step
              should be.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div data-hero="cta">
              <MagneticButton
                href="/contact"
                variant="highlight"
                className="w-full sm:w-auto"
              >
                Book a Call
              </MagneticButton>
            </div>
            <div data-hero="cta">
              <MagneticButton
                href="/services"
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Services
              </MagneticButton>
            </div>
          </div>

          <div
            data-hero="stats"
            className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {heroStats.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="font-heading text-3xl font-bold text-white md:text-4xl">
                  {item.value}
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-hero="visual" className="relative">
          <HeroDemoVisual />
        </div>
      </div>
    </section>
  );
}
