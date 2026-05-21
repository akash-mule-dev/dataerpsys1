import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { INDUSTRIES, INDUSTRY_SLUGS } from "@/content/industries";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) return {};
  return { title: industry.title, description: industry.intro };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
