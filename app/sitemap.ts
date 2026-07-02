import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { caseStudies } from "@/lib/case-studies";
import {
  aboutRoutes,
  serviceRoutes,
  industryRoutes,
  resourceRoutes,
} from "@/lib/site-data";

// Required for `output: export` (static hosting).
export const dynamic = "force-static";

// Static export friendly: enumerates every static route plus all
// generateStaticParams slugs so search engines can discover the full site.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/industries",
    "/resources",
    "/contact",
    "/schedule",
    "/careers",
    "/investors",
    "/privacy",
    "/terms",
  ];

  const dynamicPaths = [
    ...aboutRoutes.map((r) => r.href),
    ...serviceRoutes.map((r) => r.href),
    ...industryRoutes.map((r) => r.href),
    ...resourceRoutes.map((r) => r.href),
    ...caseStudies.map((c) => `/case-studies/${c.id}`),
  ];

  const all = Array.from(new Set([...staticPaths, ...dynamicPaths]));

  return all.map((path) => ({
    url: `${siteUrl}${path === "/" ? "/" : `${path}/`}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
