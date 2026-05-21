import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
}) {
  return (
    <h2
      className={cn(
        "text-text-primary mt-2",
        size === "xl"
          ? "font-headline-xl text-headline-xl"
          : "font-headline-lg text-headline-lg"
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto mt-4">
      {children}
    </p>
  );
}

export function MaterialIcon({
  name,
  className,
  filled,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}
