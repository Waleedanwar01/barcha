"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Reveal({
  as: Component = "div",
  className = "",
  stagger = 0.08,
  y = 24,
  children,
  ...props
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        const ctx = gsap.context(() => {
          gsap.fromTo(
            root.children,
            { opacity: 0, y, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger,
            },
          );
        }, root);

        observer.disconnect();
        return () => ctx.revert();
      },
      { threshold: 0.15 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [stagger, y]);

  return (
    <Component ref={rootRef} className={className} {...props}>
      {children}
    </Component>
  );
}
