"use client";
import React from "react";
import { motion } from "framer-motion";

// Honest signal: the production-grade stack we actually build on —
// no borrowed client logos, just the tools behind StructumAI and our other builds.
const track1 = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
];

const track2 = [
  "PostgreSQL",
  "AWS",
  "Pusher",
  "Zod",
  "Framer Motion",
  "Three.js",
];

function StackChip({ name }) {
  return (
    <div
      className="flex-shrink-0 relative flex items-center justify-center
        h-[52px] px-7 mx-3 rounded-xl
        border border-white/[0.06] bg-white/[0.02]"
    >
      <span className="text-sm font-bold tracking-wide text-white/45 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeTrack({ items, reverse = false, speed = 30 }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {tripled.map((item, i) => (
          <StackChip key={i} name={item} />
        ))}
      </motion.div>
    </div>
  );
}

export const TrustedBy = () => {
  return (
    <section className="relative bg-bg-primary py-8 overflow-hidden">
      {/* Header with Centered Text and Lines */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-400" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-[13px] uppercase tracking-[0.2em] text-gray-200 whitespace-nowrap"
            >
              The stack we ship production systems on
            </motion.p>
          </motion.div>

          <div className="h-px flex-1 bg-gray-400" />
        </div>
      </div>

      {/* tracks */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative space-y-3"
      >
        {/* edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0a0a0a, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #0a0a0a, transparent)",
          }}
        />

        <MarqueeTrack items={track1} reverse={false} speed={35} />
        <MarqueeTrack items={track2} reverse={true} speed={28} />
      </motion.div>
    </section>
  );
};
