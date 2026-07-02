import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";

// Required for `output: export` (static hosting).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
