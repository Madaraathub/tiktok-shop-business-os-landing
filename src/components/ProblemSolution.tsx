import React, { useState } from "react";
import { AlertCircle, CheckCircle2, TrendingDown, RefreshCw, XCircle, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<"problems" | "solution">("problems");

  const problems = [
    {
      title: "Lost Affiliate Sales",
      desc: "Manual commission adjustments and missing influencer tracking spreadsheets cost sellers up to 14% of gross revenue.",
      stat: "14% Revenue Leakage",
      icon: <XCircle className="w-5 h-5 text-[#ff0050]" />
    },
    {
      title: "Fragile Stock Ingestion",
      desc: "Vite/Shopify integrations often disconnect during flash streams, leading to massive over-selling and negative seller points.",
      stat: "48h Ingestion Delays",
      icon: <AlertCircle className="w-5 h-5 text-[#ff0050]" />
    },
    {
      title: "Scattered Operational Data",
      desc: "Logging into 5 separate country dashboards and merging CSV reports manually kills velocity and strategic momentum.",
      stat: "12h/Week Lost to Admin",
      icon: <TrendingDown className="w-5 h-5 text-[#ff0050]" />
    }
  ];

  const solutions = [
    {
      title: "Automated Affiliate Sync",
      desc: "Instantly adjust commission triggers, auto-onboard high-performing influencers, and keep creators fully synchronized.",
      stat: "100% Commission Accuracy",
      icon: <CheckCircle2 className="w-5 h-5 text-[#00f2ea]" />
    },
    {
      title: "Real-Time API Sync Engine",
      desc: "Ultra-fast direct webhook updates instantly block out-of-stock items, keeping you perfectly safe from shipping penalties.",
      stat: "0.2s Hot webhook speed",
      icon: <RefreshCw className="w-5 h-5 text-[#00f2ea]" />
    },
    {
      title: "Centralized Global Dashboard",
      desc: "All global storefront channels streamlined into a unified, high-performance real-time analytics hub.",
      stat: "Instant cross-border insights",
      icon: <CheckCircle2 className="w-5 h-5 text-[#00f2ea]" />
    }
  ];

  return (
    <section id="problem-solution" className="py-24 border-b border-white/5 relative px-6">
      {/* Background Blur */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#00f2ea]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff0050] font-bold">
            The Hard Truth
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            Standard Seller Centers <span className="text-white/40">Are Not Enough</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            Managing TikTok Shop manually is a recipe for inventory penalties, commission leaks, and operational burnout.
          </p>
        </div>

        {/* Dynamic Interactive Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0a0a0a] border border-white/10 p-1.5 rounded-2xl shadow-xl">
            <button
              onClick={() => setActiveTab("problems")}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "problems"
                  ? "bg-[#ff0050]/10 border border-[#ff0050]/20 text-[#ff0050]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              The Manual Struggle
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "solution"
                  ? "bg-[#00f2ea]/10 border border-[#00f2ea]/20 text-[#00f2ea]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              The Business OS Advantage
            </button>
          </div>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === "problems"
            ? problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ff0050]/30 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ff0050]/40 group-hover:bg-[#ff0050] transition-all" />
                  <div className="pl-2">
                    <div className="flex items-center gap-3">
                      {prob.icon}
                      <h3 className="font-serif italic text-lg text-white font-bold">{prob.title}</h3>
                    </div>
                    <p className="text-white/60 text-xs mt-4 leading-relaxed">{prob.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 pl-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-white/40">System Loss</span>
                    <span className="text-[10px] font-mono text-[#ff0050] font-bold uppercase">{prob.stat}</span>
                  </div>
                </div>
              ))
            : solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00f2ea]/30 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00f2ea]/40 group-hover:bg-[#00f2ea] transition-all" />
                  <div className="pl-2">
                    <div className="flex items-center gap-3">
                      {sol.icon}
                      <h3 className="font-serif italic text-lg text-white font-bold">{sol.title}</h3>
                    </div>
                    <p className="text-white/60 text-xs mt-4 leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 pl-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-white/40">Operational Boost</span>
                    <span className="text-[10px] font-mono text-[#00f2ea] font-bold uppercase">{sol.stat}</span>
                  </div>
                </div>
              ))}
        </div>

        {/* Integration Note Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-white/3 to-transparent rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00f2ea]/10 border border-[#00f2ea]/20 flex items-center justify-center text-xs font-mono text-[#00f2ea]">
              !
            </div>
            <div>
              <p className="text-xs text-white font-bold">TikTok Shop API Official Onboarding Partner</p>
              <p className="text-[10px] text-white/50">Our modules utilize official auth and sync webhooks to shield your seller health scoring index.</p>
            </div>
          </div>
          <button className="text-xs font-mono uppercase tracking-wider text-[#00f2ea] hover:underline flex items-center gap-1">
            Read Security Protocol <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
