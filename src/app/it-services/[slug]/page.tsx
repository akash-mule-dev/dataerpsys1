import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES } from "@/content/services";

const ALLOWED = new Set([
  "sap",
  "oracle",
  "mobile-app-development",
  "software-testing-qa",
]);

export function generateStaticParams() {
  return Array.from(ALLOWED).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};
  return { title: service.title, description: service.intro };
}

export default async function ITServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!ALLOWED.has(slug)) notFound();
  const service = SERVICES[slug];
  if (!service) notFound();
  return (
    <ServicePageTemplate
      service={service}
      parentLabel="IT Services"
      parentHref="/it-services"
    />
  );
}
