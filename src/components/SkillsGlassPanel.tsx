import React from 'react';
import { Code2, Brain, Cloud, PenTool, Rocket, ArrowRight } from 'lucide-react';
import { SKILLS_DATA } from '../data/content';
import { SkillItem } from '../types';

interface SkillsGlassPanelProps {
  onSelectSkill?: (skill: SkillItem) => void;
}

export default function SkillsGlassPanel({ onSelectSkill }: SkillsGlassPanelProps) {
  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'brain':
        return <Brain className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'pen':
        return <PenTool className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-white" strokeWidth={2.2} />;
      default:
        return <Code2 className="w-5 h-5 text-white" strokeWidth={2.2} />;
    }
  };

  const scrollToServices = (skillId: string) => {
    const el = document.getElementById(`service-${skillId}`) || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="skills-glass-panel"
      className="w-full relative rounded-3xl lg:rounded-[30px] p-6 sm:p-7 lg:p-8 transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.70)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: '0 20px 50px -10px rgba(7, 27, 65, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.4) inset',
      }}
    >
      {/* Panel Heading */}
      <div className="mb-5 sm:mb-6 flex items-center justify-between">
        <h2 className="text-[11px] sm:text-xs font-bold text-[#5B6E8C] tracking-[0.22em] uppercase">
          THE 5 SKILLS WE DO
        </h2>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500/80">
          Core Capabilities
        </span>
      </div>

      {/* Exactly 5 Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/70">
        {SKILLS_DATA.map((skill, index) => {
          return (
            <button
              key={skill.id}
              onClick={() => {
                if (onSelectSkill) onSelectSkill(skill);
                scrollToServices(skill.id);
              }}
              className={`group flex flex-col items-start text-left cursor-pointer transition-all duration-200 lg:px-5 xl:px-6 first:pl-0 last:pr-0 rounded-2xl lg:rounded-none p-4 lg:p-0 hover:bg-white/40 lg:hover:bg-transparent`}
            >
              {/* Soft Rounded Square Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg mb-4"
                style={{ backgroundColor: skill.badgeColor }}
              >
                {getSkillIcon(skill.icon)}
              </div>

              {/* Title */}
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#071B41] leading-snug mb-1.5 transition-colors group-hover:text-blue-600">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#556987] leading-relaxed line-clamp-2">
                {skill.shortDesc}
              </p>

              {/* Sub-hover arrow hint */}
              <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
