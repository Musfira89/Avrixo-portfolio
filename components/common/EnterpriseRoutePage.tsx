"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { EnterpriseRoute } from "@/lib/site-data";

type EnterpriseRoutePageProps = {
  route: EnterpriseRoute;
  related?: EnterpriseRoute[];
};

// Curated hero images for known slugs
const SLUG_IMAGES: Record<string, string> = {
  "ai-automation": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=700&fit=crop",
  "generative-ai-rag": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=700&fit=crop",
  "saas-product-engineering": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop",
  "data-platforms": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=700&fit=crop",
  "cloud-devops": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=700&fit=crop",
  "ui-ux-product-design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=700&fit=crop",
  "healthcare-ai": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=700&fit=crop",
  "fintech-risk": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=700&fit=crop",
  "logistics-automation": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=700&fit=crop",
  "real-estate-intelligence": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop",
  "overview": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=700&fit=crop",
  "ai-research-lab": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=700&fit=crop",
  "leadership": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
  "careers": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop",
  "ai-transformation-playbook": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=700&fit=crop",
  "technical-due-diligence": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=700&fit=crop",
  "enterprise-ai-readiness": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=700&fit=crop",
  "contact": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200&h=700&fit=crop",
  "investors": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=700&fit=crop",
  "schedule": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
  "privacy": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=700&fit=crop",
  "terms": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=700&fit=crop",
};

function getHeroImage(slug: string): string {
  return SLUG_IMAGES[slug] || "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=700&fit=crop";
}

export function EnterpriseRoutePage({ route, related = [] }: EnterpriseRoutePageProps) {
  const isLight = route.theme === "light";
  const heroImage = getHeroImage(route.slug);

  const bgShell = isLight ? "bg-bg-light" : "bg-bg-primary";
  const textPrimary = isLight ? "text-text-dark" : "text-text-primary";
  const textMuted = isLight ? "text-text-muted" : "text-gray-400";
  const cardBg = isLight ? "bg-white border-text-dark/[0.07]" : "bg-bg-secondary border-white/[0.08]";
  const altCardBg = isLight ? "bg-bg-light border-text-dark/[0.07]" : "bg-bg-muted border-white/[0.06]";

  return (
    <div className={bgShell}>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-32 pb-0">
        {/* Hero image behind content */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end pb-12 lg:pb-16">
            {/* Text */}
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5"
              >
                {route.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-black leading-[1.06] mb-5 ${textPrimary}`}
              >
                {route.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.13 }}
                className={`text-sm leading-relaxed max-w-2xl ${textMuted}`}
              >
                {route.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mt-7"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-black text-sm rounded-xl hover:bg-brand-hover transition-all hover:shadow-[0_0_30px_rgba(227,30,36,0.3)]"
                >
                  Start a Project{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="/schedule"
                  className={`flex items-center gap-2 px-6 py-3 border font-semibold text-sm rounded-xl transition-all ${
                    isLight
                      ? "border-text-dark/15 text-text-dark hover:border-brand-primary/50 hover:text-brand-primary"
                      : "border-white/15 text-white hover:border-brand-primary/50"
                  }`}
                >
                  Book a Call
                </Link>
              </motion.div>
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className={`lg:col-span-5 rounded-3xl border p-7 ${cardBg}`}
            >
              <p className={`text-[10px] uppercase tracking-[0.24em] mb-5 ${textMuted}`}>
                Field Signal
              </p>
              <div className="text-6xl font-black text-brand-primary mb-3">{route.stat}</div>
              <p className={`text-sm leading-relaxed ${textMuted}`}>{route.statLabel}</p>
            </motion.div>
          </div>

          {/* Hero image strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="relative h-56 md:h-72 lg:h-80 rounded-t-3xl overflow-hidden"
          >
            <img
              src={heroImage}
              alt={route.eyebrow}
              className="w-full h-full object-cover grayscale"
            />
            {/* Brand duotone — keeps stock photos on the black/red theme */}
            <div className="absolute inset-0 bg-brand-primary/25 mix-blend-color" />
            <div className={`absolute inset-0 ${isLight ? "bg-bg-light/20" : "bg-bg-primary/30"}`} />
            <div
              className={`absolute inset-0 ${
                isLight
                  ? "bg-gradient-to-t from-bg-light via-transparent to-transparent"
                  : "bg-gradient-to-t from-bg-primary via-transparent to-transparent"
              }`}
            />
          </motion.div>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Sticky sidebar: Highlights */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`rounded-3xl border p-7 lg:sticky lg:top-28 ${cardBg}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-6">
                  Strategic Priorities
                </p>
                <div className="space-y-4">
                  {route.highlights.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-primary" />
                      <p className={`text-sm leading-relaxed ${textMuted}`}>{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className={`mt-8 pt-6 border-t ${isLight ? "border-text-dark/[0.06]" : "border-white/[0.06]"}`}>
                  <Link
                    href="/contact"
                    className="group w-full flex items-center justify-center gap-2 py-3 bg-brand-primary text-white font-black text-sm rounded-xl hover:bg-brand-hover transition-all"
                  >
                    Talk to Our Team
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Main content: Sections */}
            <div className="lg:col-span-8 space-y-5">
              {route.sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-3xl border p-7 ${cardBg}`}
                >
                  <div className="flex items-start gap-5 mb-5">
                    <span className={`text-5xl font-black leading-none select-none mt-1 ${
                      isLight ? "text-black/[0.07]" : "text-white/[0.07]"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={`text-2xl font-black leading-tight ${textPrimary}`}>
                      {section.title}
                    </h2>
                  </div>
                  <p className={`text-sm leading-7 ${textMuted}`}>{section.body}</p>
                </motion.article>
              ))}

              {/* Inline image block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden relative h-52"
              >
                <img
                  src={heroImage}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brand-primary/25 mix-blend-color" />
                <div className={`absolute inset-0 ${isLight ? "bg-bg-light/30" : "bg-bg-primary/40"}`} />
                <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-r from-bg-light/80 to-transparent" : "bg-gradient-to-r from-bg-primary/80 to-transparent"}`} />
                <div className="absolute left-7 top-1/2 -translate-y-1/2">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-2`}>
                    {route.eyebrow}
                  </p>
                  <p className={`text-xl font-black ${textPrimary} max-w-xs leading-snug`}>
                    {route.title.split(".")[0]}.
                  </p>
                </div>
              </motion.div>

              {/* Related Routes */}
              {related.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-3xl border p-7 ${cardBg}`}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-5">
                    Explore More
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {related
                      .filter((item) => item.href !== route.href)
                      .slice(0, 4)
                      .map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group rounded-2xl border p-4 transition-all hover:border-brand-primary/40 ${altCardBg}`}
                        >
                          <span
                            className={`flex items-center justify-between gap-3 text-sm font-bold ${textPrimary}`}
                          >
                            {item.eyebrow}
                            <ArrowUpRight className="h-4 w-4 text-brand-primary transition-transform group-hover:rotate-45 flex-shrink-0" />
                          </span>
                          <span className={`mt-2 block text-xs leading-5 line-clamp-2 ${textMuted}`}>
                            {item.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ══ */}
      <div className={`border-t ${isLight ? "border-text-dark/[0.06]" : "border-white/[0.06]"}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className={`text-base font-black ${textPrimary}`}>
                Ready to work with Avrixo?
              </p>
              <p className={`text-xs mt-1 ${textMuted}`}>
                30-minute strategy call. No commitment required.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-black text-sm rounded-xl hover:bg-brand-hover transition-all"
              >
                Start a Project{" "}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                href="/schedule"
                className={`flex items-center gap-2 px-6 py-3 border font-semibold text-sm rounded-xl transition-all ${
                  isLight
                    ? "border-text-dark/15 text-text-dark hover:border-brand-primary/40 hover:text-brand-primary"
                    : "border-white/15 text-white hover:border-brand-primary/40"
                }`}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
