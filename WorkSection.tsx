import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Award, Zap, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';

interface WorkSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export default function WorkSection({
  onSelectCaseStudy,
}: WorkSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Software', 'AI & ML', 'Cloud', 'UI/UX'];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Luminous Ambient Studio Lighting Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header: Wide & Editorial - Matches Hero H1/H2 font hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                PRODUCTION CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none">
              Tested under load. Proven in production.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#071B41] text-white shadow-sm scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Visual Impact Metric Ribbon with Crisp Google/Meta White Styling */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#071B41]">$140M+</div>
              <div className="text-[11px] font-medium text-slate-500">Client Revenue Driven</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#071B41]">&lt;14ms</div>
              <div className="text-[11px] font-medium text-slate-500">Average P99 Latency</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-white shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#071B41]">99.999%</div>
              <div className="text-[11px] font-medium text-slate-500">SLA Availability</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#071B41]">50+</div>
              <div className="text-[11px] font-medium text-slate-500">Enterprise Pod Launches</div>
            </div>
          </div>
        </div>

        {/* Large Horizontal Project Previews */}
        <div className="space-y-12 sm:space-y-14">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden bg-white hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(7,27,65,0.12)] transition-all duration-300"
            >
              {/* LARGE LANDSCAPE IMAGE (Aspect 16:9 or 21:9 on desktop) */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-slate-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B41]/85 via-black/25 to-transparent pointer-events-none" />

                {/* Top badges with Frosted Glass Finish */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#071B41] shadow-xs border border-white/80">
                    {study.category}
                  </span>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/20">
                    Client: {study.client}
                  </span>
                </div>

                {/* Overlay Headline on Bottom of Image */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white flex items-end justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                      {study.headline}
                    </h3>
                  </div>
                  <div className="hidden sm:flex w-11 h-11 rounded-full bg-white/20 backdrop-blur-md items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 ml-4 shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Clean Horizontal Caption & Metrics Bar */}
              <div className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border-t border-slate-100">
                {/* Left: Summary description & deliverables */}
                <div className="max-w-xl">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Right: Metrics & Action */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 shrink-0">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="border-l border-slate-200/90 pl-4 sm:pl-6">
                      <div className="text-lg sm:text-xl font-black text-[#071B41] tracking-tight">{m.value}</div>
                      <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 pl-2">
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
