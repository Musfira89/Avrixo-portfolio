"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Target, Lightbulb, Users, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Areeba Khan",
    role: "CEO & AI Strategist",
    bio: "10+ years shaping AI systems for enterprise clients across healthcare, fintech, and logistics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    tag: "Strategy",
  },
  {
    name: "Omar Siddiqui",
    role: "Lead Architect",
    bio: "Expert in RAG pipelines, vector databases, and scalable cloud infrastructure for AI-native products.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    tag: "Architecture",
  },
  {
    name: "Zara Malik",
    role: "Head of Product Design",
    bio: "Designing AI interfaces that make complex systems feel intuitive, trusted, and easy to adopt.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    tag: "Design",
  },
  {
    name: "Hassan Ali",
    role: "ML Engineering Lead",
    bio: "Building and deploying production ML models with a focus on reliability, explainability, and scale.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    tag: "Engineering",
  },
  {
    name: "Nadia Rehan",
    role: "Data Platform Specialist",
    bio: "Designing data pipelines, warehouses, and analytics systems that power decision-making at scale.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    tag: "Data",
  },
  {
    name: "Bilal Farooq",
    role: "DevOps & Cloud Lead",
    bio: "Building resilient cloud infrastructure with zero-downtime deployments and full observability.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    tag: "Infrastructure",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcome-First",
    body: "Every decision — from architecture to UX — is measured against the business outcome it needs to support.",
  },
  {
    icon: Lightbulb,
    title: "Clarity Over Complexity",
    body: "We explain AI systems in plain language so leaders can make informed decisions at every stage.",
  },
  {
    icon: Users,
    title: "Partnership, Not Vendor",
    body: "We embed into your team's thinking, timeline, and goals — not just the code.",
  },
  {
    icon: Globe,
    title: "Built for Scale",
    body: "Architecture decisions account for the next 3 years, not just the next sprint.",
  },
];

const subRoutes = [
  {
    href: "/about/ai-research-lab",
    label: "AI Research Lab",
    desc: "How we validate AI strategy before committing to production builds.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=260&fit=crop",
  },
  {
    href: "/about/leadership",
    label: "Leadership",
    desc: "Senior technical direction for high-stakes product decisions.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=260&fit=crop",
  },
  {
    href: "/careers",
    label: "Careers",
    desc: "Build meaningful AI products with a craft-focused team.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=260&fit=crop",
  },
];

export const AboutPage = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  return (
    <div>
      {/* ══ HERO — Dark ══ */}
      <section className="relative bg-bg-primary overflow-hidden pt-36 pb-0">
        {/* Ambient glow */}
        <div className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-0 items-end">
            {/* Left text */}
            <div className="lg:col-span-6 pb-16 lg:pb-24">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-6"
              >
                Company
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.06] mb-7"
              >
                AI product operators for{" "}
                <span className="text-brand-primary">ambitious</span> digital businesses.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-sm leading-7 text-text-primary/55 max-w-lg mb-10"
              >
                Avrixo partners with founders, enterprises, and transformation leaders to turn
                AI strategy into secure, measurable software systems — from first conversation
                to production launch.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-black text-sm rounded-xl hover:bg-brand-hover transition-all hover:shadow-[0_0_40px_rgba(227,30,36,0.35)]"
                >
                  Start a Project{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white font-semibold text-sm rounded-xl hover:border-brand-primary/50 transition-all"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right: Hero image — bleeds to bottom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 relative h-[380px] lg:h-[540px] overflow-hidden rounded-t-3xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop"
                alt="Avrixo team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/20 to-transparent" />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-bg-primary/70 backdrop-blur-md px-5 py-4">
                <div className="text-3xl font-black text-brand-primary">50+</div>
                <div className="text-xs text-text-primary/60 mt-0.5">AI systems shipped</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ MISSION — Light ══ */}
      <section className="relative bg-bg-light py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bold quote */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute -top-8 -left-4 text-[140px] font-black leading-none select-none pointer-events-none"
                  style={{ color: "rgba(227,30,36,0.06)" }}
                >
                  "
                </div>
                <blockquote className="relative z-10">
                  <p className="text-2xl md:text-3xl font-black text-text-dark leading-[1.3] mb-6">
                    We combine consulting discipline with product engineering execution.
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Strategy, design, data, AI, and deployment decisions are made together so the final
                    system is commercially useful, technically durable, and ready for adoption.
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Right: Mission cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Operating Model",
                  body: "Senior delivery standards for SaaS, data platforms, automation, and AI workflows — all in one team.",
                  tag: "01",
                },
                {
                  title: "Why Avrixo",
                  body: "We focus on the hard middle layer between prototype and production: data quality, architecture, security, usability, and stakeholder alignment.",
                  tag: "02",
                },
                {
                  title: "Who We Serve",
                  body: "Built for founders, enterprise leaders, and investor-backed teams who need clarity, velocity, and measurable business outcomes.",
                  tag: "03",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.tag}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl border border-text-dark/[0.07] bg-white hover:border-brand-primary/30 transition-all group"
                >
                  <span className="text-3xl font-black text-brand-primary/15 group-hover:text-brand-primary/25 transition-colors select-none mt-1">
                    {item.tag}
                  </span>
                  <div>
                    <h3 className="text-base font-black text-text-dark mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR — Dark ══ */}
      <section className="bg-bg-primary border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "12+", label: "Industries" },
              { value: "2026", label: "Actively Shipping" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-brand-primary mb-1">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM — Light ══ */}
      <section className="relative bg-bg-light py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4">
              The Team
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-text-dark leading-tight max-w-xl">
                Senior builders,{" "}
                <span className="text-brand-primary">not entry-level freelancers.</span>
              </h2>
              <p className="text-sm text-text-muted max-w-xs leading-relaxed md:text-right">
                Every project is led and delivered by experienced specialists.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={() => setHoveredTeam(member.name)}
                onMouseLeave={() => setHoveredTeam(null)}
                className="group relative rounded-2xl border border-text-dark/[0.07] bg-white overflow-hidden hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                    {member.tag}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-black text-text-dark mb-0.5">{member.name}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">{member.bio}</p>
                </div>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-brand-primary"
                  animate={{ width: hoveredTeam === member.name ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES — Dark ══ */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-20 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-4">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary leading-tight">
              What drives{" "}
              <span className="text-brand-primary">every decision.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-bg-secondary p-7 hover:border-brand-primary/30 hover:bg-bg-muted transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors">
                  <v.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-base font-black text-text-primary mb-3">{v.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUB ROUTES — Light ══ */}
      <section className="bg-bg-light py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-text-dark">
              Explore <span className="text-brand-primary">Avrixo</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {subRoutes.map((route, i) => (
              <motion.div
                key={route.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={route.href}
                  className="group block rounded-2xl overflow-hidden border border-text-dark/[0.07] bg-white hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={route.img}
                      alt={route.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-black text-text-dark">{route.label}</h3>
                      <ArrowUpRight className="w-4 h-4 text-brand-primary transition-transform group-hover:rotate-45" />
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{route.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
