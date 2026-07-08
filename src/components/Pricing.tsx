import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles, AlertCircle, RefreshCw, Star, Info } from "lucide-react";

interface PricingProps {
  onCtalinkClick: () => void;
}

export default function Pricing({ onCtalinkClick }: PricingProps) {
  const [dailySales, setDailySales] = useState<number>(100);

  const calculateSavings = () => {
    // Estimating average monthly leaked commissions and administrative hours wasted
    const leakedComm = dailySales * 30 * 45 * 0.12; // 12% average leakage rate
    const hoursSaved = Math.round(dailySales * 0.15); // admin hours saved per month
    return {
      leakedComm: Math.round(leakedComm),
      hoursSaved
    };
  };

  const { leakedComm, hoursSaved } = calculateSavings();

  const productFeatures = [
    "Lifetime Access to the TikTok Shop Business OS Console",
    "Unlimited Storefronts & Real-Time Live Sales Syncing",
    "Real-Time Automated Creator ROI Trackers",
    "Instant Ingestion Webhooks for P99 Order Deliveries",
    "Influencer Synergy Matchmaking Database",
    "Lifetime complimentary software & engine updates",
    "Comprehensive SLA Shield inventory warning triggers",
    "Dedicated 24/7 priority customer support response SLA",
    "Absolutely ZERO recurring monthly subscription fees — forever"
  ];

  return (
    <section id="pricing" className="py-24 border-b border-white/5 relative px-6 bg-[#050505]">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00f2ea]/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-[#ff0050]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff0050] font-bold">
            Exclusive Lifetime Offer
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            One Simple Payment, <span className="text-[#00f2ea]">Unlimited Growth</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            Avoid monthly subscription fatigue. Power your TikTok commerce empire with a professional, comprehensive operating system under a single lifetime license.
          </p>
        </div>

        {/* Centered Single Pricing Card */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-b from-[#121212] to-[#080808] border-2 border-[#00f2ea] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#00f2ea]/10 relative overflow-hidden transition-all duration-300 hover:shadow-[#00f2ea]/15">
            
            {/* Spotlight shimmer effect */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f2ea]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Top Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-[#00f2ea]/15 text-[#00f2ea] border border-[#00f2ea]/30 text-[9px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full font-extrabold animate-pulse">
                LIFETIME LICENSE
              </span>
            </div>

            {/* Header Details */}
            <div className="space-y-4 mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-white/50">COMMERCE OPERATING SYSTEM</p>
              <h3 className="text-2xl sm:text-3.5xl font-serif text-white italic font-bold">TikTok Shop Business OS</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg">
                The ultimate frontend architecture engineered for high-velocity brands, active merchants, and creator agencies looking to streamline stock, attribution, and live syndications without paying monthly fees.
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-white/2 border border-white/5 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/40 font-mono block uppercase">LICENSING MODEL</span>
                <span className="text-lg font-mono text-[#00f2ea] font-extrabold tracking-wider">One-Time Payment</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-serif text-white italic font-extrabold">$49</span>
                <span className="text-xs text-white/40 font-mono">USD</span>
              </div>
            </div>

            {/* Features list */}
            <div className="border-t border-white/5 pt-8 mb-8">
              <p className="text-xs font-mono text-[#ff0050] uppercase tracking-wider mb-5 font-bold">What is included:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {productFeatures.map((feat, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-xs text-white/80">
                    <Check className="w-4 h-4 text-[#00f2ea] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action button */}
            <div className="space-y-4">
              <a
                href="https://nexoralabss.gumroad.com/l/TikTok-Shop-Business-os"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-black font-sans font-extrabold text-sm rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-extrabold select-none hover:shadow-[#00f2ea]/30"
              >
                <span>Buy Now — $49</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
              
              {/* Trust Signal Seals */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-mono text-white/40 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00f2ea]" /> 
                  100% Risk-Free Refund Guarantee
                </span>
                <span>•</span>
                <span>Instant License Key Delivery</span>
                <span>•</span>
                <span>Secure SSL Checkout</span>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive ROI Calculator against the $49 single payment */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff0050]/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-[#00f2ea]" />
            <h3 className="text-lg font-serif text-white italic">Interactive Amortization & Loss Simulator</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Slider */}
            <div className="space-y-4">
              <label className="text-xs text-white/70 block uppercase font-mono tracking-wider">Estimated Store Daily Orders</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range" 
                  min="10" 
                  max="1500" 
                  value={dailySales}
                  onChange={(e) => setDailySales(Number(e.target.value))}
                  className="w-full accent-[#ff0050] cursor-pointer" 
                />
                <span className="text-sm font-mono text-[#00f2ea] font-bold w-16 text-right">{dailySales}</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Using manual spreadsheets and basic store trackers leads to severe administrative leaks. Adjust the daily orders slider to see the leakage volume a single <strong className="text-white">$49 license</strong> prevents.
              </p>
            </div>

            {/* Savings Output Metrics */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/2 rounded-xl border border-white/5 text-center">
                  <p className="text-[9px] uppercase text-white/40 font-mono">Commission Leaks Blocked</p>
                  <p className="text-xl font-mono text-[#00f2ea] font-extrabold mt-1">
                    ${leakedComm.toLocaleString()}/mo
                  </p>
                </div>

                <div className="p-3 bg-white/2 rounded-xl border border-white/5 text-center">
                  <p className="text-[9px] uppercase text-white/40 font-mono">Manual Labor Reclaimed</p>
                  <p className="text-xl font-mono text-[#ff0050] font-extrabold mt-1">
                    {hoursSaved} hrs/mo
                  </p>
                </div>
              </div>

              {/* Payback duration alert pill */}
              <div className="bg-[#00f2ea]/10 border border-[#00f2ea]/20 p-3 rounded-xl flex items-center gap-2">
                <Info className="w-4 h-4 text-[#00f2ea] shrink-0" />
                <p className="text-[10px] text-[#00f2ea] font-mono leading-relaxed">
                  ROI: A one-time <strong>$49 payment</strong> pays for itself in less than <strong>{Math.max(1, Math.round(49 / (leakedComm / 30)))} day(s)</strong> of storefront operations!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
