import { Container, MaterialIcon, SectionEyebrow, SectionHeading } from "@/components/ui/Container";

export function Overview({
  eyebrow,
  heading,
  body,
  icon,
  bg = "white",
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  icon?: string;
  bg?: "white" | "surface";
}) {
  const bgClass = bg === "white" ? "bg-surface-white" : "bg-background";
  return (
    <section className={`py-24 ${bgClass}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start max-w-5xl">
          {icon && (
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MaterialIcon name={icon} className="text-primary-container text-3xl" filled />
            </div>
          )}
          <div>
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            <SectionHeading>{heading}</SectionHeading>
            <p className="font-body-lg text-body-lg text-text-muted mt-6 max-w-3xl">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
