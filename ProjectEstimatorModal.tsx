import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { SKILLS_DATA } from '../data/content';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ProjectEstimatorModal({
  isOpen,
  onClose,
  preselectedService,
}: ProjectEstimatorModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Software Development']
  );
  const [budgetTier, setBudgetTier] = useState<string>('$50k - $100k');
  const [timeline, setTimeline] = useState<string>('8 - 12 Weeks');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#071B41] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-blue-400 tracking-[0.2em] uppercase block mb-1">
              PROJECT SCOPING & INTAKE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Start a Project with VENTRA</h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#08B878] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#071B41]">
                Inquiry Successfully Logged
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{name || 'Partner'}</span>.
                A VENTRA Principal Architect will review your requirements for{' '}
                <span className="font-semibold text-blue-600">{company || 'your team'}</span> and
                respond within 24 hours with technical feasibility notes and team allocations.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-full bg-[#071B41] text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Return to VENTRA
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Capabilities */}
              <div>
                <label className="block text-xs font-bold text-[#071B41] uppercase tracking-wider mb-2.5">
                  1. Required Capabilities (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SKILLS_DATA.map((skill) => {
                    const isSelected = selectedServices.includes(skill.title);
                    return (
                      <button
                        type="button"
                        key={skill.id}
                        onClick={() => toggleService(skill.title)}
                        className={`px-3.5 py-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/70 text-blue-700'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{skill.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071B41] uppercase tracking-wider mb-2">
                    2. Approximate Investment
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="$25k - $50k">$25k - $50k (Rapid Prototype / MVP)</option>
                    <option value="$50k - $100k">$50k - $100k (Full Product Build)</option>
                    <option value="$100k - $250k">$100k - $250k (Enterprise Scale Platform)</option>
                    <option value="$250k+">$250k+ (Multi-year Architecture)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B41] uppercase tracking-wider mb-2">
                    3. Target Delivery Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="4 - 6 Weeks">4 - 6 Weeks (Accelerated Sprint)</option>
                    <option value="8 - 12 Weeks">8 - 12 Weeks (Standard Release)</option>
                    <option value="3 - 6 Months">3 - 6 Months (Comprehensive)</option>
                    <option value="Ongoing Retainer">Dedicated Engineering Pod (Retainer)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div>
                <label className="block text-xs font-bold text-[#071B41] uppercase tracking-wider mb-2.5">
                  4. Partner Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email (e.g., alex@company.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Organization or Venture Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 mb-3"
                />
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you are building or key challenges..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Strict mutual NDA guaranteed.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#08B878] hover:bg-[#069c65] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Submit Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
