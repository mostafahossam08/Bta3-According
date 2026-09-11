"use client";

import { useLanguage } from "@/contexts/language-context";

/**
 * BRAND_LOGO placeholder.
 *
 * This mark is intentionally simple and self-contained (pure SVG + text) so
 * the real Bta3 According logo can later replace the <svg> mark below (or the
 * whole component can render an <Image src="/logo.svg" .../>) without any
 * layout changes across navbar / footer / mobile menu / favicon usages.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="11" className="fill-[var(--navy-900)]" />
      <path d="M11 27V13.5L20 9l9 4.5V27l-9 4-9-4Z" stroke="var(--ice-300)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 13.5 20 18l9-4.5" stroke="var(--ice-300)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M20 18v13" stroke="var(--ice-300)" strokeWidth="1.4" />
      <path d="M14.5 20.6 20 23.2l5.5-2.6" stroke="var(--ice-400)" strokeWidth="1.1" strokeLinejoin="round" opacity="0.85" />
    </svg>
  );
}

export function Logo({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "footer" | "mono";
  className?: string;
}) {
  const { t } = useLanguage();
  const wordmarkColor =
    variant === "footer" ? "text-white" : variant === "mono" ? "text-[var(--text)]" : "text-[var(--text)]";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} data-asset="BRAND_LOGO">
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight sm:text-[17px] ${wordmarkColor}`}>{t.brand.name}</span>
        <span
          className={`mt-1 hidden text-[10px] font-medium uppercase tracking-[0.16em] sm:block ${
            variant === "footer" ? "text-white/50" : "text-[var(--muted)]"
          }`}
        >
          {t.brand.tagline}
        </span>
      </span>
    </span>
  );
}
