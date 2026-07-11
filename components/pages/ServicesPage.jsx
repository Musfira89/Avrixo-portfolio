"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Brain, BarChart3, Eye, Database, Cloud, Palette, Megaphone, GitBranch, Bot } from "lucide-react";
import Link from "next/link";
import { serviceRoutes } from "@/lib/site-data";

const serviceDetails = [
  {
    slug: "ai-automation",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop",
    color: "from-blue-500/10",
  },
  {
    slug: "generative-ai-rag",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    color: "from-purple-500/10",
  },
  {
    slug: "saas-product-engineering",
    icon: GitBranch,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    color: "from-green-500/10",
  },
  {
    slug: "data-platforms",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    color: "from-yellow-500/10",
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    color: "from-cyan-500/10",
  },
  {
    slug: "ui-ux-product-design",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    color: "from-pink-500/10",
  },
];

// Short badge tags for service cards — full `highlights` sentences don't fit
// a pill without mid-word truncation, so cards use these instead.
const serviceCardTags = {
  "ai-automation": ["Workflow Automation", "Human-in-the-Loop"],
  "generative-ai-rag": ["Source Citations", "Hallucination Testing"],
  "saas-product-engineering": ["Multi-Tenant Architecture", "Billing-Ready Models"],
  "data-platforms": ["ETL Pipelines", "Data Lineage"],
  "cloud-devops": ["AWS + Serverless", "CI/CD Pipelines"],
  "ui-ux-product-design": ["Design Systems", "AI Interaction Patterns"],
};

export const ServicesPage = () => {
  const [hovered, setHovered] = useState(null);

  // Merge serviceRoutes data with visual details
  const enriched = serviceRoutes.map((route) => {
    const detail = serviceDetails.find((d) => d.slug === route.slug) || serviceDetails[0];
    return { ...route, ...detail };
  });

  return (
    <div>
      {/* ══ HERO — Light ══ */}
      <section className="relative bg-bg-light overflow-hidden pt-36 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
        <div className="absolute right-0 top-20 w-[400px] h-[400px] rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
              >
                Capabilities
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] mb-6"
              >
                AI, SaaS, data, and cloud services for{" "}
                <span className="text-brand-primary">production-minded</span> teams.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 }}
                className="text-sm leading-7 text-text-muted max-w-xl mb-8"
              >
                Avrixo links strategy, design, engineering, data, and cloud operations so your
                final product can actually be used, maintained, and scaled.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {["6 Service Lines", "One Delivery Team", "Production-First"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-4 py-2 rounded-full bg-brand-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Stacked mini visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative h-64">
                {serviceDetails.slice(0, 3).map((s, i) => (
                  <div
                    key={s.slug}
                    className="absolute rounded-2xl overflow-hidden border border-text-dark/10 shadow-lg"
                    style={{
                      width: `${80 - i * 8}%`,
                      height: "80px",
                      top: `${i * 56}px`,
                      left: `${i * 16}px`,
                      zIndex: 3 - i,
                    }}
                  >
                    <img src={s.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                        <s.icon className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <span className="text-xs font-black text-text-dark">
                        {serviceRoutes[i]?.eyebrow}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID — Dark ══ */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-brand-primary/4 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black text-text-primary">
              What we <span className="text-brand-primary">build.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {enriched.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={service.href}
                  onMouseEnter={() => setHovered(service.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="group block rounded-2xl border border-white/[0.08] bg-bg-secondary overflow-hidden hover:border-brand-primary/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.eyebrow}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/30 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-primary/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-brand-primary" />
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-2">
                      {service.eyebrow}
                    </p>
                    <h3 className="text-base font-black text-text-primary leading-tight mb-3 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      {service.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(serviceCardTags[service.slug] || []).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wider text-text-muted border border-white/[0.06] px-2.5 py-1 rounded-full"
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

      {/* ══ WHY AVRIXO — Light ══ */}
      <section className="relative bg-bg-light py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image collage */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-72">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                    alt="Avrixo team strategy session"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-5 -right-4 rounded-2xl border border-text-dark/10 bg-white p-4 shadow-xl shadow-brand-primary/5">
                  <div className="text-2xl font-black text-brand-primary mb-0.5">2x</div>
                  <div className="text-[11px] text-text-muted font-medium">
                    Faster stakeholder alignment
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why points */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4">
                  Why Avrixo
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-text-dark leading-tight">
                  Architecture and implementation{" "}
                  <span className="text-brand-primary">planned together from the start.</span>
                </h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    title: "One team, all capabilities",
                    body: "No handoffs between strategy, design, and engineering — one team owns the outcome.",
                  },
                  {
                    title: "Production-first thinking",
                    body: "We design for reliability, security, and adoption before the first line of code.",
                  },
                  {
                    title: "Procurement-friendly delivery",
                    body: "Clear SOWs, milestones, acceptance criteria, and governance built into every engagement.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-text-dark/[0.06] bg-white hover:border-brand-primary/25 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="text-sm font-black text-text-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA Banner — Dark ══ */}
      <section className="relative bg-bg-primary overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=500&fit=crop"
            alt="Development"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-bg-primary/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-2">
                    Not sure which service you need?
                  </h2>
                  <p className="text-text-muted text-sm">
                    Book a 30-min strategy call and we'll map out the right path.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 flex-shrink-0">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 px-7 py-4 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-brand-hover transition-all"
                  >
                    Start a Project{" "}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </Link>
                  <Link
                    href="/schedule"
                    className="flex items-center gap-2 px-7 py-4 border border-white/15 text-white font-semibold text-sm rounded-2xl hover:border-brand-primary/50 transition-all"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
