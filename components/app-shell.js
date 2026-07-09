"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import FloatingCta from "./floating-cta";
import LoaderOverlay from "./loader-overlay";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    let scrollTrigger;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      scrollTrigger = ScrollTrigger;
      lenis.on("scroll", ScrollTrigger.update);
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      if (scrollTrigger) scrollTrigger.update();
    };
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        main,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
      );
    }, main);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <LoaderOverlay />
      <SiteHeader />
      <main ref={mainRef}>{children}</main>
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
