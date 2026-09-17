import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Share2, 
  Cloud, 
  Sparkles, 
  Cpu, 
  Layers, 
  Shield, 
  Radio,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import VentraLogo from './VentraLogo';

interface AboutSectionProps {
  onStartProject?: () => void;
}

interface VentraEcosystemApp {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ className?: string }>;
  position: string;
  dotColor: string;
  description: string;
  metric: string;
}

const VENTRA_ECOSYSTEM_APPS: VentraEcosystemApp[] = [
  {
    id: 'ai',
    name: 'Ventra AI',
    tagline: 'Intelligent Autonomous Ops',
    badge: 'Core Engine',
    iconBg: 'bg-gradient-to-b from-indigo-500 to-violet-600 shadow-purple-500/30',
    iconColor: 'text-white',
    icon: Sparkles,
    position: 'top-[-14%] left-[45%] sm:left-[46%]',
    dotColor: '#8B5CF6',
    description: 'Autonomous reasoning agents, contextual RAG pipelines, and multi-modal models fine-tuned on sovereign enterprise data.',
    metric: '99.4% Reasoning Accuracy',
  },
  {
    id: 'cloud',
    name: 'Ventra Cloud',
    tagline: 'Resilient Edge Mesh',
    iconBg: 'bg-gradient-to-b from-sky-400 to-blue-600 shadow-blue-500/30',
    iconColor: 'text-white',
    icon: Cloud,
    position: 'top-[-6%] left-[12%] sm:left-[16%]',
    dotColor: '#38BDF8',
    description: 'Serverless Kubernetes mesh, edge-routed microservices, and auto-scaling multi-region infrastructure with zero cold starts.',
    metric: '99.999% SLA Uptime',
  },
  {
    id: 'systems',
    name: 'Ventra Systems',
    tagline: 'High-Throughput Core',
    badge: 'Ultra-Fast',
    iconBg: 'bg-gradient-to-b from-amber-400 via-rose-500 to-violet-600 shadow-rose-500/30',
    iconColor: 'text-white',
    icon: Cpu,
    position: 'top-[-6%] right-[12%] sm:right-[16%]',
    dotColor: '#F43F5E',
    description: 'Event-driven event streams, sub-millisecond databases, and high-frequency transaction pipelines built with Rust & Go.',
    metric: '<14ms P99 Latency',
  },
  {
    id: 'interface',
    name: 'Ventra Interface',
    tagline: 'Tactile Design Systems',
    iconBg: 'bg-gradient-to-b from-emerald-400 to-teal-600 shadow-emerald-500/30',
    iconColor: 'text-white',
    icon: Layers,
    position: 'top-[36%] left-[-2%] sm:left-[4%]',
    dotColor: '#10B981',
    description: 'Fluid, cross-platform design architectures, responsive web apps, and native mobile client applications built for high engagement.',
    metric: '100/100 Lighthouse Performance',
  },
  {
    id: 'connect',
    name: 'Ventra Connect',
    tagline: 'Real-Time Sync & Video',
    iconBg: 'bg-gradient-to-b from-amber-400 to-orange-500 shadow-orange-500/30',
    iconColor: 'text-white',
    icon: Radio,
    position: 'top-[36%] right-[-2%] sm:right-[4%]',
    dotColor: '#F97316',
    description: 'Ultra-low latency WebSocket rooms, WebRTC 4K spatial audio/video, and encrypted peer-to-peer enterprise streaming.',
    metric: '50M+ Daily WebSockets',
  },
  {
    id: 'security',
    name: 'Ventra Security',
    tagline: 'Zero-Trust Sovereignty',
    badge: 'Bank Grade',
    iconBg: 'bg-gradient-to-b from-rose-500 to-red-600 shadow-red-500/30',
    iconColor: 'text-white',
    icon: Shield,
    position: 'bottom-[4%] right-[16%] sm:right-[22%]',
    dotColor: '#EF4444',
    description: 'SOC2 Type II and HIPAA-compliant enclaves, automated secret rotation, and post-quantum end-to-end cryptographic policies.',
    metric: '100% Zero-Trust Compliance',
  },
];

const VENTRA_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Privacy & Sovereignty First',
    description: 'Your models, code, and enterprise intelligence stay entirely in your dedicated VPC. Zero third-party telemetry, zero vendor lock-in.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Engineered for Performance',
    description: 'Engineered with Rust, Go, TypeScript, and modern cloud primitives to sustain millions of requests at sub-millisecond execution times.',
    color: 'text-blue-600 bg-blue-50 border-blue-200/80',
    iconColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: 'Designed for Precision & Scale',
    description: 'Clean visual hierarchies, fluid user feedback, and mathematical layouts tailored for both executive dashboards and high-volume operators.',
    color: 'text-purple-600 bg-purple-50 border-purple-200/80',
    iconColor: 'text-purple-600',
  },
  {
    icon: Share2,
    title: 'A Unified Connected Continuum',
    description: 'One cohesive technology house. Your AI pipelines, cloud infrastructure, backend servers, and web interfaces work as one seamless machine.',
    color: 'text-amber-600 bg-amber-50 border-amber-200/80',
    iconColor: 'text-amber-600',
  },
];

export default function AboutSection({ onStartProject }: AboutSectionProps) {
  const [activeApp, setActiveApp] = useState<VentraEcosystemApp>(VENTRA_ECOSYSTEM_APPS[0]); // Default to Ventra AI

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Luminous Ambient Studio Lighting Glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Main 2-Column Ecosystem Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 4 Value Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                  ABOUT VENTRA
                </span>
              </div>

              {/* Main Section Headline - Matches Hero H1/H2 font hierarchy */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none mb-5">
                More than software.
                <br />
                <span className="text-blue-600">A connected ecosystem.</span>
              </h2>

              {/* Descriptive Narrative */}
              <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium leading-relaxed mb-8">
                VENTRA is a unified software house and enterprise technology ecosystem built around one conviction — architectural precision without compromise. We bring together applied AI models, resilient cloud infrastructure, high-throughput systems, and tactile human interfaces into one seamless continuum, so you can ship faster, scale without friction, and lead your industry.
              </p>

              {/* 4 Feature Pillars with Crisp White Containers */}
              <div className="space-y-3.5 sm:space-y-4 mb-8">
                {VENTRA_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50/70 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 group"
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${pillar.color} shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-[#071B41] tracking-tight group-hover:text-blue-600 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-0.5">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Trigger - Matches Hero Primary Button Style */}
              {onStartProject && (
                <div className="pt-2">
                  <button
                    onClick={onStartProject}
                    className="group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Partner with the VENTRA Ecosystem</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: The 3D Connected Ecosystem Orbit Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Orbit Stage */}
            <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center select-none">
              
              {/* Outer Glowing Orbital Rings with Micro-Dots */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-slate-200/80 pointer-events-none" />
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-slate-300 pointer-events-none" />
              <div className="absolute inset-28 sm:inset-32 rounded-full border border-blue-100 pointer-events-none" />

              {/* Orbiting Satellite Color Dots on Ring */}
              <div className="absolute top-[8%] left-[28%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm animate-pulse" />
              <div className="absolute top-[22%] right-[18%] w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm animate-pulse" />
              <div className="absolute bottom-[28%] left-[14%] w-2 h-2 rounded-full bg-emerald-500 shadow-sm" />
              <div className="absolute bottom-[18%] right-[26%] w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm animate-pulse" />

              {/* Glowing Multi-Tier Cylindrical Center Podium */}
              <div className="absolute bottom-[20%] w-[260px] sm:w-[320px] h-[90px] sm:h-[110px] rounded-[100%] bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-[0_20px_40px_-10px_rgba(7,27,65,0.14)] border border-slate-200/80 pointer-events-none">
                {/* Upper rim glow ring */}
                <div className="absolute inset-1 rounded-[100%] bg-gradient-to-b from-white via-sky-50 to-slate-100 shadow-inner" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-8 rounded-full bg-cyan-400/20 blur-xl" />
              </div>

              {/* Central 3D Faceted VENTRA 'V' Emblem */}
              <div className="relative z-20 flex flex-col items-center group cursor-pointer">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 p-3 rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_20px_35px_-10px_rgba(7,27,65,0.18)]">
                  {/* Radiant ambient glow behind emblem */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-emerald-500/15 to-amber-500/15 blur-xl pointer-events-none" />
                  
                  {/* High Quality Geometric Ventra 'V' Logo */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <VentraLogo size="lg" showWordmark={false} />
                  </div>
                </div>
                
                {/* Active Tooltip Pill below logo */}
                <div className="mt-3 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[11px] font-bold text-[#071B41] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#08B878] animate-ping" />
                  <span>VENTRA Core • {activeApp.name} Connected</span>
                </div>
              </div>

              {/* Orbiting 3D App Cards with High-Gloss Frosted Aesthetics */}
              {VENTRA_ECOSYSTEM_APPS.map((app) => {
                const Icon = app.icon;
                const isSelected = activeApp.id === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app)}
                    className={`absolute z-30 ${app.position} transition-all duration-300 group text-left focus:outline-none`}
                  >
                    {/* Glowing App Card */}
                    <div
                      className={`relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
                        isSelected
                          ? 'bg-white shadow-[0_16px_36px_-6px_rgba(37,99,235,0.28)] border-blue-400 scale-105 ring-2 ring-blue-400/30'
                          : 'bg-white/90 hover:bg-white shadow-[0_10px_25px_-5px_rgba(7,27,65,0.08)] hover:shadow-xl border-white/90 hover:border-blue-200 scale-100 hover:-translate-y-1'
                      }`}
                      style={{ minWidth: '120px', maxWidth: '150px' }}
                    >
                      {/* Vibrant Squircle Icon */}
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center ${app.iconBg} shadow-md mb-2 transition-transform duration-200 group-hover:scale-110`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* App Name */}
                      <span className="text-xs sm:text-[13px] font-bold text-[#071B41] tracking-tight whitespace-nowrap block">
                        {app.name}
                      </span>

                      {/* Tagline */}
                      <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap block mt-0.5">
                        {app.tagline}
                      </span>

                      {/* Optional Badge */}
                      {app.badge && (
                        <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-600 text-white shadow-xs">
                          {app.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Floating Glass Visual Architecture Preview (Bottom Right) */}
              <div className="absolute bottom-[-4%] right-[0%] z-25 hidden sm:flex items-center gap-2 pointer-events-none">
                <div className="w-28 h-20 rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 rotate-[-6deg] backdrop-blur-md bg-white/50">
                  <img
                    src="/hero-landscape.jpg"
                    alt="Alpine Glacial Perspective"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/90 rotate-[8deg] -ml-6 mt-4 backdrop-blur-md bg-white/50">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                    alt="Real-time Systems Data Flow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Selected Ecosystem Node Details Stage */}
            <div className="w-full max-w-lg mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${activeApp.iconBg}`}>
                  {React.createElement(activeApp.icon, { className: 'w-5 h-5 text-white' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#071B41]">{activeApp.name}</h4>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {activeApp.metric}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-xs sm:max-w-sm line-clamp-1">
                    {activeApp.description}
                  </p>
                </div>
              </div>
              <button
                onClick={onStartProject}
                className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
              >
                <span>Deploy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
