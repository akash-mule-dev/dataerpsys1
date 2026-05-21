import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/our-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/it-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "yearly" },
    { path: "/our-clients", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
  ];

  const serviceEntries = Object.values(SERVICES).map((s) => ({
    url: `${SITE_URL}${s.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryEntries = Object.values(INDUSTRIES).map((i) => ({
    url: `${SITE_URL}${i.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...serviceEntries,
    ...industryEntries,
  ];
}
