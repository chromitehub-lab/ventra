import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, Award } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingSectionProps {
  onSelectPlan?: (planTitle: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header: Wide & Compact - Matches Hero H1/H2 font hierarchy */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                ENGAGEMENT MODELS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none">
              Predictable investment. Senior velocity.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium max-w-sm leading-relaxed">
            Zero lock-in. 100% intellectual property transfer from day one. Scale pods up or down with two weeks' notice.
          </p>
        </div>

        {/* 3D Visual Guarantee Ribbon (Google/Meta Pure White Styling) */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#071B41]">The VENTRA Enterprise Guarantee</h4>
              <p className="text-xs text-slate-600">Every engagement is protected by strict SLA uptime, zero junior handoffs, and dual code reviews.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Check className="w-4 h-4 text-emerald-600" /> Full IP Transfer
            </span>
            <span className="flex items-center gap-1.5 text-blue-700">
              <Check className="w-4 h-4 text-blue-600" /> SOC2 Compliant
            </span>
            <span className="flex items-center gap-1.5 text-purple-700">
              <Check className="w-4 h-4 text-purple-600" /> Direct Slack/Teams
            </span>
          </div>
        </div>

        {/* Wide Horizontal Pricing Rows */}
        <div className="space-y-4 sm:space-y-5">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.id === 'dedicated';
            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative ${
                  isFeatured
                    ? 'bg-white border-blue-500 shadow-[0_16px_36px_-6px_rgba(37,99,235,0.18)] ring-2 ring-blue-500/20 scale-[1.01]'
                    : 'bg-white hover:bg-slate-50/50 border-slate-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Featured Pedestal Rim indicator */}
                {isFeatured && (
                  <div className="absolute -top-3 right-8 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                {/* Left: Title + Rate + Description */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#071B41]">
                      {plan.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#071B41]">
                      {plan.rate}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Middle: Feature list */}
                <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#08B878] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CTA Button - Matches Hero Button Styling */}
                <div className="shrink-0 pt-2 lg:pt-0">
                  <button
                    onClick={() => onSelectPlan?.(plan.title)}
                    className={`w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                      isFeatured
                        ? 'bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)]'
                        : 'bg-[#071B41] hover:bg-blue-600 text-white shadow-xs hover:shadow-md'
                    }`}
                  >
                    <span>{isFeatured ? 'Brief Dedicated Squad' : `Select ${plan.title}`}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
