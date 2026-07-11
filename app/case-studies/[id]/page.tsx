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

  const hasCapabilities = Boolean(study.capabilities && study.capabilities.length > 0);
  const architectureNum = hasCapabilities ? "04" : "03";
  const stackNum = hasCapabilities ? "05" : "04";

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
      <section className="relative overflow-hidden pt-36 pb-14">
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

          <div className="grid lg:grid-cols-12 gap-x-14 gap-y-8 items-start">
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
            </div>

            {/* Meta — plain rows, no cards */}
            <div className="lg:col-span-4 lg:pt-10">
              {[
                ["Product", study.company],
                ["Year", study.year],
                ["Engagement", study.duration],
                ["Focus", study.tags.join("  ·  ")],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-3.5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-primary/45">
                    {label}
                  </span>
                  <span className="text-right text-sm font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cover — 16:9 to match module cover art exactly */}
          <div className="relative mt-14 overflow-hidden rounded-3xl">
            <Image
              src={study.image}
              alt={study.title}
              width={2560}
              height={1440}
              className="aspect-video w-full object-cover"
              priority
            />
          </div>

          {/* Impact strip — divided, not boxed */}
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
            {study.metrics.map((metric, i) => (
              <div key={metric.label} className={i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}>
                <div className="text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
                  {metric.value}
                </div>
                <h3 className="mt-3 text-xs font-black uppercase tracking-[0.18em]">
                  {metric.label}
                </h3>
                <p className="mt-3 text-xs leading-6 text-text-primary/50">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABSTRACT ══ */}
      <section className="bg-bg-light py-20 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-x-14 gap-y-8">
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

      {/* ══ CAPABILITIES — grouped feature list, no boxes ══ */}
      {hasCapabilities && (
        <section className="bg-bg-primary py-20 text-text-primary">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <span className="text-5xl font-black leading-none text-white/[0.07] select-none">03</span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                What's Inside
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                Every capability, grouped by workflow.
              </h2>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {study.capabilities!.map((group) => (
                <div key={group.group}>
                  <h3 className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-3 border-t border-white/10 pt-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-text-primary/65">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ ARCHITECTURE NOTES — dividers, not cards ══ */}
      <section className={`bg-bg-primary py-20 text-text-primary ${hasCapabilities ? "border-t border-white/[0.06]" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-x-14 gap-y-10">
            <div className="lg:col-span-4">
              <span className="text-5xl font-black leading-none text-white/[0.07] select-none">{architectureNum}</span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary">
                Architecture Notes
              </p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
                System decisions that made the product viable.
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-x-12 md:grid-cols-2">
              {study.architectureNotes.map((note) => (
                <div key={note} className="flex gap-4 border-t border-white/10 py-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-primary" />
                  <p className="text-sm leading-7 text-text-primary/65">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECH STACK — table rows, not boxes ══ */}
      <section className="bg-bg-light py-20 text-text-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-5xl font-black leading-none text-black/[0.06] select-none">{stackNum}</span>
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

          <div className="mt-12">
            {study.stack.map((group) => (
              <div
                key={group.group}
                className="grid gap-2 border-t border-text-dark/10 py-6 md:grid-cols-12 md:items-baseline"
              >
                <h3 className="text-sm font-black uppercase tracking-[0.14em] md:col-span-4">
                  {group.group}
                </h3>
                <p className="text-sm leading-7 text-text-muted md:col-span-8">
                  {group.tools.join("  ·  ")}
                </p>
              </div>
            ))}
            <div className="border-t border-text-dark/10" />
          </div>
        </div>
      </section>

      {/* ══ PREV / NEXT — plain links ══ */}
      <section className="bg-bg-primary py-14 text-text-primary border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <Link href={`/case-studies/${prevStudy.id}`} className="group max-w-xs">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-primary/45">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous
              </p>
              <p className="mt-2 text-base font-black leading-snug transition-colors group-hover:text-brand-primary">
                {prevStudy.title}
              </p>
            </Link>
            <Link href={`/case-studies/${nextStudy.id}`} className="group max-w-xs sm:text-right">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-primary/45 sm:justify-end">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </p>
              <p className="mt-2 text-base font-black leading-snug transition-colors group-hover:text-brand-primary">
                {nextStudy.title}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA — full-bleed, typography-led ══ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-bg-primary py-20 text-center text-text-primary">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(227,30,36,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary">
            Start a Conversation
          </p>
          <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">
            Need a system built like this?
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-primary/55">
            Fixed scope, clear milestones, and a team that ships production systems end to end.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl bg-brand-primary px-8 py-4 text-sm font-black text-white transition-all hover:bg-brand-hover hover:shadow-[0_0_40px_rgba(227,30,36,0.3)]"
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
        <div className="grid lg:grid-cols-12 gap-x-14 gap-y-8">
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
