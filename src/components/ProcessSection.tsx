import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Terminal, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to Step 2 (Design)

  return (
    <section id="process" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Luminous Ambient Studio Lighting Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header: Wide & Compact - Matches Hero H1/H2 font hierarchy */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                EXECUTION PIPELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none">
              Predictable delivery. Transparent sprint cycles.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium max-w-sm leading-relaxed">
            Strict left-to-right velocity. Bi-weekly shippable increments with automated regression tests and real-time telemetry.
          </p>
        </div>

        {/* 3D Visual Execution Stage (Horizontal Timeline with Glowing Pedestals & Connecting Track) */}
        <div className="relative mb-10">
          {/* Laser Connecting Rail (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-[3px] bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 opacity-60 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between min-h-[190px] group relative ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-[0_14px_30px_-6px_rgba(37,99,235,0.22)] scale-[1.04] ring-2 ring-blue-500/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200/90 shadow-xs hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  {/* Subtle 3D Pedestal Glow Under Selected Node */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-[100%] transition-opacity duration-300 pointer-events-none ${
                    isSelected ? 'bg-blue-400/25 blur-md opacity-100' : 'opacity-0'
                  }`} />

                  <div>
                    {/* Step Node with Jewel-Toned Accent */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold shadow-xs transition-transform duration-200 group-hover:scale-105 ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-blue-500/30'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {item.step}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold tracking-tight text-[#071B41] group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-blue-600 mt-0.5">
                      {item.label}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 mt-3">
                    <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug line-clamp-2">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Sprint Cycle Interactive Telemetry Drawer (Crisp Google/Meta White Styling) */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 text-white shadow-md">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h4 className="text-base sm:text-lg font-bold text-[#071B41]">
                  Sprint Milestone #{PROCESS_STEPS[activeStep].step}: {PROCESS_STEPS[activeStep].name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {PROCESS_STEPS[activeStep].label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {PROCESS_STEPS[activeStep].detail} All deliverables are code-reviewed by senior staff architects with automated Cypress/Playwright integration suites before staging deployment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] text-slate-500 font-medium">Target Cycle Time</div>
              <div className="text-sm font-mono font-bold text-blue-600">10 Working Days</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="text-right">
              <div className="text-[11px] text-slate-500 font-medium">Branch Verification</div>
              <div className="text-sm font-mono font-bold text-emerald-600">100% Green CI/CD</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
