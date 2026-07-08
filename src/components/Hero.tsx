import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, TrendingUp, Users, Shield, Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onCtalinkClick: () => void;
  onWatchDemoClick: () => void;
}

export default function Hero({ onCtalinkClick, onWatchDemoClick }: HeroProps) {
  const [liveGmv, setLiveGmv] = useState(4892420);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveGmv(prev => prev + Math.floor(Math.random() * 12) + 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-6">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#ff0050]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-[#00f2ea]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Sparkle Tagline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00f2ea]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
            Automate Affiliate & Analytics Workflows
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff0050] animate-pulse"></span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-white tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          TikTok Shop on <br />
          <span className="bg-gradient-to-r from-[#ff0050] via-white to-[#00f2ea] bg-clip-text text-transparent not-italic font-sans font-extrabold uppercase">
            Autopilot
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-base md:text-xl font-sans max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Streamline multi-store GMV, automate creator collaborations, synchronize inventory with precision, and extract hidden margins using the world's most advanced TikTok Business OS.
        </motion.p>

        {/* Action Triggers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-4 px-4 sm:px-0"
        >
          <a
            href="https://nexoralabss.gumroad.com/l/TikTok-Shop-Business-os"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-md w-full mx-auto bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-black font-sans font-extrabold text-sm rounded-xl px-6 py-3.5 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 select-none h-[52px] sm:h-auto"
          >
            <span>Buy Now — $49</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
          <button
            onClick={onWatchDemoClick}
            className="px-6 py-3.5 bg-[#0e0e0e] border border-white/10 text-white font-sans font-bold text-sm rounded-xl hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer h-[52px] sm:h-auto shrink-0 select-none shadow-xl"
          >
            <Play className="w-4 h-4 text-[#00f2ea]" />
            Explore Demo
          </button>
        </motion.div>

        {/* Live Counter Display */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 max-w-xl mx-auto grid grid-cols-2 gap-4 sm:gap-8 border-y border-white/5 py-6"
        >
          <div className="text-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Total GMV Processed
            </p>
            <p className="text-2xl sm:text-3xl font-mono text-[#00f2ea] font-extrabold mt-1">
              ${liveGmv.toLocaleString()}
            </p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Active Store Hubs
            </p>
            <p className="text-2xl sm:text-3xl font-mono text-white font-extrabold mt-1">
              3,842
            </p>
          </div>
        </motion.div>

        {/* Trust Bullet Seals */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-xs text-white/40 font-mono uppercase tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#ff0050]" />
            No Credit Card Required
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#00f2ea]" />
            99.9% Monitored API Sync Speed
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-white/60" />
            Loved by 12,000+ Creators
          </div>
        </motion.div>

      </div>
    </section>
  );
}
