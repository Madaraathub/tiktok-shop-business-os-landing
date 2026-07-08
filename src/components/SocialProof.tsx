import React from "react";

export default function SocialProof() {
  const brandLogos = [
    { name: "Apex Commerce", logo: "APEX" },
    { name: "Summit Brands", logo: "SUMMIT" },
    { name: "Vibe Agencies", logo: "VIBE" },
    { name: "Quantum Labs", logo: "QUANTUM" },
    { name: "Stellar Retail", logo: "STELLAR" },
    { name: "Prism Media", logo: "PRISM" },
    { name: "Echo Global", logo: "ECHO" },
    { name: "Aero Logistics", logo: "AERO" }
  ];

  return (
    <section id="social-proof" className="py-12 border-y border-white/5 bg-[#080808]/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 text-center mb-8 font-bold">
          Trusted by Top-Tier TikTok Brands & Verified Agencies
        </p>

        {/* Double row infinite scrolling feel or grid layout depending on size */}
        <div className="relative w-full overflow-hidden">
          {/* Gradients to mask edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex gap-12 items-center justify-around whitespace-nowrap animate-marquee">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 opacity-40 hover:opacity-85 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] text-white tracking-widest">
                  {brand.logo[0]}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/95 font-semibold">
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless infinite look */}
            {brandLogos.map((brand, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center gap-2.5 opacity-40 hover:opacity-85 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] text-white tracking-widest">
                  {brand.logo[0]}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/95 font-semibold">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
