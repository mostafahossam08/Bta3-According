"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/translations";
import { Reveal } from "@/components/ui/reveal";
import { LeadForm } from "@/components/lead-form";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(170deg,var(--navy-900),var(--navy-950))] py-20 text-white sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ice-200)]">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.12]">{t.contact.title}</h2>
            <p className="mt-4 max-w-md text-balance leading-relaxed text-white/65 sm:text-lg">{t.contact.subtitle}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                  <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.34.64 4.53 1.76 6.4L4 29l7.8-1.7A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3Z" />
                </svg>
                {t.contact.whatsappCta}
              </a>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/40">{t.contact.serviceLabel}</p>
                <p className="text-base font-bold" dir="ltr">
                  {WHATSAPP_NUMBER_DISPLAY}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">{t.contact.formTitle}</h3>
              <p className="mt-1.5 text-sm text-white/60">{t.contact.formDesc}</p>
              <div className="mt-6 [&_input]:!bg-white/5 [&_input]:!border-white/15 [&_input]:!text-white [&_select]:!bg-white/5 [&_select]:!border-white/15 [&_select]:!text-white [&_textarea]:!bg-white/5 [&_textarea]:!border-white/15 [&_textarea]:!text-white [&_label]:!text-white/50">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
