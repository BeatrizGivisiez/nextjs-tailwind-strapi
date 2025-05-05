"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { heroPages } from "@/lib/navbarConfig";

export default function Breadcrumb() {
  const pathname = usePathname();
  const isLandingPage = heroPages.includes(pathname);

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { label, href };
  });

  if (isLandingPage) return null;

  return (
    <div className="text-sm breadcrumbs bg-[var(--color-primary-content)]">
      <ul className="custom-container text-base">
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.href}>
              <Link
                href={crumb.href}
                className={`${isLast ? "font-semibold" : ""}`}
              >
                {crumb.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
