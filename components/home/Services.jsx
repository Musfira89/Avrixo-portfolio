"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 0,
    tab: "AI Solutions",
    headline: "AI That Answers, Assists, and Acts: Grounded in Your Data",
    description:
      "Generative AI, RAG, LLM integrations, and AI agents that give your team trusted answers and automate the busywork, with citations, guardrails, and evaluation built in, not a chatbot demo.",
    tags: ["RAG Pipelines", "AI Agents & Chatbots", "Answer Guardrails"],
    href: "/services/ai-solutions",
  },
  {
    id: 1,
    tab: "Custom Software",
    headline: "Web Apps and Portals Built Around How Your Team Works",
    description:
      "Custom web applications, internal tools, dashboards, and client-facing platforms, interfaces that make complex systems feel usable, backed by architecture that holds up in production.",
    tags: ["Design Systems", "Custom Web Apps", "Internal Tools"],
    href: "/services/custom-software",
  },
  {
    id: 2,
    tab: "Intelligent Automation",
    headline: "Remove Operational Drag Without Losing Control",
    description:
      "AI-assisted workflows and data pipelines that connect disconnected tools, classify requests, route decisions, and execute repeatable business processes end to end.",
    tags: ["Workflow Automation", "System Integrations", "Human-in-the-loop"],
    href: "/services/intelligent-automation",
  },
  {
    id: 3,
    tab: "SaaS Product Engineering",
    headline: "Multi-Tenant Platforms Built to Scale",
    description:
      "From first MVP to full-scale product: clean architecture, secure tenancy, billing-ready data models, and cloud infrastructure from day one, the same discipline behind our StructumAI platforms.",
    tags: ["Product Architecture", "Multi-Tenant", "MVP to Scale"],
    href: "/services/saas-product-engineering",
  },
];
export const Services = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="relative bg-bg-light py-28 overflow-hidden min-h-screen flex items-center">
      {/* ── Decorative orbit rings (bg only) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {[750, 500, 300].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand-primary/[0.08]"
            style={{ width: size, height: size }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 50 + i * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span
              className="absolute w-2 h-2 rounded-full bg-brand-primary/30 blur-[1px]"
              style={{
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        {/* ── Section Header ── */}
        <div className="mb-15">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-text-dark tracking-tight"
          >
            Our <span className="text-brand-primary">Services.</span>
          </motion.h2>
        </div>

        {/* ── Grid: numbered list (left) + detail panel (right) ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT — Modern Numbered List with Sliding Indicator */}
          <div className="lg:col-span-5 relative">
            {/* Sliding Pillar Indicator - Fixed Calculation */}
            <motion.div
              className="absolute left-0 w-1 bg-brand-primary rounded-full z-20"
              animate={{
                top: active * 52 + 10,
                height: 32, // Height thodi kam ki taake number ke size se match kare
              }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            />

            {/* Container with thin border */}
            <div className="space-y-0 border-l border-black/[0.05]">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-center gap-6 py-2 pl-8 text-left transition-all duration-500 ${
                    active === i
                      ? "opacity-100 translate-x-2"
                      : "opacity-30 hover:opacity-60"
                  }`}
                  style={{ height: "52px" }} // Explicit height taake indicator sync na bigre
                >
                  <span
                    className={`text-3xl font-black tabular-nums tracking-tighter transition-colors duration-300 ${
                      active === i ? "text-brand-primary" : "text-text-dark"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      active === i ? "text-text-dark" : "text-text-muted"
                    }`}
                  >
                    {s.tab}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Immersive Detail View */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 flex flex-col justify-center min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                {/* Visual Watermark Number — decorative only, hidden below lg to avoid overflow/collision on narrow layouts */}
                <div className="hidden lg:block absolute -top-32 -left-7 text-[180px] font-black text-black/[0.05] select-none pointer-events-none z-0">
                  {String(active + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-text-dark leading-[1.1] mb-8 uppercase tracking-normal">
                    {current.headline}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-xl">
                    {current.description}
                  </p>

                  {/* Sub-service tags */}
                  <div className="flex flex-wrap gap-2 mb-12">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-4 py-2 rounded-full border border-black/[0.06] bg-white text-text-muted uppercase tracking-widest shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="flex items-center gap-10">
                    <Link
                      href={current.href}
                      className="group flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-brand-primary/ transition-all duration-500 shadow-xl shadow-black/10">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-text-dark">
                          Explore Service
                        </span>
                        <span className="text-[10px] text-text-muted font-medium italic">
                          Detailed breakdown
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Animated Line with Glow */}
                  <div className="relative mt-16 w-full h-[2px] bg-black/5 overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
