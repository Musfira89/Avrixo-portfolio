import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { aboutRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aboutRoutes
    .filter((route) => route.href.startsWith("/about/"))
    .map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = aboutRoutes.find((item) => item.href === `/about/${slug}`);
  if (!route) return {};
  return buildMetadata({ title: route.title, description: route.summary, path: route.href });
}

export default async function AboutDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = aboutRoutes.find((item) => item.href === `/about/${slug}`);

  if (!route) {
    notFound();
  }

  return <EnterpriseRoutePage route={route} related={aboutRoutes} />;
}
