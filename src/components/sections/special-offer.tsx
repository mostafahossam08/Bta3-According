"use client";

import { useLanguage } from "@/contexts/language-context";
import { Reveal } from "@/components/ui/reveal";
import { OrderButton } from "@/components/ui/order-button";
import { totalSlots, remainingSlots } from "@/config/availability";

// ---------------------------------------------------------------------------
// Renders only while remainingSlots > 0 (see src/config/availability.ts).
// Once the owner sets remainingSlots to 0 after the 5th confirmed order,
// this entire section disappears from the homepage automatically.
// ---------------------------------------------------------------------------
export function SpecialOffer() {
  const { t } = useLanguage();

  if (remainingSlots <= 0) return null;

  const remainingRatio = Math.max(0, Math.min(1, remainingSlots / totalSlots));

  return (
    <section id="special-offer" className="bg-[var(--bg)] pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[var(--gold)]/30 bg-[linear-gradient(150deg,var(--navy-900),var(--navy-950))] p-7 text-white shadow-[var(--shadow-lift)] sm:p-9">
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
                  <span className="text-3xl font-extrabold text-[var(--gold)]">{remainingSlots}</span>
                  <span className="text-sm text-white/50">
                    {t.offer.of} {totalSlots} · {t.offer.availability}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[var(--gold)]" style={{ width: `${remainingRatio * 100}%` }} />
                </div>
                <OrderButton packageValue={t.offer.packageLabel} className="btn-primary w-full rounded-full px-5 py-3 text-center text-sm font-semibold">
                  {t.offer.cta}
                </OrderButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
