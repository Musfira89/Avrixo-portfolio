import { notFound } from "next/navigation";
import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { industryRoutes } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryRoutes.map((route) => ({ slug: route.slug }));
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = industryRoutes.find((item) => item.slug === slug);

  if (!route) {
    notFound();
  }

  return <EnterpriseRoutePage route={route} related={industryRoutes} />;
}
