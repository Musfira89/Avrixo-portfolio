"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, CheckCircle2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { companyContact, schedulingUrl } from "@/lib/company";

const expect = [
  "A focused 30-minute conversation about your goal, constraints, and timeline.",
  "Honest feasibility: what's buildable now, what needs groundwork.",
  "A clear recommended next step and a fixed-scope path if it's a fit.",
];

export const SchedulePage = () => {
  return (
    <section className="min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -left-20 top-1/4 w-[400px] h-[400px] rounded-full bg-brand-primary/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5">
            Schedule
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary leading-[1.1] mb-6">
            Book a 30-minute{" "}
            <span className="text-brand-primary">strategy call.</span>
          </h1>
          <p className="text-sm text-text-primary/55 leading-relaxed">
            No commitment, no generic demo, just a direct conversation about the system
            you need and the fastest credible path to building it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* Booking panel */}
          <div className="lg:col-span-7">
            {schedulingUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-white/[0.08] bg-bg-secondary overflow-hidden"
              >
                <iframe
                  src={schedulingUrl}
                  title="Book a call with Avrixo"
                  className="w-full h-[640px]"
                  loading="lazy"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-white/[0.08] bg-bg-secondary p-8 lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 mb-6">
                  <CalendarClock className="h-6 w-6 text-brand-primary" />
                </div>
                <h2 className="text-xl font-black text-text-primary mb-3">
                  Request your slot
                </h2>
                <p className="text-sm text-text-primary/55 leading-relaxed mb-7 max-w-md">
                  Send your goal and a couple of times that work for you. We'll confirm a
                  30-minute call within 24 hours, or reply with a recommended next step.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-black text-sm rounded-xl hover:bg-brand-hover transition-all hover:shadow-[0_0_30px_rgba(227,30,36,0.3)]"
                  >
                    Request a Call
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </Link>
                  <a
                    href={companyContact.mailto}
                    className="flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white font-semibold text-sm rounded-xl hover:border-brand-primary/50 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email us
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* What to expect */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl border border-white/[0.08] bg-bg-secondary p-7"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-6">
                What to expect
              </p>
              <div className="space-y-4">
                {expect.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-primary" />
                    <p className="text-sm leading-relaxed text-text-primary/55">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
                <a
                  href={companyContact.phoneHref}
                  className="flex items-center gap-3 text-sm text-text-primary/65 hover:text-brand-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-primary" />
                  {companyContact.phoneDisplay}
                </a>
                <a
                  href={companyContact.mailto}
                  className="flex items-center gap-3 text-sm text-text-primary/65 hover:text-brand-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-brand-primary" />
                  {companyContact.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
