"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    id: "01",
    phase: "Research",
    title: "Business and data discovery",
    body: "We clarify the commercial outcome, inspect workflow friction, map stakeholders, and evaluate whether the available data can support the intended AI or SaaS system.",
    output: "Opportunity map, risk register, data-readiness notes",
  },
  {
    id: "02",
    phase: "Architecture",
    title: "Solution blueprint",
    body: "The team defines entities, system boundaries, model strategy, retrieval patterns, integrations, permissions, and infrastructure choices before development starts.",
    output: "Technical blueprint, sprint plan, success metrics",
  },
  {
    id: "03",
    phase: "Prototype",
    title: "Validated product slice",
    body: "We build the smallest credible version of the product experience and test it against real workflows, realistic data, and stakeholder expectations.",
    output: "Clickable product, working proof, evaluation notes",
  },
  {
    id: "04",
    phase: "Production",
    title: "Secure deployment",
    body: "Engineering moves into production implementation with observability, CI/CD, testing, governance, and adoption support woven into the release plan.",
    output: "Launch-ready system, dashboards, operating cadence",
  },
];

export const StrategyProcess = () => {
  const [active, setActive] = useState(0);
  const current = processSteps[active];

  return (
    <section className="relative overflow-hidden bg-bg-light py-28 text-text-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary/70 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
              Dynamic Strategy Process
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight">
              From first consultation to production deployment.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm leading-7 text-text-muted">
            A high-trust operating model for enterprise teams that need clarity before they
            invest in full-scale AI, SaaS, or data-platform implementation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActive(index)}
                  className={`group w-full rounded-3xl border p-5 text-left transition-all duration-300 ${
                    active === index
                      ? "border-brand-primary bg-text-primary shadow-xl shadow-brand-primary/10"
                      : "border-text-dark/10 bg-text-primary/60 hover:border-brand-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-black text-brand-primary">{step.id}</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                          {step.phase}
                        </p>
                        <h3 className="mt-1 text-lg font-black">{step.title}</h3>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-brand-primary transition-transform group-hover:rotate-45" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-text-dark/10 bg-text-primary p-8 md:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-primary/10 blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  <div className="text-[120px] font-black leading-none text-brand-primary/10">
                    {current.id}
                  </div>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                    {current.phase}
                  </p>
                  <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                    {current.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-text-muted">
                    {current.body}
                  </p>
                  <div className="mt-8 rounded-3xl border border-text-dark/10 bg-bg-light p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted">
                      Output
                    </p>
                    <p className="mt-3 text-lg font-black">{current.output}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-black text-text-dark transition-colors hover:text-brand-primary"
                  >
                    Build this roadmap with Avrixo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
