"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getServiceIcon } from "./service-icons";

const statSets = [
  [
    { label: "Organic Traffic", value: 92, color: "#3B82F6" },
    { label: "Lead Conversion", value: 78, color: "#22D3EE" },
    { label: "Ad ROI", value: 65, color: "#FFD400" },
  ],
  [
    { label: "Google Rankings", value: 88, color: "#3B82F6" },
    { label: "Page Speed Score", value: 96, color: "#22D3EE" },
    { label: "Local Visibility", value: 82, color: "#FFD400" },
  ],
  [
    { label: "Click-Through Rate", value: 71, color: "#3B82F6" },
    { label: "Bounce Rate Drop", value: 44, color: "#22D3EE" },
    { label: "Return Visitors", value: 67, color: "#FFD400" },
  ],
];

const cornerBadges = [
  { slug: "shopify-development", className: "-left-5 top-10" },
  { slug: "google-ads", className: "-right-5 top-1/3" },
  { slug: "wordpress-development", className: "-left-6 bottom-16" },
];

const HEADLINES = [
  "Your website. Working 24/7.",
  "More leads. Less guesswork.",
  "Built for Dubai businesses.",
  "Ranked. Trusted. Converting.",
];

export default function HeroDemoVisual() {
  const rootRef = useRef(null);
  const typeRef = useRef(null);
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Typewriter loop — cycles through a different headline each pass
      const typeEl = typeRef.current;
      if (typeEl) {
        const tl = gsap.timeline({ repeat: -1 });

        HEADLINES.forEach((phrase) => {
          const state = { i: 0 };
          tl.to(state, {
            i: phrase.length,
            duration: 1.5,
            ease: "none",
            onUpdate: () => {
              typeEl.textContent = phrase.slice(0, Math.floor(state.i));
            },
          })
            .to({}, { duration: 1.2 })
            .to(state, {
              i: 0,
              duration: 0.5,
              ease: "none",
              onUpdate: () => {
                typeEl.textContent = phrase.slice(0, Math.floor(state.i));
              },
            })
            .to({}, { duration: 0.2 });
        });
      }

      // Growth bars — cycle through a different stat set each pass
      const barEls = gsap.utils.toArray("[data-stat-bar]");
      const statsTl = gsap.timeline({ repeat: -1 });

      statSets.forEach((set) => {
        statsTl.call(() => {
          barEls.forEach((bar, i) => {
            const labelEl = bar.querySelector("[data-bar-label]");
            const fillEl = bar.querySelector("[data-bar-fill]");
            const numEl = bar.querySelector("[data-bar-num]");
            if (labelEl) labelEl.textContent = set[i].label;
            if (fillEl) fillEl.style.backgroundColor = set[i].color;
            if (numEl) numEl.textContent = "0%";
            gsap.set(fillEl, { scaleX: 0 });
          });
        });

        set.forEach((item, i) => {
          const bar = barEls[i];
          const fillEl = bar.querySelector("[data-bar-fill]");
          const numEl = bar.querySelector("[data-bar-num]");
          const counter = { value: 0 };

          statsTl.to(
            fillEl,
            {
              scaleX: item.value / 100,
              duration: 1.2,
              ease: "power2.out",
              transformOrigin: "left center",
              onStart: () => {
                gsap.to(counter, {
                  value: item.value,
                  duration: 1.2,
                  ease: "power2.out",
                  onUpdate: () => {
                    if (numEl) numEl.textContent = `${Math.round(counter.value)}%`;
                  },
                });
              },
            },
            i === 0 ? undefined : "<0.15",
          );
        });

        statsTl.to({}, { duration: 2 });
      });

      // Cursor click loop — animates via transform (x/y), never left/top,
      // so it never forces a layout reflow of the whole page while it plays.
      const cursor = cursorRef.current;
      const ripple = rippleRef.current;
      const panel = root.querySelector(".panel");
      if (cursor && ripple && panel) {
        const panelRect = panel.getBoundingClientRect();
        const dx = panelRect.width * 0.6;
        const dy = panelRect.height * 0.62;

        gsap.set(cursor, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.8 });
        tl.to(cursor, { opacity: 1, duration: 0.3 })
          .to(cursor, { x: dx, y: dy, duration: 1.1, ease: "power2.inOut" })
          .to(cursor, { scale: 0.8, duration: 0.12, yoyo: true, repeat: 1 })
          .fromTo(
            ripple,
            { opacity: 0.6, scale: 0.3 },
            { opacity: 0, scale: 2.2, duration: 0.6, ease: "power2.out" },
            "<",
          )
          .to(cursor, { opacity: 0, duration: 0.3, delay: 0.6 })
          .set(cursor, { x: 0, y: 0 });
      }

      // Floating corner badges
      gsap.to("[data-corner-badge]", {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div className="panel relative overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-white/40">
            barchadigital.com
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-white/35">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-highlight" />
            Live
          </span>
        </div>

        <div className="relative space-y-6 p-6">
          <p
            ref={typeRef}
            data-typewriter
            className="font-heading text-xl font-bold text-white md:text-2xl"
          >
            &nbsp;
          </p>

          <div className="space-y-4">
            {statSets[0].map((item, i) => (
              <div key={i} data-stat-bar className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span
                    data-bar-label
                    className="uppercase tracking-[0.16em] text-white/45"
                  >
                    {item.label}
                  </span>
                  <span data-bar-num className="font-heading font-bold text-white">
                    0%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    data-bar-fill
                    className="h-full w-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a1120] px-3.5 py-3 sm:px-4 sm:py-3.5">
            <span className="whitespace-nowrap text-xs text-white/70 sm:text-sm">
              Full report
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-highlight px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-black sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]">
              Book a Call
            </span>
          </div>
        </div>

        <div
          ref={cursorRef}
          className="pointer-events-none absolute z-20 opacity-0"
          style={{ left: "18%", top: "22%" }}
        >
          <div
            ref={rippleRef}
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0"
          />
          <svg viewBox="0 0 24 24" className="h-5 w-5 drop-shadow-lg" fill="white">
            <path d="M4 2l14 7.5-6 1.5L10 18z" />
          </svg>
        </div>
      </div>

      {cornerBadges.map((badge) => {
        const data = getServiceIcon(badge.slug);

        return (
          <div
            key={badge.slug}
            data-corner-badge
            className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${badge.className}`}
            style={{ backgroundColor: data ? `${data.color}1F` : undefined }}
          >
            {data?.icon}
          </div>
        );
      })}
    </div>
  );
}
