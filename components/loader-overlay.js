"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoaderOverlay() {
  const [done, setDone] = useState(false);
  const overlayRef = useRef(null);
  const progressRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const progress = progressRef.current;
    const bar = barRef.current;

    if (!overlay || !progress || !bar) return;

    const ctx = gsap.context(() => {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

      const state = { value: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          gsap.to(overlay, {
            opacity: 0,
            scale: 1.05,
            duration: 0.7,
            ease: "power3.inOut",
            onComplete: () => setDone(true),
          });
        },
      });

      tl.to(state, {
        value: 100,
        duration: 1.25,
        ease: "power1.inOut",
        onUpdate: () => {
          const rounded = Math.floor(state.value);
          progress.textContent = `${rounded}%`;
          gsap.set(bar, { scaleX: rounded / 100 });
        },
      }).to(
        overlay,
        {
          filter: "blur(10px)",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.25",
      );
    }, overlay);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#04070d]"
    >
      <div className="w-full max-w-xl px-8">
        <div className="panel relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-white/[0.01]" />
          <div className="relative space-y-7">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center rounded-xl bg-white px-3 py-2">
                  <Image
                    src="/logo/logo-barcha-digital.png"
                    alt="Barcha Digital logo"
                    width={160}
                    height={107}
                    className="h-9 w-auto"
                    priority
                  />
                </span>
                <p className="font-heading text-xl font-bold uppercase tracking-tight text-white">
                  Loading Experience
                </p>
              </div>

              <div
                ref={progressRef}
                className="font-heading text-4xl font-bold text-white"
              >
                0%
              </div>
            </div>

            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <div ref={barRef} className="h-full w-full bg-highlight" />
            </div>

            <p className="text-sm leading-7 text-white/55">
              Clean structure, better readability, and premium presentation
              loading now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
