import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck, Shield, Sparkles, Clock, Check } from 'lucide-react';
import { TALENT_ROLES } from '../data/content';

interface FreelancingTalentSectionProps {
  onStartProject?: () => void;
}

export default function FreelancingTalentSection({ onStartProject }: FreelancingTalentSectionProps) {
  return (
    <section id="talent" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Wide Two-Column Landscape Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Offer */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                SPECIALIZED TALENT PODS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none mb-4">
              Need senior professionals for your next build?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium leading-relaxed mb-6">
              Skip multi-month recruiting cycles and risky contractor churn. Access pre-vetted senior engineers, architects, and designers ready to embed in your team within 48 hours.
            </p>

            {/* 3D Dispatch Timeline Pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#071B41]">Deployment Window: &lt; 48 Hours</div>
                <div className="text-[11px] text-slate-500">Dual-vetted Staff & Principal engineers</div>
              </div>
            </div>

            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#08B878] shrink-0" />
                <span>Top 1% vetted staff and principal practitioners</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#08B878] shrink-0" />
                <span>Flexible time-zone overlap (US, Europe, APAC)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#08B878] shrink-0" />
                <span>Zero recruiting overhead, immediate sprint velocity</span>
              </div>
            </div>

            {onStartProject && (
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Request a Dedicated Pod</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Right Column: Wide Horizontal Talent Roster with 3D Badges */}
          <div className="lg:col-span-7 divide-y divide-slate-100 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm">
            {TALENT_ROLES.map((role) => (
              <div
                key={role.role}
                className="py-4 sm:py-5 flex items-center justify-between gap-4 group hover:bg-white px-3 sm:px-4 rounded-2xl transition-all"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#071B41] group-hover:text-blue-600 transition-colors">
                      {role.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                      Senior Staff
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {role.spec}
                  </p>
                </div>

                <div className="text-right shrink-0 pl-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200/80 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {role.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
