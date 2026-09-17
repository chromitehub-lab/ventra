import React, { useState } from 'react';
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2, Shield } from 'lucide-react';
import { SkillItem } from '../types';

interface HeroProps {
  onStartProject: () => void;
  onExplore: () => void;
  onSelectSkill?: (skill: SkillItem) => void;
}

export default function Hero({
  onStartProject,
  onExplore,
}: HeroProps) {
  const [bgImage, setBgImage] = useState<string>('/abbottabad-tech.jpg');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full aspect-auto md:aspect-[16/9] md:max-h-[920px] min-h-[580px] sm:min-h-[620px] md:min-h-0 flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* Photographic Landscape Background - Abbottabad Technology Valley */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={bgImage}
          alt="VENTRA - Abbottabad Technology & Innovation Valley"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (bgImage !== '/abbottabad-tech.jpg') {
              setBgImage('/abbottabad-tech.jpg');
            }
          }}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-90'
          }`}
        />

        {/* Subtle luminous atmospheric overlay: preserves crystal clarity of mountains and technology while ensuring text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.55) 34%, rgba(255,255,255,0.2) 58%, rgba(255,255,255,0) 80%)',
          }}
        />

        {/* Top subtle fade for navbar legibility */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Mobile light overlay for small screen contrast */}
        <div className="absolute inset-0 md:hidden bg-white/30 pointer-events-none" />

        {/* Bottom gentle fade into white background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          }}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-between">
        {/* Upper Hero Typography & CTAs */}
        <div className="max-w-2xl pt-2 sm:pt-4 lg:pt-6">
          {/* Abbottabad Technology Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[11px] sm:text-xs font-bold text-[#071B41] tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Abbottabad Technology Hub • Global Velocity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[46px] sm:text-[64px] md:text-[76px] lg:text-[88px] xl:text-[94px] font-black text-[#071B41] tracking-[-0.04em] leading-[0.98] select-none">
            Build smarter.
            <br />
            Ship faster.
          </h1>

          {/* Supporting Paragraph */}
          <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] lg:text-[19px] text-[#1E3A5F] font-medium leading-relaxed max-w-xl">
            VENTRA brings software engineering, AI systems, cloud architecture, and digital products together in one connected experience.
          </p>

          {/* Hero Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary Green Pill Button */}
            <button
              onClick={onStartProject}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Frosted Pill Button */}
            <button
              onClick={onExplore}
              className="group inline-flex items-center justify-center gap-2.5 bg-white/80 hover:bg-white/95 border border-blue-200/80 backdrop-blur-md text-[#071B41] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Subtle Horizontal Framing Strip Anchoring the Viewport */}
        <div className="pt-8 sm:pt-12 pb-2">
          <div className="inline-flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#08B878]" />
              <span className="font-semibold text-[#071B41]">Zero Junior Handoffs</span>
            </div>
            <div className="hidden sm:block w-px h-3.5 bg-slate-300" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-[#071B41]">$4.2B+ Volume Handled</span>
            </div>
            <div className="hidden sm:block w-px h-3.5 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span className="font-semibold text-[#071B41]">99.999% SLA Uptime</span>
            </div>
            <div className="hidden md:block w-px h-3.5 bg-slate-300" />
            <div className="hidden md:flex items-center gap-2 text-slate-600">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Sub-Second AI Model Latency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
