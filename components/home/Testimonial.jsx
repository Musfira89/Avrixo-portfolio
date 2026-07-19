"use client";
import React from "react";
import { motion } from "framer-motion";

export const Testimonial = () => {
  return (
    <section className="relative bg-bg-secondary py-24 md:py-28 overflow-hidden border-y border-white/[0.06]">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(227,30,36,0.1) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-1.5 mb-9"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
            How We Work With You
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-2xl md:text-3xl leading-[1.4] text-text-primary font-medium"
        >
          "If the feature you're asking for won't solve the real problem, we'll tell you before we
          build it.{" "}
          <span className="font-accent text-brand-primary text-[1.1em]">
            That honesty is free, and it saves months down the line.
          </span>
          "
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-text-primary/45"
        >
          Avrixo, on every engagement
        </motion.p>
      </div>
    </section>
  );
};
