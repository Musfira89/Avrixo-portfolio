"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudyIndex() {
  return (
    <div className="bg-bg-primary text-text-primary">
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-36 pb-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-28 h-[500px] w-[500px] rounded-full bg-brand-primary/6 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-primary/4 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end pb-14">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-5"
              >
                Avrixo Research Portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5"
              >
                SaaS case studies written like{" "}
                <span className="text-brand-primary">technical research papers.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13 }}
              className="lg:col-span-4 text-sm leading-7 text-text-primary/55"
            >
              Each study is structured for enterprise buyers: abstract, core problem,
              technical solution, stack matrix, and measurable business outcomes.
            </motion.p>
          </div>

          {/* Banner image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=400&fit=crop"
              alt="Research portfolio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ══ CASE STUDY LIST ══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-bg-secondary transition-all duration-400 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/5"
                >
                  {/* Image */}
                  <div className="relative min-h-[260px] lg:col-span-4 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-bg-primary/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                        {study.label}
                      </span>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-5">
                      <span>{study.category}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-primary" />
                      <span>{study.year}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-primary" />
                      <span>{study.duration}</span>
                    </div>

                    <div className="flex items-start justify-between gap-6 mb-4">
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                        {study.title}
                      </h2>
                      <div className="hidden h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-primary text-white transition-transform group-hover:rotate-45 md:flex">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-text-primary/55 mb-7">
                      {study.subtitle}
                    </p>

                    <div className="grid gap-3 md:grid-cols-3 mb-7">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/[0.07] bg-bg-primary p-4"
                        >
                          <div className="text-2xl font-black text-brand-primary mb-1">
                            {metric.value}
                          </div>
                          <p className="text-[10px] leading-4 text-text-primary/50 font-medium uppercase tracking-wider">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-text-primary/45"
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

          {/* Proof points */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Abstract-first",
                body: "Decision makers can scan the commercial thesis before entering technical depth.",
              },
              {
                icon: Database,
                title: "Architecture visible",
                body: "Each study documents data, AI, backend, frontend, and infrastructure choices.",
              },
              {
                icon: BarChart3,
                title: "Outcome-led",
                body: "Metrics and operational signals are treated as part of the product narrative.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-bg-secondary p-6"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="mt-1 text-base font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-primary/55">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
