import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Shield,
  Sparkles,
  Terminal,
  Cpu,
  Server,
  Layers,
  Code2,
  Award,
  Download,
  Calendar,
  MapPin,
  X,
} from 'lucide-react';
import VentraLogo from './VentraLogo';
import Footer from './Footer';
import { CREATOR_PROFILE, PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';

interface PortfolioPageProps {
  onBackToHome: () => void;
  onStartProject: () => void;
}

export default function PortfolioPage({
  onBackToHome,
  onStartProject,
}: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Filter categories
  const categories = useMemo(() => {
    return ['All', 'AI & Systems', 'Fintech & Cloud', 'Autonomous & IoT', 'Developer Tools'];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Floating Portfolio Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#071B41] bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-full transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to VENTRA Home</span>
            </button>

            <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-200">
              <VentraLogo size="sm" />
              <span className="text-xs font-semibold text-slate-400">/</span>
              <span className="text-xs font-bold text-[#071B41] tracking-wider uppercase">
                Creator & Projects Portfolio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 border border-slate-300 hover:border-blue-400 bg-white px-3.5 py-2 rounded-full transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Engineering Dossier</span>
            </button>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 bg-[#08B878] hover:bg-[#069c65] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xs hover:shadow transition-all"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* SECTION 1: "MYSELF" - Executive & Lead Architect Profile */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Portrait & Quick Attributes */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative group">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative z-10">
                    <img
                      src={CREATOR_PROFILE.avatar}
                      alt={CREATOR_PROFILE.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative backdrop accents */}
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-blue-600/20 via-emerald-400/20 to-indigo-600/20 blur-md -z-0" />
                  
                  {/* Status Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 shadow-sm text-[11px] font-semibold text-emerald-800 mt-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for Select Advisory & Pods</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-black text-[#071B41] tracking-tight">
                    {CREATOR_PROFILE.name}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-blue-600">
                    {CREATOR_PROFILE.title}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{CREATOR_PROFILE.location}</span>
                  </p>
                </div>

                {/* Social Channels */}
                <div className="flex items-center gap-3 mt-5">
                  <a
                    href={CREATOR_PROFILE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-black transition-colors shadow-2xs"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={CREATOR_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 transition-colors shadow-2xs"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${CREATOR_PROFILE.socials.email}`}
                    className="p-2 rounded-full bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 transition-colors shadow-2xs"
                    title="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Narrative, Manifesto & Metric Matrix */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-blue-600 tracking-[0.22em] uppercase block mb-2">
                    EXECUTIVE SUMMARY & PHILOSOPHY
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071B41] tracking-tight leading-tight">
                    Engineering high-leverage software at the intersection of systems architecture, domain AI, and human craft.
                  </h2>
                  <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {CREATOR_PROFILE.bio}
                  </p>
                </div>

                {/* Pull Quote / Manifesto */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    ENGINEERING MANIFESTO
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[#071B41] italic leading-relaxed">
                    "{CREATOR_PROFILE.manifesto}"
                  </p>
                </div>

                {/* 4 Key Accomplishment Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {CREATOR_PROFILE.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-[#071B41] tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CORE TECHNICAL COMPETENCIES */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] sm:text-xs font-bold text-blue-600 tracking-[0.22em] uppercase block mb-2">
                TECHNICAL ARSENAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#071B41] tracking-tight">
                Architectural Domains & Core Toolchains
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Deep expertise developed over a decade of debugging race conditions, training models, and deploying distributed clusters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CREATOR_PROFILE.skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 transition-all hover:shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs mb-4">
                      {idx === 0 && <Server className="w-5 h-5" />}
                      {idx === 1 && <Cpu className="w-5 h-5" />}
                      {idx === 2 && <Layers className="w-5 h-5" />}
                      {idx === 3 && <Code2 className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base font-bold text-[#071B41] mb-2">
                      {skillGroup.category}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {skillGroup.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CURATED PROJECTS SHOWCASE */}
        <section id="projects" className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-[11px] sm:text-xs font-bold text-[#08B878] tracking-[0.22em] uppercase block mb-2">
                  CURATED PROJECTS & SYSTEMS
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-[#071B41] tracking-tight">
                  Selected Work & Architectural Builds
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  Production systems operating at scale, backed by verified benchmarks and architectural rigor.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#071B41] text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  {/* Project Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                    {/* Category & Role Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#071B41] px-3 py-1 rounded-full shadow-xs">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {project.period}
                      </span>
                    </div>

                    {/* Metric pill in image */}
                    {project.metrics[0] && (
                      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs border border-white/10">
                        <span className="font-bold text-emerald-400">
                          {project.metrics[0].value}
                        </span>
                        <span className="text-white/80 text-[11px]">
                          {project.metrics[0].label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-blue-600 mb-1">
                        {project.role}
                      </div>
                      <h4 className="text-xl font-bold text-[#071B41] tracking-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B41] hover:text-blue-600 transition-colors"
                        >
                          <span>Architectural Deep Dive</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-slate-400 hover:text-black transition-colors"
                              title="Source Repository"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                              title="Live Deployment"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CAREER TIMELINE & LEADERSHIP */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] sm:text-xs font-bold text-blue-600 tracking-[0.22em] uppercase block mb-2">
                CAREER TRAJECTORY
              </span>
              <h3 className="text-3xl font-black text-[#071B41] tracking-tight">
                Chronology of Systems Leadership
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                A track record of taking technical ownership and shipping mission-critical infrastructure under tight deadlines.
              </p>
            </div>

            <div className="space-y-6">
              {CREATOR_PROFILE.timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 transition-all"
                >
                  <div className="sm:w-1/3">
                    <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold text-[#071B41]">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.company}
                    </p>
                  </div>

                  <div className="sm:w-2/3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CALL TO ACTION */}
        <section className="py-20 bg-gradient-to-r from-[#071B41] via-[#092252] to-[#040E24] text-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <span className="text-xs font-bold text-[#08B878] tracking-[0.22em] uppercase block mb-3">
              DIRECT ENGAGEMENT
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              Have an ambitious system to architect or build?
            </h3>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              I lead specialized senior engineering pods through VENTRA for mission-critical builds, technical audits, and high-concurrency launches.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2.5 bg-[#08B878] hover:bg-[#069c65] text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Schedule an Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-full font-semibold text-base backdrop-blur-md border border-white/15 transition-all"
              >
                <span>Explore VENTRA House Services</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Cohesive Mountain Landscape Footer */}
      <Footer />

      {/* PROJECT DEEP DIVE MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-200">
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {activeProject.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeProject.period}
                </span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Image banner */}
              <div className="w-full aspect-[16/8] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#071B41]">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">
                  {activeProject.subtitle}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Role: {activeProject.role}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#071B41]">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-[#071B41] uppercase tracking-wider text-xs mb-1.5">
                    The Architectural Challenge
                  </h4>
                  <p className="text-slate-600 leading-relaxed bg-amber-50/60 p-4 rounded-xl border border-amber-200/60">
                    {activeProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#071B41] uppercase tracking-wider text-xs mb-1.5">
                    Engineered Solution
                  </h4>
                  <p className="text-slate-600 leading-relaxed bg-blue-50/60 p-4 rounded-xl border border-blue-200/60">
                    {activeProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#071B41] uppercase tracking-wider text-xs mb-1.5">
                    Measurable Impact & Outcomes
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {activeProject.impact.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-bold text-[#071B41] uppercase tracking-wider text-xs mb-2">
                  Technical Stack Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-black border border-slate-300 px-4 py-2.5 rounded-full transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RESUME / DOSSIER QUICK MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-[#071B41]">
                  Executive Engineering Dossier
                </h4>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-600">
              <p>
                <strong>Alex Vance</strong> — Principal Systems Architect & Founder.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Focus:</span>
                  <span className="font-semibold text-slate-800">Distributed Systems, Applied AI & SRE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Track Record:</span>
                  <span className="font-semibold text-slate-800">$4.2B+ Volume, 99.999% SLA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pods Availability:</span>
                  <span className="font-semibold text-emerald-600">Immediate / 2-Week Sprint Pods</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                To receive the full unredacted architectural dossier or initiate confidentiality agreements for your roadmap, contact our executive desk.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-800 px-4 py-2"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowResumeModal(false);
                  onStartProject();
                }}
                className="text-xs font-semibold bg-[#08B878] hover:bg-[#069c65] text-white px-5 py-2.5 rounded-full transition-all"
              >
                Connect Directly
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
