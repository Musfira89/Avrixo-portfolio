"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Workflow, Cloud } from "lucide-react";

const stack = [
  {
    icon: Brain,
    title: "AI & Agents",
    tools: ["LangGraph", "Gemini", "Groq", "RAG", "Tavily", "Langfuse", "Pydantic"],
  },
  {
    icon: Code2,
    title: "Engineering",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    tools: ["n8n", "Pusher", "Webhooks", "REST APIs", "Zod"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tools: ["AWS", "Docker", "PM2 + Nginx", "CI/CD", "Playwright"],
  },
];

export const TechStack = () => {
  return (
    <section className="relative bg-bg-light py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
              How We Build
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-text-dark leading-[1.08] mb-5">
            A modern stack, chosen to{" "}
            <span className="font-accent text-brand-primary text-[1.15em]">fit the job.</span>
          </h2>

          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            We are not tied to one tool or one way of working. We pick the technology
            that fits your problem, your scale, and your team.
          </p>
        </motion.div>

        {/* Stack rows */}
        <div className="mt-14 flex flex-col gap-4">
          {stack.map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid gap-5 rounded-2xl border border-text-dark/[0.07] bg-white p-6 md:grid-cols-[220px_1fr] md:items-center md:p-7"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-primary/10">
                  <row.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-base font-black text-text-dark">{row.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {row.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-text-dark/[0.08] bg-bg-light px-3.5 py-2 text-xs font-semibold text-text-muted transition-colors hover:text-text-dark hover:border-text-dark/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
