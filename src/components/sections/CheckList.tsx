import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";

export function CheckList({
  eyebrow,
  heading,
  intro,
  items,
  bg = "surface",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
  bg?: "white" | "surface" | "dark";
}) {
  const bgClass = {
    white: "bg-surface-white text-text-primary",
    surface: "bg-background text-text-primary",
    dark: "bg-text-primary text-white",
  }[bg];
  const muted = bg === "dark" ? "text-primary-fixed-dim" : "text-text-muted";
  const cardBg =
    bg === "dark"
      ? "bg-white/5 border-white/10"
      : "bg-surface-white border-border-subtle";
  return (
    <section className={`py-24 ${bgClass}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="flex flex-col gap-4">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            <SectionHeading>{heading}</SectionHeading>
            {intro && (
              <p className={`font-body-md text-body-md ${muted} mt-2`}>
                {intro}
              </p>
            )}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 rounded-lg p-4 border ${cardBg}`}
              >
                <MaterialIcon
                  name="check_circle"
                  className="text-primary-container flex-shrink-0 mt-0.5"
                  filled
                />
                <span className={`font-body-md text-body-md ${bg === "dark" ? "text-white" : "text-text-primary"}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
