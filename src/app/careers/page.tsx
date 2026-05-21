import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CAREER_PERKS, RECRUITMENT_PROCESS } from "@/content/site";
import { CareersForm } from "./CareersForm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Data ERP Systems. Build ERP, IT and engineering products that scale across enterprises.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build enterprise systems with us."
        sub="Tell us about yourself and we'll keep you up-to-date on upcoming events and career opportunities that match your interests."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Careers" },
        ]}
      />

      {/* Why join */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>Join our team at Data ERP Systems</SectionEyebrow>
            <SectionHeading>Opportunities across engineering, finance, HR, IT and operations.</SectionHeading>
            <p className="font-body-lg text-body-lg text-text-muted mt-6">
              We focus on ERP systems and application management — and we
              actively look for people who care about customer outcomes more
              than the buzzwords on the resume.
            </p>
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Benefits & Perks</SectionEyebrow>
            <SectionHeading size="xl">Why people stay</SectionHeading>
            <Lead>The day-to-day matters as much as the title or the comp band.</Lead>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAREER_PERKS.map((p) => (
              <div
                key={p.title}
                className="bg-surface-white border border-border-subtle rounded-lg p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <MaterialIcon name={p.icon} className="text-primary-container" filled />
                </div>
                <span className="font-label-md text-label-md text-text-primary">{p.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Recruitment Process</SectionEyebrow>
            <SectionHeading size="xl">Four steps. No tricks.</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECRUITMENT_PROCESS.map((s) => (
              <div
                key={s.step}
                className="relative bg-surface-container-low border border-border-subtle rounded-lg p-8 flex flex-col gap-3"
              >
                <span className="font-headline-xl text-headline-xl text-primary-fixed-dim">
                  {s.step}
                </span>
                <h3 className="font-headline-md text-headline-md text-text-primary">{s.title}</h3>
                <p className="font-body-md text-body-md text-text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply */}
      <section className="py-24 bg-background border-t border-border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionEyebrow>Apply Online</SectionEyebrow>
              <SectionHeading size="xl">Tell us about yourself</SectionHeading>
            </div>
            <CareersForm />
          </div>
        </Container>
      </section>

      <CTASection
        heading="Don't see your role?"
        body="Send us your CV anyway — we keep great profiles on file for when the right role opens up."
        primary={{ label: "Email careers@dataerpsys.com", href: "mailto:careers@dataerpsys.com" }}
        secondary={{ label: "About us", href: "/about-us" }}
      />
    </>
  );
}
