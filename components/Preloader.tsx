"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none">
          {/* Left Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            style={{ willChange: "transform" }}
            className="w-1/2 h-full bg-[#050505] border-r border-white/5 relative"
          />

          {/* Right Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            style={{ willChange: "transform" }}
            className="w-1/2 h-full bg-[#050505] border-l border-white/5"
          />

          {/* Logo & Text in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#FF0000] flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.4)] mb-8">
                <Zap size={40} className="text-white fill-white animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
                <span style={{ color: '#FF0000' }}>Laal</span><span className="text-white">Motors</span>
              </h1>
              <div className="mt-6 flex items-center gap-4 overflow-hidden h-4">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: 200 }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="h-[2px] bg-[#FF0000]" 
                 />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold">
                Precision Performance Prestige
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
