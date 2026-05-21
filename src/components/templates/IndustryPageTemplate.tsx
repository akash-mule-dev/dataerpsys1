import { PageHero } from "@/components/sections/PageHero";
import { Overview } from "@/components/sections/Overview";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CheckList } from "@/components/sections/CheckList";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbsJsonLd, serviceJsonLd } from "@/lib/seo";
import type { IndustryPage } from "@/content/industries";

export function IndustryPageTemplate({ industry }: { industry: IndustryPage }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
            { name: industry.title, url: industry.href },
          ]),
          serviceJsonLd({
            name: `${industry.title} — ERP & IT Solutions`,
            description: industry.intro,
            url: industry.href,
            serviceType: `ERP for ${industry.title}`,
          }),
        ]}
      />
      <PageHero
        eyebrow={industry.eyebrow}
        title={industry.title}
        sub={industry.intro}
        icon={industry.icon}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />
      <Overview
        eyebrow="Industry Overview"
        heading={industry.overview.heading}
        body={industry.overview.body}
      />
      <FeatureGrid
        eyebrow="Solutions"
        heading={industry.solutions.heading}
        items={industry.solutions.items}
        columns={industry.solutions.items.length > 6 ? 4 : 3}
        bg="container"
      />
      <CheckList
        eyebrow="Why Choose Us"
        heading={industry.whyUs.heading}
        items={industry.whyUs.items}
      />
      <CTASection
        heading={`Modernize your ${industry.title.toLowerCase()} stack with DES.`}
        body="From SAP S/4HANA strategy to implementation and managed support — we'll help you ship."
        primary={{ label: "Request a Demo", href: "/contact-us" }}
        secondary={{ label: "Explore all industries", href: "/industries" }}
      />
    </>
  );
}
