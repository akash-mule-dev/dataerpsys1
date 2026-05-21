import type { Metadata } from "next";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { CONTACT_INFO } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach Data ERP Systems via phone, email or the contact form. We respond within one business day.",
  alternates: { canonical: "/contact-us" },
};

const INFO_ITEMS = [
  { icon: "mail", label: "Email", value: CONTACT_INFO.email, href: CONTACT_INFO.emailHref },
  { icon: "call", label: "Phone", value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref },
  { icon: "schedule", label: "Hours", value: CONTACT_INFO.hours },
  { icon: "location_on", label: "Office", value: CONTACT_INFO.address },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbsJsonLd([
            { name: "Home", url: "/" },
            { name: "Contact Us", url: "/contact-us" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact Now"
        title="Let's connect."
        sub="Tell us about your project. We typically respond within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="py-24 bg-surface-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <SectionEyebrow>Reach us at</SectionEyebrow>
                <SectionHeading>Office details</SectionHeading>
                <p className="font-body-md text-body-md text-text-muted mt-3 max-w-md">
                  Drop us a line through any of the channels below — or use the
                  form to send a detailed message.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INFO_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface-container-low border border-border-subtle rounded-lg p-6 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <MaterialIcon
                        name={item.icon}
                        className="text-primary-container"
                        filled
                      />
                    </div>
                    <span className="font-label-md text-label-md text-text-muted uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body-md text-body-md text-text-primary hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body-md text-body-md text-text-primary">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border-subtle overflow-hidden">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps?q=Moosapet,+Hyderabad,+Telangana,+India&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  className="block"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface-container-low border border-border-subtle rounded-lg p-8">
              <SectionEyebrow>Leave a message</SectionEyebrow>
              <SectionHeading>We're listening.</SectionHeading>
              <p className="font-body-md text-body-md text-text-muted mt-2 mb-6">
                Tell us a little about what you're trying to do and the timeline you're working with.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
