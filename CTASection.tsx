import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
}

export default function CTASection({ onStartProject }: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Google/Meta Crisp White Card */}
        <div className="rounded-3xl bg-white text-slate-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm border border-slate-200/90">
          {/* Luminous Ambient Glow Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left: Heading & Short Pitch */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-blue-700 text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>VENTRA COLLABORATION</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none mb-2">
                HAVE AN IDEA? LET'S BUILD IT.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium leading-relaxed max-w-lg">
                Tell us what you're building. Our senior technical architects evaluate feasibility and provide an initial architectural scope estimate within 24 hours.
              </p>

              {/* Compact Inline Badges */}
              <div className="flex flex-wrap items-center gap-4 mt-5 text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Mutual NDA Protected
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  24-Hour Technical Assessment
                </span>
              </div>
            </div>

            {/* Right: Horizontal CTA Actions with Hero Button Finish */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>START PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-full font-semibold text-[#071B41] hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-[14px] sm:text-[15px]"
              >
                Direct Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
