// components/home/HeroSection.jsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #ff5c35 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-transparent rounded-lg border border-bg-muted/40">
              <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
              <span className="text-xs font-semibold text-gray-200 tracking-wide">
                Your Trusted AI Development Company
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-text-primary leading-[1.2]">
                Intelligence
                <br />
                <span className="relative inline-block">
                  Meets
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 100 2 150 6C200 10 250 10 298 6"
                      stroke="#ff5c35"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>

              <p className="text-md text-gray-300 leading-relaxed max-w-md">
                We transform businesses with cutting-edge AI solutions. From
                strategy to deployment—we make AI work for you.
              </p>
            </div>

            {/* CTA - Buttons in One Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row items-center gap-4 sm:gap-6"
            >
              <Link
                href="/contact"
                className="group relative px-5 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white rounded-md font-semibold transition-all hover:shadow-[0_0_30px_rgba(255,92,53,0.3)] text-sm sm:text-base whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  Launch Project <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/services"
                className="text-white font-medium hover:text-brand-primary transition-colors border-b border-white/20 pb-1 text-sm sm:text-base whitespace-nowrap"
              >
                Explore Expertise
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 relative lg:pr-6"
            style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x
              }deg) rotateX(${-mousePosition.y}deg)`,
            }}
          >
            {/* Main Card */}
            <div className="relative z-20 w-full aspect-square max-w-[350px] sm:max-w-[450px] mx-auto bg-white/[0.03] backdrop-blur-2xl rounded-[32px] sm:rounded-[40px] border border-white/10 p-1 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-50" />

              <div className="relative h-full w-full bg-bg-primary/40 rounded-[30px] sm:rounded-[38px] p-6 sm:p-8 flex flex-col justify-between border border-white/5">
                <div className="flex justify-between items-start">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                    <div className="h-2 w-2 rounded-full bg-brand-primary animate-ping" />
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">
                      Active Nodes
                    </div>
                    <div className="text-lg sm:text-xl font-mono text-white">1,284</div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="text-xs sm:text-sm text-gray-400 font-light">
                    AI Core Processing:{" "}
                    <span className="text-brand-primary">Stable</span>
                  </div>

                  <div className="relative h-16 sm:h-20 w-full bg-white/[0.02] rounded-lg sm:rounded-xl border border-white/5 overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 z-30 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="text-[9px] sm:text-[10px] text-brand-primary font-bold uppercase mb-1">
                Success Rate
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">99.2%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};