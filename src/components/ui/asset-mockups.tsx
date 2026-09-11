"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/language-context";

/**
 * Modular "asset placeholder" system.
 *
 * Every visual below stands in for a real photo/screenshot that will be
 * supplied later (product covers, classified previews, personalized
 * covers, custom design samples). Each is tagged with a stable
 * `data-asset` id — swap the JSX inside for a real <img>/<Image> using the
 * same id without touching any layout/section code.
 *
 * Asset ids used across the site:
 *  BRAND_LOGO, BRAND_LOGO_LIGHT, BRAND_LOGO_DARK,
 *  PHYSICS_GRADE9_COVER, PHYSICS_GRADE10_COVER,
 *  CLASSIFIED_PREVIEW_01, CLASSIFIED_PREVIEW_02,
 *  PERSONALIZED_COVER_01, PERSONALIZED_COVER_02, CUSTOM_DESIGN_01
 */

function AssetFrame({
  assetId,
  ratio = "aspect-[3/4]",
  children,
  label,
}: {
  assetId: string;
  ratio?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <div
      data-asset={assetId}
      className={`group relative w-full ${ratio} overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-2)] shadow-[var(--shadow-soft)] transition-transform duration-500 ease-out hover:-translate-y-1`}
    >
      {children}
      {label ? (
        <span className="absolute end-3 top-3 rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function ChapterLines() {
  return (
    <div className="mt-4 space-y-2">
      {[92, 78, 85, 60].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}

export function CoverMockup({
  grade,
  papers,
  assetId,
  subjectLabel = "Physics OL",
}: {
  grade: string;
  papers: string;
  assetId: string;
  subjectLabel?: string;
}) {
  const { t } = useLanguage();
  return (
    <AssetFrame assetId={assetId} label={t.common.available}>
      <div className="relative flex h-full w-full flex-col justify-between bg-[linear-gradient(155deg,var(--navy-900),var(--navy-800)_55%,var(--navy-950))] p-6 text-white">
        <div className="absolute inset-0 opacity-[0.16] [background-image:repeating-linear-gradient(115deg,var(--ice-300)_0,var(--ice-300)_1px,transparent_1px,transparent_18px)]" />
        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ice-200)]">
            Cambridge IGCSE
          </span>
          <span className="text-[11px] font-medium text-white/50">2020–2026</span>
        </div>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice-300)]">{subjectLabel}</p>
          <p className="mt-2 text-3xl font-extrabold leading-none">{grade}</p>
          <p className="mt-3 text-sm font-medium text-white/70">{papers}</p>
          <ChapterLines />
        </div>
        <div className="relative flex items-center gap-2 border-t border-white/15 pt-4">
          <span className="h-2 w-2 rounded-full bg-[var(--ice-300)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
            Bta3 According
          </span>
        </div>
      </div>
    </AssetFrame>
  );
}

export function PreviewMockup({ assetId, active }: { assetId: string; active?: string }) {
  const rows = [
    { chip: "Ch.4", topic: "Forces & Motion", q: 6 },
    { chip: "Ch.6", topic: "Thermal Physics", q: 4 },
    { chip: "Ch.9", topic: "Electricity", q: 8 },
    { chip: "Ch.11", topic: "Waves", q: 5 },
  ];
  return (
    <AssetFrame assetId={assetId} ratio="aspect-[4/3]" label={active}>
      <div className="flex h-full w-full flex-col bg-[var(--surface)] p-5">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--text)]">Paper 2 · Classified</span>
          </div>
          <span className="text-[10px] font-medium text-[var(--muted)]">2020–2026</span>
        </div>
        <div className="mt-3 flex-1 space-y-2.5 overflow-hidden">
          {rows.map((r) => (
            <div
              key={r.chip}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="rounded-md bg-[var(--navy-900)] px-2 py-1 text-[10px] font-bold text-[var(--ice-200)]">
                  {r.chip}
                </span>
                <span className="text-[12px] font-medium text-[var(--text)]">{r.topic}</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--muted)]">{r.q} Qs</span>
            </div>
          ))}
        </div>
      </div>
    </AssetFrame>
  );
}

export function PersonalizedMockup({ assetId, teacherLabel }: { assetId: string; teacherLabel: string }) {
  return (
    <AssetFrame assetId={assetId} label={teacherLabel}>
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[linear-gradient(160deg,var(--navy-950),var(--navy-800))] p-6 text-white">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]">
          <span className="rotate-[-28deg] whitespace-nowrap text-4xl font-extrabold tracking-[0.3em] text-[var(--ice-300)]">
            {teacherLabel}
          </span>
        </div>
        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
            Personalized
          </span>
        </div>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice-300)]">Physics OL</p>
          <p className="mt-2 text-2xl font-extrabold leading-tight">{teacherLabel}</p>
          <ChapterLines />
        </div>
        <div className="relative flex items-center gap-2 border-t border-white/15 pt-4">
          <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">Custom Cover</span>
        </div>
      </div>
    </AssetFrame>
  );
}
