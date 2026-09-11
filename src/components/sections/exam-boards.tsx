"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ExamBoards() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.boards.eyebrow} title={t.boards.title} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-center rounded-3xl border border-emerald-400/25 bg-[var(--surface)] p-8 text-center shadow-[var(--shadow-lift)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19V6l8-3 8 3v13M4 19h16M9 19v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--text)]">{t.boards.cambridge.name}</h3>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t.boards.cambridge.status}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col items-center rounded-3xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-2)] p-8 text-center opacity-85">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--muted)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19V6l8-3 8 3v13M4 19h16M9 19v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--text)]">{t.boards.edexcel.name}</h3>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                {t.boards.edexcel.status}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
