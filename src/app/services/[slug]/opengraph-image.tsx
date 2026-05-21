import { SERVICES } from "@/content/services";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Data ERP Systems — Services";

export function generateStaticParams() {
  return [
    "application-development",
    "application-support",
    "consulting-services",
    "offshore",
    "staffing-services",
  ].map((slug) => ({ slug }));
}
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES[slug];
  return renderOgImage({
    eyebrow: "Services",
    title: service?.title ?? "Services",
  });
}
