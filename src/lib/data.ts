import { ASSETS } from '@/lib/assets';

/* ============================================================
   NAVIGATION
   ============================================================ */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'GaaS Infra', href: '#gaas-infra' },
  { label: 'Industries', href: '#industries' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/* ============================================================
   HERO METRICS
   ============================================================ */
export interface HeroMetric {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    label: '// DELIVERIES',
    value: '6',
    description: 'Multi-tenant Platforms',
  },
  {
    label: '// SECTOR FOOTPRINT',
    value: '5',
    suffix: '+',
    description: 'Regulated Verticals',
  },
  {
    label: '// JURISDICTIONS',
    value: '4',
    description: 'Cross-Border Deployments',
  },
  {
    label: '// COMPLETION SLA',
    value: '100',
    suffix: '%',
    description: 'Milestone Velocity Rate',
  },
];

/* ============================================================
   TICKER ITEMS
   ============================================================ */
export const TICKER_ITEMS: string[] = [
  'Custom Software Architecture',
  'Enterprise GaaS Framework',
  'UI/UX Mathematical Systems',
  'Remote IT Manpower',
  'Autonomous AI Pipelines',
  'Drone Fleet Telemetry',
];

/* ============================================================
   GaaS MODULES
   ============================================================ */
export interface GaaSModule {
  id: string;
  title: string;
  description: string;
}

export const GAAS_MODULES: GaaSModule[] = [
  {
    id: '// MODULE 01',
    title: 'Autonomous Governance Gate',
    description:
      'Automated regulatory adherence checking, cryptographic contract validation, and audit trail generation without human latency.',
  },
  {
    id: '// MODULE 02',
    title: 'Decentralized Micro-Fleet Broker',
    description:
      'Stateless node orchestration managing multi-cloud telemetry, physical IoT/drone signals, and isolated compute workloads.',
  },
  {
    id: '// MODULE 03',
    title: 'Zero Tech Debt Runtime',
    description:
      'Engineered with microservice isolation guarantees that prevent version skew, architectural drift, and enterprise lock-in.',
  },
];

/* ============================================================
   SERVICES
   ============================================================ */
export interface Service {
  index: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  footer: string;
  badge?: string;
}

export const SERVICES: Service[] = [
  {
    index: '01',
    label: '01 // CODEBASE',
    icon: 'terminal',
    title: 'Custom Software Development',
    description:
      'Tailored enterprise solutions built with high-performance architectures, resilient microservices, and absolute code integrity to eliminate long-term technical debt.',
    footer: 'DISTRIBUTED SYSTEMS',
  },
  {
    index: '02',
    label: '02 // INTERFACE',
    icon: 'grid_goldenratio',
    title: 'UI/UX Design Systems',
    description:
      'User-centered architecture that creates intuitive, stark digital experiences backed by rigorous behavioral research, design tokens, and modular atomic systems.',
    footer: 'DESIGN TOKENS',
  },
  {
    index: '03',
    label: '03 // TALENT FORCE',
    icon: 'group_work',
    title: 'Remote IT Manpower Services',
    description:
      'Vetted, high-conviction IT professionals available on demand to strengthen development velocity, immediately integrating into sprint cycles without recruitment drag.',
    footer: 'STAFF AUGMENTATION',
  },
  {
    index: '04',
    label: '04 // PRODUCTION',
    icon: 'layers',
    title: 'IT Platform Engineering',
    description:
      'Comprehensive full-cycle development spanning modern web apps, progressive mobile tools, and containerized cloud solutions orchestrating secure multi-tenant loads.',
    footer: 'FULL-STACK APPS',
  },
  {
    index: '05',
    label: '05 // COGNITION',
    icon: 'smart_toy',
    title: 'Autonomous AI Solutions',
    description:
      'Predictive neural pipelines, custom LLM fine-tunes, and zero-hallucination workflow automation to digest massive enterprise datasets into actionable alpha.',
    footer: 'APPLIED INTELLIGENCE',
  },
  {
    index: '06',
    label: 'EXPANDING',
    icon: 'flight_takeoff',
    title: 'Drone & Aerial Sensor Fleet',
    description:
      'Advanced autonomous drone software for topographical surveying, real-time remote sensor data collection, and automated industrial field analytics.',
    footer: 'FLEET TELEMETRY',
    badge: 'EXPANDING',
  },
];

/* ============================================================
   CASE STUDIES
   ============================================================ */
export interface CaseStudy {
  client: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  metric: string;
  layout: 'image-right' | 'image-left' | 'full-width';
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Steel Horizons Solution',
    title: 'Centralized E-Invoicing Platform',
    description:
      'A distributed, automated e-invoicing platform managing end-to-end invoice lifecycle with multi-source integration, statutory compliance validation, and real-time operational visibility. Handles massive invoice throughput across legacy enterprise ERPs with immutable audit trails.',
    tags: ['E-Invoicing', 'FinTech', 'PEPPOL / LATAM'],
    image: ASSETS.eInvoice,
    imageAlt: 'Centralized E-Invoicing Platform dashboard preview',
    metric: 'VOLUME: $12.4M+',
    layout: 'image-right',
  },
  {
    client: 'Cognify Solutions SDN BHD',
    title: 'AI-Powered Learning & Assessment Platform',
    description:
      'An intelligent adaptive learning platform equipped with AI-generated examinations, automated semantic rubric grading, and personalized course telemetry. Compressed grading effort by 80% while elevating student completion rates.',
    tags: ['EdTech', 'Adaptive AI', 'Telemetry'],
    image: ASSETS.cognifyDashboard,
    imageAlt: 'AI-Powered Learning & Assessment Platform preview',
    metric: 'COHORT SLA: 99.8%',
    layout: 'image-left',
  },
  {
    client: 'TalentBridge Global',
    title: 'AI-Powered Recruitment & Talent Intelligence Platform',
    description:
      'A neural talent correlation matrix matching candidate cognitive profiles to enterprise job requirements. Features dynamic funnel telemetry, interview transcription parsing, and autonomous recruiter workflow actions.',
    tags: ['Talent AI', 'HR Tech', 'APAC Region'],
    image: ASSETS.talentBridge,
    imageAlt: 'TalentBridge AI Recruitment Platform candidate dashboard preview',
    metric: '4,800+ APPLICANTS PROCESSED',
    layout: 'image-right',
  },
  {
    client: 'Academy Brighton Consulting',
    title: 'Enterprise Learning & Digital Transformation Platform',
    description:
      'An integrated enterprise skill development and learning infrastructure deployed in partnership with Skillsoft Percipio. Equips multinational workforces with future-ready competencies, interactive curricula, and quantifiable capability telemetry.',
    tags: ['Enterprise Learning', 'EdTech', 'Skillsoft Percipio'],
    image: ASSETS.brightVision,
    imageAlt: 'Academy Brighton Consulting Platform showcase preview',
    metric: '15,000+ LEARNERS SCALED',
    layout: 'full-width',
  },
];

/* ============================================================
   PIPELINE PROJECTS
   ============================================================ */
export interface PipelineProject {
  quarter: string;
  title: string;
  description: string;
  category: string;
  status: string;
}

export const PIPELINE_PROJECTS: PipelineProject[] = [
  {
    quarter: 'Q3 2026',
    title: 'Enterprise Data Catalogue & Governance Platform',
    description:
      'Zero-trust data discovery engine with automated lineage mapping, granular tokenized permissions, and GDPR/SOC2 compliance assurance.',
    category: 'DATAOPS · MESH',
    status: 'DEPLOYING',
  },
  {
    quarter: 'Q4 2026',
    title: 'Real-Time Polymer Market Intelligence Platform',
    description:
      'Commodity spot price analytics engine consolidating international marine logistics schedules and predictive resin supply indicators.',
    category: 'COMMODITIES · SPOT INDEX',
    status: 'CALIBRATING',
  },
];

/* ============================================================
   INDUSTRIES
   ============================================================ */
export interface Industry {
  number: string;
  title: string;
  description: string;
  deliveryPattern: string;
  badge: string;
  previewImage?: string;
  previewAlt?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    number: '01',
    title: 'FinTech & Financial Compliance',
    description:
      'National electronic invoicing integration, automated tax reconciliations, and low-latency financial transaction ledgers with full statutory validation.',
    deliveryPattern: 'Multi-Source Invoicing Substrate',
    badge: 'Statutory Ready',
    previewImage: ASSETS.eInvoice,
    previewAlt: 'E-Invoicing Platform live deployment',
  },
  {
    number: '02',
    title: 'Education Technology & AI Assessment',
    description:
      'Automated generative question banks, adaptive multi-tier exam models, anti-tampering heuristics, and instant natural language response grading.',
    deliveryPattern: 'Adaptive Grading Engine',
    badge: 'Scaled SLA',
    previewImage: ASSETS.cognifyDashboard,
    previewAlt: 'Cognify adaptive learning and teacher dashboard',
  },
  {
    number: '03',
    title: 'Recruitment & Talent Intelligence',
    description:
      'Autonomous talent vector correlation, skill ontology parsing, candidate pipeline telemetry, and dynamic recruiter decision dashboards.',
    deliveryPattern: 'Vector Competency Graph',
    badge: 'High Matching',
    previewImage: ASSETS.talentBridge,
    previewAlt: 'TalentBridge recruitment & candidate assessment portal',
  },
  {
    number: '04',
    title: 'Enterprise Data & Platform Governance',
    description:
      'Comprehensive metadata lineage registries, automated RBAC/ABAC boundaries, and distributed multi-cloud sync with zero-trust credentials.',
    deliveryPattern: 'Decentralized Data Mesh',
    badge: 'Zero Trust',
    previewImage: ASSETS.brightVision,
    previewAlt: 'Academy Brighton Consulting Enterprise Platform',
  },
  {
    number: '05',
    title: 'Industrial & Market Intelligence',
    description:
      'Global petrochemical trade telemetry, drone sensor feed ingestion, freight pricing trackers, and proactive supply chain disruption alerts.',
    deliveryPattern: 'Predictive Telemetry Feeds',
    badge: 'High Frequency',
  },
];

/* ============================================================
   PHILOSOPHY PILLARS
   ============================================================ */
export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
  {
    number: 'PILLAR 01',
    title: 'Business-First Architecture',
    description:
      'Every architectural pattern directly serves client bottom-line velocity, cloud margin optimization, or compliance safeguards.',
  },
  {
    number: 'PILLAR 02',
    title: 'Mathematical UX Systems',
    description:
      'Clean, stark interfaces built on systematic design tokens that minimize human friction and eliminate cognitive clutter.',
  },
  {
    number: 'PILLAR 03',
    title: 'Statutory-Grade Security',
    description:
      'Mandatory penetration tests, automated secret cycling, multi-tenant database isolation, and sub-second failover routines.',
  },
  {
    number: 'PILLAR 04',
    title: 'Plug-and-Play Augmentation',
    description:
      'Direct engineering firepower injected into your sprint cycles without onboarding latency or bureaucratic overhead.',
  },
  {
    number: 'PILLAR 05',
    title: 'Deterministic AI Workflows',
    description:
      'Pragmatic LLM solutions with hard boundary guardrails, structured JSON outputs, and verifiable business utility.',
  },
  {
    number: 'PILLAR 06',
    title: 'Full-Lifecycle Ownership',
    description:
      'From schema design and container manifests through automated blue-green production cutovers and SLA warranties.',
  },
];

/* ============================================================
   FOOTER
   ============================================================ */
export const FOOTER_NAV = [
  { label: 'Emblem Core', href: '#hero' },
  { label: 'GaaS Substrate', href: '#gaas-infra' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Industries', href: '#industries' },
];

export const FOOTER_CAPABILITIES = [
  'Systems Architecture',
  'Autonomous Infrastructure',
  'Zero Tech Debt Protocol',
  'Mathematical UI Design',
];

export const FOOTER_GOVERNANCE = [
  'SOC2 / ISO 27001',
  'Multi-Tenant Isolation',
  'Zero-Trust Schemas',
];
