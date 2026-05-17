"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, BarChart3, Database, ExternalLink } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

const stats = [
  { val: "50+", label: "Projects Delivered" },
  { val: "2", label: "Featured Case Studies" },
  { val: "12+", label: "Industries" },
  { val: "100%", label: "Outcome-Led" },
];

const proofPoints = [
  {
    icon: FileText,
    title: "Abstract-first",
    body: "Decision makers can scan the commercial thesis before diving into technical depth.",
  },
  {
    icon: Database,
    title: "Architecture visible",
    body: "Each study documents data, AI, backend, frontend, and infrastructure choices.",
  },
  {
    icon: BarChart3,
    title: "Outcome-led",
    body: "Metrics and operational signals treated as core parts of the product narrative.",
  },
];

export const PortfolioPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      {/* ══ HERO — Dark ══ */}
      <section className="relative bg-bg-primary pt-36 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-28 w-[500px] h-[500px] rounded-full bg-brand-primary/6 blur-[120px]" />
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-primary/4 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-10 items-end pb-16">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
              >
                Avrixo Research Portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] mb-5"
              >
                SaaS case studies written like{" "}
                <span className="text-brand-primary">technical research papers.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 }}
                className="text-sm leading-7 text-text-primary/50 max-w-xl"
              >
                Each study is structured for enterprise buyers: abstract, core problem,
                technical solution, stack matrix, and measurable business outcomes.
              </motion.p>
            </div>

            {/* Stats mini grid */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="rounded-2xl border border-white/[0.08] bg-bg-secondary p-4 text-center"
                  >
                    <div className="text-xl font-black text-brand-primary mb-0.5">{s.val}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-text-muted leading-tight">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Banner image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-56 md:h-72 rounded-t-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=500&fit=crop"
              alt="AI development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ══ CASE STUDIES — Light ══ */}
      <section className="bg-bg-light py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-text-dark">
              Featured <span className="text-brand-primary">work.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/case-studies/${study.id}`}
                  onMouseEnter={() => setHoveredCard(study.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-text-dark/[0.07] bg-white hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-400"
                >
                  {/* Image */}
                  <div
                    className={`relative min-h-[260px] lg:min-h-0 overflow-hidden ${
                      i % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
                    {/* Label */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 bg-bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {study.label}
                      </span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-1"} p-8 lg:p-10 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
                        <span>{study.category}</span>
                        <span className="w-1 h-1 rounded-full bg-brand-primary" />
                        <span>{study.year}</span>
                        <span className="w-1 h-1 rounded-full bg-brand-primary" />
                        <span>{study.duration}</span>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-black text-text-dark leading-tight mb-3">
                        {study.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-5 max-w-lg">
                        {study.subtitle}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl border border-text-dark/[0.06] bg-bg-light p-3"
                          >
                            <div className="text-xl font-black text-brand-primary mb-0.5">
                              {metric.value}
                            </div>
                            <p className="text-[9px] leading-4 text-text-muted font-medium uppercase tracking-wider">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-text-dark/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROOF POINTS — Dark ══ */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-text-primary">
              The Avrixo{" "}
              <span className="text-brand-primary">proof standard.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {proofPoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-bg-secondary p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-base font-black text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-bg-secondary p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Your next case study starts with a 30-minute strategy call. Avrixo will translate
                  your goal into a practical, buildable path.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-7 py-4 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-brand-hover transition-all hover:shadow-[0_0_40px_rgba(227,30,36,0.35)]"
                >
                  Start a Project{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center gap-2 px-7 py-4 border border-white/15 text-white font-semibold text-sm rounded-2xl hover:border-brand-primary/50 transition-all"
                >
                  Full Archive
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
