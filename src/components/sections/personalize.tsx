"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CoverMockup, PersonalizedMockup } from "@/components/ui/asset-mockups";

export function Personalize() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.personalize.eyebrow} title={t.personalize.title} subtitle={t.personalize.tagline} />

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="max-w-lg text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.personalize.desc}</p>
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.personalize.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3 text-sm font-semibold text-[var(--text)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative mx-auto grid max-w-md grid-cols-2 items-center gap-5">
              <div className="scale-90 opacity-80">
                <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">
                  {t.personalize.genericLabel}
                </p>
                <CoverMockup grade="Grade 9" papers="Paper 1 · 3 · 6" assetId="PHYSICS_GRADE9_COVER" />
              </div>
              <div>
                <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-wide text-[var(--accent-strong)]">
                  {t.personalize.personalizedLabel}
                </p>
                <PersonalizedMockup assetId="PERSONALIZED_COVER_01" teacherLabel="Mr. Ahmed" />
              </div>
              <div className="absolute start-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-soft)] sm:flex">
                <svg viewBox="0 0 24 24" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
