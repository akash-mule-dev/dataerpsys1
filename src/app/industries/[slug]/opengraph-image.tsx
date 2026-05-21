import { INDUSTRIES, INDUSTRY_SLUGS } from "@/content/industries";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Data ERP Systems — Industries";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}
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
