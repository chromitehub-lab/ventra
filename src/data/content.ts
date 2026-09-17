import { SkillItem, CaseStudy, TechItem } from '../types';

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    shortDesc: 'Scalable, high-performance web & mobile apps.',
    fullDesc: 'End-to-end full-stack architectures engineered for high concurrency, fault tolerance, and seamless developer ergonomics.',
    icon: 'code',
    badgeColor: '#1677FF', // Primary Blue
    accentBg: 'rgba(22, 119, 255, 0.1)',
    features: [
      'Modern microservices & serverless backends',
      'Ultra-responsive web apps (Next.js, React, TypeScript)',
      'Cross-platform mobile apps (React Native, iOS, Android)',
      'High-throughput API & GraphQL systems',
    ],
    technologies: ['TypeScript', 'Node.js', 'Go', 'React', 'Next.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDesc: 'Intelligent solutions for a smarter tomorrow.',
    fullDesc: 'Custom machine learning pipelines, LLM agent orchestrations, and computer vision models deployed into production environments.',
    icon: 'brain',
    badgeColor: '#8B5CF6', // Purple / Violet
    accentBg: 'rgba(139, 92, 246, 0.1)',
    features: [
      'Enterprise LLM integration & fine-tuning',
      'Retrieval-Augmented Generation (RAG) knowledge systems',
      'Predictive analytics & intelligent forecasting',
      'Computer vision & multimodal classification pipelines',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Python', 'LangChain', 'Vector DBs', 'Gemini API', 'Hugging Face'],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Secure, scalable and future-ready infrastructure.',
    fullDesc: 'Mission-critical multi-cloud deployments with military-grade zero-trust security and infrastructure-as-code automation.',
    icon: 'cloud',
    badgeColor: '#08B878', // Emerald Green CTA
    accentBg: 'rgba(8, 184, 120, 0.1)',
    features: [
      'Kubernetes orchestration & container clustering',
      'Multi-region cloud migrations (AWS, GCP, Azure)',
      'Automated CI/CD pipelines & GitOps workflows',
      'SOC2 / HIPAA / ISO27001 compliance hardening',
    ],
    technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Cloudflare', 'Datadog'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Beautiful experiences that users love.',
    fullDesc: 'Design systems, user research, and tactile product interfaces engineered to maximize conversion, retention, and delight.',
    icon: 'pen',
    badgeColor: '#F59E0B', // Warm Amber
    accentBg: 'rgba(245, 158, 11, 0.1)',
    features: [
      'Design systems & atomic component libraries',
      'User journey mapping & friction reduction',
      'High-fidelity interactive prototyping & micro-animations',
      'WCAG AA/AAA accessibility & cross-device UX',
    ],
    technologies: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Storybook'],
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    shortDesc: 'Ideas to products, from concept to launch.',
    fullDesc: 'Accelerating product-market fit through rapid MVP prototyping, strategic product roadmapping, and agile iteration sprints.',
    icon: 'rocket',
    badgeColor: '#F43F5E', // Rose / Magenta
    accentBg: 'rgba(244, 63, 94, 0.1)',
    features: [
      'Product strategy & market validation sprints',
      'Rapid prototype-to-production execution',
      'Telemetry instrumentation & product analytics',
      'Continuous feature experimentation & optimization',
    ],
    technologies: ['PostHog', 'Segment', 'Mixpanel', 'Linear', 'GitHub Enterprise', 'Vercel'],
  },
];

export interface ServiceRowItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  serviceId: string;
}

export const WIDE_SERVICE_ROWS: ServiceRowItem[] = [
  {
    number: '01',
    title: 'WEB DEVELOPMENT',
    subtitle: 'Websites built for modern businesses.',
    description: 'High-performance, edge-rendered web platforms, headless CMS implementations, and custom web applications optimized for speed and conversion.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sub-second LCP'],
    serviceId: 'software-dev',
  },
  {
    number: '02',
    title: 'SOFTWARE DEVELOPMENT',
    subtitle: 'Custom software for real business problems.',
    description: 'Bespoke enterprise software, distributed backend services, robust REST & GraphQL APIs, and fault-tolerant event streams designed to scale gracefully.',
    tags: ['Distributed Systems', 'Go / Node.js', 'PostgreSQL', 'Microservices', 'Clean Architecture'],
    serviceId: 'software-dev',
  },
  {
    number: '03',
    title: 'AI & MACHINE LEARNING',
    subtitle: 'Intelligent automation and production inference.',
    description: 'Domain-tuned LLM agents, Retrieval-Augmented Generation (RAG) vector pipelines, predictive models, and real-time computer vision systems.',
    tags: ['PyTorch', 'Vector Search', 'LLM Agents', 'Domain Fine-tuning', 'Sub-second Latency'],
    serviceId: 'ai-ml',
  },
  {
    number: '04',
    title: 'CLOUD INFRASTRUCTURE & DEVOPS',
    subtitle: 'Resilient multi-cloud architecture and zero-downtime CI/CD.',
    description: 'Kubernetes orchestration, automated Terraform IaC, cloud migration, observability matrices, and rigorous SOC2 / HIPAA security hardening.',
    tags: ['AWS & GCP', 'Kubernetes', 'Terraform', 'Zero-Downtime Deployments', '99.999% SLA'],
    serviceId: 'cloud-solutions',
  },
  {
    number: '05',
    title: 'UI/UX & PRODUCT DESIGN',
    subtitle: 'Interfaces engineered for intuitive interaction.',
    description: 'Design systems, high-fidelity prototypes, user research, and tactile micro-interactions that elevate brand perception and user retention.',
    tags: ['Design Systems', 'Figma Tokens', 'WCAG AA/AAA', 'Micro-interactions', 'User Journey'],
    serviceId: 'ui-ux-design',
  },
  {
    number: '06',
    title: 'DIGITAL PRODUCTS & MVP LAUNCH',
    subtitle: 'From napkin concept to production-grade market entry.',
    description: 'Rapid product discovery, agile 4-week prototype sprints, telemetry instrumentation, and continuous feature experimentation pipelines.',
    tags: ['Sprint Discovery', 'Rapid Prototyping', 'Telemetry & Analytics', 'Linear Velocity'],
    serviceId: 'digital-products',
  },
];

export const EDITORIAL_PILLARS = [
  {
    number: '01',
    title: 'Business First',
    description: 'Every line of code is calibrated to real business leverage, unit economics, and customer ROI.',
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'Battle-tested tech stacks with strict type guarantees, zero deprecated libraries, and fast execution.',
  },
  {
    number: '03',
    title: 'Quality Engineering',
    description: 'Zero junior handoffs. Every feature is architected and reviewed by senior staff engineers.',
  },
  {
    number: '04',
    title: 'Transparent Collaboration',
    description: 'Live sprint burndowns, shared staging URLs, open Git repositories, and daily asynchronous updates.',
  },
  {
    number: '05',
    title: 'Flexible Teams',
    description: 'Modular engineering pods that seamlessly integrate with your existing in-house team or operate autonomously.',
  },
  {
    number: '06',
    title: 'Scalability & Growth',
    description: 'Architectures engineered from day one to handle viral traffic spikes and regulatory compliance.',
  },
];

export const PROCESS_STEPS = [
  { step: '01', name: 'DISCOVER', label: 'Technical Discovery', detail: 'Architecture audit & feasibility assessment' },
  { step: '02', name: 'PLAN', label: 'Sprint Roadmap', detail: 'Milestones, sprint allocations & risk models' },
  { step: '03', name: 'DESIGN', label: 'UX & Prototyping', detail: 'Interactive tokens & user journey flows' },
  { step: '04', name: 'BUILD', label: 'Production Coding', detail: 'Senior-led implementation & daily PRs' },
  { step: '05', name: 'TEST', label: 'Rigorous QA & Load', detail: 'Automated test matrices & penetration audits' },
  { step: '06', name: 'LAUNCH', label: 'Zero-Downtime Deploy', detail: 'Staged traffic rollout & health telemetry' },
  { step: '07', name: 'GROW', label: 'Iterate & Scale', detail: 'Continuous optimization & feature enhancements' },
];

export const MARKETING_CAPABILITIES = [
  {
    title: 'SEO & Organic Visibility',
    description: 'Technical SEO audits, schema markup, Core Web Vitals optimization, and programmatic content architectures.',
    tag: 'Technical SEO',
  },
  {
    title: 'Social & Community Distribution',
    description: 'Brand narratives, developer relations campaigns, and organic community growth engines across modern channels.',
    tag: 'Distribution',
  },
  {
    title: 'Content & Thought Leadership',
    description: 'Deep-dive technical whitepapers, architectural case studies, and engineering blog posts that build high authority.',
    tag: 'Editorial',
  },
  {
    title: 'Paid Advertising & Acquisition',
    description: 'High-intent B2B search campaigns, retargeting funnels, and data-driven multi-touch attribution modeling.',
    tag: 'Performance',
  },
];

export const TALENT_ROLES = [
  { role: 'Developers', spec: 'Full-Stack, Distributed Systems, Go, Node, React, Next.js', availability: 'Immediate deployment' },
  { role: 'AI Engineers', spec: 'LLM fine-tuning, RAG pipelines, PyTorch, Vector DBs, Edge inference', availability: 'Immediate deployment' },
  { role: 'Cloud Architects', spec: 'Kubernetes, AWS, Google Cloud, Terraform IaC, Zero-trust security', availability: 'Immediate deployment' },
  { role: 'UI/UX Designers', spec: 'Figma design tokens, accessible components, micro-animations', availability: 'Immediate deployment' },
  { role: 'Growth Strategists', spec: 'Product analytics, technical SEO, conversion rate optimization', availability: 'Immediate deployment' },
];

export const PRICING_PLANS = [
  {
    id: 'sprint',
    title: 'Sprint Pod',
    badge: 'Fast-Track',
    rate: '$16,500',
    period: 'per 2-week sprint',
    description: 'Ideal for rapid MVPs, architectural discoveries, or unblocking critical milestones.',
    features: ['Dedicated Tech Lead & 2 Senior Engineers', 'Bi-weekly production deliverable', 'Full source code & IP ownership', 'Daily async updates & Slack access'],
  },
  {
    id: 'dedicated',
    title: 'Dedicated Squad',
    badge: 'Most Popular',
    rate: '$32,000',
    period: 'per month / recurring',
    description: 'Autonomous high-velocity engineering squad embedded directly into your product roadmap.',
    features: ['1 Tech Architect, 3 Full-Stack Devs, 1 UI/UX Lead', 'Continuous CI/CD shipping & daily commits', 'Bi-weekly sprint planning & retro', 'Direct GitHub / Jira synchronization'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Custom',
    badge: 'Mission-Critical',
    rate: 'Custom',
    period: 'tailored SLA & scope',
    description: 'Multi-pod cross-functional teams for high-compliance fintech, healthcare, and global scale.',
    features: ['Custom pod sizing & 24/7 on-call coverage', '99.999% production SLA guarantee', 'SOC2 / HIPAA / ISO27001 compliance hardening', 'Executive advisory & quarterly tech reviews'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-ai',
    title: 'Aura Intelligence',
    client: 'Aura Health Technologies',
    category: 'AI & ML',
    headline: 'Real-time Clinical Decision Support Engine',
    description: 'Engineered a HIPAA-compliant multimodal AI diagnostic assistant processing 1.4M patient vitals records per hour with sub-second inference.',
    metrics: [
      { label: 'Latency Reduction', value: '74%' },
      { label: 'Diagnostic Precision', value: '99.4%' },
      { label: 'Monthly Records', value: '42M+' },
    ],
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Google Cloud', 'React', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&h=900&q=80',
    deliverables: ['Custom ML Inference Pipeline', 'Web Doctor Console', 'Cloud Orchestration', 'Security Audit'],
  },
  {
    id: 'kinetix-pay',
    title: 'Kinetix Global',
    client: 'Kinetix Financial Networks',
    category: 'Cloud',
    headline: 'Next-Gen Cross-Border Settlement Gateway',
    description: 'Architected high-throughput ledger banking microservices processing $4.2B in volume with zero downtime during peak market surges.',
    metrics: [
      { label: 'Peak TPS', value: '38,000' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Annual Volume', value: '$4.2B' },
    ],
    technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'AWS', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&h=900&q=80',
    deliverables: ['Distributed Ledger Engine', 'Real-time Fraud Radar', 'Developer SDK', 'SOC2 Certification'],
  },
  {
    id: 'orbit-mobility',
    title: 'Orbit Fleet AI',
    client: 'Orbit Autonomous Mobility',
    category: 'Software',
    headline: 'Fleet Telemetry & Mission Control System',
    description: 'Built the operational dispatch suite connecting 8,500 autonomous delivery pods with edge telemetry, dynamic rerouting, and video streaming.',
    metrics: [
      { label: 'Active Vehicles', value: '8,500+' },
      { label: 'Route Efficiency', value: '+32%' },
      { label: 'Fleet p99 Ping', value: '28ms' },
    ],
    technologies: ['Rust', 'WebSockets', 'React', 'MapLibre', 'Docker', 'Redis'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&h=900&q=80',
    deliverables: ['WebRTC Video Console', 'Geospatial Dispatch Engine', 'Edge Telemetry Agent', 'Mobile Driver App'],
  },
  {
    id: 'zenith-design',
    title: 'Zenith Design System',
    client: 'Zenith Enterprise Cloud',
    category: 'UI/UX',
    headline: 'Unified Multi-Brand Design Architecture',
    description: 'Created a cross-platform design token engine and 120-component accessible UI library utilized by 450+ engineers across 12 product lines.',
    metrics: [
      { label: 'Design Velocity', value: '3.8x' },
      { label: 'WCAG AAA Compliance', value: '100%' },
      { label: 'Adoption Rate', value: '96%' },
    ],
    technologies: ['Figma Tokens', 'React', 'Tailwind CSS', 'TypeScript', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&h=900&q=80',
    deliverables: ['Figma Core Library', 'React NPM Package', 'Interactive Documentation', 'Design Token CLI'],
  },
];

export const WHY_VENTRA_PILLARS = [
  {
    title: 'Strategy',
    subtitle: 'Business-first technology decisions',
    description: 'We do not build software in a vacuum. Every architectural decision is calibrated to your burn rate, scalability roadmap, and business leverage.',
    highlight: 'Zero shelfware. 100% purposeful engineering.',
  },
  {
    title: 'Engineering',
    subtitle: 'Senior-only technical teams',
    description: 'No junior handoffs. Every line of code is produced by battle-tested staff engineers who have scaled systems to millions of daily users.',
    highlight: 'Rigorous CI/CD, test-driven pipelines & clean documentation.',
  },
  {
    title: 'AI & Intelligence',
    subtitle: 'Pragmatic, production-ready AI',
    description: 'Beyond generative hype. We design domain-tuned agents, robust evaluation harnesses, and secure data sandboxes that generate real ROI.',
    highlight: 'Custom fine-tuning, enterprise guardrails & low-latency inference.',
  },
  {
    title: 'Design',
    subtitle: 'Human-centric digital craft',
    description: 'Interface design that feels effortless. We obsess over micro-interactions, typographic rhythm, and optical balance so your software looks like a market leader.',
    highlight: 'World-class visual identity and intuitive UX workflows.',
  },
  {
    title: 'Scalability',
    subtitle: 'Day-one enterprise resilience',
    description: 'We engineer architectures prepared to handle unexpected virality, seasonal spikes, and regulatory compliance audits without breaking a sweat.',
    highlight: 'Cloud-native, zero-trust security & 99.99% availability SLAs.',
  },
];

export const TECH_RADAR: TechItem[] = [
  { name: 'React 19 & Next.js', category: 'Frontend', description: 'Server components, streaming SSR, and edge hydration', iconName: 'Layers' },
  { name: 'TypeScript', category: 'Frontend', description: 'Strict end-to-end type safety across the entire stack', iconName: 'FileCode' },
  { name: 'Tailwind CSS & Motion', category: 'Frontend', description: 'Design-token driven styling and 60fps micro-animations', iconName: 'Palette' },
  { name: 'Node.js & Go', category: 'Backend', description: 'High-concurrency microservices and low-latency APIs', iconName: 'Cpu' },
  { name: 'Python & FastAPI', category: 'Backend', description: 'High-throughput asynchronous ML service backends', iconName: 'Server' },
  { name: 'PostgreSQL & pgvector', category: 'Backend', description: 'ACID-compliant relational storage with semantic vector search', iconName: 'Database' },
  { name: 'PyTorch & Hugging Face', category: 'AI & Data', description: 'State-of-the-art transformer modeling and embedding pipelines', iconName: 'Sparkles' },
  { name: 'Vector Databases', category: 'AI & Data', description: 'Pinecone, Qdrant, and Milvus for high-speed similarity retrieval', iconName: 'Zap' },
  { name: 'Kafka & Redis', category: 'AI & Data', description: 'Sub-millisecond event streaming and distributed caching', iconName: 'Activity' },
  { name: 'Kubernetes & Docker', category: 'Cloud & DevOps', description: 'Zero-downtime rolling deployments and automated cluster scaling', iconName: 'Box' },
  { name: 'Terraform & OpenTofu', category: 'Cloud & DevOps', description: 'Declarative, auditable Infrastructure as Code (IaC)', iconName: 'ShieldCheck' },
  { name: 'AWS & Google Cloud', category: 'Cloud & DevOps', description: 'Multi-region fault tolerance and serverless compute', iconName: 'Cloud' },
];
