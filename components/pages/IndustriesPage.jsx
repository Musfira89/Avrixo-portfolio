"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { industryRoutes } from "@/lib/site-data";

const industryVisuals = {
  "healthcare-ai": {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=550&fit=crop",
    color: "#3b82f6",
    badge: "HIPAA-aware",
  },
  "fintech-risk": {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=550&fit=crop",
    color: "#10b981",
    badge: "Explainable AI",
  },
  "logistics-automation": {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=550&fit=crop",
    color: "#f59e0b",
    badge: "Real-time ops",
  },
  "real-estate-intelligence": {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=550&fit=crop",
    color: "#8b5cf6",
    badge: "Portfolio intelligence",
  },
};

export const IndustriesPage = () => {
  const [hovered, setHovered] = useState(null);

  const enriched = industryRoutes.map((r) => ({
    ...r,
    ...(industryVisuals[r.slug] || {}),
  }));

  return (
    <div>
      {/* ══ HERO — Dark ══ */}
      <section className="relative bg-bg-primary pt-36 pb-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-[700px] h-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Full-width hero image strip */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
              >
                Industries
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] mb-6"
              >
                Transformation patterns for{" "}
                <span className="text-brand-primary">data-heavy markets.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 }}
                className="text-sm leading-7 text-text-primary/50 max-w-lg"
              >
                Avrixo adapts AI and product engineering to the operating realities of
                healthcare, fintech, logistics, real estate, and other complex sectors.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "Construction", label: "Proven Domain (StructumAI)" },
                  { val: "2", label: "SaaS Platforms Shipped" },
                  { val: "Domain", label: "Aware Architecture" },
                  { val: "99.9%", label: "Uptime Target" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="rounded-2xl border border-white/[0.08] bg-bg-secondary p-5 text-center"
                  >
                    <div className="text-2xl font-black text-brand-primary mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal image scroll for industries */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {enriched.map((ind, i) => (
              <Link
                key={ind.slug}
                href={ind.href}
                className="group flex-shrink-0 relative w-40 h-24 rounded-2xl overflow-hidden border border-white/[0.08] hover:border-brand-primary/40 transition-all"
              >
                <img src={ind.image} alt={ind.eyebrow} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-bg-primary/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-black text-white/80 group-hover:text-white transition-colors text-center px-2">
                    {ind.eyebrow}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRY CARDS — Light ══ */}
      <section className="relative bg-bg-light py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black text-text-dark">
              Domain-first <span className="text-brand-primary">delivery.</span>
            </h2>
            <p className="mt-3 text-sm text-text-muted max-w-lg leading-relaxed">
              Industry context changes everything. We design around those constraints before
              writing a single line of production code.
            </p>
          </motion.div>

          <div className="space-y-5">
            {enriched.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(industry.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={industry.href}
                  className="group grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-text-dark/[0.07] bg-white hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-400"
                >
                  {/* Image - alternating left/right */}
                  <div
                    className={`relative min-h-[260px] lg:min-h-0 overflow-hidden ${
                      i % 2 === 0 ? "lg:col-span-5 order-1" : "lg:col-span-5 order-1 lg:order-2"
                    }`}
                  >
                    <img
                      src={industry.image}
                      alt={industry.eyebrow}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[260px]"
                    />
                    {/* Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {industry.badge}
                      </span>
                    </div>
                    {/* Stat overlay */}
                    <div className="absolute bottom-5 left-5">
                      <div className="rounded-xl bg-bg-primary/80 backdrop-blur-sm border border-white/10 px-4 py-2.5">
                        <div className="text-xl font-black text-brand-primary">{industry.stat}</div>
                        <div className="text-[9px] text-white/50 font-medium mt-0.5 max-w-[120px] leading-tight">
                          {industry.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center ${
                      i % 2 === 0 ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-3">
                      {industry.eyebrow}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-black text-text-dark leading-tight mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-lg">
                      {industry.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-8">
                      {industry.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-text-muted leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-black uppercase tracking-widest text-text-dark">
                          Explore {industry.eyebrow}
                        </div>
                        <div className="text-[10px] text-text-muted">View full breakdown</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — Dark ══ */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-primary/6 blur-[100px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
          >
            Your Industry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black text-text-primary mb-5 max-w-2xl mx-auto"
          >
            Don't see your industry?{" "}
            <span className="text-brand-primary">Let's talk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-text-primary/50 text-sm mb-8 max-w-lg mx-auto"
          >
            Patterns from one sector often unlock value in another. We bring proven approaches
            into new environments without flattening domain requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-4 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-brand-hover transition-all hover:shadow-[0_0_40px_rgba(227,30,36,0.35)]"
            >
              Start a Conversation{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 px-7 py-4 border border-white/15 text-white font-semibold text-sm rounded-2xl hover:border-brand-primary/50 transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
