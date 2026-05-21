import Link from "next/link";
import { Container, MaterialIcon, SectionEyebrow, SectionHeading, Lead } from "@/components/ui/Container";
import { StatsRow } from "@/components/sections/StatsRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { HOME_STATS, HOME_TESTIMONIALS } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_right,_var(--color-primary-container),_transparent_45%)]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionEyebrow>Data ERP Systems</SectionEyebrow>
              <h1 className="font-headline-xl text-headline-xl text-text-primary leading-tight">
                Solutions tailor-engineered to{" "}
                <span className="text-primary-container">simplify, automate</span> and streamline your business processes.
              </h1>
              <p className="font-body-lg text-body-lg text-text-muted max-w-xl">
                DataERPSys automation and paperless processes save companies
                millions of dollars per year. Our insight on leveraging
                technology to drive exponential business outcomes is what sets
                us apart.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/our-services"
                  className="font-label-md text-label-md bg-primary-container text-white px-8 py-4 rounded hover:bg-primary transition-colors shadow-sm"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact-us"
                  className="font-label-md text-label-md border border-border-subtle text-text-primary px-8 py-4 rounded hover:bg-surface-container-low transition-colors"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl bg-surface-container-low border border-border-subtle p-8 grid grid-cols-2 gap-4">
                <HeroTile icon="developer_board" label="ERP" />
                <HeroTile icon="cloud" label="Cloud" />
                <HeroTile icon="bug_report" label="QA" />
                <HeroTile icon="hub" label="Integrations" />
                <div className="col-span-2 rounded-lg bg-text-primary text-white p-5 flex items-center justify-between">
                  <div>
                    <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Live ERP</div>
                    <div className="font-headline-md text-headline-md mt-1">Production OK</div>
                  </div>
                  <MaterialIcon name="verified" className="text-success text-4xl" filled />
                </div>
              </div>
              <div className="absolute w-[120%] h-[120%] bg-primary-container/10 rounded-full -z-10 blur-3xl opacity-60" />
            </div>
          </div>
        </Container>
      </section>

      <StatsRow stats={HOME_STATS} />

      {/* Bento Services */}
      <section className="py-24 bg-surface-white">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Featured Services</SectionEyebrow>
            <SectionHeading size="xl">What We Offer</SectionHeading>
            <Lead>
              We accelerate product innovation, modernize aging applications,
              and productize best practices into new software IP.
            </Lead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard
              colSpan="md:col-span-2"
              icon="developer_board"
              title="ERP Solutions"
              body="Robust web & mobile apps delivered with advanced tools — seamless integration and scalability for your enterprise infrastructure."
              href="/it-services/sap"
              variant="default"
              feature
            />
            <BentoCard
              icon="chat"
              title="IT Consulting"
              body="Expert web application development and system architecture design services tailored to your technical requirements."
              href="/services/consulting-services"
              variant="default"
            />
            <BentoCard
              icon="factory"
              title="Manufacturing"
              body="Solutions that keep operational processes humming and help users conduct operations efficiently."
              href="/industries/manufacturing"
              variant="default"
            />
            <BentoCard
              colSpan="md:col-span-2"
              icon="badge"
              title="Staffing Services"
              body="Quality talent and specialized teams for your developmental projects and long-term goals."
              href="/services/staffing-services"
              variant="dark"
              feature
            />
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <SectionHeading>Six pillars of how we deliver value</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-surface-white border border-border-subtle rounded-lg p-8 hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)] transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-5">
                  <MaterialIcon name={p.icon} className="text-primary-container" filled />
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-2">{p.title}</h3>
                <p className="font-body-md text-body-md text-text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership */}
      <section className="py-16 bg-surface-container border-y border-border-subtle">
        <Container className="text-center">
          <span className="font-label-md text-label-md text-text-muted uppercase tracking-wider mb-6 block">
            SAP Partnership & Certifications
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-90">
            {["SAP S/4HANA", "Oracle ERP", "AWS", "Azure", "Google Cloud"].map((b) => (
              <span
                key={b}
                className="font-headline-md text-headline-md text-on-surface-variant"
              >
                {b}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials items={HOME_TESTIMONIALS} />

      <CTASection
        heading="Get in touch with one of the best ERP solutions for your company."
        body="Tell us what's getting in the way of your team's progress. We'll bring the right experts to fix it."
        primary={{ label: "Contact Us Today", href: "/contact-us" }}
        secondary={{ label: "See all services", href: "/our-services" }}
      />
    </>
  );
}

const WHY_PILLARS = [
  { title: "Responsive Design", body: "Layouts that adapt fluidly to every screen resolution your users bring.", icon: "responsive_layout" },
  { title: "Coding Quality", body: "Senior engineers maintain consistent commenting, review and lint standards.", icon: "code" },
  { title: "Great Support", body: "24/7 assistance from a team that has shipped enterprise systems before.", icon: "support_agent" },
  { title: "Software Testing", body: "Performance, mobile, usability, and security testing baked into every release.", icon: "bug_report" },
  { title: "Consulting Services", body: "We help businesses keep pace with today's fast-moving IT landscape.", icon: "psychology" },
  { title: "Quality Engineering", body: "Independent QE and a wide range of software-testing services on demand.", icon: "verified" },
];

function HeroTile({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="rounded-lg bg-surface-white border border-border-subtle p-5 flex flex-col items-start gap-2">
      <MaterialIcon name={icon} className="text-primary-container text-3xl" filled />
      <span className="font-label-md text-label-md text-text-primary">{label}</span>
    </div>
  );
}

function BentoCard({
  icon,
  title,
  body,
  href,
  colSpan = "",
  variant = "default",
  feature = false,
}: {
  icon: string;
  title: string;
  body: string;
  href: string;
  colSpan?: string;
  variant?: "default" | "dark";
  feature?: boolean;
}) {
  const isDark = variant === "dark";
  return (
    <Link
      href={href}
      className={`${colSpan} group rounded-lg p-8 border transition-all duration-300 flex flex-col gap-4 ${
        isDark
          ? "bg-text-primary text-white border-text-primary relative overflow-hidden"
          : "bg-surface-container-low border-border-subtle hover:bg-surface-white hover:shadow-[0_4px_12px_rgba(10,8,59,0.05)]"
      }`}
    >
      {isDark && (
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--color-primary-fixed),_transparent_60%)]" />
      )}
      <div className="relative z-10 flex flex-col gap-3">
        <div
          className={`w-12 h-12 rounded flex items-center justify-center ${
            isDark ? "bg-white/10 backdrop-blur-sm" : "bg-primary/10"
          }`}
        >
          <MaterialIcon
            name={icon}
            className={isDark ? "text-primary-fixed" : "text-primary-container"}
            filled
          />
        </div>
        <h3 className={`font-headline-md text-headline-md ${isDark ? "text-white" : "text-text-primary"}`}>
          {title}
        </h3>
        <p className={`font-body-md text-body-md ${isDark ? "text-primary-fixed-dim" : "text-text-muted"}`}>
          {body}
        </p>
        {feature && (
          <span className={`mt-2 inline-flex items-center gap-1 font-label-md text-label-md ${isDark ? "text-primary-fixed" : "text-primary-container"} group-hover:gap-2 transition-all`}>
            Learn more
            <MaterialIcon name="arrow_forward" className="text-base" />
          </span>
        )}
      </div>
    </Link>
  );
}
