import React, { useState } from "react";
import { Sparkles, ShoppingBag, ShieldCheck, Users, Percent, Zap, RefreshCw, BarChart3, Star } from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Omni-Store Analytics Hub",
      badge: "Real-Time Data",
      desc: "Consolidate all domestic and global TikTok Shop storefront operations under a unified, high-performance visual dashboard.",
      points: [
        "Unify GMV, affiliate distributions, and creator payments.",
        "Simulated live webhook events keep listings 100% updated.",
        "Interactive conversion and funnel graphs with single-click export."
      ],
      icon: <BarChart3 className="w-5 h-5 text-[#00f2ea]" />,
      accentColor: "border-[#00f2ea]/20 hover:border-[#00f2ea]/50 shadow-[#00f2ea]/5"
    },
    {
      title: "Creator Partnerships Engine",
      badge: "Scale Growth",
      desc: "Scout, vet, and contract thousands of verified TikTok creators based on genuine, audited historical performance stats.",
      points: [
        "Dynamic Matchmaking based on product category ROI trends.",
        "Keep your commissions dynamic with automatic sales boosts.",
        "Centralized messaging and contract templates within the dashboard."
      ],
      icon: <Users className="w-5 h-5 text-[#ff0050]" />,
      accentColor: "border-[#ff0050]/20 hover:border-[#ff0050]/50 shadow-[#ff0050]/5"
    },
    {
      title: "Automated Restock Optimizer",
      badge: "Inventory Guard",
      desc: "Synchronize physical warehouse stock directly with dynamic TikTok catalog parameters to prevent listing suspensions.",
      points: [
        "Pre-emptive warning notifications for fast-depleting models.",
        "Automatically adjusts live stream pricing tiers dynamically.",
        "Zero manual CSV spreadsheets required to keep products sync."
      ],
      icon: <RefreshCw className="w-5 h-5 text-white" />,
      accentColor: "border-white/20 hover:border-white/50 shadow-white/5"
    }
  ];

  return (
    <section id="features" className="py-24 border-b border-white/5 bg-[#070707] relative px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#ff0050]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f2ea] font-bold">
            The Engine Room
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            Built for Extreme <span className="text-[#ff0050]">Velocity</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            Advanced features designed to replace manual operations and drive explosive scaling metrics.
          </p>
        </div>

        {/* Dynamic Bento Grid Layout & Tab Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature Navigator (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                  activeFeature === idx
                    ? "bg-white/5 border-white/25 shadow-xl"
                    : "bg-[#0b0b0b] border-white/5 hover:bg-white/2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">
                      {feature.badge}
                    </span>
                    <h3 className="font-serif italic text-base text-white font-bold mt-0.5">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Selected Feature Detail (8 cols) */}
          <div className="lg:col-span-8 bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Ambient Background Glow inside detail box */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#00f2ea]/10 to-transparent rounded-full pointer-events-none blur-xl"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full font-mono uppercase">
                  ACTIVE SPEC: {features[activeFeature].badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00f2ea] animate-pulse"></span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-bold">
                {features[activeFeature].title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                {features[activeFeature].desc}
              </p>

              <hr className="border-white/5" />

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-wider text-white/30 font-mono font-bold">Key Specifications</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features[activeFeature].points.map((point, index) => (
                    <div key={index} className="flex gap-2.5 items-start bg-white/3 p-3 rounded-xl border border-white/5">
                      <Zap className="w-4 h-4 text-[#00f2ea] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/80 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated mini analytics dashboard to look premium inside Features */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-white/60 text-[10px] uppercase">
                  Connected Webhook Engine Status: Online
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-[10px] text-white/40 font-mono ml-2">99.8% Sync Rating</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
