"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [
  "M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5M4 19.5A1.5 1.5 0 0 1 5.5 18H20",
  "M9 3h6l1 4H8l1-4ZM6 7h12l1 14H5L6 7Z",
  "M4 5h16v3H4zM4 11h10v3H4zM4 17h13v3H4z",
  "M12 8v8M8 12h8M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  "M4 19l4-11 4 7 3-4 5 8M4 19h16",
  "M9 12l2 2 4-4M12 3l8 4v5c0 4.5-3.2 7.9-8 9-4.8-1.1-8-4.5-8-9V7l8-4Z",
  "M4 5h16v11H4zM8 19h8M12 16v3",
  "M12 6v6l4 2M12 3a9 9 0 1 0 9 9",
];

export function UseCases() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.useCases.eyebrow} title={t.useCases.title} />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.useCases.items.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d={ICONS[i % ICONS.length]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-[13.5px] font-semibold leading-snug text-[var(--text)]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
