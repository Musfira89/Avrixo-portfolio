"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const track1 = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

const track2 = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Nvidia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  },
];

function LogoCard({ logo, name }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setHovered(false);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 600,
      }}
      className="flex-shrink-0 relative flex items-center justify-center
        w-[148px] h-[64px] mx-3 rounded-xl overflow-hidden cursor-pointer
        border border-white/[0.05] bg-white/[0.02]"
    >
      {/* hover wash */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(227,30,36,0.1), transparent 70%)",
        }}
      />
      {/* border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ boxShadow: "inset 0 0 0 1px rgba(227,30,36,0.22)" }}
      />
      <img
        src={logo}
        alt={name}
        style={{ transform: "translateZ(10px)" }}
        className={`h-[18px] w-auto max-w-[100px] object-contain brightness-0 invert
          pointer-events-none transition-all duration-300
          ${hovered ? "opacity-90 scale-105" : "opacity-25 scale-95"}`}
      />
    </motion.div>
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
          <LogoCard key={i} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

export const TrustedBy = () => {
  return (
    <section className="relative bg-bg-primary py-8 overflow-hidden">
      {/* single subtle label */}

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
              className="text-center text-[13px] uppercase tracking-[0.2em] text-gray-200 "
            >
              Trusted by teams at
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
