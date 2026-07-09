import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
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

  const index = caseStudies.findIndex((item) => item.id === study.id);
  const prevStudy = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(index + 1) % caseStudies.length];

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

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-brand-primary/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            href="/case-studies"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-text-primary/70 transition-colors hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary">
                {study.label} · {study.category}
              </p>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04]">
                {study.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-7 text-text-primary/65">
                {study.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-bg-secondary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-bg-secondary p-5">
              <div className="grid grid-cols-3 gap-3 text-center lg:grid-cols-1 lg:text-left">
                {[
                  ["Product", study.company],
                  ["Year", study.year],
                  ["Engagement", study.duration],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-bg-primary px-4 py-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-primary/50">{label}</p>
                    <p className="mt-1.5 text-sm font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cover — 16:9 to match module cover art exactly */}
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={study.image}
              alt={study.title}
              width={2560}
              height={1440}
              className="aspect-video w-full object-cover"
              priority
            />
          </div>

          {/* Impact metrics — right under the cover */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-bg-secondary p-6"
              >
                <div className="text-3xl md:text-4xl font-black text-brand-primary">{metric.value}</div>
                <h3 className="mt-3 text-sm font-black uppercase tracking-wide">{metric.label}</h3>
                <p className="mt-3 text-xs leading-6 text-text-primary/55">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABSTRACT ══ */}
      <section className="bg-bg-light py-20 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                Executive Summary
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                What we built, and why it matters.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              {study.abstract.map((paragraph) => (
                <p key={paragraph} className="text-sm md:text-[15px] leading-7 text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM / SOLUTION ══ */}
      <NumberedSection
        number="01"
        eyebrow="The Core Problem"
        title="The bottleneck beneath the business goal."
        paragraphs={study.coreProblem}
        dark
      />

      <NumberedSection
        number="02"
        eyebrow="The Technical Solution"
        title="Engineered for accuracy, scale, and trust."
        paragraphs={study.technicalSolution}
      />

      {/* ══ ARCHITECTURE NOTES ══ */}
      <section className="bg-bg-primary py-20 text-text-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black leading-none text-white/[0.07] select-none">03</span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
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
                  <p className="mt-4 text-sm leading-7 text-text-primary/65">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="bg-bg-light py-20 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-5xl font-black leading-none text-black/[0.06] select-none">04</span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
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
              <div key={group.group} className="rounded-3xl border border-text-dark/10 bg-white p-6">
                <h3 className="text-lg font-black">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-text-dark/10 bg-bg-light px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted"
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

      {/* ══ PREV / NEXT + CTA ══ */}
      <section className="bg-bg-primary py-16 text-text-primary border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={`/case-studies/${prevStudy.id}`}
              className="group rounded-3xl border border-white/10 bg-bg-secondary p-6 transition-all hover:border-brand-primary/40"
            >
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-primary/50">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous case study
              </p>
              <p className="mt-3 text-lg font-black leading-snug group-hover:text-brand-primary transition-colors">
                {prevStudy.title}
              </p>
            </Link>
            <Link
              href={`/case-studies/${nextStudy.id}`}
              className="group rounded-3xl border border-white/10 bg-bg-secondary p-6 text-right transition-all hover:border-brand-primary/40"
            >
              <p className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-primary/50">
                Next case study <ArrowRight className="h-3.5 w-3.5" />
              </p>
              <p className="mt-3 text-lg font-black leading-snug group-hover:text-brand-primary transition-colors">
                {nextStudy.title}
              </p>
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-primary/25 bg-brand-primary/5 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-black">Need a system built like this?</h2>
              <p className="mt-2 text-sm text-text-primary/60">
                Fixed scope, clear milestones, and a team that ships production systems end to end.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex flex-none items-center gap-2 rounded-xl bg-brand-primary px-7 py-4 text-sm font-black text-white transition-all hover:bg-brand-hover"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function NumberedSection({
  number,
  eyebrow,
  title,
  paragraphs,
  dark = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-bg-primary py-20 text-text-primary" : "bg-bg-light py-20 text-text-dark"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span
              className={`text-5xl font-black leading-none select-none ${
                dark ? "text-white/[0.07]" : "text-black/[0.06]"
              }`}
            >
              {number}
            </span>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">{title}</h2>
          </div>
          <div className="lg:col-span-8 space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={
                  dark
                    ? "text-sm md:text-[15px] leading-7 text-text-primary/65"
                    : "text-sm md:text-[15px] leading-7 text-text-muted"
                }
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
