import { PageHero } from "@/components/sections/PageHero";
import { Overview } from "@/components/sections/Overview";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CheckList } from "@/components/sections/CheckList";
import { StatsRow } from "@/components/sections/StatsRow";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd, serviceJsonLd } from "@/lib/seo";
import type { ServicePage } from "@/content/services";

export function ServicePageTemplate({
  service,
  parentLabel = "Services",
  parentHref = "/our-services",
}: {
  service: ServicePage;
  parentLabel?: string;
  parentHref?: string;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Home", url: "/" },
            { name: parentLabel, url: parentHref },
            { name: service.title, url: service.href },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.intro,
            url: service.href,
            serviceType: service.eyebrow,
          }),
        ]}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        sub={service.intro}
        icon={service.icon}
        image={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: parentLabel, href: parentHref },
          { label: service.title },
        ]}
      />
      <Overview
        eyebrow="Overview"
        heading={service.overview.heading}
        body={service.overview.body}
      />
      <FeatureGrid
        eyebrow="What we deliver"
        heading={service.offerings.heading}
        items={service.offerings.items}
        columns={service.offerings.items.length > 6 ? 4 : 3}
        bg="container"
      />
      {service.benefits && (
        <CheckList
          eyebrow="In Practice"
          heading={service.benefits.heading}
          items={service.benefits.items}
        />
      )}
      {service.whyUs && (
        <CheckList
          eyebrow="Why Partner With Us"
          heading={service.whyUs.heading}
          items={service.whyUs.items}
          bg="white"
        />
      )}
      {service.stats && <StatsRow stats={service.stats} />}
      <CTASection
        heading={`Talk to a ${service.title.replace(" Solutions", "")} expert.`}
        body="Tell us about your goals — we'll get back within one business day."
        primary={{ label: service.ctaLabel ?? "Contact Us Today", href: "/contact-us" }}
        secondary={{ label: "Browse all services", href: "/our-services" }}
      />
    </>
  );
}
