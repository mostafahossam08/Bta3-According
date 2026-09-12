"use client";

import { useLanguage } from "@/contexts/language-context";
import { WHATSAPP_URL } from "@/lib/translations";
import { Reveal } from "@/components/ui/reveal";
import { PreviewMockup } from "@/components/ui/asset-mockups";
import { media } from "@/config/media";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg)]">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 start-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-balance text-[clamp(2.2rem,5.4vw,3.9rem)] font-extrabold leading-[1.08] tracking-tight text-[var(--text)]">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-[var(--accent-strong)] to-[var(--accent)] bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>{" "}
            {t.hero.titleEnd}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t.hero.subtitle}
          </p>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-strong)]">
            {t.hero.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#packages" className="btn-primary rounded-full px-7 py-3.5 text-center text-[15px] font-semibold">
              {t.hero.ctaPrimary}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-full px-7 py-3.5 text-center text-[15px] font-semibold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-7">
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-extrabold text-[var(--text)] sm:text-xl">{stat.value}</p>
                <p className="mt-1 text-[12px] leading-snug text-[var(--muted)] sm:text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--accent)]/15 to-transparent blur-2xl" />
            {media.INTRO_VIDEO.enabled ? (
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-2)] shadow-[var(--shadow-soft)]">
                <video
                  src={media.INTRO_VIDEO.path}
                  poster={media.PHYSICS_GRADE9_COVER.enabled ? media.PHYSICS_GRADE9_COVER.path : undefined}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            ) : (
              <PreviewMockup assetId="CLASSIFIED_PREVIEW_01" active={t.hero.cardBadge} />
            )}
            <div className="glass card-surface absolute -bottom-6 start-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-start-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy-900)] text-[var(--ice-300)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5" strokeLinecap="round" />
                  <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H20" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-[var(--text)]">{t.hero.cardTitle}</p>
                <p className="text-[12px] text-[var(--muted)]">{t.hero.cardSubtitle}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-3.5">
        <div className="marquee-track">
          {[...t.marquee, ...t.marquee].map((item, i) => (
            <span key={i} className="mx-5 flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[var(--muted)]">
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

