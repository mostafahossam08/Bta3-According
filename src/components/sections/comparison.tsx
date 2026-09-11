"use client";

import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function Check({ ok }: { ok: boolean }) {
  if (!ok) return <span className="text-[var(--muted)]">—</span>;
  return (
    <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]/12 text-[var(--accent-strong)]">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Comparison() {
  const { t } = useLanguage();
  const columns = [
    { key: "grade9", title: t.packages.grade9.title, values: t.comparison.values.grade9 },
    { key: "grade10", title: t.packages.grade10.title, values: t.comparison.values.grade10 },
    { key: "combined", title: t.packages.combined.title, values: t.comparison.values.combined },
  ];

  return (
    <section className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.comparison.eyebrow} title={t.comparison.title} />

        <Reveal delay={100}>
          <div className="mt-12 hidden overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] sm:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--surface-2)]">
                  <th className="p-4 text-start text-[13px] font-bold uppercase tracking-wide text-[var(--muted)]">
                    &nbsp;
                  </th>
                  {columns.map((col) => (
                    <th key={col.key} className="p-4 text-center text-[14px] font-extrabold text-[var(--text)]">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, ri) => (
                  <tr key={row} className={ri % 2 === 0 ? "" : "bg-[var(--surface-2)]/50"}>
                    <td className="border-t border-[var(--border)] p-4 text-[13.5px] font-semibold text-[var(--text)]">{row}</td>
                    {columns.map((col) => {
                      const val = col.values[ri];
                      return (
                        <td key={col.key} className="border-t border-[var(--border)] p-4 text-center text-[13.5px] text-[var(--muted)]">
                          {typeof val === "boolean" ? <Check ok={val} /> : val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:hidden">
          {columns.map((col, ci) => (
            <Reveal key={col.key} delay={ci * 90}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
                <h3 className="text-base font-extrabold text-[var(--text)]">{col.title}</h3>
                <dl className="mt-4 divide-y divide-[var(--border)]">
                  {t.comparison.rows.map((row, ri) => (
                    <div key={row} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                      <dt className="font-medium text-[var(--muted)]">{row}</dt>
                      <dd className="font-semibold text-[var(--text)]">
                        {typeof col.values[ri] === "boolean" ? <Check ok={col.values[ri] as boolean} /> : col.values[ri]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
