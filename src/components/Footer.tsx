import React from "react";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#080808] border-t border-white/10 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12">
        
        {/* Brand column (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-[#ff0050] to-[#00f2ea] rounded-xl flex items-center justify-center font-bold text-black text-xs tracking-wider">
              OS
            </div>
            <div>
              <span className="font-serif italic text-lg font-bold text-white tracking-wide">
                TikTok Shop <span className="text-[#00f2ea]">Business OS</span>
              </span>
              <span className="block text-[8px] font-mono tracking-widest text-white/40 uppercase">
                Enterprise Commerce Engine
              </span>
            </div>
          </div>

          <p className="text-white/50 text-xs leading-relaxed max-w-sm">
            The unified control panel engineered specifically for TikTok Shop merchants, creators, and scale agencies to automate operations and maximize margins.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#00f2ea] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#00f2ea]" />
            Official TikTok Shop Partner Developer
          </div>
        </div>

        {/* Directory Links columns (7 cols total, 3 columns) */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold">Platform Modules</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li className="hover:text-[#00f2ea] transition-colors cursor-pointer flex items-center gap-0.5">Omni-Store Analytics <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" /></li>
              <li className="hover:text-[#00f2ea] transition-colors cursor-pointer">Creator Matchmaking</li>
              <li className="hover:text-[#00f2ea] transition-colors cursor-pointer">Restock Optimizer</li>
              <li className="hover:text-[#00f2ea] transition-colors cursor-pointer">Margin Mapping Console</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold">Partnerships</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li className="hover:text-[#ff0050] transition-colors cursor-pointer">Agency Hub Partner</li>
              <li className="hover:text-[#ff0050] transition-colors cursor-pointer">Creator Incentives</li>
              <li className="hover:text-[#ff0050] transition-colors cursor-pointer">Developer API Desk</li>
              <li className="hover:text-[#ff0050] transition-colors cursor-pointer">Affiliate Networks</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold">Security & Trust</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li className="hover:text-white transition-colors cursor-pointer">SLA Compliance Guard</li>
              <li className="hover:text-white transition-colors cursor-pointer">API Webhook Status</li>
              <li className="hover:text-white transition-colors cursor-pointer">Legal Terms & Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Platform Support Desk</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer base */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30">
        <div>
          © {new Date().getFullYear()} TikTok Shop Business OS. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>All platform services fully operational</span>
        </div>
      </div>
    </footer>
  );
}
