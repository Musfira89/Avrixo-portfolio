"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CreditCard,
  Monitor,
  Building2,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Activity,
    name: "Healthcare",
    description:
      "Grounded AI assistants, patient-facing tools, and compliant systems where a wrong answer is not an option.",
  },
  {
    icon: CreditCard,
    name: "Fintech",
    description:
      "Secure platforms, data pipelines, and automation where accuracy and reliability are the whole game.",
  },
  {
    icon: Monitor,
    name: "SaaS & Startups",
    description:
      "MVPs and scalable products built right from the first commit, so success does not force a rebuild.",
  },
  {
    icon: Building2,
    name: "Professional Services",
    description:
      "Intake automation, client portals, and internal tools that remove the manual work eating your team's hours.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description:
      "Custom platforms, AI-driven personalization, and the integrations that connect your stack end to end.",
  },
  {
    icon: Truck,
    name: "Logistics & Operations",
    description:
      "Predictive systems, dashboards, and workflow automation for operations-heavy businesses at scale.",
  },
];

export const Industries = () => {
  return (
    <section className="relative bg-bg-secondary py-24 md:py-28 overflow-hidden border-y border-white/[0.06]">
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
              Industries
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-text-primary leading-[1.08] mb-5">
            Depth where it{" "}
            <span className="font-accent text-brand-primary text-[1.15em]">counts.</span>
          </h2>

          <p className="text-xs md:text-sm text-text-primary/55 leading-relaxed">
            We work across industries, with particular depth where operational complexity
            and the need for reliable systems run highest.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-bg-primary p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 mb-5">
                <industry.icon className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base font-black text-text-primary mb-2.5">
                {industry.name}
              </h3>
              <p className="text-sm text-text-primary/55 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-text-primary hover:text-brand-primary transition-colors border-b border-brand-primary pb-1"
          >
            Explore all industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
