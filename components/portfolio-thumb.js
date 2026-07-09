"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioThumb({ src, alt, icon, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ backgroundColor: icon ? `${icon.color}14` : undefined }}
      >
        <span
          className="flex h-16 w-16 items-center justify-center rounded-2xl [&_svg]:h-8 [&_svg]:w-8"
          style={{ backgroundColor: icon ? `${icon.color}22` : undefined }}
        >
          {icon?.icon}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 400px"
        className="object-cover transition duration-500 group-hover:scale-105"
        onError={() => setFailed(true)}
        unoptimized={src.includes("s.wordpress.com")}
      />
    </div>
  );
}
