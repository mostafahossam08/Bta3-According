"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_URL } from "@/lib/translations";

export function FloatingWhatsApp() {
  const { t, dir } = useLanguage();

  const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.contact}
      className={`btn-whatsapp fixed bottom-5 z-40 flex items-center gap-2 rounded-full py-3.5 ps-3.5 pe-5 text-sm font-semibold shadow-xl sm:bottom-7 ${
        dir === "rtl" ? "left-4 sm:left-6" : "right-4 sm:right-6"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" fill="currentColor">
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.34.64 4.53 1.76 6.4L4 29l7.8-1.7A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3Zm0 21.8c-2 0-3.87-.55-5.47-1.5l-.39-.23-4.63 1 1.02-4.5-.26-.4A9.7 9.7 0 0 1 6.2 15c0-5.4 4.4-9.8 9.82-9.8 5.42 0 9.82 4.4 9.82 9.8 0 5.4-4.4 9.8-9.82 9.8Zm5.4-7.34c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}