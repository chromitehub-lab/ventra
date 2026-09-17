import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import WorkSection from './components/WorkSection';
import WhyVentraSection from './components/WhyVentraSection';
import DigitalMarketingSection from './components/DigitalMarketingSection';
import FreelancingTalentSection from './components/FreelancingTalentSection';
import TechStackSection from './components/TechStackSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import SearchModal from './components/SearchModal';
import SignInModal from './components/SignInModal';
import CaseStudyModal from './components/CaseStudyModal';
import { CaseStudy, SkillItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Monitor scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'work', 'marketing', 'talent', 'tech-stack', 'pricing', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsProjectModalOpen(true);
  };

  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSkill = (skill: SkillItem) => {
    const el = document.getElementById(`service-${skill.id}`) || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchNavigation = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Floating Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenGetStarted={() => handleStartProject()}
      />

      <main>
        {/* 1. Hero: Wide cinematic hero with Alpine reference composition */}
        <Hero
          onStartProject={() => handleStartProject()}
          onExplore={handleExplore}
          onSelectSkill={handleSelectSkill}
        />

        {/* 2. About: The Connected VENTRA Ecosystem (Immediately after Hero) */}
        <AboutSection
          onStartProject={() => handleStartProject('Custom Engineering')}
        />

        {/* 3. Services: Wide horizontal service rows */}
        <ServicesSection
          onStartProjectForService={(svc) => handleStartProject(svc)}
        />

        {/* 4. Process: Horizontal timeline moving Left to Right */}
        <ProcessSection />

        {/* 5. Portfolio / Work: Large landscape project previews */}
        <WorkSection
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* 6. Why Ventra: Horizontal editorial pillars */}
        <WhyVentraSection />

        {/* 7. Digital Marketing: Wide horizontal section */}
        <DigitalMarketingSection
          onStartProject={() => handleStartProject('Digital Marketing & Growth')}
        />

        {/* 8. Freelancing / Talent: Wide horizontal recruitment */}
        <FreelancingTalentSection
          onStartProject={() => handleStartProject('Dedicated Pod')}
        />

        {/* 9. Technical Arsenal: Wide horizontal rows */}
        <TechStackSection />

        {/* 10. Pricing: Compact horizontal engagement models */}
        <PricingSection
          onSelectPlan={(planTitle) => handleStartProject(planTitle)}
        />

        {/* 11. CTA: Thin horizontal banner */}
        <CTASection onStartProject={() => handleStartProject()} />

        {/* 12. Contact: Wide two-column contact form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectEstimatorModal
        isOpen={isProjectModalOpen}
        preselectedService={preselectedService}
        onClose={() => {
          setIsProjectModalOpen(false);
          setPreselectedService(undefined);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={handleSearchNavigation}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={() => {
          setSelectedCaseStudy(null);
          handleStartProject();
        }}
      />
    </div>
  );
}
