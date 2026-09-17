import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Send, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack Software',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Wide Two-Column Landscape Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Tell us what you're building & 3D Status Terminal Card */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-[0.22em] uppercase">
                DIRECT ARCHITECT DISPATCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B41] tracking-[-0.04em] leading-[1.02] select-none mb-4">
              Tell us what you're building.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#1E3A5F] font-medium leading-relaxed mb-6">
              We respond to every technical inquiry within 24 hours with an initial architectural perspective, feasibility breakdown, and recommended team topology.
            </p>

            {/* 3D Dispatch Telemetry Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#071B41]">Avg Response Time: &lt; 3.4 Hours</div>
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Senior Technical Leads Online
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                SLA Tier 1
              </span>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-blue-600 border border-slate-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Direct Executive Dispatch</span>
                  <a href="mailto:contact@ventra.tech" className="font-semibold text-[#071B41] hover:text-blue-600">
                    contact@ventra.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 border border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Global Engineering Pods</span>
                  <span className="font-semibold text-slate-800">
                    Zurich • San Francisco • Abbottabad Tech Hub
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google/Meta Crisp White Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative">
              {/* Subtle blue corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#08B878] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071B41]">
                    Inquiry Received by VENTRA Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}. A senior technical architect will review your technical challenges and reach out directly at {formData.email || 'your email'} within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                      >
                        <option>Full-Stack Software</option>
                        <option>AI & Machine Learning</option>
                        <option>Cloud Infrastructure & DevOps</option>
                        <option>UI/UX & Product Design</option>
                        <option>Digital Product & MVP Launch</option>
                        <option>Specialized Senior Talent Pod</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message / Scope */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Project Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Give a brief summary of the technical challenges, goals, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Row 4: Submit button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      All inquiries covered by mutual non-disclosure.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] active:bg-[#058a59] text-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] shadow-[0_12px_28px_-6px_rgba(8,184,120,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(8,184,120,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Technical Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
