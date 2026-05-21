export type IndustryPage = {
  slug: string;
  href: string;
  title: string;
  eyebrow: string;
  intro: string;
  icon: string;
  overview: { heading: string; body: string };
  solutions: { heading: string; items: { title: string; body?: string; icon?: string }[] };
  whyUs: { heading: string; items: string[] };
};

export const INDUSTRIES: Record<string, IndustryPage> = {
  manufacturing: {
    slug: "manufacturing",
    href: "/industries/manufacturing",
    title: "Manufacturing",
    eyebrow: "Industry",
    intro:
      "Manufacturing software boosts production, improves quality, meets regulations, tracks inventory and supply chain, surfaces crucial KPIs, and gets merchandise to customers faster.",
    icon: "factory",
    overview: {
      heading: "SAP S/4HANA Cloud for manufacturing",
      body: "Planning and scheduling that enables creation of feasible production plans and ensures planning and execution are synchronized in real time across the shop floor.",
    },
    solutions: {
      heading: "SAP manufacturing solutions",
      items: [
        { title: "SAP Manufacturing Execution", body: "MES system for monitoring production.", icon: "precision_manufacturing" },
        { title: "SAP Manufacturing Integration & Intelligence", body: "Real-time monitoring and data analysis.", icon: "insights" },
        { title: "SAP OEE Package Solutions", body: "Real-time performance improvements.", icon: "speed" },
        { title: "SAP Digital Manufacturing Cloud", body: "Analytics and execution integration.", icon: "cloud_circle" },
        { title: "SAP HANA Cockpit", body: "Administration and monitoring tools.", icon: "monitoring" },
      ],
    },
    whyUs: {
      heading: "Why choose us?",
      items: [
        "Better Planning",
        "Stock Monitoring",
        "Complete Automation",
        "Resource Utilization",
        "Efficient Quality Checks",
        "Supply Chain Processing",
      ],
    },
  },
  "health-care": {
    slug: "health-care",
    href: "/industries/health-care",
    title: "Health Care",
    eyebrow: "Industry",
    intro:
      "SAP healthcare solutions reduce inventory cost, IT infrastructure spend and support cost while minimizing errors—so providers can focus on better patient outcomes.",
    icon: "medical_services",
    overview: {
      heading: "SAP S/4HANA Cloud for the healthcare industry",
      body: "SAP ERP for healthcare facilitates interactions across business services, enabling employees to work better and increasing productivity from clinic to back office.",
    },
    solutions: {
      heading: "SAP healthcare services",
      items: [
        { title: "Wealth of Clinical Data", icon: "biotech" },
        { title: "Focus on Better Patient Care", icon: "favorite" },
        { title: "Efficient Supply Chain", icon: "local_shipping" },
        { title: "Personalized Interactions", icon: "personal_injury" },
        { title: "Cost-Effective Solutions", icon: "savings" },
        { title: "Well-Managed Human Resources", icon: "groups" },
        { title: "Compliance Assurance", icon: "verified" },
      ],
    },
    whyUs: {
      heading: "Why choose us?",
      items: [
        "Contract Management",
        "Stock Monitoring",
        "Lot & Serial Management",
        "Inventory Management",
        "Purchasing",
        "Financial Management",
        "Supply Chain Processing",
      ],
    },
  },
  pharmaceutical: {
    slug: "pharmaceutical",
    href: "/industries/pharmaceutical",
    title: "Pharmaceutical & Life Sciences",
    eyebrow: "Industry",
    intro:
      "DES provides SAP S/4HANA for the Pharmaceutical Industry. Increase employee productivity and respond easily to market demands with SAP support tailored for pharma.",
    icon: "vaccines",
    overview: {
      heading: "SAP S/4HANA Cloud for the pharmaceutical industry",
      body: "Pharmaceutical companies must concentrate on effective drug manufacturing while managing regulatory compliance across finance, accounting, sales, and production through integrated software.",
    },
    solutions: {
      heading: "Key features",
      items: [
        { title: "Complete Solution", icon: "all_inclusive" },
        { title: "Add-Ons", icon: "extension" },
        { title: "Demand-Based Production", icon: "trending_up" },
        { title: "Customization", icon: "settings_suggest" },
        { title: "Support & Training", icon: "school" },
      ],
    },
    whyUs: {
      heading: "Why choose us",
      items: [
        "Meets GMP",
        "Stock Monitoring",
        "Expiry Date Checks",
        "Complete Automation",
        "Resource Utilization",
        "Efficient Quality Checks",
        "Real-Time Reports",
      ],
    },
  },
  transportation: {
    slug: "transportation",
    href: "/industries/transportation",
    title: "Transportation & Logistics",
    eyebrow: "Industry",
    intro:
      "SAP Transportation Management is a unified platform for transportation and logistics needs with end-to-end visibility across all freight operations.",
    icon: "local_shipping",
    overview: {
      heading: "SAP Transportation Management",
      body: "SAP TM integrates with SAP ERP ECC 6.0 or SAP S/4HANA to optimize freight orders across all transportation types—enhancing material flow while lowering costs across planning, execution and freight-cost billing.",
    },
    solutions: {
      heading: "SAP TM modules",
      items: [
        { title: "Strategic Freight Management", body: "Quote-to-contract processes and freight-rate negotiation.", icon: "handshake" },
        { title: "Shipment Management", body: "Simplified logistics with dynamic procedures and pricing rules.", icon: "inventory_2" },
        { title: "Planning", body: "Automated route planning and load optimization.", icon: "map" },
        { title: "Order Management", body: "Real-time order-to-cash via SAP S/4HANA and third-party ERPs.", icon: "receipt_long" },
        { title: "Analytics", body: "Real-time data-driven insights for planning optimization.", icon: "analytics" },
      ],
    },
    whyUs: {
      heading: "Why choose us?",
      items: [
        "Better Planning",
        "Stock Monitoring",
        "Transportation Network Management",
        "Complete Automation",
        "Resource Utilization",
        "Enterprise Services",
        "ERP Logistics Integration",
        "Supply Chain Processing",
      ],
    },
  },
  aerospace: {
    slug: "aerospace",
    href: "/industries/aerospace",
    title: "Aerospace & Defence",
    eyebrow: "Industry",
    intro:
      "Data-related services help aerospace and defence companies reduce time to market for innovations without compromising safety, and simulate innovation scenarios along a complex value chain.",
    icon: "rocket_launch",
    overview: {
      heading: "SAP S/4HANA for aerospace & defence industries",
      body: "The aerospace and defense sector requires SAP solutions to address globalization pressures, shrinking budgets, and emerging technologies like autonomous aircraft and electric propulsion—streamlining operations while sustaining innovation.",
    },
    solutions: {
      heading: "Key challenge areas",
      items: [
        { title: "Disparate Systems", body: "Unify disconnected platforms for accurate, real-time data.", icon: "hub" },
        { title: "Cyber Security Regulations", body: "Integrated software enables compliance and profitable growth.", icon: "security" },
        { title: "Database & Data Management", body: "Real-time analytics and cloud solutions improve efficiency.", icon: "database" },
        { title: "Supply Chain Pressures", body: "Near-real-time data optimizes supplier networks.", icon: "conveyor_belt" },
        { title: "Human Resources", body: "SAP SuccessFactors empowers workforce development.", icon: "groups" },
      ],
    },
    whyUs: {
      heading: "Why choose us?",
      items: [
        "Integrated Planning",
        "Incident & Risk Management",
        "Complete Automation",
        "Resource Optimization",
        "Quality Assurance",
        "Supply Chain Processing",
      ],
    },
  },
  "service-sector": {
    slug: "service-sector",
    href: "/industries/service-sector",
    title: "Service Sector",
    eyebrow: "Industry",
    intro:
      "Clients are more demanding than ever. Professional services firms must align every aspect of operations to deliver consistent quality and high-value services.",
    icon: "concierge",
    overview: {
      heading: "SAP S/4HANA for the service industry",
      body: "Supports service request creation and order management. Customer service reps use an integrated knowledgebase, with escalation to dispatch when needed. The system manages prioritized queues, spare parts ordering, and remote execution tracking by time, materials, agreements and warranties.",
    },
    solutions: {
      heading: "Our SAP service-sector solutions",
      items: [
        { title: "Web Request", icon: "language" },
        { title: "SAP FI Module", icon: "account_balance" },
        { title: "SAP Human Resource Management", icon: "groups" },
        { title: "Social Application (SOA)", icon: "share" },
        { title: "SAP CO Module", icon: "monitoring" },
        { title: "SAP Field Service Management", icon: "engineering" },
      ],
    },
    whyUs: {
      heading: "Why choose us?",
      items: [
        "Better Planning",
        "Stock Monitoring",
        "Complete Automation",
        "Resource Utilization",
        "Efficient Quality Checks",
        "Supply Chain Processing",
      ],
    },
  },
};

export const INDUSTRY_SLUGS = Object.keys(INDUSTRIES);
