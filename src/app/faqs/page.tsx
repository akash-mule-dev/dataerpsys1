import type { Metadata } from "next";
import { Container, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd, faqJsonLd } from "@/lib/seo";
import { FAQS } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about ERP, SAP HANA, implementation methodology and how we work.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(FAQS),
          breadcrumbsJsonLd([
            { name: "Home", url: "/" },
            { name: "About", url: "/about-us" },
            { name: "FAQs", url: "/faqs" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Ask us anything."
        sub="The most common questions we hear about ERP, SAP HANA, implementation methodology and how we work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "FAQs" },
        ]}
      />
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <SectionEyebrow>Questions, answered</SectionEyebrow>
              <SectionHeading size="xl">Everything you wanted to ask</SectionHeading>
              <Lead>If something isn't here, ask us directly — we'll add it.</Lead>
            </div>
            <div className="flex flex-col gap-3">
              {FAQS.map((f, i) => (
                <details
                  key={f.question}
                  className="group bg-surface-container-low border border-border-subtle rounded-lg open:bg-surface-white open:shadow-[0_4px_12px_rgba(10,8,59,0.05)] transition-all"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                    <h3 className="font-headline-md text-headline-md text-text-primary">
                      {f.question}
                    </h3>
                    <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform flex-shrink-0 mt-1">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="font-body-md text-body-md text-text-muted">
                      {f.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        heading="Still have questions?"
        body="Send them over. We'd rather have a five-minute chat than a five-page proposal."
        primary={{ label: "Contact us", href: "/contact-us" }}
      />
    </>
  );
}
