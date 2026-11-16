import Link from "next/link";

/**
 * Barcha Global monogram: a geometric "b" with a blue orbit dot (the "global").
 * Colours follow the section theme — dark tile on light pages, light tile on dark.
 */
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" style={{ fill: "rgb(var(--fg))" }} />
      <rect x="11" y="8.5" width="4.6" height="23" rx="2.3" style={{ fill: "rgb(var(--bg))" }} />
      <circle cx="20.6" cy="23.6" r="6.1" fill="none" strokeWidth="4.6" style={{ stroke: "rgb(var(--bg))" }} />
      <circle cx="29.2" cy="11.2" r="3" fill="#2F5BFF" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Barcha Global — home">
      <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:-rotate-6" />
      <span className="font-display text-[19px] font-semibold leading-none tracking-[-0.03em] text-ink">
        barcha<span className="font-medium text-ink/55">global</span>
        <span className="text-brand-500">.</span>
      </span>
    </Link>
  );
}
