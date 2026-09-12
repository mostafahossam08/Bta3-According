"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_URL } from "@/lib/translations";
import { Reveal } from "@/components/ui/reveal";

export function FollowUp() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-[linear-gradient(150deg,var(--navy-900),var(--navy-950))] p-8 text-white shadow-[var(--shadow-lift)] sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--ice-300)]/10 blur-2xl rtl:-left-10 rtl:right-auto" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ice-200)]">
                {t.followUp.eyebrow}
              </span>
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[var(--ice-300)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
                  <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
                  <path d="M8 14l2.5 2.5L16 11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">{t.followUp.lead}</h3>
              <p className="mt-3 text-base font-medium text-[var(--ice-200)]">{t.followUp.subtext}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{t.followUp.desc}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                {t.customerService.eyebrow}
              </span>
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12Z" strokeLinejoin="round" />
                  <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight text-[var(--text)] sm:text-3xl">{t.customerService.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">{t.customerService.desc}</p>

              <ul className="mt-6 grid grid-cols-2 gap-3">
                {t.customerService.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] font-medium text-[var(--text)]">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {t.customerService.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

