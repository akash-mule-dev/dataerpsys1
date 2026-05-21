import { SERVICE_IMAGES } from "./images";

export type ServicePage = {
  slug: string;
  href: string;
  title: string;
  eyebrow: string;
  intro: string;
  icon: string;
  heroImage?: { url: string; credit: string; alt: string };
  overview: { heading: string; body: string };
  offerings: { heading: string; items: { title: string; body?: string; icon?: string }[] };
  benefits?: { heading: string; items: string[] };
  whyUs?: { heading: string; items: string[] };
  stats?: { value: string; label: string }[];
  ctaLabel?: string;
};

const RAW_SERVICES: Record<string, ServicePage> = {
  sap: {
    slug: "sap",
    href: "/it-services/sap",
    title: "SAP Solutions",
    eyebrow: "SAP Services",
    intro:
      "Our SAP services range from short-term assignments to full-scale implementations across traditional ERP and emerging technologies.",
    icon: "developer_board",
    overview: {
      heading: "Build your SAP solution with Data ERP Systems",
      body: "This is time for collaboration. A modernized, powerful digital core is vital for a world enriched and powered by data. We work with clients to optimize business performance through SAP solutions, enabling agility, flexibility, and efficiency on data-driven foundations.",
    },
    offerings: {
      heading: "SAP services offered",
      items: [
        { title: "SAP S/4HANA Services", body: "Integrated business planning and digital transition strategies.", icon: "memory" },
        { title: "SAP Platform Modernization", body: "End-to-end approach to improve efficiency and reduce costs.", icon: "auto_awesome" },
        { title: "SAP S/4HANA Implementation", body: "Implementations backed by 14 years of delivery experience.", icon: "rocket_launch" },
        { title: "SAP S/4HANA Migration Services", body: "Integrated planning for in-place and re-platform migrations.", icon: "sync_alt" },
        { title: "SAP ERP Central Component", body: "On-premises ERP support, hardening and modernization.", icon: "dns" },
        { title: "SAP Analytics Cloud", body: "Enterprise planning and business intelligence.", icon: "analytics" },
        { title: "SAP Platform & Infrastructure", body: "Digital architecture and cloud foundation services.", icon: "cloud" },
        { title: "SAP Application Management", body: "Development, implementation, testing and support.", icon: "deployed_code" },
        { title: "SAP Human Capital Management", body: "HR processes and employee experiences.", icon: "groups" },
        { title: "SNP BLUEFIELD", body: "Faster S/4HANA pathway with automation.", icon: "fast_forward" },
      ],
    },
    benefits: {
      heading: "How we can help",
      items: [
        "Optimization",
        "Upgrades and Migrations",
        "Implementation",
        "Custom Application Integration",
        "Enterprise Support",
        "Divestiture and Carve-Outs",
      ],
    },
    whyUs: {
      heading: "Why partner with DES?",
      items: ["Proven methodology built on 14 years of experience", "Unrivaled SAP expertise across modules", "Measurable return on investment", "Strong partnerships and certifications"],
    },
    stats: [
      { value: "14+", label: "Years SAP Experience" },
      { value: "10+", label: "SAP Modules Supported" },
      { value: "597+", label: "Projects Delivered" },
      { value: "95%", label: "Client Success Rate" },
    ],
  },
  oracle: {
    slug: "oracle",
    href: "/it-services/oracle",
    title: "Oracle ERP Solutions",
    eyebrow: "Oracle Services",
    intro:
      "Oracle ERP brings business processes together to boost collaboration, drive productivity, and support data-driven decisions.",
    icon: "database",
    overview: {
      heading: "The benefits of implementing Oracle ERP",
      body: "Oracle is a major ERP market player offering an extensive application suite. Its cloud solutions enable faster implementation timelines than traditional on-premise deployments. Customizable reporting reduces IT dependency, and an integrated suite drives organizational efficiency.",
    },
    offerings: {
      heading: "Oracle ERP solution areas",
      items: [
        { title: "Project Management", body: "Plan, execute and report across complex programs.", icon: "task_alt" },
        { title: "Supply Chain & Manufacturing", body: "Demand, supply and production planning.", icon: "factory" },
        { title: "Analytics for Cloud ERP", body: "Embedded analytics and prebuilt KPIs.", icon: "monitoring" },
        { title: "Human Resources", body: "HCM with talent, payroll and workforce intelligence.", icon: "person" },
        { title: "Risk Management & Compliance", body: "Audit, controls and policy management.", icon: "shield" },
        { title: "Customer Service", body: "Service request and field operations.", icon: "support_agent" },
        { title: "Oracle Financials Cloud", body: "Modern finance, accounting and reporting.", icon: "account_balance" },
        { title: "Business Intelligence & Analytics", body: "Self-service BI and data discovery.", icon: "insights" },
        { title: "Oracle EPM", body: "Enterprise performance, planning and consolidation.", icon: "leaderboard" },
      ],
    },
    whyUs: {
      heading: "Why choose Oracle ERP with us?",
      items: [
        "Nucleus Research ERP market leader for seven consecutive years",
        "R&D investment exceeding $5 billion",
        "430,000+ active Oracle customers worldwide",
        "Extensive user-group resources and community",
        "Robust partner ecosystem and integration network",
      ],
    },
    stats: [
      { value: "430K+", label: "Oracle Customers" },
      { value: "7×", label: "Market Leader Years" },
      { value: "$5B+", label: "Oracle R&D Annually" },
      { value: "100%", label: "Cloud-Ready Stack" },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    href: "/it-services/mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Mobile Engineering",
    intro:
      "We craft high-performing, feature-packed native and cross-platform mobile applications for Android and iOS.",
    icon: "smartphone",
    overview: {
      heading: "Mobile Application Development",
      body: "A reliable app development partner delivering mobile and web apps that power brands and start-ups. We have deep expertise in responsive, scalable mobile and web apps that help businesses sustain and grow operations.",
    },
    offerings: {
      heading: "Our high-end mobile app development services",
      items: [
        { title: "Mobile Consulting", icon: "lightbulb" },
        { title: "Mobile App Integration", icon: "extension" },
        { title: "Mobile App Modernization", icon: "auto_fix" },
        { title: "Mobile App Development", body: "100+ apps shipped to production.", icon: "code" },
        { title: "Maintenance and Support", icon: "build" },
        { title: "Mobile QA and Testing", icon: "bug_report" },
        { title: "Mobile UX and UI Design", icon: "design_services" },
        { title: "Backend Development", icon: "dns" },
      ],
    },
    benefits: {
      heading: "Major mobile technologies",
      items: [
        "iOS App Development",
        "Cross-Platform App Development",
        "Wearables and Embedded Software",
        "Hybrid Mobile App Development",
        "Android App Development",
        "Progressive Web App Development",
        "Native Mobile App Development",
      ],
    },
    whyUs: {
      heading: "Benefits of a mobile app for your business",
      items: [
        "Custom-built apps meet specific business requirements",
        "Scalability for growing businesses",
        "Enhanced data security features",
        "Complete ownership and control",
        "Real-time personalized customer updates",
        "Data collection through integrated forms",
        "Project progress tracking capabilities",
      ],
    },
  },
  "software-testing-qa": {
    slug: "software-testing-qa",
    href: "/it-services/software-testing-qa",
    title: "Software Testing & QA",
    eyebrow: "Quality Engineering",
    intro:
      "Experience next-gen software testing and Quality Assurance services. We deliver faster deployments, an improved SDLC, and unmatched cost-effectiveness.",
    icon: "bug_report",
    overview: {
      heading: "Ensure Quality Assurance. Enhance Customer Experience.",
      body: "DES delivers comprehensive quality engineering across desktop, mobile, and next-gen applications. We emphasize hands-on understanding of enterprise transformation challenges and implement methodologies through a Testing Center of Excellence and world-class software testing labs.",
    },
    offerings: {
      heading: "Testing services offered",
      items: [
        { title: "Functional Testing", body: "Validates software against requirements—UI, database, security, and APIs.", icon: "checklist" },
        { title: "Security Testing", body: "Uncovers vulnerabilities through risk assessment and penetration testing.", icon: "lock" },
        { title: "Compatibility Testing", body: "Across browsers, databases, operating systems, and devices.", icon: "devices" },
        { title: "Performance Testing", body: "Addresses load time and responsiveness through behavior analysis.", icon: "speed" },
        { title: "Usability Testing", body: "Analyzes user behavior patterns to identify issues early.", icon: "psychology" },
        { title: "Mobile App Testing", body: "Cross-platform functional and non-functional testing.", icon: "smartphone" },
      ],
    },
    benefits: {
      heading: "Test automation capabilities",
      items: [
        "Test automation strategy development",
        "Test environment setup and configuration",
        "Automated UI and API testing",
        "Performance testing",
        "CI/CD pipeline implementation",
      ],
    },
  },
  "application-development": {
    slug: "application-development",
    href: "/services/application-development",
    title: "Application Development",
    eyebrow: "Engineering",
    intro: "We craft user-centered solutions for the digital future.",
    icon: "code",
    overview: {
      heading: "Application development overview",
      body: "Our agile, cross-functional teams deliver world-class web and mobile applications that release features faster, scale gracefully, and provide a delightful customer experience.",
    },
    offerings: {
      heading: "Core service features",
      items: [
        { title: "Affordable Pricing", body: "Customizable pricing models for various project scales.", icon: "payments" },
        { title: "Native or Hybrid", body: "Support for Swift, Objective-C, Java, React, Cordova and Titanium.", icon: "stacks" },
        { title: "Consistent Communication", body: "Regular project status updates through every phase.", icon: "forum" },
        { title: "Testing & Ongoing Support", body: "Comprehensive testing, OS compatibility and feature support.", icon: "support" },
      ],
    },
    benefits: {
      heading: "App architecture patterns we ship",
      items: [
        "Tiered architecture",
        "Cloud-native architecture",
        "Reactive architecture",
        "Microservices architecture",
      ],
    },
    whyUs: {
      heading: "Why choose us",
      items: [
        "Agile, cross-functional delivery teams",
        "Modern stacks across web and mobile",
        "Production-grade engineering practices",
        "Long-term ownership and support",
      ],
    },
  },
  "application-support": {
    slug: "application-support",
    href: "/services/application-support",
    title: "Application Support",
    eyebrow: "Managed Services",
    intro:
      "Get the professional support you need to keep business applications in step with changing market trends, industry dynamics and customer needs.",
    icon: "support_agent",
    overview: {
      heading: "Managed Application Support for enhanced efficiency",
      body: "Customized application support for complex business systems like SAP—separating system improvements from daily maintenance through a specialized architecture for production support, proactive maintenance, bug-fixing, and user training.",
    },
    offerings: {
      heading: "Service categories",
      items: [
        { title: "Application Maintenance", body: "Portfolio-based tactics covering technology, planning and services.", icon: "build" },
        { title: "Enhancements & Bug Fixes", body: "Triage, enhancement requests and new feature delivery.", icon: "bug_report" },
        { title: "ABAP & Java Tech Support", body: "SAP ABAP experts resolve the most complex issues.", icon: "code" },
        { title: "Classical Add-Ons", body: "Add-on development and lifecycle support.", icon: "extension" },
        { title: "SAP Modules Functional Support", body: "Functional consulting across SAP modules.", icon: "view_module" },
        { title: "SAP NetWeaver Support", body: "Platform stability, performance and tuning.", icon: "settings_suggest" },
      ],
    },
    benefits: {
      heading: "Support Levels (L0–L3)",
      items: [
        "L0 — Knowledge base and user guidance",
        "L1 — Basic issue resolution under 15 minutes",
        "L2 — Serious incidents resolved in under 12 hours",
        "L3 — Complex code and database fixes within 24 hours",
      ],
    },
  },
  "consulting-services": {
    slug: "consulting-services",
    href: "/services/consulting-services",
    title: "Consulting Services",
    eyebrow: "IT Strategy",
    intro:
      "Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, operations.",
    icon: "psychology",
    overview: {
      heading: "Get your business and IT strategies aligned",
      body: "Businesses rely on IT consulting to stay competitive and leverage technology investments effectively. We help leaders make confident technology bets that actually move the business forward.",
    },
    offerings: {
      heading: "Dedicated IT consulting services",
      items: [
        { title: "Cybersecurity Consulting", body: "Identifies security threats and gaps across the stack.", icon: "security" },
        { title: "Crisis Management Consulting", body: "Maintains operability during critical situations.", icon: "emergency" },
        { title: "IT Infrastructure Support", body: "Ensures stability and performance for production systems.", icon: "dns" },
        { title: "Cloud Consulting Services", body: "Maximize the value of your cloud investment.", icon: "cloud" },
        { title: "Remote Work Consulting", body: "Enables secure work-from-home transitions.", icon: "work" },
      ],
    },
    whyUs: {
      heading: "Why choose Data ERP Systems for IT consulting?",
      items: [
        "We listen to your needs first, then plan an IT strategy",
        "We align tactics with your business objectives",
        "We build solutions tailored to your enterprise",
        "We operate and deliver measurable results",
      ],
    },
    stats: [
      { value: "99%", label: "IT Consulting Outcomes" },
      { value: "98%", label: "Infra Monitoring 24/7" },
      { value: "99%", label: "Cloud Migration Success" },
      { value: "36+", label: "Clients Advised" },
    ],
  },
  offshore: {
    slug: "offshore",
    href: "/services/offshore",
    title: "Offshore Services",
    eyebrow: "Outsourcing",
    intro: "Optimize current operations. Launch new projects.",
    icon: "public",
    overview: {
      heading: "Offshore IT outsourcing that scales with you",
      body: "Offshore IT services help close industry talent shortages. Software application development is among the most outsourced IT functions globally—our delivery centers give you elastic capacity without compromising quality.",
    },
    offerings: {
      heading: "Service offerings",
      items: [
        { title: "Infrastructure Support", body: "Stability and performance across on-prem, cloud and hybrid.", icon: "dns" },
        { title: "Cloud Migration", body: "Reduce physical resource needs and increase productivity.", icon: "cloud_upload" },
        { title: "Quality Assurance Services", body: "Establishes control over the product lifecycle.", icon: "verified" },
        { title: "Cloud App Development", body: "Build cloud-native applications leveraging cloud capabilities.", icon: "cloud_circle" },
        { title: "Cyber Security Services", body: "Expert security implementation across organizations.", icon: "security" },
        { title: "Remote Work Consulting", body: "Enable work-from-home while maintaining business continuity.", icon: "home_work" },
      ],
    },
    benefits: {
      heading: "Cooperation models",
      items: ["Staff Augmentation", "Self-Managed Team", "Full Outsourcing"],
    },
    stats: [
      { value: "1.5–2×", label: "Revenue from IT-led growth" },
      { value: ">2×", label: "Reduced IT service costs" },
      { value: "2.5×", label: "Higher growth from freed resources" },
      { value: "64%", label: "Of global IT outsourcing is app dev" },
    ],
  },
  "staffing-services": {
    slug: "staffing-services",
    href: "/services/staffing-services",
    title: "Staffing Services",
    eyebrow: "Talent Solutions",
    intro: "Hire an IT professional in a few days. Start the process in a few minutes.",
    icon: "badge",
    overview: {
      heading: "Advanced staffing solutions in India and abroad",
      body: "Staffing solutions find the right candidates and let you efficiently manage your workforce—improving productivity and reducing employee turnover. DataERPSys offers extensive candidate databases and HR management systems.",
    },
    offerings: {
      heading: "Scope of staffing solutions",
      items: [
        { title: "Permanent Staffing", body: "Future employees who can add value and resources from day one.", icon: "person_add" },
        { title: "Contract-to-Hire", body: "Mutually beneficial bond for a fixed period before conversion.", icon: "swap_horiz" },
        { title: "Contractual Basis", body: "Fill short-term or long-term opportunities flexibly.", icon: "schedule" },
        { title: "Recruitment Process Outsourcing", body: "RPO solutions tailored to the bespoke needs of clients.", icon: "group_add" },
      ],
    },
    benefits: {
      heading: "How we deliver",
      items: [
        "SOLVE — 99% problem-fit alignment",
        "SOURCE — 95% candidate sourcing quality",
        "SCREEN — 98% screening accuracy",
        "START — 99% on-time start rate",
        "Testing — 97% skills validation",
        "SERVICE — 95% post-placement support",
      ],
    },
  },
};

export const SERVICES: Record<string, ServicePage> = Object.fromEntries(
  Object.entries(RAW_SERVICES).map(([slug, page]) => [
    slug,
    { ...page, heroImage: SERVICE_IMAGES[slug] },
  ])
);

export const SERVICE_SLUGS = Object.keys(SERVICES);
