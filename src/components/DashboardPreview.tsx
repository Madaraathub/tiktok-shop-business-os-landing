import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  RefreshCw, 
  ShoppingBag, 
  Percent, 
  Activity, 
  ArrowUpRight,
  ShieldCheck,
  Clock,
  CheckCircle2
} from "lucide-react";

interface Order {
  id: string;
  time: string;
  item: string;
  value: number;
  status: "Synced" | "Pending" | "Processing";
}

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"gmv" | "affiliates" | "creators" | "orders">("gmv");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [syncCompleted, setSyncCompleted] = useState(false);
  const [commissionTier, setCommissionTier] = useState(15);
  const [ordersCount, setOrdersCount] = useState(1842);

  const [orders, setOrders] = useState<Order[]>([
    { id: "TTS-8495", time: "Just now", item: "Dynamic Glow Cosmetics Kit", value: 48.00, status: "Synced" },
    { id: "TTS-8494", time: "2 mins ago", item: "Pro Matte Lipstick Set", value: 32.00, status: "Synced" },
    { id: "TTS-8493", time: "5 mins ago", item: "Silk Touch Foundation Brush", value: 24.00, status: "Synced" },
    { id: "TTS-8492", time: "12 mins ago", item: "Dynamic Glow Cosmetics Kit", value: 48.00, status: "Synced" },
    { id: "TTS-8491", time: "18 mins ago", item: "Velvet Lip Clay Trio", value: 36.00, status: "Synced" }
  ]);

  // Handle simulate storefront data sync
  const triggerStoreSync = () => {
    setIsSyncing(true);
    setSyncProgress(0);
    setSyncCompleted(false);

    const simulationSteps = [
      { progress: 20, countAdd: 2, order: { id: "TTS-8497", time: "Just now", item: "Dynamic Glow Cosmetics Kit", value: 48.00, status: "Synced" as const } },
      { progress: 55, countAdd: 4, order: { id: "TTS-8498", time: "Just now", item: "Velvet Lip Clay Trio", value: 36.00, status: "Synced" as const } },
      { progress: 85, countAdd: 6, order: { id: "TTS-8499", time: "Just now", item: "Silk Touch Foundation Brush", value: 24.00, status: "Synced" as const } },
      { progress: 100, countAdd: 9, order: { id: "TTS-8500", time: "Just now", item: "Dynamic Glow Cosmetics Kit", value: 48.00, status: "Synced" as const } }
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < simulationSteps.length) {
        const step = simulationSteps[stepIdx];
        setSyncProgress(step.progress);
        
        // Feed in new orders to show live sync
        setOrders(prev => {
          // Prevent duplicates during rapid successive clicks
          if (prev.some(o => o.id === step.order.id)) return prev;
          
          // Move previous "Just now" orders to "1 min ago"
          const updatedPrev = prev.map(o => {
            if (o.time === "Just now") return { ...o, time: "1 min ago" };
            if (o.time === "1 min ago") return { ...o, time: "3 mins ago" };
            return o;
          });
          return [step.order, ...updatedPrev];
        });

        setOrdersCount(prev => prev + 1);
        stepIdx++;
      } else {
        clearInterval(interval);
        setIsSyncing(false);
        setSyncCompleted(true);
      }
    }, 450);
  };

  return (
    <section id="dashboard-preview-section" className="py-24 border-b border-white/5 relative px-6 bg-[#050505]">
      {/* Background radial spotlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#00f2ea]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[#ff0050]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f2ea] font-bold">
            Interactive System Console
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-white mt-3">
            Real-Time Operational <span className="text-[#ff0050]">Dashboard</span>
          </h2>
          <p className="text-white/60 text-sm mt-4">
            Test the live simulator below. Experience how your storefront metrics, affiliate campaigns, and live sales data aggregate seamlessly in a luxurious dark canvas.
          </p>
        </div>

        {/* Console Container wrapper */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black relative z-10 max-w-5xl mx-auto">
          
          {/* Top Console Bar */}
          <div className="bg-[#0e0e0e] border-b border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              {/* Traffic light design dots */}
              <div className="flex gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff0050]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00f2ea]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 border-l border-white/10 pl-3">
                LIVE FRONTEND ENGINE DEMO • INTERACTIVE
              </span>
            </div>

            {/* Sync control button */}
            <div className="flex items-center gap-3">
              <button
                onClick={triggerStoreSync}
                disabled={isSyncing}
                className="px-4 py-2 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-black font-sans text-[10px] font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer select-none"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncing ? "animate-spin" : ""}`} />
                {isSyncing ? `Syncing TikTok Shop (${syncProgress}%)` : "Simulate Incoming Orders"}
              </button>
            </div>

          </div>

          {/* Main Dashboard Space */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column Sidebar (3 cols) */}
            <div className="md:col-span-3 border-r border-white/5 p-4 bg-[#080808] flex flex-col gap-1 shrink-0">
              <p className="text-[9px] uppercase font-mono tracking-widest text-white/30 mb-3 pl-2">Dashboard Views</p>
              
              <button
                onClick={() => setActiveTab("gmv")}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all ${
                  activeTab === "gmv"
                    ? "bg-white/5 border border-white/10 text-[#00f2ea]"
                    : "text-white/60 hover:bg-white/2"
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Live Revenue</span>
              </button>

              <button
                onClick={() => setActiveTab("affiliates")}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all ${
                  activeTab === "affiliates"
                    ? "bg-white/5 border border-white/10 text-[#ff0050]"
                    : "text-white/60 hover:bg-white/2"
                }`}
              >
                <Percent className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Affiliate Pipeline</span>
              </button>

              <button
                onClick={() => setActiveTab("creators")}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all ${
                  activeTab === "creators"
                    ? "bg-white/5 border border-white/10 text-[#00f2ea]"
                    : "text-white/60 hover:bg-white/2"
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Creator ROI Tracker</span>
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all ${
                  activeTab === "orders"
                    ? "bg-white/5 border border-white/10 text-white"
                    : "text-white/60 hover:bg-white/2"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Recent Sales Feed</span>
              </button>

              {/* Commission Slider Control */}
              <div className="mt-8 pt-6 border-t border-white/5 px-2">
                <label className="text-[9px] font-mono text-white/40 uppercase block mb-2">Simulate Commission rate</label>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  value={commissionTier}
                  onChange={(e) => setCommissionTier(Number(e.target.value))}
                  className="w-full accent-[#ff0050] cursor-pointer" 
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-white/60 mt-2">
                  <span>Standard Rate:</span>
                  <span className="text-[#ff0050] font-bold">{commissionTier}%</span>
                </div>
              </div>

            </div>

            {/* Right Column Core Analytics Space (9 cols) */}
            <div className="md:col-span-9 p-6 flex flex-col justify-between min-h-[380px]">
              
              {/* Dynamic Content Switching */}
              <div>
                
                {/* 1. GMV Performance Tab Content */}
                {activeTab === "gmv" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div>
                        <p className="text-[10px] uppercase text-white/40 font-mono">Storefront Activity Overview</p>
                        <h3 className="text-2xl font-serif text-white italic mt-1 font-bold">Processed Shop Volume</h3>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-xl">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-[10px] text-green-400 font-mono font-bold">+34.8% Growth Rate</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                        <p className="text-[9px] text-white/40 uppercase font-mono">Simulated Gross Volume</p>
                        <p className="text-xl font-mono text-[#00f2ea] font-extrabold mt-1">
                          ${(ordersCount * 48).toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                        <p className="text-[9px] text-white/40 uppercase font-mono">Orders Synchronized</p>
                        <p className="text-xl font-mono text-white font-extrabold mt-1">
                          {ordersCount.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                        <p className="text-[9px] text-white/40 uppercase font-mono">Calculated Affiliate Payout</p>
                        <p className="text-xl font-mono text-[#ff0050] font-extrabold mt-1">
                          ${Math.floor(ordersCount * 48 * (commissionTier / 100)).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Chart simulation representation */}
                    <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                      <div className="flex justify-between text-[10px] text-white/40 font-mono mb-4">
                        <span>Daily Store Income Flow (USD)</span>
                        <span className="text-[#00f2ea]">Real-time Simulator Active</span>
                      </div>
                      <div className="h-28 flex items-end gap-2 pt-2">
                        {[20, 35, 15, 45, 30, 60, 85, 55, 75, 95].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-white text-black text-[8px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono pointer-events-none">
                              ${Math.floor(h * 420)}
                            </div>
                            <div 
                              className="w-full bg-gradient-to-t from-[#ff0050]/20 to-[#00f2ea]/80 rounded-t group-hover:brightness-110 transition-all cursor-pointer"
                              style={{ height: `${h}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] text-white/30 font-mono mt-2">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Affiliate Pipeline Tab Content */}
                {activeTab === "affiliates" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase text-white/40 font-mono">Affiliate Product Campaigns</p>
                        <h3 className="text-xl font-serif text-white italic mt-1 font-bold">Active Affiliate Matching</h3>
                      </div>
                      <span className="text-xs text-white/40 font-mono">Configured Commission: {commissionTier}%</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "Dynamic Glow Cosmetics Kit", affiliateCount: 142, revenue: "$28,400" },
                        { name: "Pro Matte Lipstick Set", affiliateCount: 98, revenue: "$14,200" },
                        { name: "Silk Touch Foundation Brush", affiliateCount: 84, revenue: "$11,800" },
                      ].map((camp, idx) => (
                        <div key={idx} className="bg-[#111] p-3.5 rounded-xl border border-white/5 flex items-center justify-between hover:border-white/10 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#ff0050]/10 border border-[#ff0050]/20 flex items-center justify-center font-bold text-xs text-[#ff0050]">
                              {idx + 1}
                            </div>
                            <div>
                              <p className="text-xs text-white font-bold">{camp.name}</p>
                              <p className="text-[10px] text-white/40 font-mono">{camp.affiliateCount} active creators producing sales</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-white font-mono font-bold">{camp.revenue}</p>
                            <p className="text-[9px] text-green-400 font-mono">Attributed ROI: +42%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Creator ROI Content */}
                {activeTab === "creators" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase text-white/40 font-mono">Influencer Synergy Stats</p>
                        <h3 className="text-xl font-serif text-white italic mt-1 font-bold">Top Performing Creators</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { handle: "@fashion_queen", conversions: 420, rate: "+24.5%", avatar: "FQ" },
                        { handle: "@beauty_insider", conversions: 284, rate: "+18.2%", avatar: "BI" },
                        { handle: "@makeup_pro", conversions: 198, rate: "+14.8%", avatar: "MP" },
                        { handle: "@skincare_guru", conversions: 124, rate: "+11.2%", avatar: "SG" },
                      ].map((creator, idx) => (
                        <div key={idx} className="bg-[#111] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff0050] to-[#00f2ea] flex items-center justify-center font-bold text-[10px] text-black">
                              {creator.avatar}
                            </div>
                            <div>
                              <p className="text-xs text-white font-bold">{creator.handle}</p>
                              <p className="text-[10px] text-white/40 font-mono">{creator.conversions} attributed orders</p>
                            </div>
                          </div>
                          <span className="text-[10px] bg-[#00f2ea]/10 border border-[#00f2ea]/30 text-[#00f2ea] px-2 py-1 rounded font-mono font-bold">
                            {creator.rate} ROI
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Recent Sales Feed Content */}
                {activeTab === "orders" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase text-white/40 font-mono">Live Sync Queue</p>
                        <h3 className="text-xl font-serif text-white italic mt-1 font-bold">TikTok Shop Real-Time Stream</h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00f2ea]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Live Sync Listening</span>
                      </div>
                    </div>

                    <div className="bg-black/60 rounded-xl border border-white/5 divide-y divide-white/5 max-h-56 overflow-y-auto">
                      {orders.map((order, idx) => (
                        <div key={order.id + idx} className="p-3 flex items-center justify-between text-xs font-mono text-white/80">
                          <div className="flex items-center gap-3">
                            <span className="text-white/30">{order.time}</span>
                            <span className="text-[#00f2ea] font-bold">{order.id}</span>
                            <span className="text-white/70 truncate max-w-[150px] sm:max-w-none">{order.item}</span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-white font-bold">${order.value.toFixed(2)}</span>
                            <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Status Indicator bottom of console */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/40">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00f2ea]" />
                  <span>Official TikTok Partner API Guarded Connection</span>
                </div>
                {syncCompleted && (
                  <span className="text-[#00f2ea] font-extrabold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    SYNC SUCCESSFUL!
                  </span>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
