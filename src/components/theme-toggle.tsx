"use client";

import { useTheme } from "@/contexts/theme-context";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] ${className}`}
    >
      <svg
        className={`h-[18px] w-[18px] transition-all duration-300 ${isDark ? "scale-0 rotate-90 opacity-0 absolute" : "scale-100 rotate-0 opacity-100"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeLinecap="round" />
      </svg>
      <svg
        className={`h-[18px] w-[18px] transition-all duration-300 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0 absolute"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a.6.6 0 0 0-.78-.74A9.5 9.5 0 1 0 21.24 15.3a.6.6 0 0 0-.74-.8Z" />
      </svg>
    </button>
  );
}
