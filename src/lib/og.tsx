import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOgImage({
  eyebrow,
  title,
  footerRight = "SAP • Oracle • Cloud • Staffing",
}: {
  eyebrow: string;
  title: string;
  footerRight?: string;
}) {
  const truncated = title.length > 110 ? title.slice(0, 107) + "…" : title;
  const titleFontSize =
    truncated.length > 80 ? 54 : truncated.length > 50 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0a083b 0%, #003baa 60%, #1c52d2 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            D
          </div>
          <span
            style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}
          >
            Data ERP Systems
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b5c4ff",
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontSize: titleFontSize,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {truncated}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#cbd5ff",
          }}
        >
          <span>dataerpsys.com</span>
          <span>{footerRight}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
