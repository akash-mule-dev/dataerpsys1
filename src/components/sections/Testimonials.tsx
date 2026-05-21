import { Container, MaterialIcon, SectionEyebrow, SectionHeading } from "@/components/ui/Container";

export type Testimonial = { name: string; role: string; quote: string };

export function Testimonials({
  eyebrow = "Client's Testimonial",
  heading = "Real Values, Better Results",
  items,
}: {
  eyebrow?: string;
  heading?: string;
  items: Testimonial[];
}) {
  return (
    <section className="py-24 bg-surface-white">
      <Container>
        <div className="text-center mb-16">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <SectionHeading>{heading}</SectionHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div
              key={t.name}
              className={`bg-surface-white border border-border-subtle rounded-lg p-8 relative ${
                i === 1
                  ? "shadow-[0_4px_12px_rgba(10,8,59,0.05)] md:-translate-y-4"
                  : ""
              }`}
            >
              <MaterialIcon
                name="format_quote"
                className="absolute top-6 right-6 text-surface-container-high text-6xl"
                filled
              />
              <p className="font-body-md text-body-md text-text-muted relative z-10 mb-8 italic">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    i === 1
                      ? "bg-primary text-white"
                      : "bg-surface-container-highest text-primary"
                  }`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-text-primary">
                    {t.name}
                  </h4>
                  <span className="font-label-sm text-label-sm text-text-muted">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
