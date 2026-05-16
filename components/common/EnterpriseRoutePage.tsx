import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { EnterpriseRoute } from "@/lib/site-data";

type EnterpriseRoutePageProps = {
  route: EnterpriseRoute;
  related?: EnterpriseRoute[];
};

export function EnterpriseRoutePage({ route, related = [] }: EnterpriseRoutePageProps) {
  const isLight = route.theme === "light";
  const shellClass = isLight
    ? "bg-bg-light text-text-dark"
    : "bg-bg-primary text-text-primary";
  const cardClass = isLight
    ? "bg-text-primary border-text-dark/10"
    : "bg-bg-secondary border-white/10";
  const mutedClass = isLight ? "text-text-muted" : "text-gray-400";

  return (
    <div className={shellClass}>
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="absolute left-6 bottom-0 h-px w-2/3 bg-linear-to-r from-brand-primary/70 via-brand-primary/10 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-primary mb-5">
                {route.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.02] max-w-4xl">
                {route.title}
              </h1>
              <p className={`mt-7 text-sm md:text-base leading-relaxed max-w-2xl ${mutedClass}`}>
                {route.summary}
              </p>
            </div>

            <div className={`lg:col-span-4 rounded-3xl border p-6 ${cardClass}`}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-muted mb-4">
                Field Signal
              </p>
              <div className="text-5xl font-black text-brand-primary">{route.stat}</div>
              <p className={`mt-3 text-sm leading-relaxed ${mutedClass}`}>
                {route.statLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className={`rounded-3xl border p-7 sticky top-28 ${cardClass}`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-6">
                  Strategic Priorities
                </p>
                <div className="space-y-5">
                  {route.highlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-primary" />
                      <p className={`text-sm leading-relaxed ${mutedClass}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              {route.sections.map((section, index) => (
                <article key={section.title} className={`rounded-3xl border p-7 ${cardClass}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl font-black text-brand-primary/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-black">{section.title}</h2>
                  </div>
                  <p className={`text-sm leading-7 ${mutedClass}`}>{section.body}</p>
                </article>
              ))}

              {related.length > 0 && (
                <div className={`rounded-3xl border p-7 ${cardClass}`}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-5">
                    Related Routes
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {related
                      .filter((item) => item.href !== route.href)
                      .slice(0, 4)
                      .map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group rounded-2xl border border-current/10 p-4 transition-all hover:border-brand-primary/50"
                        >
                          <span className="flex items-center justify-between gap-3 text-sm font-bold">
                            {item.eyebrow}
                            <ArrowUpRight className="h-4 w-4 text-brand-primary transition-transform group-hover:rotate-45" />
                          </span>
                          <span className={`mt-2 block text-xs leading-5 ${mutedClass}`}>
                            {item.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
