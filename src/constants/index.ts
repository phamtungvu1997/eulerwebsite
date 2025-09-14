import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Sparkles } from 'lucide-react'


export const FEATURES = [
  {
    icon: Zap,
    title: '24/7 Global Delivery',
    description: 'Delivery across the EU, US, and Asia time zones—always on, always available.',
    accentColor: 'text-brand-accentPurple'
  },
  {
    icon: Users,
    title: 'Elastic Scaling',
    description: 'Scale from 3-person pods to full squads as your needs evolve.',
    accentColor: 'text-brand-accentBlue'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'GDPR-ready and a SOC mindset for robust security and compliance.',
    accentColor: 'text-brand-accentBlue'
  },
  {
    icon: Sparkles,
    title: 'Cloud-native DevOps & MLOps',
    description: 'Modern DevOps and MLOps practices are baked into every project.',
    accentColor: 'text-brand-accentPurple'
  },
  {
    icon: CheckCircle,
    title: 'Agile Velocity, ISO Rigour',
    description: 'Agile delivery with ISO-style process rigour for quality and speed.',
    accentColor: 'text-brand-accentBlue'
  }
]

export const TESTIMONIALS = [
  {
    name: 'Mid‑Market SaaS',
    role: 'VP Engineering',
    content: 'The elastic team model helped us ship faster without compromising quality.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'InsurTech Platform',
    role: 'Head of Infrastructure',
    content: 'EDS brought us the cloud-native tooling and DevOps muscle we lacked.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'FinTech Startup',
    role: 'Founder',
    content: 'The AI integration didn’t just work — it delivered ROI in weeks.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  }
]

export const SERVICES = [
  {
    title: "Augmented Offices & Dedicated Teams",
    tagline: "Add velocity fast. Retain domain knowledge.",
    bullets: ["Staff augmentation", "3–5 person pods", "Squads", "BOT & ODC models"],
    href: "/services/dedicated-teams",
  },
  {
    title: "AI/ML Development & Integration",
    tagline: "From proof of concept to production.",
    bullets: ["Custom models", "MLOps", "Computer Vision", "Chatbots", "Automation"],
    href: "/services/ai-ml",
  },
  {
    title: "Cloud Services & Transformation",
    tagline: "Optimize spend. Improve resilience.",
    bullets: ["Migration", "IaC", "CI/CD", "FinOps", "Multi‑cloud"],
    href: "/services/cloud",
  },
  {
    title: "Custom Application Development",
    tagline: "Web, mobile, APIs. Secure, scalable, performant.",
    bullets: ["API‑first", "Microservices", "Mobile apps", "PWAs"],
    href: "/services/custom-apps",
  },
  {
    title: "Product Engineering",
    tagline: "MVPs, modernization, scalable platforms.",
    bullets: ["Full‑lifecycle SaaS", "Product scaling"],
    href: "/services/product-engineering",
  },
  {
    title: "Blockchain and Web3 Development",
    tagline: "De‑risk innovation.",
    bullets: ["IoT", "AR/VR", "Web3", "Low‑code", "Edge"],
    href: "/services/advanced-tech",
  },
  {
    title: "Data & Analytics",
    tagline: "Turn raw data into real‑time insights.",
    bullets: ["Warehouses", "Pipelines", "BI", "Big data platforms"],
    href: "/services/data",
  },
  {
    title: "QA & Testing",
    tagline: "Test faster. Ship with confidence.",
    bullets: ["Automation", "Performance", "Continuous testing"],
    href: "/services/qa-testing",
  },
  {
    title: "Cybersecurity Services",
    tagline: "Security that scales with your stack.",
    bullets: ["Assessments", "Compliance (GDPR/HIPAA)", "SOC", "Zero‑trust"],
    href: "/services/cybersecurity",
  },
  {
    title: "Web and Mobile App Development",
    tagline: "Clear roadmaps. Lower risk.",
    bullets: ["CTOaaS", "Due diligence", "Architecture review"],
    href: "/services/consulting",
  },
  {
    title: "Application & Infrastructure Management",
    tagline: "Run reliably, 24/7.",
    bullets: ["Managed cloud", "NOC", "SRE", "DRaaS"],
    href: "/services/managed-services",
  },
  {
    title: "Process Automation",
    tagline: "Free your team from busywork.",
    bullets: ["IPA", "RPA", "Workflow automation", "Process mining"],
    href: "/services/automation",
  },
]

export const INDUSTRIES = [
  {
    name: 'FinTech',
    description: 'Digital banking, payments, and secure financial platforms.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg',
  },
  {
    name: 'HealthTech',
    description: 'Innovations for healthcare, telemedicine, and patient data.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/worldhealthorganization.svg',
  },
  {
    name: 'E-commerce',
    description: 'Online retail, marketplaces, and global digital storefronts.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg',
  },
  {
    name: 'Manufacturing',
    description: 'Smart factories, automation, and Industry 4.0 solutions.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/siemens.svg',
  },
  {
    name: 'Logistics',
    description: 'Supply chain visibility, fleet tracking, and delivery tech.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fedex.svg',
  },
  {
    name: 'EdTech',
    description: 'Learning platforms, digital classrooms, and training apps.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/coursera.svg',
  },
  {
    name: 'Public Sector',
    description: 'Government services, compliance, and citizen engagement.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/unitednations.svg',
  },
  {
    name: 'Energy',
    description: 'Smart grids, renewables, and sustainable energy platforms.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/victronenergy.svg',
  },
  {
    name: 'Retail',
    description: 'Omnichannel customer experiences and digital POS systems.',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zalando.svg',
  },
]

export const PHASES = [
  {
    phase: 1,
    title: "Discover",
    points: ["scope, goals, constraints", "success metrics"],
  },
  {
    phase: 2,
    title: "Design",
    points: ["architecture", "delivery plan", "security approach"],
  },
  {
    phase: 3,
    title: "Build",
    points: ["agile sprints", "CI/CD", "secure by design"],
  },
  {
    phase: 4,
    title: "Launch",
    points: ["readiness checks", "release runbooks", "observability"],
  },
  {
    phase: 5,
    title: "Operate",
    points: ["24/7 support", "SLAs", "incident mgmt"],
  },
  {
    phase: 6,
    title: "Optimize",
    points: ["MLOps, FinOps, AIOps", "cost & performance tuning"],
  },
];