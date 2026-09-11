"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WHATSAPP_URL } from "@/lib/translations";

const ICONS = [
  "M9 3c-2 3-3 5.5-3 8a6 6 0 0 0 12 0c0-2.5-1-5-3-8-1 2-2 3-2 3s-1-1-2-3",
  "M6 4h12M9 4v4L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-10V4",
  "M4 6h5l2 3 2-3h5M4 18h16M8 10v8M16 10v8M12 9v9",
  "M12 3l8 4-8 4-8-4 8-4ZM4 11l8 4 8-4M4 15l8 4 8-4",
];

export function Upcoming() {
  const { t } = useLanguage();

  return (
    <section id="coming-soon" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.upcoming.eyebrow} title={t.upcoming.title} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.upcoming.subjects.map((subject, i) => (
            <Reveal key={subject} delay={i * 90}>
              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-2)] p-6 text-center opacity-90">
                <span className="absolute end-3 top-3 rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                  {t.upcoming.status}
                </span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--muted)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d={ICONS[i % ICONS.length]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-[var(--text)]">{subject}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            {t.upcoming.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
