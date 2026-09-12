"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_URL } from "@/lib/translations";
import { Reveal } from "@/components/ui/reveal";
import { PersonalizedMockup } from "@/components/ui/asset-mockups";

export function CustomDesign() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              {t.customDesign.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-[clamp(1.75rem,3.6vw,2.6rem)] font-bold leading-[1.15] text-[var(--text)]">
              {t.customDesign.title}
            </h2>
            <p className="mt-4 max-w-lg text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.customDesign.desc}</p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {t.customDesign.features.map((f) => (
                <li key={f} className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--text)]">
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold"
            >
              {t.customDesign.cta}
            </a>
          </Reveal>

          <Reveal delay={120} className="mx-auto w-full max-w-[280px]">
            <PersonalizedMockup assetId="CUSTOM_DESIGN_01" teacherLabel="Ms. Salma" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

