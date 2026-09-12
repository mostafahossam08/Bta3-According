"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { OrderButton } from "@/components/ui/order-button";

export function Packages() {
  const { t } = useLanguage();

  const plans = [
    { key: "grade9", data: t.packages.grade9, order: t.packages.grade9.title },
    { key: "grade10", data: t.packages.grade10, order: t.packages.grade10.title, featured: true },
  ];

  return (
    <section id="packages" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.packages.eyebrow} title={t.packages.title} subtitle={t.packages.subtitle} />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.key} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? "border-2 border-[var(--accent)] bg-[var(--surface)] shadow-[var(--shadow-lift)]"
                    : "border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {t.packages.mostPopular}
                  </span>
                ) : null}
                <h3 className="text-lg font-extrabold text-[var(--text)]">{plan.data.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{plan.data.desc}</p>

                <div className="mt-5 border-y border-[var(--border)] py-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">{t.packages.priceLabel}</p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-[var(--accent-strong)]">{plan.data.price}</span>
                    <span className="text-sm font-semibold text-[var(--muted)]">{t.packages.egp}</span>
                  </p>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.data.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <OrderButton
                  packageValue={plan.order}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                    plan.featured ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {t.packages.cta}
                </OrderButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
