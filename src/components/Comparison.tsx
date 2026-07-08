import React from "react";
import { Check, X, Shield, Star } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Real-time Multi-Store Sync",
      os: true,
      center: false,
      plugins: "Delayed"
    },
    {
      feature: "Affiliate Performance Matching",
      os: true,
      center: "Basic List",
      plugins: false
    },
    {
      feature: "Automated Shipping SLA Shield",
      os: true,
      center: false,
      plugins: false
    },
    {
      feature: "Encrypted API Integrations",
      os: true,
      center: true,
      plugins: "Requires Add-on"
    },
    {
      feature: "Precise Profit-Margin Mapping",
      os: true,
      center: false,
      plugins: "Manual Excel"
    },
    {
      feature: "Real-Time Order & Sales Feed",
      os: true,
      center: false,
      plugins: false
    }
  ];

  return (
    <section id="comparison" className="py-24 border-b border-white/5 bg-[#070707] relative px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f2ea] font-bold">
            The Competitive Edge
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            How We Outperform <span className="text-[#ff0050]">The Rest</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            See how TikTok Shop Business OS compares with the native seller center and typical third-party Shopify connectors.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/2">
                  <th className="p-6 text-xs font-mono uppercase tracking-wider text-white/40">Feature Spectrum</th>
                  <th className="p-6 text-xs font-mono uppercase tracking-wider text-[#00f2ea] font-bold text-center">Business OS</th>
                  <th className="p-6 text-xs font-mono uppercase tracking-wider text-white/40 text-center">Native Center</th>
                  <th className="p-6 text-xs font-mono uppercase tracking-wider text-white/40 text-center">Standard Plugins</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/1 transition-colors">
                    <td className="p-6 text-xs font-bold text-white/80">{row.feature}</td>
                    
                    {/* Business OS column */}
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#00f2ea]/10 border border-[#00f2ea]/20 flex items-center justify-center text-[#00f2ea]">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    </td>

                    {/* Native center column */}
                    <td className="p-6 text-center text-xs text-white/50 font-mono">
                      {row.center === true ? (
                        <div className="flex items-center justify-center text-green-400">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : row.center === false ? (
                        <div className="flex items-center justify-center text-[#ff0050]/55">
                          <X className="w-4 h-4" />
                        </div>
                      ) : (
                        row.center
                      )}
                    </td>

                    {/* Shopify connectors/plugins column */}
                    <td className="p-6 text-center text-xs text-white/50 font-mono">
                      {row.plugins === true ? (
                        <div className="flex items-center justify-center text-green-400">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : row.plugins === false ? (
                        <div className="flex items-center justify-center text-[#ff0050]/55">
                          <X className="w-4 h-4" />
                        </div>
                      ) : (
                        row.plugins
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer note */}
          <div className="p-6 bg-white/2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00f2ea]" />
              <span className="text-white/60">Fully compliant with all official TikTok merchant guidelines.</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 font-mono">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>99.9% customer rating threshold</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
