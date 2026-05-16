import { notFound } from "next/navigation";
import { EnterpriseRoutePage } from "@/components/common/EnterpriseRoutePage";
import { serviceRoutes } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceRoutes.map((route) => ({ slug: route.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = serviceRoutes.find((item) => item.slug === slug);

  if (!route) {
    notFound();
  }

  return <EnterpriseRoutePage route={route} related={serviceRoutes} />;
}
