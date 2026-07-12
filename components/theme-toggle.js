"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("barcha-theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("barcha-theme", next);
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={`keep-round relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-white/15 bg-white/[0.04] transition-colors ${className}`}
    >
      <span
        className="keep-round absolute left-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black shadow transition-transform duration-300"
        style={{ transform: isLight ? "translateX(28px)" : "translateX(0)" }}
      >
        {isLight ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-3.5a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM8 12a1 1 0 0 1-1 1H5.5a1 1 0 1 1 0-2H7a1 1 0 0 1 1 1Zm9.07-5.07a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.42-1.41l1.07-1.06a1 1 0 0 1 1.41 0ZM8.41 15.66a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm8.66 1.41a1 1 0 0 1-1.41 0l-1.07-1.06a1 1 0 1 1 1.42-1.41l1.06 1.06a1 1 0 0 1 0 1.41ZM7.35 7.35a1 1 0 0 1-1.41 0L4.88 6.29a1 1 0 0 1 1.41-1.41L7.35 5.94a1 1 0 0 1 0 1.41ZM12 17.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Z" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.273c-4.508 0-8.16-3.653-8.16-8.16 0-1.174.244-2.29.686-3.303a1 1 0 0 0-1.303-1.335C5.635 2.377 2.5 6.573 2.5 11.5 2.5 17.299 7.201 22 13 22c4.42 0 8.2-2.734 9.746-6.605a1 1 0 0 0-1.164-1.35c-.27.06-.55.11-.84.14Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
