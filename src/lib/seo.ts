import { CONTACT_INFO } from "@/content/site";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dataerpsys.com"
).replace(/\/$/, "");

export const SITE_NAME = "Data ERP Systems";
export const SITE_TAGLINE = "Tailor Engineered ERP & IT Solutions";
export const SITE_DESCRIPTION =
  "Data ERP Systems builds tailor-engineered ERP, IT consulting, and staffing solutions that simplify, automate and streamline business processes.";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/dataerpsys",
  twitter: "https://twitter.com/dataerpsys",
  facebook: "https://www.facebook.com/dataerpsys",
  instagram: "https://www.instagram.com/dataerpsys",
};

export function absUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

type Crumb = { name: string; url: string };

export function breadcrumbsJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: absUrl("/logo.svg"),
    description: SITE_DESCRIPTION,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 21, III Floor, Shakti Nagar, Moosapet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500018",
      addressCountry: "IN",
    },
    sameAs: [SOCIAL.linkedin, SOCIAL.twitter, SOCIAL.facebook, SOCIAL.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        contactType: "customer service",
        areaServed: ["IN", "US", "EU"],
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: absUrl("/opengraph-image"),
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 21, III Floor, Shakti Nagar, Moosapet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500018",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType ?? args.name,
    url: absUrl(args.url),
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IN", "US", "EU"],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
