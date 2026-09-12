"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.problem.eyebrow} title={t.problem.title} subtitle={t.problem.subtitle} />

        <Reveal delay={80}>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {t.problem.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-[var(--muted)]">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-red-400/80" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" strokeLinecap="round" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-red-300/25 bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)]">
              <span className="inline-flex rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-500">
                {t.problem.before.label}
              </span>
              <ul className="mt-5 space-y-3">
                {t.problem.before.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)] rotate-90 sm:rotate-0 rtl:rotate-90 sm:rtl:rotate-180">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-3xl border border-[var(--border-strong)] bg-[linear-gradient(160deg,var(--navy-900),var(--navy-950))] p-7 text-white shadow-[var(--shadow-lift)]">
              <span className="inline-flex rounded-full bg-[var(--ice-300)]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--ice-300)]">
                {t.problem.after.label}
              </span>
              <ul className="mt-5 space-y-3">
                {t.problem.after.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--ice-300)]" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

