import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onStartProject: () => void;
}

export default function CaseStudyModal({ study, onClose, onStartProject }: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Modal Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B41] via-[#071B41]/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              {study.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {study.headline}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">Client: {study.client}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold text-[#071B41] uppercase tracking-wider mb-2">
              The Architecture Challenge & Solution
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {study.description} Built using zero-downtime rolling infrastructure, stringent security models, and high-performance reactive pipelines.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div>
            <h4 className="text-xs font-bold text-[#071B41] uppercase tracking-wider mb-3">
              Verified Production Results
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {study.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-[#071B41]">{metric.value}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-[#071B41] uppercase tracking-wider mb-3">
              Key Engineering Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {study.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#08B878] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-[#071B41] uppercase tracking-wider mb-3">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            Close Project
          </button>
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#08B878] hover:bg-[#069c65] text-white text-xs font-bold shadow-md transition-all"
          >
            <span>Build a Similar System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
