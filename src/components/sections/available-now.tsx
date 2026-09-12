"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CoverMockup } from "@/components/ui/asset-mockups";

export function AvailableNow() {
  const { t } = useLanguage();
  const products = [
    { data: t.available.grade9, assetId: "PHYSICS_GRADE9_COVER", grade: "Grade 9" },
    { data: t.available.grade10, assetId: "PHYSICS_GRADE10_COVER", grade: "Grade 10" },
  ];

  return (
    <section id="products" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t.available.badge}
          </span>
          <h2 className="mt-5 text-balance text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.15] text-[var(--text)]">
            {t.available.title}
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-[var(--muted)] sm:text-lg">{t.available.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.grade} delay={i * 120}>
              <div className="grid h-full grid-cols-1 gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1.5 sm:grid-cols-[0.85fr_1.15fr] sm:p-7">
                <CoverMockup grade={product.grade} papers={product.data.papers} assetId={product.assetId} />
                <div className="flex flex-col">
                  <h3 className="text-xl font-extrabold text-[var(--text)]">{product.data.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent-strong)]">{product.data.papers}</p>
                  <ul className="mt-4 space-y-2.5">
                    {product.data.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[var(--muted)]">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#packages"
                    className="btn-secondary mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
                  >
                    {t.available.viewPackages}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

