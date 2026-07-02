"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";

function AnimatedNumber({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseFloat(to);
    const isFloat = String(to).includes(".");
    const stepTime = duration / (end * (isFloat ? 10 : 1));
    const timer = setInterval(() => {
      start += isFloat ? 0.1 : 1;
      if (start >= end) {
        setVal(end);
        clearInterval(timer);
      } else {
        setVal(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {isNaN(val) ? to : val}
      {suffix}
    </span>
  );
}

// Honest, verifiable numbers drawn from real builds (StructumAI Estimating + Plans),
// not borrowed client claims.
const stats = [
  { value: "2", suffix: "", label: "Production SaaS platforms", sub: "Designed, built, and shipped end to end" },
  { value: "130", suffix: "+", label: "REST endpoints engineered", sub: "Across our shipped product builds" },
  { value: "15", suffix: "+", label: "Data tables modeled", sub: "Estimate-to-ledger financial core" },
  { value: "100", suffix: "%", label: "In-house delivery", sub: "Strategy, design, engineering, cloud" },
];

// What working with Avrixo actually looks like — replaces borrowed testimonials
// with commitments we can stand behind.
const principles = [
  {
    icon: Workflow,
    tag: "One team",
    title: "Strategy to deploy, no handoffs",
    body: "Product strategy, design, engineering, data, and cloud live under one roof — so the system that ships is the system that was planned.",
  },
  {
    icon: ShieldCheck,
    tag: "Fixed scope",
    title: "Clear SOW, no surprises",
    body: "Milestones, deliverables, and acceptance criteria are agreed before we build. You always know the cost, the timeline, and what 'done' means.",
  },
  {
    icon: Layers,
    tag: "Production-grade",
    title: "Real systems, not demos",
    body: "Multi-tenant data models, permissions, audit trails, and security shaped from day one — the same standard behind StructumAI.",
  },
];

const buildTraits = ["Multi-tenant", "Real-time", "AIA billing", "Cloud-native", "Audit-ready"];

export const Impact = () => {
  return (
    <section className="relative bg-bg-primary py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
        <div className="absolute left-[-100px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-brand-primary/4 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4"
          >
            How we work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] max-w-3xl"
          >
            Proof in the work, not the{" "}
            <span className="text-brand-primary">pitch.</span>
          </motion.h2>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-bg-secondary p-6 lg:p-7 overflow-hidden hover:border-brand-primary/30 transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(227,30,36,0.07) 0%, transparent 70%)",
                }}
              />
              <div className="text-4xl lg:text-5xl font-black text-brand-primary mb-2 tabular-nums">
                <AnimatedNumber to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-text-primary mb-0.5">{stat.label}</div>
              <div className="text-xs text-text-muted">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Main Split: Image + Principles ── */}
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Left: Cinematic image block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative h-[320px] lg:h-full min-h-[480px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=900&fit=crop"
                alt="Avrixo engineering team building production software systems"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-primary/10" />

              {/* Capability strip at bottom (honest — describes what we build) */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">
                  What we build
                </p>
                <div className="flex flex-wrap gap-2">
                  {buildTraits.map((name) => (
                    <span
                      key={name}
                      className="text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-5 left-5">
                <div className="flex items-center gap-2 bg-brand-primary/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    Actively Shipping
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Working principles */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-bg-secondary p-6 hover:border-brand-primary/25 hover:bg-bg-muted transition-all duration-300 overflow-hidden flex-1"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(227,30,36,0.04) 0%, transparent 60%)",
                  }}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <p.icon className="w-4 h-4 text-brand-primary/50" />
                </div>

                <h3 className="text-base font-black text-text-primary mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-text-primary/60">
                  {p.body}
                </p>
              </motion.div>
            ))}

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-5 flex items-center justify-between gap-4"
            >
              <div>
                <div className="text-sm font-black text-text-primary mb-0.5">
                  Have a system you need built right?
                </div>
                <div className="text-xs text-text-muted">
                  Get a fixed-scope proposal — clear cost, timeline, and milestones.
                </div>
              </div>
              <Link
                href="/contact"
                className="group flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-brand-primary text-white font-black text-xs rounded-xl hover:bg-brand-hover transition-all"
              >
                Start Now{" "}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
