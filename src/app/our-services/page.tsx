import Link from "next/link";
import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: "End-to-end IT services, ERP solutions, consulting, offshore delivery and staffing.",
};

export default function ServicesHubPage() {
  const services = Object.values(SERVICES);
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services that move enterprises forward."
        sub="From SAP and Oracle implementations to consulting, offshore delivery and staffing — one partner for the whole stack."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Service Portfolio</SectionEyebrow>
            <SectionHeading size="xl">Everything we do for our clients</SectionHeading>
            <Lead>
              Choose a capability to dig deeper, or talk to us and we'll help
              you scope the right combination.
            </Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group bg-surface-white border border-border-subtle rounded-lg p-8 hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] hover:border-primary/30 transition-all flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <MaterialIcon name={s.icon} className="text-primary-container" filled />
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-text-muted">
                  {s.intro}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:gap-2 transition-all">
                  Learn more
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        heading="Not sure where to start?"
        body="A 30-minute call with one of our architects will save you weeks of evaluation."
        primary={{ label: "Book a consultation", href: "/contact-us" }}
        secondary={{ label: "See industries we serve", href: "/industries" }}
      />
    </>
  );
}
