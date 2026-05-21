import Link from "next/link";
import { SERVICES_NAV, INDUSTRIES_NAV, ABOUT_NAV } from "@/lib/nav";

const flatServices = SERVICES_NAV.flatMap((item) =>
  item.children ? [item, ...item.children] : [item]
);

export default function Footer() {
  return (
    <footer className="bg-surface-white border-t border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
          <span className="font-headline-md text-headline-md font-bold text-text-primary">
            Data ERP Systems
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Tailor-engineered ERP, IT and staffing solutions that simplify,
            automate and streamline your business processes.
          </p>
          <div className="flex gap-3 mt-2">
            <SocialIcon label="LinkedIn" icon="link" href="#" />
            <SocialIcon label="Twitter" icon="alternate_email" href="#" />
            <SocialIcon label="Facebook" icon="thumb_up" href="#" />
            <SocialIcon label="Instagram" icon="photo_camera" href="#" />
          </div>
        </div>

        <FooterColumn title="Services">
          {flatServices.slice(0, 7).map((s) => (
            <FooterLink key={s.href} href={s.href}>
              {s.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Industries">
          {INDUSTRIES_NAV.map((i) => (
            <FooterLink key={i.href} href={i.href}>
              {i.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {ABOUT_NAV.map((a) => (
            <FooterLink key={a.href} href={a.href}>
              {a.label}
            </FooterLink>
          ))}
          <FooterLink href="/our-clients">Our Clients</FooterLink>
          <FooterLink href="/contact-us">Contact Us</FooterLink>
        </FooterColumn>
      </div>
      <div className="border-t border-border-subtle">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-label-sm text-label-sm text-text-muted">
            © {new Date().getFullYear()} Data ERP Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-label-md text-label-md font-bold text-text-primary mb-2 uppercase tracking-wider">
        {title}
      </span>
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  label,
  icon,
  href,
}: {
  label: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border-subtle text-on-surface-variant hover:bg-primary-container hover:text-white hover:border-primary-container transition-colors"
    >
      <span className="material-symbols-outlined text-base">{icon}</span>
    </a>
  );
}
