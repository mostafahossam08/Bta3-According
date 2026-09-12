"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { INSTAPAY_NUMBER } from "@/config/media";

export function PaymentMethod() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INSTAPAY_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="payment" className="bg-[var(--surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.payment.eyebrow} title={t.payment.title} subtitle={t.payment.desc} />

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="5" width="20" height="14" rx="2.5" />
                    <path d="M2 10h20M6 15h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">{t.payment.instapayLabel}</p>
                  <p dir="ltr" className="mt-1 text-2xl font-extrabold tracking-wide text-[var(--text)] sm:text-3xl">
                    {INSTAPAY_NUMBER}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-primary w-full shrink-0 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
              >
                {copied ? t.payment.copied : t.payment.copy}
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy-900)] text-xs font-bold text-[var(--ice-300)]">1</span>
                <p className="text-sm font-medium text-[var(--muted)]">{t.payment.step1}</p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy-900)] text-xs font-bold text-[var(--ice-300)]">2</span>
                <p className="text-sm font-medium text-[var(--muted)]">{t.payment.step2}</p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-[var(--muted)]">{t.payment.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
