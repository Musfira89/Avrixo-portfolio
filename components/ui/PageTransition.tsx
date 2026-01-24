"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google"; // Switched to Manrope

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ['300'] 
});

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    document.body.style.overflow = "hidden";

    // This controls how long the "static" black screen stays 
    // before the wave starts moving.
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 800); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (dimensions.width === 0) {
      return <div className="fixed inset-0 z-[9999] bg-[#0b0c0c]" />;
  }

  const { width, height } = dimensions;

  // Gerold Style: The curve "lifts" the bottom edge up
  const initialPath = `M 0 0 L ${width} 0 L ${width} ${height} Q ${width / 2} ${height + 300} 0 ${height} L 0 0`;
  const targetPath = `M 0 0 L ${width} 0 L ${width} 0 Q ${width / 2} 0 0 0 L 0 0`;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-wrapper"
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Loading Text - Disappears immediately when isLoading becomes false */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }} // Fades and moves up slightly
              transition={{ duration: 0.3 }}
              className={`${manrope.className} text-gray-500 text-md tracking-[0.4em]`}
            >
              l O A D I N G.
            </motion.span>
          </div>

          {/* The Liquid Curtain */}
          <svg className="absolute top-0 w-full h-[calc(100vh+300px)]">
            <motion.path
              initial={{ d: initialPath }}
              animate={{ d: targetPath }}
              exit={{ d: targetPath }} // Ensures path stays target on exit
              transition={{
                duration: 1.2, 
                ease: [0.76, 0, 0.24, 1],
                // No delay here so it starts moving as soon as text begins to fade
              }}
              fill="#0b0c0c"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}