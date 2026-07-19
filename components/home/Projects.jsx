"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";

// Home cards keep the minimal generated covers; the detailed module art
// (with its own baked-in text) lives on the case-study pages instead.
const homeCovers = {
  "structumai-estimating-billing": "/portfolio/structumai-billing.svg",
  "structumai-plans-collaboration": "/portfolio/structumai-plans.svg",
};

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-bg-light py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Text Area */}
          <div className="lg:col-span-4 space-y-6">
            <div className="mb-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-text-dark tracking-tight"
              >
                Products we've <span className="text-brand-primary">shipped</span>
              </motion.h2>
            </div>
            <p className="text-text-muted text-xs leading-relaxed">
              Real, production-grade products we designed and engineered, broken down as
              technical case studies: problem, architecture, stack, and scope.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-text-dark font-bold border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
            >
              Read Case Studies <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* RIGHT: Research Paper Cards */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {caseStudies.slice(0, 2).map((project) => (
              <Link
                key={project.id}
                href={`/case-studies/${project.id}`}
                className="group relative block"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.article
                  whileHover={{ y: -10 }}
                  className="relative h-full overflow-hidden rounded-3xl border border-text-dark/[0.07] bg-white p-3 shadow-sm transition-all duration-300 group-hover:border-brand-primary/40 group-hover:shadow-xl group-hover:shadow-brand-primary/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={homeCovers[project.id] || project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-bg-primary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                      {project.label}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary">
                      <FileText className="h-3.5 w-3.5" />
                      {project.category}
                    </div>
                    <h3 className="mt-4 text-2xl font-black leading-tight text-text-dark">
                      {project.title}
                    </h3>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-text-dark/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredCard === project.id ? 1 : 0.45,
                          scale: hoveredCard === project.id ? 1 : 0.9,
                        }}
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-primary"
                      >
                        <ArrowUpRight className="text-white" size={20} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
