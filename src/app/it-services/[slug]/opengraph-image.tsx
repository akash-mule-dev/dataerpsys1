import { SERVICES } from "@/content/services";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Data ERP Systems — IT Service";

export function generateStaticParams() {
  return ["sap", "oracle", "mobile-app-development", "software-testing-qa"].map(
    (slug) => ({ slug })
  );
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
    eyebrow: "IT Services",
    title: service?.title ?? "IT Services",
  });
}
