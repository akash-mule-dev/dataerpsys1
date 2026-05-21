import { INDUSTRIES } from "@/content/industries";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Data ERP Systems — Industries";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  return renderOgImage({
    eyebrow: "Industries",
    title: industry?.title ?? "Industries",
    footerRight: "ERP for your sector",
  });
}
