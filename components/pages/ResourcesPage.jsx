"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Search, BarChart3, FileText } from "lucide-react";
import Link from "next/link";
import { resourceRoutes } from "@/lib/site-data";

const resourceVisuals = {
  "ai-transformation-playbook": {
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&h=480&fit=crop",
    icon: BookOpen,
    accentColor: "from-blue-500/15",
    tag: "Playbook",
  },
  "technical-due-diligence": {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=480&fit=crop",
    icon: Search,
    accentColor: "from-green-500/15",
    tag: "Due Diligence",
  },
  "enterprise-ai-readiness": {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&h=480&fit=crop",
    icon: BarChart3,
    accentColor: "from-purple-500/15",
    tag: "Assessment",
  },
  insights: {
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&h=480&fit=crop",
    icon: FileText,
    accentColor: "from-brand-primary/15",
    tag: "Insights Hub",
  },
};

export const ResourcesPage = () => {
  const enrichedAll = resourceRoutes.map((r) => ({
    ...r,
    ...(resourceVisuals[r.slug] || resourceVisuals["insights"]),
  }));
  const featuredResource = enrichedAll[0];
  const FeaturedIcon = featuredResource?.icon;

  return (
    <div>
      {/* ══ HERO — Dark ══ */}
      <section className="relative bg-bg-primary pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[600px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px]" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-primary/4 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
              >
                Knowledge Hub
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.05] mb-6"
              >
                Technical insight for leaders building{" "}
                <span className="text-brand-primary">AI-native products.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 }}
                className="text-sm leading-7 text-text-primary/50 max-w-lg"
              >
                Playbooks, readiness frameworks, and investor-facing technical diligence resources
                for serious buyers evaluating AI investment.
              </motion.p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "6", label: "Decision Checkpoints" },
                  { val: "48h", label: "Rapid Diligence" },
                  { val: "5", label: "Readiness Dimensions" },
                  { val: "R&D", label: "Research Translated" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="rounded-2xl border border-white/[0.08] bg-bg-secondary p-5 text-center"
                  >
                    <div className="text-2xl font-black text-brand-primary mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED RESOURCES — Light ══ */}
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
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4">
              Featured Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-text-dark">
              Before you build, <span className="text-brand-primary">read this.</span>
            </h2>
          </motion.div>

          {/* Top featured card */}
          {featuredResource && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <Link
                href={featuredResource.href}
                className="group grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-text-dark/[0.07] bg-white hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
              >
                <div className="relative min-h-[280px] lg:col-span-5 overflow-hidden">
                  <img
                    src={featuredResource.image}
                    alt={featuredResource.eyebrow}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white border border-white/30 bg-bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {featuredResource.tag}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      {FeaturedIcon ? <FeaturedIcon className="w-5 h-5 text-brand-primary" /> : null}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary">
                      {featuredResource.eyebrow}
                    </p>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-text-dark leading-tight mb-4">
                    {featuredResource.title}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-lg">
                    {featuredResource.summary}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-text-dark">
                      Read Resource
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Second row: 2 cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {enrichedAll.slice(1, 3).map((resource, i) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={resource.href}
                  className="group block rounded-3xl border border-text-dark/[0.07] bg-white overflow-hidden hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.eyebrow}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white border border-white/30 bg-bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {resource.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                        <resource.icon className="w-4 h-4 text-brand-primary" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary">
                        {resource.eyebrow}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-text-dark leading-snug mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
                      {resource.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-dark group-hover:text-brand-primary transition-colors">
                      Read More
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ALL RESOURCES LIST — Dark ══ */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-text-primary">
              All <span className="text-brand-primary">resources.</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {enrichedAll.map((resource, i) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={resource.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/[0.07] bg-bg-secondary hover:border-brand-primary/30 hover:bg-bg-muted transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-1">
                      {resource.eyebrow} · {resource.tag}
                    </div>
                    <div className="text-base font-black text-text-primary truncate">
                      {resource.title}
                    </div>
                    <div className="text-xs text-text-muted mt-1 line-clamp-1">
                      {resource.summary}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — Light ══ */}
      <section className="relative bg-bg-light py-24 overflow-hidden">
        <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-text-dark mb-4"
              >
                Have a specific question?{" "}
                <span className="text-brand-primary">Let's talk strategy.</span>
              </motion.h2>
              <p className="text-sm text-text-muted leading-relaxed max-w-lg">
                Avrixo will translate your technical constraint and business goal into a
                practical next-step plan within 24 hours.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-7 py-4 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-brand-hover transition-all hover:shadow-[0_0_40px_rgba(227,30,36,0.25)]"
              >
                Start a Project{" "}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                href="/schedule"
                className="flex items-center gap-2 px-7 py-4 border border-text-dark/15 text-text-dark font-semibold text-sm rounded-2xl hover:border-brand-primary/50 hover:text-brand-primary transition-all"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
