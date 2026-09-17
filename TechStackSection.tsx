import React, { useState } from 'react';
import { Layers, Cpu, Sparkles, Cloud, Database, ShieldCheck, Check, ArrowRight, Zap } from 'lucide-react';
import { TECH_RADAR } from '../data/content';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI & Data', 'Cloud & DevOps'];

  const filteredTech =
    activeCategory === 'All'
      ? TECH_RADAR
      : TECH_RADAR.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 sm:py-24 lg:py-28 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      {/* Luminous Ambient Studio Lighting Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header: Wide & Compact - Matches Hero H1/H2 font hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                TECHNICAL ARSENAL & RADAR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] text-[#071B41] leading-[1.02] select-none">
              Battle-tested stacks. Zero deprecated libraries.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#071B41] text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Stack Architecture Stage Overview (Google/Meta Pure White Styling) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              VENTRA ARCHITECTURAL TIERS
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Zero Tech Debt SLA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Tier 1: Client Interfaces */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white transition-all group shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md mb-3 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-blue-600 uppercase font-bold tracking-wider">L1 • Human Interface</div>
              <div className="text-sm font-bold text-[#071B41] mt-0.5">React, Next.js, Tailwind, Native</div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Sub-frame animation loops, SSR hydration, zero cumulative layout shifts.</p>
            </div>

            {/* Tier 2: AI & Data */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-purple-400 hover:bg-white transition-all group shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md mb-3 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-purple-600 uppercase font-bold tracking-wider">L2 • Autonomous AI</div>
              <div className="text-sm font-bold text-[#071B41] mt-0.5">PyTorch, LangGraph, pgvector, Gemini</div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Self-healing agent workflows, hybrid semantic vector search, private VPC finetuning.</p>
            </div>

            {/* Tier 3: Core Distributed Backend */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-rose-400 hover:bg-white transition-all group shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center text-white shadow-md mb-3 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-rose-600 uppercase font-bold tracking-wider">L3 • Core Engine</div>
              <div className="text-sm font-bold text-[#071B41] mt-0.5">Rust, Go, Node.js, PostgreSQL</div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Sub-10ms transactional speeds, streaming WebSocket workers, strict schema safety.</p>
            </div>

            {/* Tier 4: Resilient Cloud & DevOps */}
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-400 hover:bg-white transition-all group shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-md mb-3 group-hover:scale-105 transition-transform">
                <Cloud className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-emerald-600 uppercase font-bold tracking-wider">L4 • Edge Mesh</div>
              <div className="text-sm font-bold text-[#071B41] mt-0.5">Kubernetes, Terraform, Cloudflare</div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Multi-cloud active-active deployments, automatic canary rollouts, zero downtime.</p>
            </div>

          </div>
        </div>

        {/* Wide Horizontal Tech Rows */}
        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="py-4 sm:py-4.5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-blue-700 border border-slate-200 shrink-0 group-hover:border-blue-300 transition-colors">
                  {tech.category}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#071B41] tracking-tight shrink-0 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </span>
                <span className="hidden md:inline-block text-xs text-slate-500 truncate">
                  — {tech.description}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-16 sm:pl-0">
                <span className="text-xs text-slate-500 md:hidden">
                  {tech.description}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 shrink-0 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Check className="w-3.5 h-3.5" />
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
