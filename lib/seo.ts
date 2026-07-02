import type { Metadata } from "next";
import { siteUrl } from "@/lib/company";

const DEFAULT_OG_IMAGE = "/img.jpg";

function canonicalFor(path: string): string {
  if (path === "/" || path === "") return `${siteUrl}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

/**
 * Build per-page Metadata with canonical URL, Open Graph, and Twitter cards.
 * Keeps SEO consistent across every route without repeating boilerplate.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = canonicalFor(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Avrixo",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
