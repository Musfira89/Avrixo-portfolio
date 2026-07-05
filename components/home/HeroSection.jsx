"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import the 3D Scene with a graceful loading placeholder so the hero
// never flashes empty on slower connections.
const NeuralScene = dynamic(() => import("./NeuralScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-[400px] max-w-full items-center justify-center">
      <div className="h-40 w-40 rounded-full border border-brand-primary/20 animate-pulse" />
    </div>
  ),
});

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(start);
    }, 24);
    return () => clearInterval(timer);
  }, [to]);
  return <>{val}{suffix}</>;
}

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center pt-40 pb-10 overflow-hidden">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(227,30,36,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE - STYLING PRESERVED */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-text-primary leading-[1.2]">
                We Ship <br />
                <span className="relative inline-block">
                  Production
                 
                </span> <br />
                <span className="bg-brand-primary font-black bg-clip-text text-transparent">
                  AI &amp; SaaS
                </span>
              </h1>
              <p className="text-md text-gray-300 leading-relaxed max-w-md">
                Avrixo is one team that designs, builds, and ships AI products and SaaS
                platforms end to end — strategy, design, engineering, and cloud. Fixed scope,
                clear milestones, no surprises.
              </p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="group relative overflow-hidden px-6 py-4 bg-brand-primary text-white font-black rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,30,36,0.45)]">
                <span className="relative z-10 flex items-center gap-2">
                  START A PROJECT <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.1 }}
                />
              </Link>
              <Link href="/portfolio" className="text-white font-medium hover:text-brand-primary transition-colors border-b border-white/20 pb-1 text-sm sm:text-base whitespace-nowrap">
                See our work
              </Link>
            </motion.div>

            {/* Micro-trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500"
            >
              Production systems, not demos · Fixed-scope proposals · One team, end to end
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex items-center gap-8 pt-2 ">
              {[
                { val: 12, suffix: "", label: "Case studies delivered" },
                { val: 10, suffix: "", label: "Industries & domains" },
                { val: 100, suffix: "%", label: "In-house delivery" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-white"><Counter to={s.val} suffix={s.suffix} /></div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - UPDATED 3D SPHERE */}
          <div className="lg:col-span-6 flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ duration: 1.5 }}
               className="relative"
             >
                <NeuralScene />
                {/* Minimalist Status Label */}

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};