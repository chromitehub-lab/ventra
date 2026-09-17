import React from 'react';
import { EDITORIAL_PILLARS } from '../data/content';
import { CheckCircle2, XCircle, Zap, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function WhyVentraSection() {
  return (
    <section id="why-ventra" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                WHY VENTRA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none">
              Technology should make your business better.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium max-w-sm leading-relaxed">
            Pragmatic product engineering designed for high-growth enterprises that refuse to compromise.
          </p>
        </div>

        {/* 3D Visual Architectural Comparison Stage (Matching Google/Meta White Styling) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: The Legacy Trap */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-red-100 shadow-xs">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-3">
                <XCircle className="w-4 h-4" />
                <span>Fragmented Agency & Vendor Silos</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>3 different subcontracted agencies blaming each other for outages</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Hidden cloud margins and uncontrolled AWS/GCP bill creep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Junior engineers rotated in mid-sprint without domain context</span>
                </li>
              </ul>
            </div>

            {/* Center: Glowing 3D Bridge / Hub Graphic */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="relative flex items-center justify-center">
                {/* Glowing Circular Pedestal Rim */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] text-white">
                  <Sparkles className="w-7 h-7 animate-pulse" />
                </div>
              </div>
              <span className="mt-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                VENTRA HUB
              </span>
            </div>

            {/* Right Box: The VENTRA Solution */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-md ring-1 ring-emerald-400/20">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Unified VENTRA Continuum</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B878]" />
                  <span>Dedicated, cohesive senior engineering pods aligned with your KPIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B878]" />
                  <span>Integrated AI models, cloud mesh, and tactile frontends built in tandem</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B878]" />
                  <span>Fixed-scope or sprint-rate billing with guaranteed SLAs and code ownership</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Horizontal Editorial Grid: 2 rows × 3 columns with Jewel-Toned Squircle Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-y border-slate-100">
          {EDITORIAL_PILLARS.map((item, idx) => (
            <div
              key={item.number}
              className={`py-8 px-5 sm:px-7 transition-colors duration-200 hover:bg-slate-50/70 group ${
                idx >= 3 ? 'lg:border-t lg:border-slate-100' : ''
              }`}
            >
              <div className="flex items-center gap-3.5 mb-3">
                <span className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-mono font-bold shadow-xs">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#071B41] tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
