"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/translations";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const { t } = useLanguage();

  const columns = [
    { title: t.footer.company, links: t.footer.companyLinks },
    { title: t.footer.products, links: t.footer.productLinks },
    { title: t.footer.support, links: t.footer.supportLinks },
  ];

  return (
    <footer className="border-t border-white/10 bg-[var(--navy-950)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{t.footer.desc}</p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm text-white/70">
              <span className="font-semibold text-white/85">{t.footer.contact}</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-fit transition-colors hover:text-[var(--ice-300)]" dir="ltr">
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/90">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-[var(--ice-300)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white/90">{t.footer.subjects}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ice-300)]" /> Physics OL — {t.footer.available}
              </li>
              {["Chemistry", "Biology", "Mathematics", "Combined Science"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" /> {s} — {t.footer.comingSoon}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">{t.footer.rights}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
          >
            {t.footer.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
}

