"use client";

import { useState } from "react";
import MagneticButton from "./magnetic-button";

const CONTACT_EMAIL = "waleeddogare@gmail.com";

const projectTypes = [
  "Custom Website / Redesign",
  "WordPress Development",
  "Shopify Development",
  "Affiliate Website Development",
  "SEO + Local SEO",
  "Google Ads / Social Media Ads",
  "Branding / AI-Powered Design",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `New Project Inquiry from ${form.name || "Website Visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.22em] text-white/45">
            Full Name
          </span>
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Enter your name"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.22em] text-white/45">
            Email
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.22em] text-white/45">
          Project Type
        </span>
        <select
          value={form.projectType}
          onChange={update("projectType")}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition focus:border-white/35"
        >
          {projectTypes.map((type) => (
            <option key={type} className="bg-dark">
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.22em] text-white/45">
          Project Details
        </span>
        <textarea
          required
          rows="6"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your business goals and website timeline"
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
        />
      </label>

      <MagneticButton type="submit" className="justify-center">
        Send Inquiry
      </MagneticButton>

      {sent ? (
        <p className="text-center text-xs text-white/45">
          Opening your email app to send this to {CONTACT_EMAIL} — hit send there to complete it.
        </p>
      ) : null}
    </form>
  );
}
