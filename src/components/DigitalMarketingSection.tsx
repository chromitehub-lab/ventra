import React from 'react';
import { ArrowRight, Search, Share2, FileText, TrendingUp, Sparkles, Zap, BarChart3 } from 'lucide-react';
import { MARKETING_CAPABILITIES } from '../data/content';

interface DigitalMarketingSectionProps {
  onStartProject?: () => void;
}

export default function DigitalMarketingSection({ onStartProject }: DigitalMarketingSectionProps) {
  const icons = [Search, Share2, FileText, TrendingUp];
  const iconBgs = [
    'bg-gradient-to-b from-sky-400 to-blue-600 text-white shadow-blue-500/25',
    'bg-gradient-to-b from-indigo-500 to-violet-600 text-white shadow-purple-500/25',
    'bg-gradient-to-b from-emerald-400 to-teal-600 text-white shadow-emerald-500/25',
    'bg-gradient-to-b from-amber-400 to-orange-500 text-white shadow-orange-500/25',
  ];

  return (
    <section id="marketing" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Wide Two-Column Landscape Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Narrative & 3D Growth Terminal */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                GROWTH & DISTRIBUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none mb-4">
              Building software is only the beginning.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium leading-relaxed mb-6">
              World-class software requires category-defining distribution. We combine technical SEO architecture, thought leadership, and performance funnels to turn your platform into an acquisition engine.
            </p>

            {/* 3D Growth Telemetry Badge */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#071B41]">Avg Acquisition Lift: +240%</div>
                  <div className="text-[11px] text-slate-500">First 90 Days Post-Launch</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                PROVEN ROI
              </span>
            </div>

            {onStartProject && (
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Plan Your Growth Strategy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Right Column: Four Compact Horizontal Capabilities with Jewel-Toned Squircles */}
          <div className="lg:col-span-7 divide-y divide-slate-100 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm">
            {MARKETING_CAPABILITIES.map((cap, idx) => {
              const Icon = icons[idx % icons.length];
              const bg = iconBgs[idx % iconBgs.length];
              return (
                <div
                  key={cap.title}
                  className="py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 group hover:bg-white px-3 sm:px-4 rounded-2xl transition-all"
                >
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 ${bg} shadow-md transition-transform group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-sm sm:text-base font-bold text-[#071B41] group-hover:text-blue-600 transition-colors">
                          {cap.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 hidden sm:inline-block border border-slate-200/60">
                          {cap.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 shrink-0 hidden md:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
