"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck2, Milestone, ShieldCheck, KeyRound } from "lucide-react";

const guarantees = [
  {
    icon: FileCheck2,
    title: "Fixed scope",
    body: "Every engagement starts with a clear statement of work, deliverables defined before we build.",
  },
  {
    icon: Milestone,
    title: "Clear milestones",
    body: "Progress tied to agreed milestones and acceptance criteria, so you always know where things stand.",
  },
  {
    icon: ShieldCheck,
    title: "No surprise costs",
    body: "You know the cost and timeline up front. Changes are scoped and agreed, never silently billed.",
  },
  {
    icon: KeyRound,
    title: "You own the work",
    body: "Code, data models, and documentation are yours. Built to be maintained, not locked in.",
  },
];

export const RiskReversal = () => {
  return (
    <section className="relative bg-bg-secondary py-20 overflow-hidden border-y border-white/[0.06]">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4">
            Low-risk engagement
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-text-primary leading-tight">
            Built to remove the risk of{" "}
            <span className="text-brand-primary">getting started.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.08] bg-bg-primary p-6 hover:border-brand-primary/30 transition-colors duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 mb-5">
                <g.icon className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base font-black text-text-primary mb-2">{g.title}</h3>
              <p className="text-sm leading-relaxed text-text-primary/55">{g.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
