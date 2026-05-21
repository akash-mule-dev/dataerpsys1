"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, type NavLink } from "@/lib/nav";

function isActive(pathname: string, href: string, children?: NavLink[]): boolean {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(href + "/")) return true;
  return children?.some((c) => isActive(pathname, c.href, c.children)) ?? false;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header className="bg-surface-white border-b border-border-subtle w-full top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-bold text-text-primary">
            Data ERP Systems
          </span>
        </Link>

        <nav className="hidden lg:flex gap-8 items-center">
          {PRIMARY_NAV.map((item) => {
            const active = isActive(pathname, item.href, item.children);
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                onMouseLeave={() => hasChildren && setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-label-md text-label-md transition-colors duration-200 pb-1 ${
                    active
                      ? "text-primary border-b-2 border-primary font-bold"
                      : "text-on-surface-variant font-medium hover:text-primary-container"
                  }`}
                  aria-haspopup={hasChildren || undefined}
                  aria-expanded={hasChildren ? openMenu === item.label : undefined}
                >
                  {item.label}
                  {hasChildren && (
                    <span className="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  )}
                </Link>
                {hasChildren && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2 min-w-[260px] z-50">
                    <ul className="bg-surface-white border border-border-subtle rounded-lg shadow-[0_8px_24px_rgba(10,8,59,0.1)] py-2">
                      {item.children!.map((child) => {
                        const hasGrand = child.children && child.children.length > 0;
                        return (
                          <li key={child.href} className="relative group/sub">
                            <Link
                              href={child.href}
                              className="flex items-center justify-between gap-3 px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                            >
                              {child.label}
                              {hasGrand && (
                                <span className="material-symbols-outlined text-base">
                                  chevron_right
                                </span>
                              )}
                            </Link>
                            {hasGrand && (
                              <ul className="absolute left-full top-0 hidden group-hover/sub:block min-w-[240px] bg-surface-white border border-border-subtle rounded-lg shadow-[0_8px_24px_rgba(10,8,59,0.1)] py-2 ml-1">
                                {child.children!.map((grand) => (
                                  <li key={grand.href}>
                                    <Link
                                      href={grand.href}
                                      className="block px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                                    >
                                      {grand.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact-us"
            className="font-label-md text-label-md bg-primary-container text-white px-6 py-3 rounded hover:bg-primary transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-surface-white">
          <nav className="px-margin-mobile py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {PRIMARY_NAV.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
            <Link
              href="/contact-us"
              className="mt-4 font-label-md text-label-md bg-primary-container text-white px-6 py-3 rounded text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({
  item,
  pathname,
}: {
  item: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const active = isActive(pathname, item.href, item.children);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={`block px-3 py-3 rounded font-label-md text-label-md ${
          active ? "bg-surface-container-low text-primary" : "text-on-surface-variant"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-3 py-3 rounded font-label-md text-label-md ${
          active ? "bg-surface-container-low text-primary" : "text-on-surface-variant"
        }`}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <span className="material-symbols-outlined text-base">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>
      {open && (
        <div className="pl-3 border-l border-border-subtle ml-3 mt-1">
          <Link
            href={item.href}
            className="block px-3 py-2 font-label-sm text-label-sm text-text-muted hover:text-primary"
          >
            Overview
          </Link>
          {item.children!.map((child) => {
            const hasGrand = child.children && child.children.length > 0;
            if (!hasGrand) {
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary"
                >
                  {child.label}
                </Link>
              );
            }
            return (
              <div key={child.href}>
                <Link
                  href={child.href}
                  className="block px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary"
                >
                  {child.label}
                </Link>
                <div className="pl-4">
                  {child.children!.map((grand) => (
                    <Link
                      key={grand.href}
                      href={grand.href}
                      className="block px-3 py-2 font-label-sm text-label-sm text-text-muted hover:text-primary"
                    >
                      {grand.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
