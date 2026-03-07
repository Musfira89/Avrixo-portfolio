"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const portfolioData = [
    {
      id: 1,
      image: "/portfolio/P1.avif",
      company: "Coca-Cola",
      title: "Connecting Millions Digitally",
      tags: ["Mobile App", "UI/UX"],
    },
    {
      id: 2,
      image: "/portfolio/P1.avif",
      company: "Nokia Al-Saudia",
      title: "Empowering Digital Learning",
      tags: ["Web App", "Edtech"],
    },
  ];

  return (
    <section className="bg-bg-primary py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Text Area */}
          <div className="lg:col-span-4 space-y-6">
            <div className="mb-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-text-primary tracking-tight"
              >
                Our <span className="text-brand-primary">Showcase</span>
              </motion.h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global brands and ambitious startups, creating digital solutions
              that drive meaningful growth.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white font-bold border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
            >
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* RIGHT: Animated Cards */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-2">
            {portfolioData.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                // 3D TILT EFFECT
                whileHover={{ y: -10 }}
              >
                {/* Card Container with Perspective */}
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2">
                  <motion.div
                    className="relative h-full w-full overflow-hidden rounded-xl"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  </motion.div>

                  {/* Floating Action Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredCard === project.id ? 1 : 0,
                      scale: hoveredCard === project.id ? 1 : 0,
                    }}
                    className="absolute bottom-8 left-8 z-10 w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <ArrowUpRight className="text-white" size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                    {project.company}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-1 mb-4">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-gray-400 text-[10px] font-medium border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
