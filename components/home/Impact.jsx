"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";
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

const stats = [
  { value: "50", suffix: "+", label: "AI Projects", sub: "Delivered to production" },
  { value: "98", suffix: "%", label: "Client Retention", sub: "Long-term partnerships" },
  { value: "12", suffix: "+", label: "Industries Served", sub: "Cross-sector expertise" },
  { value: "72", suffix: "h", label: "Avg. Prototype", sub: "Concept to working demo" },
];

const testimonials = [
  {
    quote:
      "Avrixo transformed our support operations. The AI system reduced triage time by 40% — our senior engineers finally focus on what matters.",
    name: "Sarah Mitchell",
    role: "CTO, MedFlow Health",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    tag: "Healthcare AI",
  },
  {
    quote:
      "The RAG system they built is genuinely enterprise-grade. It cites sources, respects data boundaries — compliance approved it without pushback.",
    name: "James Okafor",
    role: "Head of AI, AxisGrid Finance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    tag: "Fintech",
  },
  {
    quote:
      "From vague AI roadmap to live SaaS platform in 4 months. Avrixo's combination of strategy, design and engineering is rare in this market.",
    name: "Priya Sharma",
    role: "Co-Founder, CargoNet",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    tag: "Logistics",
  },
];

const clients = ["Nova Bank", "MedFlow", "AxisGrid", "CargoNet", "UrbanKey", "VentureIQ"];

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
            Proven Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] max-w-3xl"
          >
            Numbers that tell the{" "}
            <span className="text-brand-primary">real story.</span>
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

        {/* ── Main Split: Image + Testimonials ── */}
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop"
                alt="Avrixo team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-primary/10" />

              {/* Client logos strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">
                  Trusted by teams at
                </p>
                <div className="flex flex-wrap gap-2">
                  {clients.map((name) => (
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

          {/* Right: Testimonials */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
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

                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                  <Quote className="w-4 h-4 text-brand-primary/40" />
                </div>

                <p className="text-sm leading-relaxed text-text-primary/65 mb-5">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-sm font-black text-text-primary">{t.name}</div>
                    <div className="text-[11px] text-text-muted">{t.role}</div>
                  </div>
                </div>
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
                  Ready to be our next success story?
                </div>
                <div className="text-xs text-text-muted">
                  Let's build something intelligent together.
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
