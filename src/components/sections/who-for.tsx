"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function WhoFor() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.whoFor.eyebrow} title={t.whoFor.title} subtitle={t.whoFor.subtitle} />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.whoFor.items.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 80}>
              <div className="flex h-full items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[13.5px] font-semibold text-[var(--text)] shadow-[var(--shadow-soft)]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
