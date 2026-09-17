import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Code, Brain, Cloud, PenTool, Rocket, FolderGit2 } from 'lucide-react';
import { SKILLS_DATA, CASE_STUDIES, TECH_RADAR } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (targetId: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectAction }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredSkills = SKILLS_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
      s.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredProjects = CASE_STUDIES.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.headline.toLowerCase().includes(query.toLowerCase()) ||
      c.client.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTech = TECH_RADAR.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (elementId: string) => {
    onSelectAction(elementId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capabilities, case studies, technologies..."
            className="w-full text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {/* Capabilities */}
          {filteredSkills.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-2">
                Capabilities
              </span>
              <div className="space-y-1">
                {filteredSkills.map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => handleSelect(`service-${skill.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: skill.badgeColor }}
                      >
                        {skill.title.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#071B41]">{skill.title}</div>
                        <div className="text-[11px] text-slate-500">{skill.shortDesc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-2">
                Case Studies
              </span>
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleSelect('about')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#071B41]">{project.title}</div>
                        <div className="text-[11px] text-slate-500">{project.headline}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tech */}
          {filteredTech.length > 0 && (
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-2">
                Technologies
              </span>
              <div className="grid grid-cols-2 gap-2">
                {filteredTech.map((tech) => (
                  <button
                    key={tech.name}
                    onClick={() => handleSelect('pricing')}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 text-left text-xs"
                  >
                    <div className="font-semibold text-slate-800">{tech.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{tech.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredSkills.length === 0 && filteredProjects.length === 0 && filteredTech.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-500">
              No direct matches for "{query}". Try "AI", "Cloud", or "Software".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
