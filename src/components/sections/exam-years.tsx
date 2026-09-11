"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

export function ExamYears() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.examYears.eyebrow} title={t.examYears.title} subtitle={t.examYears.subtitle} />

        <Reveal delay={100}>
          <div className="relative mt-14">
            <div className="absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-[var(--border-strong)] sm:block" />
            <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:justify-between">
              {YEARS.map((year, i) => (
                <div key={year} className="relative flex flex-col items-center gap-3">
                  <span
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border text-sm font-extrabold shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-base ${
                      i === YEARS.length - 1
                        ? "border-[var(--gold)]/40 bg-[linear-gradient(160deg,var(--navy-900),var(--navy-950))] text-[var(--gold)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                    }`}
                  >
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
