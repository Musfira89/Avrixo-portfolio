"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { resourceRoutes } from "@/lib/site-data";

export const Insights = () => {
  return (
    <section className="relative bg-bg-light py-24 md:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
              Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-text-dark leading-[1.08] mb-5">
            Ideas worth{" "}
            <span className="font-accent text-brand-primary text-[1.15em]">sharing.</span>
          </h2>

          <p className="text-xs md:text-sm text-text-muted leading-relaxed">
            Practical perspectives from real engagements, written for people making
            technology decisions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {resourceRoutes.map((resource, i) => (
            <motion.div
              key={resource.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-2xl border border-text-dark/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
                  {resource.eyebrow}
                </p>
                <h3 className="text-lg font-black text-text-dark leading-snug mb-3">
                  {resource.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                  {resource.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-text-dark group-hover:text-brand-primary transition-colors">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-text-dark hover:text-brand-primary transition-colors border-b border-brand-primary pb-1"
          >
            Visit the insights hub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
