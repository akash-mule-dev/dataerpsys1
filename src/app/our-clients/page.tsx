import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FEATURED_CLIENTS, CLIENT_VALUES, HOME_TESTIMONIALS } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "We take a client-first approach across diverse sectors including business, healthcare, government and education.",
};

export default function OurClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="A client-first approach to everything we do."
        sub="The happy customer, an often untapped marketing asset, can play a powerful role in the success of a business — so we treat every engagement as long-term."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />

      {/* Client philosophy */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>Client philosophy</SectionEyebrow>
            <SectionHeading>We emphasize good fit and collaborative partnerships.</SectionHeading>
            <p className="font-body-lg text-body-lg text-text-muted mt-6">
              We work with diverse organizations — businesses, nonprofits,
              schools, government agencies, and retailers — across multiple
              sectors. The common thread: a willingness to do the work
              alongside us.
            </p>
          </div>
        </Container>
      </section>

      {/* Values we look for */}
      <section className="py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>What we look for in clients</SectionEyebrow>
            <SectionHeading size="xl">Eight qualities that build long partnerships</SectionHeading>
            <Lead>These are the traits that consistently produce the engagements we're proudest of.</Lead>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLIENT_VALUES.map((v) => (
              <div
                key={v.label}
                className="bg-surface-white border border-border-subtle rounded-lg p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <MaterialIcon name={v.icon} className="text-primary-container" filled />
                </div>
                <span className="font-headline-md text-headline-md text-text-primary">{v.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured clients */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-12">
            <SectionEyebrow>Featured clients</SectionEyebrow>
            <SectionHeading>Trusted by teams that ship</SectionHeading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FEATURED_CLIENTS.map((c) => (
              <div
                key={c}
                className="bg-surface-container-low border border-border-subtle rounded-lg p-8 flex items-center justify-center text-text-primary font-headline-md text-headline-md hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] transition-shadow"
              >
                {c}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials items={HOME_TESTIMONIALS} />

      <CTASection
        heading="Get in touch with one of the best ERP solutions for your company."
        body="We'd love to talk about whether we're the right partner for what you're building."
        primary={{ label: "Contact Us Today", href: "/contact-us" }}
      />
    </>
  );
}
