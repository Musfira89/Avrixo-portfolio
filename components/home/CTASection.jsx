"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

const trustItems = [
  { icon: Zap, text: "72h prototype turnaround" },
  { icon: Shield, text: "Enterprise-grade security by default" },
  { icon: Clock, text: "30-min strategy call to get started" },
  { icon: MessageCircle, text: "No generic demos — real solutions" },
];

export const CTASection = () => {
  return (
    <section className="relative bg-bg-primary overflow-hidden">
      {/* ── Cinematic image hero ── */}
      <div className="relative h-[75vh] min-h-[520px] max-h-[800px] overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&h=900&fit=crop"
          alt="AI technology"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-bg-primary/20" />

        {/* Red ambient glow */}
        <div
          className="absolute left-0 bottom-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(227,30,36,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl lg:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 mb-7"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                  Start Your AI Journey
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-text-primary leading-[1.0] mb-6"
              >
                Ready to make your business{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #e31e24, #ff3d43)",
                  }}
                >
                  intelligent?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="text-text-primary/55 text-base leading-relaxed mb-10 max-w-lg"
              >
                From strategy to deployment, Avrixo partners with ambitious teams to build
                AI systems that create real, measurable competitive advantage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-7 py-4 bg-brand-primary text-white font-black rounded-2xl text-sm hover:bg-brand-hover transition-all duration-300 hover:shadow-[0_0_50px_rgba(227,30,36,0.4)]"
                >
                  Start a Project{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="/schedule"
                  className="group flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded-2xl text-sm hover:border-brand-primary/60 hover:text-brand-primary transition-all duration-300"
                >
                  Book Strategy Call
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating visual badge — bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-8 right-6 lg:right-10 hidden lg:block"
        >
          <div className="rounded-2xl border border-white/10 bg-bg-secondary/80 backdrop-blur-md p-5 text-right">
            <div className="text-4xl font-black text-brand-primary mb-1">50+</div>
            <div className="text-xs font-bold text-text-primary/70">
              AI projects delivered
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">across 12+ industries</div>
          </div>
        </motion.div>
      </div>

      {/* ── Trust bar ── */}
      <div className="bg-bg-secondary border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="text-sm text-text-primary/55 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
