import { Container, MaterialIcon } from "@/components/ui/Container";

export type Stat = { value: string; label: string; icon?: string };

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 bg-surface-container-low border-y border-border-subtle">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center p-6 bg-surface-white rounded border border-border-subtle hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] transition-shadow"
            >
              {s.icon && (
                <MaterialIcon
                  name={s.icon}
                  className="text-primary-container text-4xl mb-3"
                  filled
                />
              )}
              <h3 className="font-headline-lg text-headline-lg text-text-primary">
                {s.value}
              </h3>
              <p className="font-label-md text-label-md text-text-muted mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
