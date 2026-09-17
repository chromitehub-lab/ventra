export interface SkillItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: 'code' | 'brain' | 'cloud' | 'pen' | 'rocket';
  badgeColor: string;
  accentBg: string;
  features: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Software' | 'AI & ML' | 'Cloud' | 'UI/UX' | 'Digital Product';
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Cloud & DevOps' | 'Design';
  description: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: 'AI & Systems' | 'Fintech & Cloud' | 'Autonomous & IoT' | 'Developer Tools' | 'Full-Stack Web';
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  company: string;
  selectedServices: string[];
  budgetTier: string;
  timeline: string;
  details: string;
}
