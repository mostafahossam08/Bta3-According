"use client";

import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Switch language"
      className={`inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 text-[13px] font-semibold text-[var(--text)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
