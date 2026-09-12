"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Vision() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.vision.eyebrow} title={t.vision.title} subtitle={t.vision.desc} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-[0.7fr_auto_1.3fr] sm:items-center">
          <Reveal>
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[linear-gradient(150deg,var(--navy-900),var(--navy-950))] p-8 text-center text-white shadow-[var(--shadow-lift)]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ice-300)]">{t.vision.todayLabel}</span>
              <p className="mt-3 text-2xl font-extrabold">{t.vision.today}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex justify-center">
            <svg viewBox="0 0 24 24" className="h-8 w-8 rotate-90 text-[var(--accent)] sm:rotate-0 rtl:sm:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{t.vision.futureLabel}</span>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {t.vision.future.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

