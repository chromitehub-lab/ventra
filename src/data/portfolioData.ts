import { PortfolioProject } from '../types';

export interface CreatorProfile {
  name: string;
  title: string;
  role: string;
  location: string;
  avatar: string;
  workspaceImage: string;
  bio: string;
  manifesto: string;
  stats: { label: string; value: string; detail: string }[];
  skills: {
    category: string;
    items: string[];
    description: string;
  }[];
  timeline: {
    year: string;
    role: string;
    company: string;
    description: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export const CREATOR_PROFILE: CreatorProfile = {
  name: 'Alex Vance',
  title: 'Principal Systems Architect & Founder',
  role: 'Founder & Head of Engineering',
  location: 'San Francisco, CA & Zurich, Switzerland',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800&q=80',
  workspaceImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&h=900&q=80',
  bio: 'For over a decade, I have architected and shipped mission-critical platforms spanning distributed banking ledgers, real-time autonomous vehicle telemetry, and multimodal AI inference systems. I believe in uncompromising code craftsmanship: zero junior handoffs, verified type safety, and clean systems architecture that scales gracefully without architectural debt.',
  manifesto: 'Great software is not measured by lines of code, but by the business leverage it creates and the operational peace of mind it delivers to the team maintaining it.',
  stats: [
    { label: 'Years in Production', value: '10+', detail: 'Enterprise & startup scale' },
    { label: 'Transaction Volume Handled', value: '$4.2B+', detail: 'Zero lost records or downtime' },
    { label: 'Systems Shipped', value: '28+', detail: 'Fintech, Healthcare & AI' },
    { label: 'Uptime Reliability', value: '99.999%', detail: 'Strict Five-Nines SLA' },
  ],
  skills: [
    {
      category: 'Distributed Systems & Backends',
      description: 'Fault-tolerant microservices, high-throughput message brokers, and transactional ACID ledgers.',
      items: ['Go', 'Rust', 'Node.js', 'PostgreSQL', 'Kafka', 'Redis', 'gRPC', 'Docker'],
    },
    {
      category: 'Applied AI & Machine Learning',
      description: 'Domain-tuned LLM agents, vector databases, RAG architectures, and sub-second inference pipelines.',
      items: ['PyTorch', 'Python', 'FastAPI', 'Vector Search', 'Gemini API', 'LangChain', 'Hugging Face'],
    },
    {
      category: 'Cloud Architecture & DevOps',
      description: 'Resilient multi-cloud deployments, automated IaC, and zero-trust security compliance.',
      items: ['Kubernetes', 'AWS', 'Google Cloud', 'Terraform', 'CI/CD', 'SOC2 Hardening', 'Datadog'],
    },
    {
      category: 'Frontend & Human Interface',
      description: 'Tactile, edge-rendered web applications, design systems, and fluid micro-interactions.',
      items: ['TypeScript', 'React 19', 'Next.js', 'Tailwind CSS', 'Figma Tokens', 'Framer Motion', 'WebSockets'],
    },
  ],
  timeline: [
    {
      year: '2023 – Present',
      role: 'Founder & Principal Architect',
      company: 'VENTRA Software House',
      description: 'Directing bespoke engineering pods for venture-backed unicorns and enterprise scaleups across AI, Cloud, and fintech.',
    },
    {
      year: '2020 – 2023',
      role: 'Staff Infrastructure Architect',
      company: 'Kinetix Global Networks',
      description: 'Architected high-throughput ledger banking microservices processing $4.2B in cross-border volume with zero downtime.',
    },
    {
      year: '2017 – 2020',
      role: 'Lead Systems Engineer',
      company: 'Apex Telemetry Systems',
      description: 'Spearheaded edge telemetry pipeline connecting over 8,500 autonomous vehicles with sub-30ms p99 round-trip latency.',
    },
    {
      year: '2014 – 2017',
      role: 'Senior Full-Stack Engineer',
      company: 'HyperScale Labs',
      description: 'Built distributed search clusters, high-concurrency websocket feeds, and accessible frontend design systems.',
    },
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'architect@ventra.tech',
  },
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aura-ai',
    title: 'Aura Intelligence',
    subtitle: 'Real-time Clinical AI Diagnostic Engine',
    role: 'Lead AI & Systems Architect',
    period: '2023 – 2024',
    category: 'AI & Systems',
    summary: 'A HIPAA-compliant multimodal diagnostic assistant that analyzes medical imaging and patient vitals streams with sub-second inference for 120+ clinical hospital units.',
    challenge: 'Hospital intensive care units were overwhelmed with telemetry alerts, leading to clinician fatigue and diagnostic delays. Traditional inference models had 3-5 second latency and high error rates under variable patient inputs.',
    solution: 'Designed an asynchronous edge-and-cloud hybrid inference pipeline combining quantized neural models with real-time vector knowledge retrieval, verified by a strict Bayesian confidence gate.',
    impact: [
      'Sub-second inference time reduced by 74% (from 3.8s down to 680ms)',
      'Clinical diagnostic precision elevated to 99.4% across 42M+ monthly records',
      'Zero HIPAA non-compliance incidents across 18 audit cycles',
    ],
    metrics: [
      { label: 'Latency', value: '680ms' },
      { label: 'Precision', value: '99.4%' },
      { label: 'Monthly Records', value: '42M+' },
    ],
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Google Cloud', 'React 19', 'TypeScript', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&h=900&q=80',
    liveUrl: 'https://aura-health.example.com',
    repoUrl: 'https://github.com/example/aura-inference-core',
    featured: true,
  },
  {
    id: 'kinetix-gateway',
    title: 'Kinetix Global Settlement',
    subtitle: 'Next-Gen Cross-Border Clearing & Ledger Engine',
    role: 'Principal Backend Architect',
    period: '2022 – 2023',
    category: 'Fintech & Cloud',
    summary: 'Distributed multi-currency banking ledger capable of processing 38,000 transactions per second with mathematical consistency and zero downtime during extreme market volatility.',
    challenge: 'Existing legacy SWIFT and clearinghouse connections suffered from multi-day reconciliation windows, database write locks, and frequent outages during sudden currency fluctuations.',
    solution: 'Architected an event-sourced distributed ledger in Go leveraging Kafka partition sharding, transactional outbox patterns, and CockroachDB across 3 geographic regions.',
    impact: [
      '$4.2B+ in cumulative volume settled with 100% mathematical reconciliation',
      '99.999% production SLA achieved consistently over 24 consecutive months',
      'Sub-50ms finality confirmation for cross-border currency exchanges',
    ],
    metrics: [
      { label: 'Peak TPS', value: '38,000' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Settled Volume', value: '$4.2B+' },
    ],
    technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'AWS', 'Terraform', 'Datadog'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&h=900&q=80',
    liveUrl: 'https://kinetix-global.example.com',
    repoUrl: 'https://github.com/example/kinetix-ledger-engine',
    featured: true,
  },
  {
    id: 'orbit-mission-control',
    title: 'Orbit Fleet AI',
    subtitle: 'Real-Time Edge Telemetry & Geospatial Dispatch',
    role: 'Staff Systems Engineer',
    period: '2021 – 2022',
    category: 'Autonomous & IoT',
    summary: 'Centralized operational command suite tracking and dispatching 8,500 autonomous urban delivery pods with sub-30ms telemetry and live WebRTC camera streaming.',
    challenge: 'High packet loss, intermittent cellular handoffs, and massive concurrent websocket connections threatened vehicle safety and route efficiency.',
    solution: 'Engineered a Rust-based edge daemon on vehicle hardware coupled with a WebRTC mesh server cluster and MapLibre geospatial rendering engine in React.',
    impact: [
      'Connected 8,500+ active autonomous vehicles with 28ms p99 telemetry ping',
      '+32% route optimization and delivery density across 6 major metropolitan centers',
      'Automated obstacle re-routing deployed with zero human intervention required',
    ],
    metrics: [
      { label: 'Active Vehicles', value: '8,500+' },
      { label: 'Route Gain', value: '+32%' },
      { label: 'p99 Telemetry', value: '28ms' },
    ],
    technologies: ['Rust', 'WebSockets', 'WebRTC', 'React', 'MapLibre', 'Docker', 'Redis'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&h=900&q=80',
    liveUrl: 'https://orbit-mobility.example.com',
    featured: true,
  },
  {
    id: 'zenith-token-engine',
    title: 'Zenith Multi-Brand Design Engine',
    subtitle: 'Universal Design Tokens & Accessible UI System',
    role: 'Design Technologist & Lead Author',
    period: '2023',
    category: 'Developer Tools',
    summary: 'A unified multi-brand design system with automated token compilation, accessible primitives, and 120+ production components used across 12 product lines.',
    challenge: 'Enterprise engineering teams maintained 5 divergent frontends, causing branding fragmentation, high QA defect rates, and broken accessibility standards.',
    solution: 'Built a single source-of-truth token pipeline synced with Figma API that exports compile-ready TypeScript types, CSS variables, and headless React components.',
    impact: [
      'Frontend engineering delivery velocity accelerated by 3.8x across 450+ developers',
      '100% WCAG AAA compliance certified on all published customer interfaces',
      'Eliminated 92% of cross-team visual regression tickets',
    ],
    metrics: [
      { label: 'Velocity Gain', value: '3.8x' },
      { label: 'WCAG AAA', value: '100%' },
      { label: 'Dev Adoption', value: '96%' },
    ],
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Figma API', 'Storybook', 'Radix UI'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&h=900&q=80',
    liveUrl: 'https://zenith-tokens.example.com',
    repoUrl: 'https://github.com/example/zenith-design-system',
    featured: false,
  },
  {
    id: 'hyperscale-rag',
    title: 'HyperScale Neural Vector RAG',
    subtitle: 'Sub-10ms Semantic Vector Search & Orchestration Engine',
    role: 'Creator & Lead Engineer',
    period: '2024',
    category: 'AI & Systems',
    summary: 'An open-source high-throughput document ingestion and vector retrieval engine processing billions of token embeddings with sub-10ms query latency.',
    challenge: 'Enterprise document retrieval pipelines suffered from catastrophic hallucination, poor re-ranking, and high memory footprints under concurrent multi-user load.',
    solution: 'Built a specialized Go-based HNSW vector indexing proxy with hybrid lexical-semantic fusion and dynamic re-ranking powered by Gemini embeddings.',
    impact: [
      'Sub-10ms vector query latency under 15,000 concurrent QPS load',
      'Semantic retrieval accuracy improved by 41% over standard vanilla RAG',
      'Used by 4 enterprise fintech and legal tech platforms in production',
    ],
    metrics: [
      { label: 'Query Latency', value: '<10ms' },
      { label: 'Throughput', value: '15k QPS' },
      { label: 'Accuracy Lift', value: '+41%' },
    ],
    technologies: ['Go', 'Gemini API', 'Vector Search', 'gRPC', 'PostgreSQL pgvector', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&h=900&q=80',
    repoUrl: 'https://github.com/example/hyperscale-rag',
    featured: true,
  },
  {
    id: 'vaultmesh-crypto',
    title: 'VaultMesh Zero-Trust Custody',
    subtitle: 'Distributed Key Custody & Multi-Party HSM Proxy',
    role: 'Security & Distributed Systems Architect',
    period: '2022',
    category: 'Fintech & Cloud',
    summary: 'Threshold signature multi-party computation (MPC) gateway providing institutional digital asset custody with zero single point of failure.',
    challenge: 'Institutional hedge funds required cryptographically secure key signing without risking private key exposure on a single server or cloud provider.',
    solution: 'Engineered a decentralized 3-of-5 threshold signing enclave architecture running on AWS Nitro Enclaves and GCP Confidential VMs.',
    impact: [
      'Secured over $850M in active treasury assets with zero security vulnerabilities',
      'SOC2 Type II and ISO 27001 certified with zero audit exceptions',
      'Eliminated manual operational signing delays by 88%',
    ],
    metrics: [
      { label: 'Protected AUM', value: '$850M' },
      { label: 'Signing Latency', value: '140ms' },
      { label: 'Compliance', value: 'SOC2 / ISO' },
    ],
    technologies: ['Rust', 'AWS Nitro Enclaves', 'gRPC', 'Terraform', 'Cryptographic MPC'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&h=900&q=80',
    featured: false,
  },
];
