import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, FileText } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudyIndex() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-28 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-primary/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-5">
            Avrixo Research Portfolio
          </p>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.02]">
                SaaS case studies written like technical research papers.
              </h1>
            </div>
            <p className="lg:col-span-4 text-sm leading-7 text-text-primary/65">
              Each study is structured for enterprise buyers: abstract, core problem,
              technical solution, stack matrix, and measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 bg-bg-secondary transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/50"
              >
                <div className="relative min-h-[280px] lg:col-span-4">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/30 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-bg-primary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                    {study.label}
                  </div>
                </div>

                <div className="lg:col-span-8 p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-primary">
                    <span>{study.category}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-primary" />
                    <span>{study.year}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-primary" />
                    <span>{study.duration}</span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        {study.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-text-primary/65">
                        {study.subtitle}
                      </p>
                    </div>
                    <div className="hidden h-14 w-14 flex-none items-center justify-center rounded-full bg-brand-primary text-text-primary transition-transform group-hover:rotate-45 md:flex">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 md:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-bg-primary p-4">
                        <div className="text-2xl font-black text-brand-primary">{metric.value}</div>
                        <p className="mt-1 text-xs leading-5 text-text-primary/65">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-text-primary/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Abstract-first",
                body: "Decision makers can scan the commercial thesis before entering technical depth.",
              },
              {
                icon: Database,
                title: "Architecture visible",
                body: "Each study documents data, AI, backend, frontend, and infrastructure choices.",
              },
              {
                icon: BarChart3,
                title: "Outcome-led",
                body: "Metrics and operational signals are treated as part of the product narrative.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-bg-secondary p-6">
                <item.icon className="h-6 w-6 text-brand-primary" />
                <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-primary/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
