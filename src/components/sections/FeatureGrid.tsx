import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";

export type FeatureItem = {
  title: string;
  body?: string;
  icon?: string;
};

export function FeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  bg = "white",
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  bg?: "white" | "surface" | "container";
}) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  const bgClass = {
    white: "bg-surface-white",
    surface: "bg-background",
    container: "bg-surface-container-low",
  }[bg];
  return (
    <section className={`py-24 ${bgClass}`}>
      <Container>
        {(eyebrow || heading || intro) && (
          <div className="text-center mb-16">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            {heading && <SectionHeading>{heading}</SectionHeading>}
            {intro && <Lead>{intro}</Lead>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${cols} gap-6`}>
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-surface-white rounded-lg p-8 border border-border-subtle hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] transition-all duration-300 flex flex-col gap-4"
            >
              {item.icon && (
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <MaterialIcon
                    name={item.icon}
                    className="text-primary-container"
                    filled
                  />
                </div>
              )}
              <h3 className="font-headline-md text-headline-md text-text-primary">
                {item.title}
              </h3>
              {item.body && (
                <p className="font-body-md text-body-md text-text-muted">
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
