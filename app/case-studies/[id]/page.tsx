import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/company";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = getCaseStudy(id);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.subtitle,
    path: `/case-studies/${study.id}`,
    image: study.image,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const study = getCaseStudy(id);

  if (!study) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    headline: study.title,
    description: study.subtitle,
    url: `${siteUrl}/case-studies/${study.id}/`,
    image: `${siteUrl}${study.image}`,
    creator: { "@type": "Organization", name: "Avrixo", url: siteUrl },
    about: study.category,
    keywords: study.tags.join(", "),
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-primary/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-text-primary/70 transition-colors hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary">
                {study.label} / {study.category}
              </p>
              <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.02]">
                {study.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-7 text-text-primary/65">
                {study.subtitle}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-bg-secondary p-6">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["Product", study.company],
                  ["Year", study.year],
                  ["Build", study.duration],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-bg-primary p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-primary/45">{label}</p>
                    <p className="mt-2 text-sm font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={study.image}
              alt={study.title}
              width={1400}
              height={720}
              className="h-[360px] w-full object-cover md:h-[520px]"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                Abstract / Executive Summary
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                Business impact, condensed.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              {study.abstract.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ResearchSection
        eyebrow="The Core Problem"
        title="The bottleneck beneath the business goal."
        paragraphs={study.coreProblem}
        dark
      />

      <ResearchSection
        eyebrow="The Technical Solution"
        title="Architecture designed for accuracy, scale, and trust."
        paragraphs={study.technicalSolution}
      />

      <section className="bg-bg-primary py-24 text-text-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                Architecture Notes
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                System decisions that made the product viable.
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-4 md:grid-cols-2">
              {study.architectureNotes.map((note) => (
                <div key={note} className="rounded-3xl border border-white/10 bg-bg-secondary p-6">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                  <p className="mt-5 text-sm leading-7 text-text-primary/65">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                Tech Stack Matrix
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                Infrastructure behind the outcome.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-black text-text-dark transition-colors hover:text-brand-primary"
            >
              Discuss a similar build
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {study.stack.map((group) => (
              <div key={group.group} className="rounded-3xl border border-text-dark/10 bg-text-primary p-6">
                <h3 className="text-lg font-black">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-text-dark/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-24 text-text-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
            Metrics and Outcomes
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-bg-secondary p-7">
                <div className="text-5xl font-black text-brand-primary">{metric.value}</div>
                <h3 className="mt-5 text-lg font-black">{metric.label}</h3>
                <p className="mt-4 text-sm leading-7 text-text-primary/60">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchSection({
  eyebrow,
  title,
  paragraphs,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-bg-primary py-24 text-text-primary" : "bg-bg-light py-24 text-text-dark"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">{title}</h2>
          </div>
          <div className="lg:col-span-8 space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={dark ? "text-sm leading-7 text-text-primary/65" : "text-sm leading-7 text-text-muted"}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
