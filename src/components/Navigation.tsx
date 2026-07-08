import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavigationProps {
  onCtalinkClick: () => void;
  onPricingClick: () => void;
  onFeaturesClick: () => void;
  onFaqClick: () => void;
}

export default function Navigation({ onCtalinkClick, onPricingClick, onFeaturesClick, onFaqClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-9 h-9 bg-gradient-to-tr from-[#ff0050] to-[#00f2ea] rounded-xl flex items-center justify-center font-bold text-black text-xs tracking-wider shadow-lg shadow-[#ff0050]/20">
            OS
          </div>
          <div>
            <span className="font-serif italic text-lg font-bold text-white tracking-wide">
              TikTok Shop <span className="text-[#00f2ea]">Business OS</span>
            </span>
            <span className="block text-[8px] font-mono tracking-widest text-white/40 uppercase">
              Omnichannel Commerce Engine
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onFeaturesClick}
            className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={onPricingClick}
            className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={onFaqClick}
            className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            Resources & FAQ
          </button>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00f2ea]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f2ea] font-semibold">
              TikTok Official API Partner
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://nexoralabss.gumroad.com/l/TikTok-Shop-Business-os"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-black font-sans font-bold text-xs rounded-xl shadow-lg hover:shadow-[#00f2ea]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            Buy Now
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#00f2ea] transition-colors p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => {
              onFeaturesClick();
              setIsOpen(false);
            }}
            className="text-left text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => {
              onPricingClick();
              setIsOpen(false);
            }}
            className="text-left text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              onFaqClick();
              setIsOpen(false);
            }}
            className="text-left text-sm font-mono uppercase tracking-wider text-white/80 hover:text-white"
          >
            Resources & FAQ
          </button>
          <hr className="border-white/10" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00f2ea]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f2ea] font-semibold">
              TikTok Official Partner
            </span>
          </div>
          <a
            href="https://nexoralabss.gumroad.com/l/TikTok-Shop-Business-os"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-black font-sans font-bold text-sm rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
          >
            Buy Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
