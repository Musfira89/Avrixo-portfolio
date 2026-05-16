"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CircleDollarSign, Lightbulb } from "lucide-react";

const audienceCards = [
  {
    icon: Building2,
    title: "Enterprise leaders",
    body: "Modernize operations, automate knowledge work, or launch a secure internal AI platform.",
  },
  {
    icon: Lightbulb,
    title: "SME operators",
    body: "Turn a manual process or product idea into a polished SaaS workflow with measurable ROI.",
  },
  {
    icon: CircleDollarSign,
    title: "Investors",
    body: "Validate technical risk, accelerate a portfolio product, or diligence an AI-native opportunity.",
  },
];

export const LeadCapture = () => {
  return (
    <section className="relative overflow-hidden bg-bg-light py-28 text-text-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary"
            >
              Enterprise Intake
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl font-black tracking-tight"
            >
              Tell us what needs to become intelligent.
            </motion.h2>
            <p className="mt-6 text-sm leading-7 text-text-muted">
              Use this intake to frame the business case, technical constraint, and decision
              timeline. Avrixo will translate it into a practical next-step plan.
            </p>

            {/* <div className="mt-8 grid gap-4">
              {audienceCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-text-dark/10 bg-text-primary p-5">
                  <card.icon className="h-5 w-5 text-brand-primary" />
                  <h3 className="mt-4 text-lg font-black">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{card.body}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="lg:col-span-7">
            <form className="rounded-[2rem] border border-text-dark/10 bg-text-primary p-6 shadow-xl shadow-brand-primary/5 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-text-dark/10 bg-bg-light px-4 py-4 text-sm outline-none transition-colors focus:border-brand-primary"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    Work Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-text-dark/10 bg-bg-light px-4 py-4 text-sm outline-none transition-colors focus:border-brand-primary"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    Organization Type
                  </span>
                  <select
                    name="organization"
                    defaultValue=""
                    className="w-full rounded-2xl border border-text-dark/10 bg-bg-light px-4 py-4 text-sm outline-none transition-colors focus:border-brand-primary"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Enterprise</option>
                    <option>SME</option>
                    <option>Investor / Fund</option>
                    <option>Startup</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    Primary Need
                  </span>
                  <select
                    name="need"
                    defaultValue=""
                    className="w-full rounded-2xl border border-text-dark/10 bg-bg-light px-4 py-4 text-sm outline-none transition-colors focus:border-brand-primary"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>AI automation</option>
                    <option>RAG / knowledge copilot</option>
                    <option>SaaS product build</option>
                    <option>Technical diligence</option>
                    <option>Cloud or data platform</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                  Project Context
                </span>
                <textarea
                  name="context"
                  rows={6}
                  placeholder="Describe the workflow, product, data source, or business bottleneck you want to transform."
                  className="w-full resize-none rounded-2xl border border-text-dark/10 bg-bg-light px-4 py-4 text-sm outline-none transition-colors focus:border-brand-primary"
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-xs leading-6 text-text-muted">
                  Qualified requests receive a recommended next step, delivery path,
                  and strategy-call agenda.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-1 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-black text-text-primary transition-all hover:bg-brand-hover"
                >
                  Request Strategy Review
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
