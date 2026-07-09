"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ServiceCard from "./service-card";

export default function ServiceScrollStack({ services }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ctx;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = root.querySelectorAll("[data-stack-card]");

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 110, opacity: 0, scale: 0.94 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 94%",
                end: "top 58%",
                scrub: 0.6,
              },
            },
          );

          gsap.to(card, {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 40%",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      }, root);

      ScrollTrigger.refresh();
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [services]);

  return (
    <div ref={rootRef} className="grid gap-6 lg:grid-cols-2">
      {services.map((service) => (
        <div key={service.slug} data-stack-card>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
