import React from "react";
import { ShieldCheck, Flame, Clock, Landmark, ArrowRight } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      title: "Save 12+ Hours Weekly",
      desc: "Stop downloading CSV spreadsheets, merging influencer addresses manually, and trying to reconcile multi-channel catalogs. Let our automated webhook synchronizers do the lifting.",
      icon: <Clock className="w-5 h-5 text-[#00f2ea]" />
    },
    {
      title: "Prevent Listing Penalties",
      desc: "TikTok places tight shipping SLAs. Our real-time API sync automatically handles stock fluctuations, keeping your Seller Health Rating high and safe from penalties.",
      icon: <ShieldCheck className="w-5 h-5 text-[#ff0050]" />
    },
    {
      title: "Explosive Influencer Sales",
      desc: "Effortlessly spot high-performing creator affiliates, set dynamic commission incentives, and let the matchmaking logic pair products with verified target demographics.",
      icon: <Flame className="w-5 h-5 text-[#00f2ea]" />
    },
    {
      title: "Shield Your Profit Margins",
      desc: "Avoid silent revenue leaks. Instantly see accurate margin maps that include TikTok fees, shipping surcharges, affiliate payouts, and manufacturing unit costs.",
      icon: <Landmark className="w-5 h-5 text-[#ff0050]" />
    }
  ];

  return (
    <section id="benefits" className="py-24 border-b border-white/5 bg-[#050505] relative px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff0050] font-bold">
            The Value Proposition
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            Engineered for <span className="text-[#00f2ea]">Absolute Growth</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            A secure foundation optimized to boost shop margins and reclaim hours of repetitive admin work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsList.map((benefit, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 hover:bg-white/1 transition-all duration-300 flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif italic text-xl text-white font-bold">{benefit.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
