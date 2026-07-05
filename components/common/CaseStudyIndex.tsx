"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

const heroStats = [
  { value: "12", label: "Documented case studies" },
  { value: "10", label: "Industries & domains" },
  { value: "100%", label: "Designed & built in-house" },
];

export function CaseStudyIndex() {
  return (
    <div className="bg-bg-primary text-text-primary">
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-36 pb-16 border-b border-white/[0.06]">
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
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-5"
              >
                Case Study Library
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
              >
                Real products we&apos;ve designed,{" "}
                <span className="text-brand-primary">built, and shipped.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13 }}
              className="lg:col-span-4 text-sm leading-7 text-text-primary/60"
            >
              Each project is documented as a technical case study: the core problem,
              the solution we engineered, the stack we used, and the architecture behind it.
            </motion.p>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-brand-primary">
                  {stat.value}
                </div>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] leading-4 text-text-primary/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CASE STUDY GRID ══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08 }}
                className="h-full"
              >
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/5"
                >
                  {/* Cover — 16:10 matches the generated covers, so nothing is cropped */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-bg-primary/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                        {study.label}
                      </span>
                    </div>
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                      <span>{study.category}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-primary" />
                      <span>{study.year}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black tracking-tight leading-snug">
                      {study.title}
                    </h2>

                    <p className="mt-3 mb-6 text-sm leading-6 text-text-primary/60 line-clamp-2">
                      {study.subtitle}
                    </p>

                    {/* Metrics */}
                    <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/[0.07] pt-5">
                      {study.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label}>
                          <div className="text-lg font-black leading-tight text-brand-primary">
                            {metric.value}
                          </div>
                          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider leading-3 text-text-primary/55 line-clamp-2">
                            {metric.label}
                          </p>
                        </div>
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
