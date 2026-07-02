"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Code2, Rocket, Gauge, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Audit",
    tag: "Discovery",
    Icon: Search,
    description:
      "We map your data, business objectives, and constraints to find the highest-leverage opportunity worth building.",
  },
  {
    id: "02",
    name: "Architect",
    tag: "Scope & SOW",
    Icon: FileText,
    description:
      "Architecture, integrations, and a fixed-scope statement of work with milestones and acceptance criteria — agreed before a single line of code.",
  },
  {
    id: "03",
    name: "Engineer",
    tag: "Development",
    Icon: Code2,
    description:
      "Agile sprints, clean documented code, and rigorous testing at every layer — from data integrity to API reliability to UI performance.",
  },
  {
    id: "04",
    name: "Launch",
    tag: "Deployment",
    Icon: Rocket,
    description:
      "Zero-downtime releases via automated CI/CD. Your system goes live with security, permissions, and full observability from day one.",
  },
  {
    id: "05",
    name: "Refine",
    tag: "Optimization",
    Icon: Gauge,
    description:
      "Real usage drives iteration — performance tuning, UX refinement, and reliability work. We don't disappear after delivery.",
  },
  {
    id: "06",
    name: "Elevate",
    tag: "Scale",
    Icon: TrendingUp,
    description:
      "Production-grade scaling. From first users to high volume — infrastructure and systems that grow without friction.",
  },
];

export const Methodology = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-bg-light py-24 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted mb-3">
            How We Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-4xl md:text-5xl font-black text-text-dark leading-tight">
              Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #e31e24, #ff3d43)",
                }}
              >
                Methodology
              </span>
            </h2>

            <p className="text-sm text-text-muted max-w-sm leading-relaxed md:text-right">
              A proven process for building scalable AI
              <br className="hidden md:block" /> and digital solutions.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="h-px bg-black/[0.08] w-full" />

          {steps.map((step, i) => {
            const isHovered = hovered === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHovered(step.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(hovered === step.id ? null : step.id)}
                className="relative group cursor-pointer"
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(227,30,36,0.04) 0%, rgba(227,30,36,0.02) 60%, transparent 100%)",
                  }}
                />

                {/* Left red bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-primary origin-top"
                  animate={{
                    scaleY: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                />

                {/* Row content */}
                <div className="relative flex items-center gap-6 py-6 px-4">
                  {/* Number */}
                  <span
                    className="text-[52px] font-black tabular-nums leading-none
                    select-none transition-colors duration-300 min-w-[90px]"
                    style={{
                      color: isHovered ? "#e31e24" : "rgba(0,0,0,0.08)",
                    }}
                  >
                    {step.id}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-2xl font-black text-text-dark">
                        {step.name}
                      </h3>

                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isHovered
                            ? "rgba(227,30,36,0.3)"
                            : "rgba(0,0,0,0.08)",
                          color: isHovered ? "#e31e24" : "#737373",
                          background: isHovered
                            ? "rgba(227,30,36,0.06)"
                            : "transparent",
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* Description (space always reserved) */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm text-text-muted leading-relaxed max-w-md mt-2 h-[48px]"
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Icon badge */}
                  <div className="flex-shrink-0 ml-auto">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1 : 0.92,
                        borderColor: isHovered
                          ? "rgba(227,30,36,0.35)"
                          : "rgba(0,0,0,0.08)",
                        backgroundColor: isHovered
                          ? "rgba(227,30,36,0.06)"
                          : "rgba(0,0,0,0.02)",
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border"
                    >
                      <step.Icon
                        className="h-7 w-7 transition-colors duration-300"
                        style={{ color: isHovered ? "#e31e24" : "#737373" }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/[0.06] mx-4" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
