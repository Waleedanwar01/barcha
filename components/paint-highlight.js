export default function PaintHighlight({ children, className = "", rotate = "-1.5deg" }) {
  return (
    <span className={`relative inline-block px-0.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 240 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 -z-10 h-[calc(100%+14px)] w-[calc(100%+18px)]"
        style={{ transform: `rotate(${rotate})` }}
      >
        <path
          d="M9 30C6 20 9 11 22 9C15 6 34 3 60 4C110 2 170 1 210 8C224 10 232 16 229 24
             C236 28 231 37 220 39C227 44 214 50 196 50C200 53 178 56 140 55
             C95 57 45 56 24 51C10 49 4 42 9 36C2 34 4 31 9 30Z"
          fill="#FFD400"
        />
      </svg>
      <span className="relative text-black">{children}</span>
    </span>
  );
}
