import type { Metadata } from "next";
import Link from "next/link";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { HOME_STATS, HOME_TESTIMONIALS } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Data ERP Systems — tailor-engineered ERP, IT and staffing solutions for global enterprises.",
};

const VALUES = [
  { title: "Customer first", body: "Every roadmap starts with the customer outcome. We measure ourselves the same way.", icon: "favorite" },
  { title: "Engineering rigor", body: "Senior engineers, code reviews, and tests on every release. No shortcuts.", icon: "code" },
  { title: "Long-term thinking", body: "We build systems that outlive their original requirements.", icon: "schedule" },
  { title: "Transparent delivery", body: "Demos every other week. No surprises at the milestone reviews.", icon: "visibility" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Data ERP Systems"
        title="A team that ships enterprise systems for the long run."
        sub="We help global enterprises modernize their ERP, IT and operations — with implementation teams that have done the work before."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Mission */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5 max-w-xl">
              <SectionEyebrow>Our Mission</SectionEyebrow>
              <SectionHeading size="xl">
                Make enterprise software feel as reliable as the infrastructure it runs on.
              </SectionHeading>
              <p className="font-body-lg text-body-lg text-text-muted">
                Data ERP Systems was built on a simple idea: ERP doesn't have
                to be slow, painful, or compromised. We design implementations
                that are tailor-engineered to your business, and we stay with
                you long after go-live.
              </p>
              <div className="flex gap-4 pt-2">
                <Link
                  href="/our-services"
                  className="font-label-md text-label-md bg-primary-container text-white px-6 py-3 rounded hover:bg-primary transition-colors"
                >
                  What we do
                </Link>
                <Link
                  href="/careers"
                  className="font-label-md text-label-md border border-border-subtle text-text-primary px-6 py-3 rounded hover:bg-surface-container-low transition-colors"
                >
                  Join us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-container-low border border-border-subtle rounded-lg p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <MaterialIcon name={v.icon} className="text-primary-container" filled />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">{v.title}</h3>
                  <p className="font-body-md text-body-md text-text-muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <StatsRow stats={HOME_STATS} />

      {/* What sets us apart */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>What sets us apart</SectionEyebrow>
            <SectionHeading size="xl">An end-to-end partner, not a vendor</SectionHeading>
            <Lead>
              We bring SAP and Oracle expertise, application engineering, QA,
              consulting and staffing — under one roof — so you don't stitch
              together five vendors.
            </Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "memory", title: "ERP DNA", body: "14+ years implementing SAP and Oracle for global enterprises." },
              { icon: "engineering", title: "Engineering first", body: "Built by engineers, not by salespeople. The work is what matters." },
              { icon: "public", title: "Global delivery", body: "India-based delivery teams with onshore coverage where needed." },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-border-subtle p-8 bg-surface-container-low"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-5">
                  <MaterialIcon name={b.icon} className="text-primary-container" filled />
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-2">{b.title}</h3>
                <p className="font-body-md text-body-md text-text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials items={HOME_TESTIMONIALS} />

      <CTASection
        heading="Work with a team that has shipped it before."
        body="Tell us about your roadmap. We'll bring the right combination of consulting, engineering and staffing to make it real."
        primary={{ label: "Start the conversation", href: "/contact-us" }}
        secondary={{ label: "See our services", href: "/our-services" }}
      />
    </>
  );
}
