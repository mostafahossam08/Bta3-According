"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useLanguage } from "@/contexts/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type TreeData = Record<
  string,
  {
    label: string;
    papers: Record<string, { label: string; chapters: { label: string; topics: string[] }[] }>;
  }
>;

const CHAPTERS_EN = [
  { label: "Motion, Forces & Energy", topics: ["Speed & Acceleration", "Forces & Momentum", "Energy Resources"] },
  { label: "Thermal Physics", topics: ["Kinetic Theory", "Thermal Properties"] },
  { label: "Waves", topics: ["General Wave Properties", "Light & Refraction", "Sound"] },
  { label: "Electricity & Magnetism", topics: ["Circuits & Current", "Magnetism", "Electromagnetic Effects"] },
  { label: "Nuclear & Space Physics", topics: ["Radioactivity", "Earth & Space"] },
];

const CHAPTERS_AR = [
  { label: "الحركة والقوى والطاقة", topics: ["السرعة والتسارع", "القوى والزخم", "مصادر الطاقة"] },
  { label: "الفيزياء الحرارية", topics: ["النظرية الحركية", "الخصائص الحرارية"] },
  { label: "الموجات", topics: ["خصائص الموجات العامة", "الضوء والانكسار", "الصوت"] },
  { label: "الكهرباء والمغناطيسية", topics: ["الدوائر والتيار", "المغناطيسية", "التأثيرات الكهرومغناطيسية"] },
  { label: "الفيزياء النووية والفضاء", topics: ["النشاط الإشعاعي", "الأرض والفضاء"] },
];

function buildTree(locale: "en" | "ar"): TreeData {
  const chapters = locale === "ar" ? CHAPTERS_AR : CHAPTERS_EN;
  const g9 = locale === "ar" ? "الصف التاسع" : "Grade 9";
  const g10 = locale === "ar" ? "الصف العاشر" : "Grade 10";
  const mk = (label: string, slice: number) => ({ label, chapters: chapters.slice(0, slice) });

  return {
    grade9: {
      label: g9,
      papers: {
        p1: mk("Paper 1", 3),
        p3: mk("Paper 3", 4),
        p6: mk("Paper 6", 2),
      },
    },
    grade10: {
      label: g10,
      papers: {
        p2: mk("Paper 2", 3),
        p4: mk("Paper 4", 5),
        p6: mk("Paper 6", 2),
      },
    },
  };
}

export function ProductStructure() {
  const { t, locale } = useLanguage();
  const tree = useMemo(() => buildTree(locale), [locale]);

  const [gradeKey, setGradeKey] = useState<"grade9" | "grade10">("grade9");
  const grade = tree[gradeKey];
  const paperKeys = Object.keys(grade.papers);
  const [paperKey, setPaperKey] = useState(paperKeys[0]);
  const paper = grade.papers[paperKey] ?? grade.papers[paperKeys[0]];
  const [chapterIdx, setChapterIdx] = useState(0);
  const chapter = paper.chapters[Math.min(chapterIdx, paper.chapters.length - 1)];

  function selectGrade(key: "grade9" | "grade10") {
    setGradeKey(key);
    const firstPaper = Object.keys(tree[key].papers)[0];
    setPaperKey(firstPaper);
    setChapterIdx(0);
  }

  function selectPaper(key: string) {
    setPaperKey(key);
    setChapterIdx(0);
  }

  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.structure.eyebrow} title={t.structure.title} subtitle={t.structure.subtitle} />

        <Reveal delay={80} className="mt-4 text-center">
          <span className="text-sm font-semibold text-[var(--accent-strong)]">{t.structure.example}</span>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-2)] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ms-3 text-xs font-semibold text-[var(--muted)]">{t.structure.tree.subject}</span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-4 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
              <TreeColumn title={t.structure.tree.grade}>
                {(["grade9", "grade10"] as const).map((key) => (
                  <TreeItem key={key} active={gradeKey === key} onClick={() => selectGrade(key)}>
                    {tree[key].label}
                  </TreeItem>
                ))}
              </TreeColumn>

              <TreeColumn title={t.structure.tree.paper}>
                {paperKeys.map((key) => (
                  <TreeItem key={key} active={paperKey === key} onClick={() => selectPaper(key)}>
                    {grade.papers[key].label}
                  </TreeItem>
                ))}
              </TreeColumn>

              <TreeColumn title={t.structure.tree.chapter}>
                {paper.chapters.map((c, i) => (
                  <TreeItem key={c.label} active={chapterIdx === i} onClick={() => setChapterIdx(i)}>
                    {c.label}
                  </TreeItem>
                ))}
              </TreeColumn>

              <TreeColumn title={t.structure.tree.topic} isLast>
                {chapter.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-[13px] font-medium text-[var(--text)]"
                  >
                    {topic}
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--navy-900)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--ice-300)]">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t.structure.tree.questions}
                    </span>
                  </div>
                ))}
              </TreeColumn>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TreeColumn({ title, children, isLast }: { title: string; children: ReactNode; isLast?: boolean }) {
  return (
    <div className={`p-4 ${isLast ? "bg-[var(--bg-soft)]/60" : ""}`}>
      <p className="mb-3 px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">{title}</p>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function TreeItem({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-start text-[13px] font-semibold transition-colors ${
        active
          ? "bg-[var(--navy-900)] text-white shadow-[var(--shadow-soft)]"
          : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
      }`}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        className={`h-3.5 w-3.5 shrink-0 rtl:rotate-180 ${active ? "opacity-100 text-[var(--ice-300)]" : "opacity-0"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      >
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

