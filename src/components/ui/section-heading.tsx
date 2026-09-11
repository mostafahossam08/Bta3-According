import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "start";
  id?: string;
}) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-start rtl:text-end"} ${align === "center" ? "" : "mx-0"}`}
    >
      <div>
        {eyebrow ? (
          <span
            id={id}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-5 text-balance text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.15] text-[var(--text)]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-balance text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
