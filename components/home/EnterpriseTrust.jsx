"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Star, TrendingUp } from "lucide-react";

const trustLogos = [
  "NOVA BANK",
  "MEDFLOW",
  "AXISGRID",
  "CARGONET",
  "URBANKEY",
  "VENTURE IQ",
];

const proofSignals = [
  {
    icon: ShieldCheck,
    label: "Enterprise-safe delivery",
    body: "Discovery, architecture, access control, and release planning are documented before production rollout.",
  },
  {
    icon: TrendingUp,
    label: "Outcome reporting",
    body: "Projects are framed around adoption, cycle-time reduction, model quality, and operating metrics.",
  },
  {
    icon: Star,
    label: "Partner-ready profile",
    body: "Procurement-friendly presentation for Upwork-driven buyers, founders, SMEs, and investor-backed teams.",
  },
];

export const EnterpriseTrust = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24 text-text-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-brand-primary/5 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary"
            >
              Client Trust and Social Proof
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl font-black tracking-tight"
            >
              Built to look credible before the first sales call.
            </motion.h2>
          </div>
          <p className="lg:col-span-5 text-sm leading-7 text-text-primary/60">
            Avrixo presents like an enterprise partner: crisp proof points, procurement-friendly
            trust signals, and visible technical maturity for buyers evaluating risk.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-bg-secondary p-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {trustLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-bg-primary"
                >
                  <span className="text-center text-xs font-black tracking-[0.26em] text-text-primary/35 transition-colors group-hover:text-brand-primary">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl border border-brand-primary/30 bg-bg-secondary p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
                  Upwork Trust Badge
                </p>
                <h3 className="mt-3 text-2xl font-black">Partner-ready delivery</h3>
              </div>
              <div className="relative h-14 w-24 overflow-hidden rounded-xl border border-white/10 bg-text-primary p-2">
                <Image src="/upwork.png" alt="Upwork" fill className="object-contain p-2" />
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-text-primary/60">
              Configured for B2B buyers who want a clear path from proposal to technical
              discovery, milestone planning, and delivery governance.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {proofSignals.map((signal) => (
            <div key={signal.label} className="rounded-3xl border border-white/10 bg-bg-secondary p-6">
              <signal.icon className="h-6 w-6 text-brand-primary" />
              <h3 className="mt-5 text-lg font-black">{signal.label}</h3>
              <p className="mt-3 text-sm leading-6 text-text-primary/60">{signal.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
