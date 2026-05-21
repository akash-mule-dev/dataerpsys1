import Link from "next/link";
import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { INDUSTRIES } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "ERP, IT and consulting solutions for manufacturing, healthcare, pharma, transportation, aerospace and service sector.",
};

export default function IndustriesHubPage() {
  const industries = Object.values(INDUSTRIES);
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Tailored solutions across six core industries."
        sub="Each industry has its own gravitational pull. We bring the SAP and Oracle expertise that fits the way your sector actually works."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Sector Coverage</SectionEyebrow>
            <SectionHeading size="xl">Pick your industry</SectionHeading>
            <Lead>
              Each industry page is a starting point — we'll bring an
              implementation team that has done it before.
            </Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((i) => (
              <Link
                key={i.slug}
                href={i.href}
                className="group bg-surface-container-low border border-border-subtle rounded-lg p-8 hover:bg-surface-white hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] hover:border-primary/30 transition-all flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <MaterialIcon name={i.icon} className="text-primary-container" filled />
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {i.title}
                </h3>
                <p className="font-body-md text-body-md text-text-muted">
                  {i.intro}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:gap-2 transition-all">
                  See solutions
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        heading="Don't see your industry?"
        body="We work with a broader set of clients than the headline categories. Tell us about your business — chances are we've built for it."
        primary={{ label: "Talk to us", href: "/contact-us" }}
        secondary={{ label: "Browse all services", href: "/our-services" }}
      />
    </>
  );
}
