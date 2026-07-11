"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";
import { companyContact, companySocials, formRecipient } from "@/lib/company";

const contactInfo = [
  { icon: Phone, label: "Phone", value: companyContact.phoneDisplay, href: companyContact.phoneHref },
  { icon: Mail, label: "Email", value: companyContact.email, href: companyContact.mailto },
  { icon: MapPin, label: "Location", value: companyContact.location, href: null },
];

// Only render a social icon when a real profile URL is configured in
// lib/company.ts — never link to a bare domain.
const socialLinks = [
  { icon: Linkedin, href: companySocials.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: companySocials.facebook, label: "Facebook" },
  { icon: Instagram, href: companySocials.instagram, label: "Instagram" },
].filter((s) => s.href);

const commitments = [
  { icon: Zap, text: "Response within 24 hours" },
  { icon: Clock, text: "30-min strategy call included" },
  { icon: CheckCircle2, text: "NDA available on request" },
];

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Post to FormSubmit, which emails each submission to `formRecipient`.
    // The AJAX endpoint returns JSON and never redirects, so we can confirm
    // real delivery before showing the success state.
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${formRecipient}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project inquiry — ${data.name || "Website"}`,
          _template: "table",
          _captcha: "false",
          ...data,
        }),
      });
      const result = await res.json();
      // FormSubmit returns success: "true" (string) on a delivered/queued submit.
      if (res.ok && (result.success === "true" || result.success === true)) {
        setStatus("idle");
        setSubmitted(true);
        return;
      }
      throw new Error(result.message || "Submission failed");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your request. Please email us directly at " +
          companyContact.email +
          "."
      );
    }
  };

  return (
    <section className="bg-bg-primary pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary leading-[1.1] mb-6">
            Start with a focused conversation about what you need to{" "}
            <span className="text-brand-primary">build.</span>
          </h1>
          <p className="text-sm text-text-primary/55 leading-relaxed">
            Share your transformation goal, product idea, or operational bottleneck.
            Avrixo will help shape the fastest credible path to production.
          </p>
        </motion.div>

        {/* Commitment tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.07] pt-7"
        >
          {commitments.map((c) => (
            <div key={c.text} className="flex items-center gap-2.5">
              <c.icon className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="text-xs text-text-primary/60 font-medium">{c.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Body: contact rail + form */}
        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── LEFT — Contact rail ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-text-primary/45 mb-6">
              Direct Contact
            </p>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 border-t border-white/[0.07] pt-5 first:border-t-0 first:pt-0">
                  <div className="w-9 h-9 rounded-xl bg-bg-secondary border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-text-muted">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-primary/75 hover:text-brand-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-text-primary/75 font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-8 flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/[0.08] bg-bg-secondary flex items-center justify-center text-text-primary/40 hover:text-brand-primary hover:border-brand-primary/40 transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="mx-auto h-full w-px bg-white/[0.07]" />
          </div>

          {/* ── RIGHT — Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-brand-primary/25 bg-brand-primary/5 p-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-lg font-black text-text-primary mb-2">Request Received</h3>
                <p className="text-sm text-text-muted">
                  Qualified requests receive a recommended next step, delivery path,
                  and strategy-call agenda within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Full Name
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/[0.1] bg-bg-secondary text-text-primary placeholder:text-text-muted/40 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary/50 focus:bg-bg-muted"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Work Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/[0.1] bg-bg-secondary text-text-primary placeholder:text-text-muted/40 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary/50 focus:bg-bg-muted"
                    />
                  </label>
                </div>

                {/* Company + Primary Need */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Company Name
                    </span>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your company"
                      className="w-full rounded-xl border border-white/[0.1] bg-bg-secondary text-text-primary placeholder:text-text-muted/40 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary/50 focus:bg-bg-muted"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Primary Need
                    </span>
                    <select
                      name="need"
                      defaultValue=""
                      className="w-full rounded-xl border border-white/[0.1] bg-bg-secondary text-text-primary px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary/50 focus:bg-bg-muted"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>AI automation / workflow intelligence</option>
                      <option>RAG / knowledge copilot</option>
                      <option>SaaS product build</option>
                      <option>Data platform / analytics</option>
                      <option>Cloud / DevOps infrastructure</option>
                      <option>UI/UX design system</option>
                      <option>Technical due diligence</option>
                    </select>
                  </label>
                </div>

                {/* Project Context */}
                <label className="block space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    Project Context
                  </span>
                  <textarea
                    name="context"
                    rows={5}
                    placeholder="Describe the workflow, product, data source, or business bottleneck you want to transform. Include constraints, timeline, and desired outcome."
                    className="w-full resize-none rounded-xl border border-white/[0.1] bg-bg-secondary text-text-primary placeholder:text-text-muted/40 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary/50 focus:bg-bg-muted leading-relaxed"
                  />
                </label>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                  <p className="text-xs text-text-muted leading-relaxed max-w-xs">
                    Qualified requests receive a strategy-call agenda and recommended next step.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group flex-shrink-0 flex items-center justify-center gap-2 px-7 py-4 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-brand-hover transition-all hover:shadow-[0_0_40px_rgba(227,30,36,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send Request"}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-xs text-brand-primary font-medium" role="alert">
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
