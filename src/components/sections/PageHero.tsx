import Link from "next/link";
import Image from "next/image";
import { Container, MaterialIcon } from "@/components/ui/Container";

export type Breadcrumb = { label: string; href?: string };
export type HeroImage = { url: string; credit: string; alt: string };

export function PageHero({
  eyebrow,
  title,
  sub,
  icon,
  image,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  icon?: string;
  image?: HeroImage;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="relative bg-surface-white pt-16 pb-20 overflow-hidden border-b border-border-subtle">
      <div className="absolute inset-0 z-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_right,_var(--color-primary-container),_transparent_45%)]" />
      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="font-label-sm text-label-sm text-text-muted flex flex-wrap items-center gap-1 mb-4"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                {b.href ? (
                  <Link href={b.href} className="hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-text-primary">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <MaterialIcon name="chevron_right" className="text-base text-outline" />
                )}
              </span>
            ))}
          </nav>
        )}
        <div
          className={
            image
              ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center"
              : "grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start"
          }
        >
          <div className="flex flex-col gap-5 max-w-3xl">
            {eyebrow && (
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                {eyebrow}
              </span>
            )}
            <h1 className="font-headline-xl text-headline-xl text-text-primary">
              {title}
            </h1>
            {sub && (
              <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
                {sub}
              </p>
            )}
            {icon && !image && (
              <div className="hidden lg:flex w-14 h-14 rounded-lg bg-primary/10 items-center justify-center mt-2">
                <MaterialIcon name={icon} className="text-primary-container text-3xl" filled />
              </div>
            )}
          </div>

          {image && (
            <div className="relative rounded-xl overflow-hidden border border-border-subtle shadow-[0_24px_48px_-16px_rgba(10,8,59,0.18)] aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
              {icon && (
                <div className="absolute top-4 left-4 w-11 h-11 rounded-lg bg-surface-white/95 backdrop-blur-sm border border-border-subtle flex items-center justify-center">
                  <MaterialIcon
                    name={icon}
                    className="text-primary-container text-2xl"
                    filled
                  />
                </div>
              )}
              <div className="absolute bottom-2 right-3 font-label-sm text-label-sm text-white/85 drop-shadow">
                Photo: {image.credit} · Unsplash
              </div>
            </div>
          )}

          {!image && icon && (
            <div className="hidden lg:flex w-32 h-32 rounded-xl bg-primary/10 items-center justify-center">
              <MaterialIcon name={icon} className="text-primary-container text-7xl" filled />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
