export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const SERVICES_NAV: NavLink[] = [
  {
    label: "IT Services",
    href: "/it-services",
    children: [
      { label: "SAP", href: "/it-services/sap" },
      { label: "Oracle", href: "/it-services/oracle" },
      { label: "Mobile App Development", href: "/it-services/mobile-app-development" },
      { label: "Software Testing & QA", href: "/it-services/software-testing-qa" },
      { label: "Application Development", href: "/services/application-development" },
    ],
  },
  { label: "Application Support", href: "/services/application-support" },
  { label: "Consulting Services", href: "/services/consulting-services" },
  { label: "Offshore Services", href: "/services/offshore" },
  { label: "Staffing Services", href: "/services/staffing-services" },
];

export const INDUSTRIES_NAV: NavLink[] = [
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Health Care", href: "/industries/health-care" },
  { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
  { label: "Transportation", href: "/industries/transportation" },
  { label: "Aerospace", href: "/industries/aerospace" },
  { label: "Service Sector", href: "/industries/service-sector" },
];

export const ABOUT_NAV: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
];

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services", children: SERVICES_NAV },
  { label: "Industries", href: "/industries", children: INDUSTRIES_NAV },
  { label: "Clients", href: "/our-clients" },
  { label: "About Us", href: "/about-us", children: ABOUT_NAV },
  { label: "Contact Us", href: "/contact-us" },
];
