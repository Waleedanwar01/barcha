"use client";

import { useState } from "react";
import Icon from "./icons";
import { budgets, projectTypes, siteConfig } from "../lib/site-data";

/**
 * Opens the visitor's email app with a pre-filled message to siteConfig.email.
 * To switch to a form service later (Formspree, Resend, etc.), replace handleSubmit.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [types, setTypes] = useState([]);
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const toggleType = (t) => setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Project enquiry — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "-"}`,
      `Interested in: ${types.join(", ") || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-8 p-6 md:p-10">
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-ink">I&apos;m interested in…</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <Chip key={t} active={types.includes(t)} onClick={() => toggleType(t)}>
              {t}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name">
          <input required className="field" value={form.name} onChange={update("name")} placeholder="Jane Smith" autoComplete="name" />
        </Field>
        <Field label="Email">
          <input required type="email" className="field" value={form.email} onChange={update("email")} placeholder="jane@company.com" autoComplete="email" />
        </Field>
      </div>
      <Field label="Company (optional)">
        <input className="field" value={form.company} onChange={update("company")} placeholder="Company name" autoComplete="organization" />
      </Field>

      <fieldset>
        <legend className="mb-4 text-sm font-medium text-ink">Budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
              {b}
            </Chip>
          ))}
        </div>
      </fieldset>

      <Field label="Project details">
        <textarea
          required
          rows={5}
          className="field resize-y"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your goals, timeline and anything else we should know."
        />
      </Field>

      <div className="flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-ink/45">
          {sent ? "Your email app should open now. If not, write to " : "Prefer email? Write to "}
          <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-4">
            {siteConfig.email}
          </a>
        </p>
        <button type="submit" className="btn-primary !px-8 !py-4">
          Send enquiry
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
        active
          ? "border-brand-500 bg-brand-500 text-white"
          : "border-line bg-ink/[0.02] text-ink/65 hover:border-ink/30 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, children }) {
  return (
    <label className="grid gap-2.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
