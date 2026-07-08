import React, { useRef } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Benefits from "./components/Benefits";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  // Navigation Scroll Targets
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#e0e0e0] font-sans overflow-x-hidden selection:bg-[#ff0050] selection:text-white">
      
      {/* Background radial spotlight overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#ff0050]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1200px] left-1/4 w-[700px] h-[500px] bg-gradient-to-tr from-[#00f2ea]/4 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Sticky Bar */}
      <Navigation 
        onCtalinkClick={() => handleScrollTo(ctaRef)}
        onPricingClick={() => handleScrollTo(pricingRef)}
        onFeaturesClick={() => handleScrollTo(featuresRef)}
        onFaqClick={() => handleScrollTo(faqRef)}
      />

      {/* Hero Section Banner */}
      <Hero 
        onCtalinkClick={() => handleScrollTo(ctaRef)}
        onWatchDemoClick={() => handleScrollTo(demoRef)}
      />

      {/* Verified Brand / Social Proof Marquee */}
      <SocialProof />

      {/* Problem Definition Panel */}
      <ProblemSolution />

      {/* Core Feature Bento Grid */}
      <div ref={featuresRef} className="scroll-mt-20">
        <Features />
      </div>

      {/* Live Interactive Dashboard App Preview Console */}
      <div ref={demoRef} className="scroll-mt-20">
        <DashboardPreview />
      </div>

      {/* Premium Value & SLA Benefits */}
      <Benefits />

      {/* Side-by-Side Competitor Comparison Matrix */}
      <Comparison />

      {/* Flexible Plan Pricing & Calculator Widgets */}
      <div ref={pricingRef} className="scroll-mt-20">
        <Pricing onCtalinkClick={() => handleScrollTo(ctaRef)} />
      </div>

      {/* Informative Accordion FAQ Container */}
      <div ref={faqRef} className="scroll-mt-20">
        <FAQ />
      </div>

      {/* High-Converting Core Conversion Node */}
      <div ref={ctaRef} className="scroll-mt-20">
        <CTA onCtalinkClick={() => handleScrollTo(ctaRef)} />
      </div>

      {/* System Status Sitemap Footer */}
      <Footer />

    </div>
  );
}
