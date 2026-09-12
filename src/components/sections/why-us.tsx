"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const paths = [
  "M12 6v6l4 2M12 3a9 9 0 1 0 9 9",
  "M4 6h16M4 12h10M4 18h7",
  "M4 5h16v14H4zM4 10h16M9 10v9",
  "M12 21c-4-3-7-6.2-7-10a7 7 0 0 1 14 0c0 3.8-3 7-7 10Z",
  "M4 19V6l6 4 6-4 4 3v10",
  "M4 20l4-11 4 7 3-4 5 8",
  "M6 3h9l3 3v15H6z M15 3v3h3",
  "M3.5 5h17v15.5H3.5zM3.5 9.5h17M8 3v3.5M16 3v3.5M8 14l2.5 2.5L16 11",
  "M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12Z",
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="card-surface flex h-full items-start gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d={paths[i % paths.length]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

