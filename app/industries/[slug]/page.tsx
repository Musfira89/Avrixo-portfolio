import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { industryRoutes } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = industryRoutes.find((item) => item.slug === slug);
  if (!route) return {};
  return buildMetadata({ title: route.title, description: route.summary, path: route.href });
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = industryRoutes.find((item) => item.slug === slug);

  if (!route) {
    notFound();
  }

  return <EnterpriseRoutePage route={route} related={industryRoutes} />;
}
