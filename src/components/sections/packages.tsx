"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WHATSAPP_URL } from "@/lib/translations";

// Editable manually as offer availability changes — no other code needs to change.
const OFFER_SPOTS_TOTAL = 5;
const OFFER_SPOTS_REMAINING = 5;

export function Packages() {
  const { t, locale } = useLanguage();

  const plans = [
    { key: "grade9", data: t.packages.grade9 },
    { key: "grade10", data: t.packages.grade10 },
    { key: "combined", data: t.packages.combined, featured: true },
  ];

  function waLink(planLabel: string) {
    const text =
      locale === "ar"
        ? `مرحبًا، أنا مهتم بباقة "${planLabel}" من بتاع أكوردنج.`
        : `Hi, I'm interested in the "${planLabel}" package from Bta3 According.`;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
  }

  const remainingRatio = Math.max(0, Math.min(1, OFFER_SPOTS_REMAINING / OFFER_SPOTS_TOTAL));

  return (
    <section id="packages" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.packages.eyebrow} title={t.packages.title} subtitle={t.packages.subtitle} />

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-[var(--gold)]/30 bg-[linear-gradient(150deg,var(--navy-900),var(--navy-950))] p-7 text-white shadow-[var(--shadow-lift)] sm:p-9">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start rtl:sm:text-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                  {t.offer.badge}
                </span>
                <h3 className="mt-4 text-xl font-extrabold leading-snug sm:text-2xl">{t.offer.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">{t.offer.desc}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/45">{t.offer.note}</p>
              </div>

              <div className="flex w-full max-w-[220px] flex-col items-center gap-3 sm:w-auto">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[var(--gold)]">{OFFER_SPOTS_REMAINING}</span>
                  <span className="text-sm text-white/50">
                    {t.offer.of} {OFFER_SPOTS_TOTAL} · {t.offer.availability}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[var(--gold)]" style={{ width: `${remainingRatio * 100}%` }} />
                </div>
                <a
                  href={waLink("Grade 9 + Grade 10 — First 5 Teachers Offer")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full rounded-full px-5 py-3 text-center text-sm font-semibold"
                >
                  {t.offer.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                  <p className="mt-1 text-lg font-extrabold text-[var(--accent-strong)]">{t.packages.priceValue}</p>
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

                <a
                  href={waLink(plan.data.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                    plan.featured ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {t.packages.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
