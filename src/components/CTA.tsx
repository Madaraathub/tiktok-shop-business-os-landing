import React from "react";
import { ShieldCheck, RefreshCw, Sparkles, Key } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

interface CTAProps {
  onCtalinkClick: () => void;
}

export default function CTA({ onCtalinkClick }: CTAProps) {
  return (
    <section id="cta" className="py-24 relative overflow-hidden px-6">
      {/* Background radial effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00f2ea]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sm:p-14 text-center relative z-10 overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff0050]/5 to-transparent pointer-events-none"></div>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#ff0050]/15 border border-[#ff0050]/20 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#ff0050]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff0050] font-bold">
              ONE-TIME $49 LICENSE • LIFETIME ACCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif italic text-white leading-tight">
            Claim Your TikTok Shop <br />
            <span className="bg-gradient-to-r from-[#ff0050] to-[#00f2ea] bg-clip-text text-transparent not-italic font-sans font-extrabold uppercase">
              Advantage Today
            </span>
          </h2>

          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            Gain immediate lifetime leverage over standard manual merchants. Enter your work email below to join our synchronized priority setup program and download the setup bundle.
          </p>

          {/* Reusable WaitlistForm Component (Isolated with Clean Integration Point) */}
          <div className="max-w-md mx-auto mt-8">
            <WaitlistForm buttonText="Get Started Instantly" />
          </div>

          {/* Quick compliance badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-[10px] font-mono uppercase tracking-wider text-white/40">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00f2ea]" />
              TikTok Partner API Guarded
            </div>
            <div className="flex items-center gap-1.5 border-l border-[#ffffff10] pl-6">
              <Key className="w-4 h-4 text-[#ff0050]" />
              Instant Licensing Dispatch
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
