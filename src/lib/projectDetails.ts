export interface TechnologyCategory {
  category: string;
  items: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  projectName: string;
  client: string;
  industry: string;
  scope: string;
  images: ProjectImage[];
  overview: string;
  challenge: string;
  solutions: string[];
  results: string[];
  highlights: string[];
  technologies: TechnologyCategory[];
  nextProjectId: string;
  nextProjectTitle: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'ai-recruitment-platform': {
    id: 'ai-recruitment-platform',
    title: 'AI-Powered Recruitment & Talent Intelligence Platform',
    projectName: 'Talent Bridge',
    client: 'Brighton consulting',
    industry: 'HR Tech',
    scope: 'AI Development · Platform Development · Data Analytics',
    images: [
      {
        src: '/images/projects/talent-bridge-candidate.jpg',
        alt: 'TalentBridge Candidate Dashboard & AI Job Match Portal',
      },
      {
        src: '/images/projects/talent-bridge-admin.jpg',
        alt: 'TalentBridge Executive Recruitment Pipeline Analytics',
      },
      {
        src: '/images/projects/talent-bridge-employer.jpg',
        alt: 'TalentBridge Employer Candidate Shortlisting & Interview Hub',
      },
    ],
    overview:
      'An AI-driven platform connecting candidates, employers, and opportunities with intelligent job recommendations, candidate matching, and real-time hiring pipeline insights.',
    challenge:
      'Organizations faced challenges in efficiently sourcing, evaluating, and hiring the right talent. Traditional recruitment processes were time-consuming, lacked intelligent candidate matching, and provided limited visibility into hiring pipelines and performance insights. Additionally, there was no unified system to connect candidates, learning, and job opportunities.',
    solutions: [
      'Developed an AI-powered platform connecting candidates, employers, and opportunities',
      'Implemented AI-driven job recommendations for candidates',
      'Built intelligent candidate recommendation system for recruiters',
      'Integrated course recommendations to align candidate skills with market needs',
      'Designed hiring pipeline with real-time tracking and insights',
      'Enabled admin-level AI analytics for recruitment performance and decision-making',
      'Developed centralized dashboard for managing candidates, jobs, and hiring workflows',
      'Created scalable architecture to support multi-user roles and system expansion',
    ],
    results: [
      'Streamlined recruitment workflows and reduced manual screening effort',
      'Improved candidate-job matching accuracy through AI recommendations',
      'Enhanced visibility into hiring pipelines and recruitment performance',
      'Enabled data-driven hiring decisions through analytics dashboards',
    ],
    highlights: [
      'AI-powered job, candidate, and course recommendations',
      'Intelligent hiring pipeline with real-time insights',
      'Data-driven recruitment and decision-making',
      'Scalable platform connecting talent, learning, and opportunities',
      'Centralized system for end-to-end recruitment management',
    ],
    technologies: [
      {
        category: 'frontend',
        items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
      },
      {
        category: 'backend',
        items: ['NestJS (Node/TypeScript)'],
      },
      {
        category: 'database',
        items: ['MongoDB', 'Mongoose'],
      },
      {
        category: 'AI',
        items: ['Python', 'FastAPI', 'Milvus', 'Gemini (Google)', 'GPT (OpenAI)'],
      },
    ],
    nextProjectId: 'e-invoicing-platform',
    nextProjectTitle: 'Centralized E-Invoicing Platform',
  },

  'e-invoicing-platform': {
    id: 'e-invoicing-platform',
    title: 'Centralized E-Invoicing Platform',
    projectName: 'E-Invoicing',
    client: 'Steel horizons solution',
    industry: 'Finance & FinTech',
    scope: 'Platform Development · Financial Tech · Integration',
    images: [
      {
        src: '/images/projects/e-invoice-4.jpg',
        alt: 'Centralized E-Invoicing Platform statutory clearance console',
      },
      {
        src: '/images/projects/e-invoice-5.jpg',
        alt: 'E-Invoicing Platform distributed multi-entity audit trail',
      },
      {
        src: '/images/projects/e-invoice-6.jpg',
        alt: 'E-Invoicing Platform ingestion health and throughput telemetry',
      },
    ],
    overview:
      'A distributed, automated e-invoicing platform managing end-to-end invoice lifecycle with multi-source integration, compliance validation, and real-time operational visibility. Handles high-volume invoicing across heterogeneous systems with strict audit trails and tenant-level data isolation.',
    challenge:
      'Organizations required an enterprise e-invoicing middleware capable of handling high-volume invoicing across multiple source systems with different schemas and data quality levels. Invoice data originated from diverse platforms, increasing reconciliation effort and the risk of non-compliant submissions. Regulatory compliance demanded strict enforcement of mandatory fields, formats, and cross-field consistency. Operations teams lacked transparency into invoice lifecycle and failure points. The solution also needed multi-entity support with tenant-level isolation, granular access control, complete auditability, and strict environment segregation.',
    solutions: [
      'Implemented a distributed Service-Oriented Architecture (SOA) with loosely coupled, domain-specific services and event-driven orchestration',
      'Built an Adapter Layer integrating multiple source systems, normalizing all inputs into a canonical invoice model',
      'Developed a comprehensive Rule Engine applying schema validation, business-rule enforcement, and cross-field consistency checks',
      'Built a Submission Engine to batch invoices, construct compliant payloads, and submit with automatic retry logic',
      'Implemented an Outbox-pattern Notification Engine for durable event publishing and in-app alerts on invoice lifecycle changes',
      'Enforced tenant-scoped RBAC with OAuth authentication, immutable audit logs, and strict environment segregation',
      'Delivered Dashboard & Reporting module with ingestion monitoring, error analytics, lifecycle tracking, and audit reports',
    ],
    results: [
      'Established a centralized e-invoicing backbone, eliminating fragmentation across multiple source systems',
      'Reduced preventable rejections through automated validation with clear reason codes for accelerated remediation',
      'Improved submission reliability through asynchronous orchestration and retry logic, reducing clearance delays',
      'Enhanced compliance confidence with comprehensive audit logging, dashboards, and multi-tenant isolation',
    ],
    highlights: [
      'Compliance-ready e-invoicing with automated validation and submission engine',
      'Multi-source Adapter Layer normalizing heterogeneous invoice inputs',
      'Resilient event-driven orchestration with exponential backoff retry',
      'Multi-tenant platform with tenant-scoped RBAC and full auditability',
      'End-to-end invoice lifecycle management with real-time operational visibility',
    ],
    technologies: [
      {
        category: 'frontend',
        items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'Redux Toolkit'],
      },
      {
        category: 'backend',
        items: ['Node.js', 'Express.js (TypeScript)'],
      },
      {
        category: 'database',
        items: ['PostgreSQL'],
      },
      {
        category: 'architecture',
        items: [
          'Service-Oriented Architecture (SOA)',
          'Event-Driven Orchestration',
          'Adapter Pattern',
        ],
      },
      {
        category: 'auth',
        items: ['OAuth', 'JWT', 'RBAC'],
      },
    ],
    nextProjectId: 'ai-learning-platform',
    nextProjectTitle: 'AI-Powered Learning & Assessment Platform',
  },

  'ai-learning-platform': {
    id: 'ai-learning-platform',
    title: 'AI-Powered Learning & Assessment Platform',
    projectName: 'Cognify',
    client: 'Cognify solutions SDN BHD',
    industry: 'EdTech',
    scope: 'AI Development · Platform Development · Data Analytics',
    images: [
      {
        src: '/images/projects/cognify-teacher-dashboard.jpg',
        alt: 'Cognify Teacher Dashboard with automated grading analytics',
      },
      {
        src: '/images/projects/cognify-student-dashboard.jpg',
        alt: 'Cognify Student Dashboard with adaptive study telemetry',
      },
      {
        src: '/images/projects/cognify-parent-dashboard.jpg',
        alt: 'Cognify Parent Portal with real-time milestone tracking',
      },
    ],
    overview:
      'An intelligent learning platform with AI-generated exams, automated grading, and personalized course recommendations. Reduced manual effort in exam creation and grading while improving learning personalization.',
    challenge:
      'Organizations and educational institutions lacked an intelligent system to deliver personalized learning, efficiently create assessments, and evaluate performance at scale. Traditional platforms required significant manual effort for exam creation, grading, and content development, while also lacking data-driven insights and personalization.',
    solutions: [
      'Enabled teachers to generate exams using AI, reducing manual workload',
      'Implemented AI-based grading system for automated and consistent evaluation',
      'Built competency-based assessment system with automated evaluation',
      'Integrated AI for generating teaching materials and assessments',
      'Designed advanced analytics dashboards for performance tracking and insights',
      'Developed an AI-powered learning platform with personalized course and task recommendations',
      'Enabled seamless integration with LMS/LXP systems as well as standalone deployment',
      'Implemented user management, data cataloguing, and reporting modules',
    ],
    results: [
      'Reduced manual effort in exam creation and grading processes',
      'Improved learning personalization and student engagement',
      'Enabled scalable, data-driven assessment and performance tracking',
      'Streamlined content generation and evaluation workflows',
    ],
    highlights: [
      'AI-generated exams and automated grading system',
      'Personalized learning and task recommendations',
      'Competency-based assessment framework',
      'Scalable, integration-ready architecture',
      'End-to-end learning, assessment, and analytics platform',
    ],
    technologies: [
      {
        category: 'frontend',
        items: ['React (TypeScript & Vite)', 'Tailwind CSS', 'Shadcn UI', 'Redux Toolkit'],
      },
      {
        category: 'backend',
        items: ['Node.js & Express.js (TypeScript)', 'Python & FastAPI'],
      },
      {
        category: 'database',
        items: ['MongoDB', 'Milvus (Vector Database)', 'AWS S3'],
      },
      {
        category: 'AI',
        items: ['Gemini (Google)', 'Grok (xAI)', 'GPT (OpenAI)'],
      },
    ],
    nextProjectId: 'enterprise-learning-platform',
    nextProjectTitle: 'Enterprise Learning & Digital Transformation Platform',
  },

  'enterprise-learning-platform': {
    id: 'enterprise-learning-platform',
    title: 'Enterprise Learning & Digital Transformation Platform',
    projectName: 'Bright Vision LXP',
    client: 'Academy Brighton Consulting',
    industry: 'EdTech & Enterprise Skills',
    scope: 'LXP Architecture · Skillsoft Integration · Capability Telemetry',
    images: [
      {
        src: '/images/bright_vision.png',
        alt: 'Brighton Consulting Corporate Capability & Skills Infrastructure',
      },
      {
        src: '/images/projects/mdm-7.jpg',
        alt: 'Enterprise Curriculum Mapping and Ingestion Lineage',
      },
      {
        src: '/images/projects/talent-bridge-admin.jpg',
        alt: 'Executive Skill Gap & Statutory Training Audit Console',
      },
    ],
    overview:
      'An integrated enterprise skill development and learning infrastructure deployed in partnership with Skillsoft Percipio. Equips multinational workforces with future-ready competencies, interactive curricula, and quantifiable capability telemetry.',
    challenge:
      'Enterprises struggled with fragmented corporate training systems that lacked real-time capability tracking, standardized skill benchmarks, and unified learner telemetry across geographically dispersed teams. Legacy corporate portals offered low completion rates and zero integration with modern role taxonomies.',
    solutions: [
      'Orchestrated deep Percipio LXP API integration synchronizing 10,000+ interactive business and tech modules',
      'Built competency vector tracking matching enterprise job roles to adaptive progression paths',
      'Designed executive workforce development dashboards highlighting skill gaps and compliance readiness',
      'Engineered enterprise SSO, SCORM/xAPI compliant ingestion engines, and automated certification workflows',
      'Implemented localized language interfaces and bandwidth-optimized offline synchronization for APAC and EMEA teams',
      'Established automated milestone progression notifications with manager sign-off cycles',
    ],
    results: [
      'Scaled platform to 15,000+ multinational corporate learners across 4 jurisdictions',
      'Increased course completion rates by 64% via contextual micro-learning paths',
      'Provided C-suite with verifiable audit compliance and talent readiness index scores',
      'Eliminated administrative licensing waste by 38% through real-time seat optimization',
    ],
    highlights: [
      'Enterprise Skillsoft Percipio integration with real-time credentialing',
      'Automated competency matrix and learner progression telemetry',
      'Role-based learning pathways tailored to enterprise transformation',
      'Sovereign compliance with ISO 27001 and enterprise security standards',
    ],
    technologies: [
      {
        category: 'frontend',
        items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      },
      {
        category: 'backend',
        items: ['NestJS', 'Node.js', 'GraphQL'],
      },
      {
        category: 'database',
        items: ['PostgreSQL', 'Redis Cache'],
      },
      {
        category: 'compliance',
        items: ['SCORM', 'xAPI', 'SSO / SAML 2.0', 'OAuth 2.0'],
      },
    ],
    nextProjectId: 'ai-recruitment-platform',
    nextProjectTitle: 'AI-Powered Recruitment & Talent Intelligence Platform',
  },
};

/** List of all project IDs in canonical sequence */
export const PROJECT_ID_LIST = [
  'e-invoicing-platform',
  'ai-learning-platform',
  'ai-recruitment-platform',
  'enterprise-learning-platform',
];
