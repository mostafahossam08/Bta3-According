"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.howItWorks.eyebrow} title={t.howItWorks.title} />

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px bg-[var(--border-strong)] lg:block" />
          {t.howItWorks.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1.5">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--navy-900)] text-sm font-bold text-[var(--ice-300)]">
                  {step.n}
                </span>
                <h3 className="mt-5 text-base font-bold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

