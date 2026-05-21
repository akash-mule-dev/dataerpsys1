import { SERVICES } from "@/content/services";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Data ERP Systems — IT Service";
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
