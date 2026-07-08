import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is TikTok Shop Business OS a one-time payment?",
      a: "We believe in empowering e-commerce merchants and creators without adding to their recurring monthly subscription fatigue. By purchasing a lifetime license for a flat $49, you own the system forever with zero ongoing overhead."
    },
    {
      q: "How many TikTok Shop storefronts can I connect?",
      a: "Unlike traditional subscription SaaS that charges per store, our single lifetime license allows you to connect UNLIMITED TikTok Shop storefronts. Manage your entire multi-brand empire from one elegant dashboard."
    },
    {
      q: "Is TikTok Shop Business OS an official partner of TikTok?",
      a: "Yes. Our systems communicate exclusively through official TikTok Shop Partner APIs. We utilize secure OAuth protocols, meaning we never request or store your direct storefront password credentials."
    },
    {
      q: "How fast is the inventory and sales synchronization?",
      a: "Our Webhook Sync Engine processes stock changes within 0.2 seconds of warehouse updates. This prevents negative merchant rating events due to over-selling during active, viral livestreams."
    },
    {
      q: "Are there any hidden transaction fees or commission cuts?",
      a: "Absolutely not. We take 0% commission on your sales and charge zero transaction fees. Your revenue is entirely yours. We only sell the operating system software license."
    },
    {
      q: "How does the refund guarantee work?",
      a: "Your purchase is backed by our 14-day zero-risk money-back guarantee. If you are not completely satisfied with the automated workflows or speed, let us know within 14 days and we will issue a full refund."
    }
  ];

  return (
    <section id="faq" className="py-24 border-b border-white/5 bg-[#070707] relative px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f2ea] font-bold">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            Frequently Asked <span className="text-[#ff0050]">Concerns</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            Everything you need to know about our lifetime licensing, API security protocols, and sync speed.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#00f2ea] shrink-0" />
                    <span className="font-serif italic text-sm sm:text-base">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-white/40 group-hover:text-white transition-transform ${isOpen ? "rotate-180 text-[#ff0050]" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout banner */}
        <div className="mt-12 p-6 bg-[#0a0a0a] border border-dashed border-white/10 rounded-2xl text-center space-y-3">
          <p className="text-xs text-white">Still have queries or custom system requirements?</p>
          <button className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-mono text-[10px] uppercase rounded-xl tracking-wider transition-all inline-flex items-center gap-2">
            Speak to Integration Engineer <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
