"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    name: "Diagnose",
    description:
      "We map the real problem, the constraints, and what success looks like. This is where we challenge the brief and find the simplest path to the outcome you actually need.",
  },
  {
    id: "02",
    name: "Build",
    description:
      "Production-grade engineering with a weekly rhythm. Clean, tested, documented code, and real working software you can see progress on every week.",
  },
  {
    id: "03",
    name: "Integrate",
    description:
      "We connect the new system into your existing tools, data, and workflows, then deploy it live with full monitoring and handle edge cases as they surface.",
  },
  {
    id: "04",
    name: "Optimize",
    description:
      "Once it is running, we tune for performance and reliability, document everything, and hand it over so your team owns and runs it independently.",
  },
];

export const Methodology = () => {
  return (
    <section className="relative bg-bg-primary py-24 md:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(227,30,36,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
              The Avrixo Method
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-text-primary leading-[1.08] mb-5">
            A clear path from problem to{" "}
            <span className="font-accent text-brand-primary text-[1.15em]">production.</span>
          </h2>

          <p className="text-sm md:text-base text-text-primary/55 leading-relaxed">
            Every engagement follows the same four stages. It keeps the work transparent,
            the timeline predictable, and the outcome something your team can actually run.
          </p>

          {/* Method band */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-bg-secondary px-5 py-2.5 text-xs text-text-primary/55">
            <span className="text-text-primary/40">Our method</span>
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                {i > 0 && <span className="text-brand-primary/50">→</span>}
                <span className="font-bold text-text-primary">{step.name}</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Hover top accent bar */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-linear-to-r from-brand-primary to-brand-hover transition-all duration-500 group-hover:w-full" />

              <span className="font-accent text-4xl text-brand-primary block mb-4">
                {step.id}
              </span>
              <h3 className="text-lg font-black text-text-primary mb-3">{step.name}</h3>
              <p className="text-sm text-text-primary/55 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
