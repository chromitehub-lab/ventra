import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Check, 
  Sparkles, 
  Cloud, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Database,
  ExternalLink,
  Zap
} from 'lucide-react';
import { WIDE_SERVICE_ROWS, ServiceRowItem } from '../data/content';

interface ServicesSectionProps {
  onStartProjectForService?: (serviceName: string) => void;
}

// 3D Visual Archetypes for the Service Capabilities Showcase
const SERVICE_3D_PILLARS = [
  {
    id: 'ai-eng',
    title: 'AI & Autonomous Systems',
    tagline: 'Applied Reasoning Engines',
    iconBg: 'bg-gradient-to-b from-indigo-500 to-violet-600 shadow-indigo-500/30',
    icon: Sparkles,
    badge: 'State of Art',
    accentColor: '#6366F1',
    metric: '99.4% Task Accuracy',
    description: 'Fine-tuned SLMs, autonomous agentic loops, enterprise RAG, and vector retrieval pipelines.',
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Resilient Edge',
    tagline: 'Multi-Region Kubernetes',
    iconBg: 'bg-gradient-to-b from-sky-400 to-blue-600 shadow-blue-500/30',
    icon: Cloud,
    badge: 'Zero Cold Start',
    accentColor: '#0284C7',
    metric: '99.999% SLA Uptime',
    description: 'Infrastructure-as-code, global edge gateways, automated failover, and multi-tenant security.',
  },
  {
    id: 'core-systems',
    title: 'Distributed Core & APIs',
    tagline: 'High-Throughput Streams',
    iconBg: 'bg-gradient-to-b from-amber-400 via-rose-500 to-violet-600 shadow-rose-500/30',
    icon: Cpu,
    badge: '<14ms P99',
    accentColor: '#F43F5E',
    metric: '100K+ RPS Sustained',
    description: 'Ultra-fast microservices in Go & Rust, Kafka event brokers, and sub-millisecond database caching.',
  },
  {
    id: 'tactile-ui',
    title: 'Tactile Web & Mobile Apps',
    tagline: '120fps Fluid Interfaces',
    iconBg: 'bg-gradient-to-b from-emerald-400 to-teal-600 shadow-emerald-500/30',
    icon: Layers,
    badge: 'Design System',
    accentColor: '#10B981',
    metric: '100/100 Lighthouse',
    description: 'Design systems, micro-interactions, responsive React/Next.js architectures, and cross-platform mobile.',
  },
];

export default function ServicesSection({ onStartProjectForService }: ServicesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activePillar, setActivePillar] = useState<string>('ai-eng');

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Luminous Ambient Studio Lighting Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header: Wide & Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                CAPABILITIES & PRACTICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none">
              Everything you need to build what's next.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium max-w-md leading-relaxed">
            High-velocity software engineering pods with zero junior handoffs. From initial discovery to production-grade deployment.
          </p>
        </div>

        {/* 3D Visual Architecture Showcase Stage (Matching Google/Meta Crisp White Aesthetic) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          {/* Subtle orbital ring in background */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-dashed border-slate-200 pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border border-slate-100 pointer-events-none" />

          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              CORE ARCHITECTURE PLATFORMS
            </span>
            <span className="text-[11px] font-semibold text-blue-600 bg-white px-2.5 py-1 rounded-full border border-blue-200/60 shadow-xs">
              Live Production Benchmarks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_3D_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`cursor-pointer relative p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 backdrop-blur-xl border ${
                    isSelected
                      ? 'bg-white shadow-[0_16px_32px_-6px_rgba(37,99,235,0.22)] border-blue-400 scale-[1.02] ring-2 ring-blue-400/20'
                      : 'bg-white/90 hover:bg-white shadow-[0_6px_20px_-4px_rgba(7,27,65,0.06)] hover:shadow-lg border-white/90 hover:border-blue-200'
                  }`}
                >
                  {/* Glowing Miniature Center Pedestal Base */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-[100%] bg-blue-500/15 blur-md pointer-events-none" />

                  {/* Top Header with Vibrant Squircle Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.iconBg} shadow-md transition-transform duration-200 hover:scale-105`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#071B41] tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-medium text-blue-600 mb-2.5">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                    {pillar.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-mono font-semibold text-slate-600">{pillar.metric}</span>
                    <span className="text-blue-600 font-semibold flex items-center gap-0.5 hover:underline">
                      Explore
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wide Horizontal Service Rows */}
        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {WIDE_SERVICE_ROWS.map((service: ServiceRowItem) => {
            const isExpanded = expandedId === service.number;
            return (
              <div
                key={service.number}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-slate-50/60' : 'hover:bg-slate-50/40'
                }`}
              >
                {/* Main Horizontal Row Bar */}
                <div
                  onClick={() => toggleRow(service.number)}
                  className="cursor-pointer py-6 sm:py-7 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  {/* Left: Number + Title & Subtitle */}
                  <div className="flex items-baseline sm:items-center gap-4 sm:gap-8 min-w-0">
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors w-7">
                      {service.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#071B41] tracking-tight group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <span className="hidden lg:inline-block text-xs text-slate-400 font-normal">
                          — {service.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 lg:hidden">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Tags + Explore Trigger */}
                  <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 shrink-0 pl-11 md:pl-0">
                    {/* Tags (Desktop) */}
                    <div className="hidden sm:flex items-center gap-2">
                      {service.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600 border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Arrow */}
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#071B41] group-hover:text-blue-600 transition-colors">
                      <span>{isExpanded ? 'Collapse' : 'Explore'}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1 text-slate-400 group-hover:text-blue-600'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Details: Thin Horizontal Drawer */}
                {isExpanded && (
                  <div className="px-4 sm:px-14 pb-8 pt-2">
                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      <div className="max-w-2xl">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartProjectForService?.(service.title);
                          }}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#08B878] hover:bg-[#069c65] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                        >
                          <span>Brief this Service</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
