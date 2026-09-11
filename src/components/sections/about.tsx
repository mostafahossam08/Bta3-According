"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const icons = [
  <path key="1" d="M4 6h16M4 12h10M4 18h7" strokeLinecap="round" />,
  <path key="2" d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" strokeLinejoin="round" />,
  <path key="3" d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />,
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <Reveal delay={80} className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
          <p className="text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.about.p1}</p>
          <p className="text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.about.p2}</p>
          <p className="text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.about.p3}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.about.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <div className="card-surface h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                    {icons[i]}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--text)]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
