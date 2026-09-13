"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useOrderSelection } from "@/contexts/order-selection-context";
import { WHATSAPP_URL } from "@/lib/translations";

export function LeadForm() {
  const { t, locale } = useLanguage();
  const { selected } = useOrderSelection();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [interest, setInterest] = useState(t.contact.interests[0]);

  // Auto-populate the interest field when the visitor arrives here via an
  // Order button on Packages / Special Offer — they should never have to
  // pick the package again manually.
  useEffect(() => {
    if (selected && t.contact.interests.includes(selected)) {
      setInterest(selected);
    }
  }, [selected, t.contact.interests]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);

    const name = (form.get("name") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const email = (form.get("email") as string) || "";
    const interestValue = (form.get("interest") as string) || "";
    const message = (form.get("message") as string) || "";

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          interest: interestValue,
          message,
          locale,
        }),
      });
      if (!res.ok) throw new Error("failed");

      const lines = [
        `${t.contact.name}: ${name}`,
        `${t.contact.phone}: ${phone}`,
      ];
      if (email) lines.push(`${t.contact.email}: ${email}`);
      lines.push(`${t.contact.interest}: ${interestValue}`);
      if (message) lines.push(`${t.contact.message}: ${message}`);

      const whatsappText = lines.join("\n");
      const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappHref, "_blank", "noopener,noreferrer");

      setStatus("success");
      event.currentTarget.reset();
      setInterest(t.contact.interests[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {t.contact.name}
        </label>
        <input
          required
          name="name"
          type="text"
          className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {t.contact.phone}
        </label>
        <input
          required
          name="phone"
          type="tel"
          dir="ltr"
          className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {t.contact.email}
        </label>
        <input
          name="email"
          type="email"
          dir="ltr"
          className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {t.contact.interest}
        </label>
        <select
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        >
          {t.contact.interests.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {t.contact.message}
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full resize-none rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "loading"} className="btn-primary w-full rounded-full px-6 py-3.5 text-sm font-semibold disabled:opacity-60">
          {status === "loading" ? t.contact.submitting : t.contact.submit}
        </button>
        {status === "success" ? (
          <p className="mt-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">{t.contact.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-center text-sm font-semibold text-red-500">{t.contact.error}</p>
        ) : null}
      </div>
    </form>
  );
}