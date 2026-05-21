import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTASection({
  eyebrow = "Get in Touch",
  heading,
  body,
  primary = { label: "Contact Us Today", href: "/contact-us" },
  secondary,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-24 bg-text-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--color-primary-fixed),_transparent_55%)]" />
      <Container className="relative z-10 text-center max-w-3xl">
        <span className="font-label-md text-label-md text-primary-fixed-dim tracking-widest uppercase">
          {eyebrow}
        </span>
        <h2 className="font-headline-xl text-headline-xl text-white mt-3">
          {heading}
        </h2>
        {body && (
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mt-4">
            {body}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href={primary.href}
            className="font-label-md text-label-md bg-primary-container text-white px-8 py-4 rounded hover:bg-primary transition-colors"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="font-label-md text-label-md border border-white/30 text-white px-8 py-4 rounded hover:bg-white/10 transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
