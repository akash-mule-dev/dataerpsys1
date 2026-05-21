import Link from "next/link";
import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "IT Services",
  description: "End-to-end IT services covering SAP, Oracle, mobile, application development and QA.",
};

const IT_SLUGS = ["sap", "oracle", "mobile-app-development", "software-testing-qa", "application-development"];

const IT_STATS = [
  { value: "98%", label: "Customer Satisfaction", icon: "thumb_up" },
  { value: "50+", label: "Specialists in Team", icon: "groups" },
  { value: "20+", label: "Industry Awards", icon: "emoji_events" },
  { value: "597+", label: "Successful Projects", icon: "verified" },
];

export default function ITServicesHubPage() {
  const items = IT_SLUGS.map((s) => SERVICES[s]).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow="IT Services"
        title="End-to-end digital transformation services."
        sub="We help brands create the change they envision through technology — and become the voice of their digital revolution."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/our-services" },
          { label: "IT Services" },
        ]}
      />
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>IT Services We Provide</SectionEyebrow>
            <SectionHeading size="xl">Solutions tailored to your transformation</SectionHeading>
            <Lead>
              Our IT solutions help brands create the change they visualize
              through the use of technology.
            </Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group bg-surface-container-low border border-border-subtle rounded-lg p-8 hover:bg-surface-white hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] hover:border-primary/30 transition-all flex flex-col gap-4"
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
                  Explore
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <StatsRow stats={IT_STATS} />
      <CTASection
        heading="Free consultation — no commitment."
        body="Tell us your transformation goals and we'll prepare a tailored response within one business day."
        primary={{ label: "Request consultation", href: "/contact-us" }}
        secondary={{ label: "See full service portfolio", href: "/our-services" }}
      />
    </>
  );
}
