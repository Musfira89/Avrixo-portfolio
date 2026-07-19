import { caseStudies } from "@/lib/case-studies";

export type EnterpriseRoute = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  theme: "dark" | "light";
  stat: string;
  statLabel: string;
  highlights: string[];
  sections: {
    title: string;
    body: string;
  }[];
};

export type NavGroup = {
  id: string;
  name: string;
  href: string;
  eyebrow: string;
  description: string;
  items: {
    id: string;
    name: string;
    href: string;
    iconPath: string;
    title: string;
    description: string;
  }[];
};

export const aboutRoutes: EnterpriseRoute[] = [
  {
    slug: "overview",
    href: "/about",
    eyebrow: "Company",
    title: "AI product operators for ambitious digital businesses.",
    summary:
      "Avrixo partners with founders, enterprises, and transformation leaders to turn AI strategy into secure, measurable software systems.",
    theme: "dark",
    stat: "2",
    statLabel: "production SaaS platforms designed and shipped end to end",
    highlights: [
      "Product strategy, system architecture, and implementation under one roof.",
      "Senior delivery standards for SaaS, data platforms, automation, and AI workflows.",
      "Built for buyers who need clarity, velocity, and measurable business outcomes.",
    ],
    sections: [
      {
        title: "Operating model",
        body: "We combine consulting discipline with product engineering execution. Strategy, design, data, AI, and deployment decisions are made together so the final system is commercially useful, technically durable, and ready for adoption.",
      },
      {
        title: "Why Avrixo",
        body: "Our team focuses on the hard middle layer between prototype and production: data quality, architecture, security, usability, and the stakeholder alignment needed to ship enterprise-grade digital products.",
      },
    ],
  },
  {
    slug: "ai-research-lab",
    href: "/about/ai-research-lab",
    eyebrow: "Research",
    title: "Applied AI research translated into production systems.",
    summary:
      "The Avrixo research function validates model choices, retrieval patterns, and automation economics before clients commit to full-scale builds.",
    theme: "light",
    stat: "3x",
    statLabel: "faster path from AI concept to validated architecture",
    highlights: [
      "RAG feasibility studies and data readiness reviews.",
      "Prototype evaluation for accuracy, latency, and workflow fit.",
      "Production recommendations documented for engineering teams and executives.",
    ],
    sections: [
      {
        title: "Research focus",
        body: "We test retrieval design, model behavior, workflow automation, and decision-support interfaces against real client constraints. The output is a practical build plan, not a lab demo with no route to production.",
      },
      {
        title: "Enterprise value",
        body: "AI investments become easier to approve when leaders can see expected impact, data risks, cost drivers, integration dependencies, and adoption requirements before development begins.",
      },
    ],
  },
  {
    slug: "leadership",
    href: "/about/leadership",
    eyebrow: "Leadership",
    title: "Senior technology direction for high-stakes product decisions.",
    summary:
      "Avrixo brings architecture, product, and delivery leadership into one practical advisory layer for teams planning digital transformation.",
    theme: "dark",
    stat: "4",
    statLabel: "core industries supported through AI and software delivery",
    highlights: [
      "Executive-ready technical roadmaps.",
      "Clear tradeoff analysis for build, buy, and integrate decisions.",
      "Delivery governance for distributed product teams.",
    ],
    sections: [
      {
        title: "Decision clarity",
        body: "Leadership support focuses on turning ambiguous technology goals into sequenced initiatives with clear owners, milestones, dependencies, and return-on-investment logic.",
      },
      {
        title: "Technical stewardship",
        body: "We help teams avoid brittle shortcuts by setting architectural standards early, validating feasibility, and keeping delivery aligned with business outcomes.",
      },
    ],
  },
  {
    slug: "careers",
    href: "/careers",
    eyebrow: "Careers",
    title: "Build meaningful AI products with a product-minded engineering team.",
    summary:
      "Avrixo is shaped for builders who care about craft, commercial impact, and the discipline required to move advanced software into the real world.",
    theme: "light",
    stat: "Remote",
    statLabel: "collaboration model for focused global delivery",
    highlights: [
      "Work across AI, SaaS, cloud, data, and product strategy.",
      "High-trust collaboration with clear delivery standards.",
      "Room to shape systems, not just close tickets.",
    ],
    sections: [
      {
        title: "How we work",
        body: "We value ownership, calm communication, and thoughtful technical judgment. The team is intentionally lean, which means every contributor can influence product direction and engineering quality.",
      },
      {
        title: "Who thrives here",
        body: "Avrixo is a strong fit for people who like ambiguity, enjoy learning quickly, and want their work to be visible in the final business outcome.",
      },
    ],
  },
];

export const serviceRoutes: EnterpriseRoute[] = [
  {
    slug: "ai-solutions",
    href: "/services/ai-solutions",
    eyebrow: "AI Solutions",
    title: "AI systems that answer, assist, and act, grounded in your own data.",
    summary:
      "Generative AI, RAG, LLM integrations, and AI agents that give your team trusted answers and automate the busywork, built for production trust, not a chatbot demo.",
    theme: "light",
    stat: "90%",
    statLabel: "target citation coverage for AI answers grounded in your own data",
    highlights: [
      "Document ingestion, chunking, embeddings, and vector retrieval.",
      "AI agents and chatbots with human-in-the-loop approvals for critical decisions.",
      "Guardrails for source citation, answer scope, and escalation.",
      "Evaluation suites for answer quality and hallucination risk.",
    ],
    sections: [
      {
        title: "What we build",
        body: "Internal knowledge copilots, support-agent assist, policy search, and AI agents that classify, summarize, and route work, all built to explain themselves, not just produce output.",
      },
      {
        title: "Governance",
        body: "We architect retrieval boundaries, access controls, audit logging, and confidence scoring so AI output remains useful and defensible inside regulated or high-stakes business contexts.",
      },
    ],
  },
  {
    slug: "custom-software",
    href: "/services/custom-software",
    eyebrow: "Custom Software",
    title: "Web apps, portals, and dashboards built around how your team actually works.",
    summary:
      "We design and engineer custom web applications, internal tools, and client-facing platforms, interfaces that make complex systems feel usable, backed by architecture that holds up in production.",
    theme: "dark",
    stat: "2x",
    statLabel: "faster stakeholder alignment through clickable product prototypes",
    highlights: [
      "UX research, journey mapping, information architecture, and design systems.",
      "Custom web applications, internal tools, portals, and client-facing platforms.",
      "AI interaction patterns for confidence, citations, and human review.",
      "High-fidelity prototypes that accelerate product decisions.",
    ],
    sections: [
      {
        title: "Design principle",
        body: "Software needs more than polish. Users must understand context, confidence, and next actions. We design interfaces that make complex systems legible.",
      },
      {
        title: "Built to last",
        body: "The visual layer is connected to data models, permissions, and workflows so the final product feels coherent at every level, from first click to admin panel.",
      },
    ],
  },
  {
    slug: "intelligent-automation",
    href: "/services/intelligent-automation",
    eyebrow: "Intelligent Automation",
    title: "Automation systems that remove operational drag without losing control.",
    summary:
      "We design AI-assisted workflows and data pipelines that connect disconnected tools, classify requests, route decisions, and execute repeatable business processes end to end.",
    theme: "light",
    stat: "35%",
    statLabel: "typical reduction target for manual workflow handling",
    highlights: [
      "Workflow mapping and automation opportunity scoring.",
      "System integrations, API connections, and data pipelines.",
      "Human-in-the-loop approvals for critical decisions.",
      "Dashboards that track time saved, exceptions, and adoption.",
    ],
    sections: [
      {
        title: "What we build",
        body: "Avrixo creates automation layers for support operations, sales enablement, internal knowledge work, document processing, and executive reporting, every workflow designed around measurable cycle-time reduction.",
      },
      {
        title: "Engineering approach",
        body: "We combine APIs, queues, model calls, ETL pipelines, and observability so automation can be monitored and improved rather than treated like a fragile black box.",
      },
    ],
  },
  {
    slug: "saas-product-engineering",
    href: "/services/saas-product-engineering",
    eyebrow: "SaaS Engineering",
    title: "Multi-tenant SaaS platforms built for scale, adoption, and revenue.",
    summary:
      "From first MVP to full-scale product, Avrixo designs and engineers SaaS platforms with strong information architecture, clean onboarding, secure tenancy, and analytics from day one.",
    theme: "dark",
    stat: "99.9%",
    statLabel: "availability target for production-grade launch planning",
    highlights: [
      "MVP development, full SaaS builds, and product architecture.",
      "Multi-tenant permissions, billing-ready data models, and workspace isolation.",
      "Cloud infrastructure, CI/CD pipelines, and release processes built in.",
      "Performance and analytics foundations for post-launch iteration.",
    ],
    sections: [
      {
        title: "Product depth",
        body: "We move beyond screens by defining entity models, user roles, usage loops, reporting needs, and operational tooling that support the business model behind the product.",
      },
      {
        title: "Delivery",
        body: "Teams receive sprint-based builds, cloud infrastructure with CI/CD from day one, and a clear, observable path from prototype to production launch and beyond.",
      },
    ],
  },
];

export const industryRoutes: EnterpriseRoute[] = [
  {
    slug: "healthcare-ai",
    href: "/industries/healthcare-ai",
    eyebrow: "Healthcare",
    title: "Secure AI workflows for patient operations and clinical support teams.",
    summary:
      "We help healthcare organizations improve intake, coordination, documentation, and decision support with governed AI systems.",
    theme: "light",
    stat: "HIPAA",
    statLabel: "aware architecture planning for sensitive workflows",
    highlights: [
      "Patient intake automation and knowledge assistants.",
      "Operational dashboards for capacity and case movement.",
      "Privacy-first system design and audit trails.",
    ],
    sections: [
      {
        title: "Transformation focus",
        body: "Healthcare teams need software that reduces administrative load while respecting sensitive data boundaries. Avrixo maps workflows carefully before introducing automation.",
      },
      {
        title: "Outcome lens",
        body: "Projects are judged by throughput, response quality, staff adoption, and governance readiness, not by AI novelty alone.",
      },
    ],
  },
  {
    slug: "fintech-risk",
    href: "/industries/fintech-risk",
    eyebrow: "Fintech",
    title: "Risk, compliance, and data products for modern financial teams.",
    summary:
      "Avrixo builds explainable systems for transaction monitoring, customer intelligence, analyst workflows, and executive reporting.",
    theme: "dark",
    stat: "Explainable",
    statLabel: "risk scoring designed to be inspected, defended, and audited",
    highlights: [
      "Explainable risk scoring and review queues.",
      "Audit-ready case management and policy references.",
      "Data pipelines that support monitoring and compliance analytics.",
    ],
    sections: [
      {
        title: "Risk intelligence",
        body: "Financial platforms require AI that can be inspected, defended, and improved. We focus on model evidence, decision logs, and clear analyst workflows.",
      },
      {
        title: "Platform depth",
        body: "The work often connects product UX, data engineering, policy logic, and cloud reliability into one operational system.",
      },
    ],
  },
  {
    slug: "logistics-automation",
    href: "/industries/logistics-automation",
    eyebrow: "Logistics",
    title: "Automation and visibility systems for distributed operations.",
    summary:
      "We support logistics teams with routing intelligence, exception management, asset visibility, and operations copilots.",
    theme: "light",
    stat: "10k/sec",
    statLabel: "stream capacity patterns for event-heavy environments",
    highlights: [
      "Real-time exception detection and triage.",
      "Operational copilots for dispatch and field teams.",
      "Analytics for delays, capacity, utilization, and service quality.",
    ],
    sections: [
      {
        title: "Operational control",
        body: "Logistics workflows produce constant signals. Avrixo helps teams convert those signals into prioritized actions, alerts, and performance insights.",
      },
      {
        title: "System integration",
        body: "We design around existing transportation, warehouse, CRM, and finance systems so new intelligence layers can improve operations without forcing a full platform reset.",
      },
    ],
  },
  {
    slug: "real-estate-intelligence",
    href: "/industries/real-estate-intelligence",
    eyebrow: "Real Estate",
    title: "Data-rich property platforms for investors, operators, and brokers.",
    summary:
      "Avrixo builds software for lead intelligence, portfolio analytics, document automation, and investor-facing reporting.",
    theme: "dark",
    stat: "360",
    statLabel: "degree property and investor intelligence views",
    highlights: [
      "Investor portals and portfolio dashboards.",
      "Document extraction for leases, valuations, and diligence material.",
      "Market intelligence workflows for acquisition teams.",
    ],
    sections: [
      {
        title: "Deal velocity",
        body: "Real estate teams move faster when financial assumptions, documents, communication, and market signals live in connected systems.",
      },
      {
        title: "Experience design",
        body: "We create platforms that communicate complex property data clearly for internal analysts, external investors, and executive stakeholders.",
      },
    ],
  },
];

export const resourceRoutes: EnterpriseRoute[] = [
  {
    slug: "ai-transformation-playbook",
    href: "/resources/ai-transformation-playbook",
    eyebrow: "Playbook",
    title: "A practical roadmap for turning AI interest into business capability.",
    summary:
      "This resource page frames how leaders can evaluate opportunities, data readiness, governance, and implementation sequencing.",
    theme: "dark",
    stat: "6",
    statLabel: "decision checkpoints before scaling AI investment",
    highlights: [
      "Identify workflows with measurable automation value.",
      "Assess data access, quality, and integration constraints.",
      "Sequence prototypes, production pilots, and operating model changes.",
    ],
    sections: [
      {
        title: "Start with the business case, not the model",
        body: "Pick workflows where time, cost, or error rates are measurable today. If you can't baseline the current process, you won't be able to prove the AI version is better. The best first candidates are high-volume, repetitive decisions with clear right answers, not open-ended creative work.",
      },
      {
        title: "Audit data readiness before committing budget",
        body: "Most stalled AI initiatives are data problems in disguise. Before building, confirm who owns the data, how clean and complete it is, whether you can legally use it, and what integration work is needed to reach it. A two-week data audit routinely saves a two-quarter false start.",
      },
      {
        title: "Prototype in weeks, not quarters",
        body: "A narrow-scope prototype with a written evaluation plan, what accuracy or time-saving threshold counts as success, tells you more than months of vendor comparison. Keep it small enough that failing is cheap and informative.",
      },
      {
        title: "Graduate to a production pilot with real users",
        body: "Production is a different discipline: security review, human-in-the-loop controls for low-confidence outputs, monitoring, and rollback paths. Run the pilot inside the real workflow with a small user group, and measure adoption, not just model metrics.",
      },
      {
        title: "Plan the operating model change",
        body: "Someone must own the system after launch: retraining cadence, escalation paths when the model is wrong, prompt and knowledge-base upkeep, and incentives for teams to actually use it. Skipping this step is how pilots quietly die after the launch announcement.",
      },
      {
        title: "Measure, govern, and scale deliberately",
        body: "Expand to the next workflow only after checkpoint metrics hold in production: accuracy, cost per task, adoption, and incident rate. Add model-risk controls and cost monitoring as usage grows, so scaling is a decision backed by evidence rather than momentum.",
      },
    ],
  },
  {
    slug: "technical-due-diligence",
    href: "/resources/technical-due-diligence",
    eyebrow: "Due Diligence",
    title: "Technical diligence for investors evaluating AI and SaaS assets.",
    summary:
      "Avrixo helps investors understand architecture quality, delivery risk, AI feasibility, scalability, and product defensibility.",
    theme: "light",
    stat: "48h",
    statLabel: "rapid diligence framing available for urgent review cycles",
    highlights: [
      "Architecture and codebase risk review.",
      "AI claims validation and data dependency analysis.",
      "Scalability, security, and team-process assessment.",
    ],
    sections: [
      {
        title: "What gets reviewed",
        body: "We look at system architecture, model strategy, data quality, deployment practices, vendor dependencies, roadmap realism, and the engineering effort required after acquisition or investment.",
      },
      {
        title: "Investor output",
        body: "The result is a clear technical memo with risks, confidence levels, remediation priorities, and questions to raise with the target company.",
      },
    ],
  },
  {
    slug: "enterprise-ai-readiness",
    href: "/resources/enterprise-ai-readiness",
    eyebrow: "Assessment",
    title: "AI readiness assessment for enterprise teams planning transformation.",
    summary:
      "A structured evaluation of workflows, data maturity, governance, stakeholder alignment, and implementation risk.",
    theme: "dark",
    stat: "5",
    statLabel: "readiness dimensions scored before implementation",
    highlights: [
      "Workflow value and automation feasibility.",
      "Data accessibility, quality, and security posture.",
      "Stakeholder adoption, governance, and integration complexity.",
    ],
    sections: [
      {
        title: "Assessment model",
        body: "We evaluate whether the business has the operating conditions required for useful AI: clear use cases, accessible data, decision owners, integration pathways, and success metrics.",
      },
      {
        title: "Next steps",
        body: "Teams leave with a prioritized roadmap that separates quick wins from foundational platform work and higher-risk transformation bets.",
      },
    ],
  },
  {
    slug: "insights",
    href: "/resources",
    eyebrow: "Resources",
    title: "Technical insight for leaders building AI-native products.",
    summary:
      "A curated knowledge hub for AI transformation, SaaS architecture, digital product strategy, and enterprise implementation planning.",
    theme: "light",
    stat: "R&D",
    statLabel: "thinking translated into delivery-ready frameworks",
    highlights: [
      "Decision memos for executives and investors.",
      "Architecture notes for AI and SaaS teams.",
      "Transformation frameworks for SMEs and enterprise operators.",
    ],
    sections: [
      {
        title: "What belongs here",
        body: "Resources are designed to help serious buyers understand technical tradeoffs before engaging a build partner.",
      },
      {
        title: "Editorial direction",
        body: "The content writer can later expand these pages into long-form guides, technical essays, and downloadable briefs.",
      },
    ],
  },
];

export const standaloneRoutes: Record<string, EnterpriseRoute> = {
  contact: {
    slug: "contact",
    href: "/contact",
    eyebrow: "Contact",
    title: "Start with a focused conversation about the system you need to build.",
    summary:
      "Share the transformation goal, product idea, or operational bottleneck. Avrixo will help shape the fastest credible path to a production-ready solution.",
    theme: "dark",
    stat: "30m",
    statLabel: "typical strategy call to qualify scope and next steps",
    highlights: [
      "AI and SaaS product discovery.",
      "Technical feasibility and roadmap planning.",
      "Enterprise, SME, and investor engagement paths.",
    ],
    sections: [
      {
        title: "What to expect",
        body: "A first conversation focuses on business context, users, data availability, technical constraints, decision timeline, and the outcome that would make the engagement worthwhile.",
      },
      {
        title: "Best fit",
        body: "Avrixo is strongest when the work requires a combination of product thinking, AI architecture, cloud engineering, and polished user experience.",
      },
    ],
  },
  investors: {
    slug: "investors",
    href: "/investors",
    eyebrow: "Investors",
    title: "Technical partnership for investors backing AI and SaaS companies.",
    summary:
      "Avrixo supports diligence, product acceleration, architecture cleanup, and AI roadmap validation for investor-backed teams.",
    theme: "light",
    stat: "2",
    statLabel: "tracks: diligence before investment and acceleration after funding",
    highlights: [
      "Technical due diligence for AI and SaaS assets.",
      "Product roadmap reviews and architecture remediation plans.",
      "Post-investment delivery support for portfolio companies.",
    ],
    sections: [
      {
        title: "Investment support",
        body: "We help investors understand whether a technology claim is credible, what technical debt exists, and what execution support may be required after capital is deployed.",
      },
      {
        title: "Portfolio support",
        body: "For funded teams, Avrixo can help convert ambitious roadmaps into buildable product increments with reliable technical foundations.",
      },
    ],
  },
  schedule: {
    slug: "schedule",
    href: "/schedule",
    eyebrow: "Schedule",
    title: "Reserve a strategy slot for your next AI or SaaS initiative.",
    summary:
      "Use this page as the scheduling destination for discovery calls, technical scoping, and investor-facing product diligence.",
    theme: "dark",
    stat: "1",
    statLabel: "focused session to clarify opportunity, risk, and scope",
    highlights: [
      "Consultation for enterprise leaders and founders.",
      "Technical discovery for existing products and new platforms.",
      "Clear recommended next step after the call.",
    ],
    sections: [
      {
        title: "Call structure",
        body: "The session covers objectives, stakeholders, target users, data sources, platform constraints, timeline, and the decision process behind the work.",
      },
      {
        title: "Preparation",
        body: "Bring the business problem, current tools, known constraints, and any examples of the experience or outcome you want to create.",
      },
    ],
  },
  privacy: {
    slug: "privacy",
    href: "/privacy",
    eyebrow: "Trust",
    title: "Privacy principles for professional service conversations.",
    summary:
      "Avrixo treats client strategy, technical material, and operational context as confidential business information.",
    theme: "light",
    stat: "NDA",
    statLabel: "friendly engagement model for sensitive discovery",
    highlights: [
      "Confidential handling of discovery material.",
      "Least-access approach for shared systems and documents.",
      "Clear data boundaries before production implementation.",
    ],
    sections: [
      {
        title: "Privacy posture",
        body: "This placeholder page can be expanded by legal counsel. The current intent is to communicate confidentiality, professional handling of shared material, and secure-by-design delivery practices.",
      },
      {
        title: "Client data",
        body: "Production data access should be scoped, documented, and limited to the systems required for implementation and support.",
      },
    ],
  },
  terms: {
    slug: "terms",
    href: "/terms",
    eyebrow: "Terms",
    title: "Clear engagement terms for strategy, design, and engineering delivery.",
    summary:
      "This page is prepared as a professional placeholder for commercial and legal terms before final counsel review.",
    theme: "dark",
    stat: "SOW",
    statLabel: "statement-of-work driven delivery expectations",
    highlights: [
      "Scope, milestones, acceptance criteria, and responsibilities.",
      "Commercial terms finalized before production work.",
      "Change management for new requirements and priorities.",
    ],
    sections: [
      {
        title: "Engagement model",
        body: "Avrixo projects should be governed by clear scope, deliverables, timelines, communication cadence, and acceptance criteria.",
      },
      {
        title: "Placeholder note",
        body: "This content is intentionally professional placeholder copy and should be reviewed by legal counsel before public launch.",
      },
    ],
  },
};

export const navGroups: NavGroup[] = [
  {
    id: "about",
    name: "About us",
    href: "/about",
    eyebrow: "Company",
    description:
      "A senior AI and product engineering partner for teams that need strategy, architecture, and delivery in one motion.",
    items: [
      {
        id: "about-overview",
        name: "Company Overview",
        href: "/about",
        iconPath: "/icons/a1.avif",
        title: "About Avrixo",
        description:
          "Understand how Avrixo combines AI strategy, SaaS engineering, and enterprise delivery discipline.",
      },
      {
        id: "ai-research-lab",
        name: "AI Research Lab",
        href: "/about/ai-research-lab",
        iconPath: "/icons/a2.avif",
        title: "Applied AI Research",
        description:
          "Explore how we validate RAG, automation, and model strategies before production investment.",
      },
      {
        id: "leadership",
        name: "Leadership",
        href: "/about/leadership",
        iconPath: "/icons/a3.avif",
        title: "Technical Leadership",
        description:
          "Executive-ready guidance for product, architecture, and transformation decisions.",
      },
      {
        id: "careers",
        name: "Careers",
        href: "/careers",
        iconPath: "/icons/a4.png",
        title: "Join Avrixo",
        description:
          "Build serious AI and SaaS products with a craft-focused delivery team.",
      },
    ],
  },
  {
    id: "services",
    name: "Services",
    href: "/services",
    eyebrow: "Capabilities",
    description:
      "AI solutions, custom software, intelligent automation, and SaaS product engineering, one team, production-grade delivery.",
    items: serviceRoutes.map((route, index) => ({
      id: route.slug,
      name: route.eyebrow,
      href: route.href,
      iconPath: ["/icons/a1.avif", "/icons/a2.avif", "/icons/a3.avif", "/icons/a4.png"][
        index % 4
      ],
      title: route.title,
      description: route.summary,
    })),
  },
  {
    id: "portfolio",
    name: "Portfolio",
    href: "/portfolio",
    eyebrow: "Proof",
    description:
      "Research-style SaaS case studies with executive summaries, technical architecture, stacks, and outcomes.",
    items: [
      {
        id: "portfolio-index",
        name: "Research Index",
        href: "/portfolio",
        iconPath: "/icons/a1.avif",
        title: "Portfolio Research Index",
        description:
          "Browse Avrixo case studies presented as technical product briefs.",
      },
      {
        id: "case-study-library",
        name: "Case Study Library",
        href: "/case-studies",
        iconPath: "/icons/a2.avif",
        title: "Case Study Library",
        description:
          "Review the complete case-study archive and select a detailed research paper.",
      },
      ...caseStudies.map((study, index) => ({
        id: study.id,
        name: study.title,
        href: `/case-studies/${study.id}`,
        iconPath: index === 0 ? "/icons/a3.avif" : "/icons/a4.png",
        title: study.subtitle,
        description: study.abstract[0],
      })),
    ],
  },
  {
    id: "industries",
    name: "Industries",
    href: "/industries",
    eyebrow: "Markets",
    description:
      "Focused transformation patterns for healthcare, fintech, logistics, real estate, and data-intensive operators.",
    items: industryRoutes.map((route, index) => ({
      id: route.slug,
      name: route.eyebrow,
      href: route.href,
      iconPath: ["/icons/a1.avif", "/icons/a2.avif", "/icons/a3.avif", "/icons/a4.png"][
        index % 4
      ],
      title: route.title,
      description: route.summary,
    })),
  },
  {
    id: "resources",
    name: "Resources",
    href: "/resources",
    eyebrow: "Knowledge",
    description:
      "Playbooks, readiness frameworks, and investor-facing technical diligence resources for serious buyers.",
    items: resourceRoutes.map((route, index) => ({
      id: route.slug,
      name:
        route.slug === "insights"
          ? "Insights Hub"
          : route.eyebrow,
      href: route.href,
      iconPath: ["/icons/a1.avif", "/icons/a2.avif", "/icons/a3.avif", "/icons/a4.png"][
        index % 4
      ],
      title: route.title,
      description: route.summary,
    })),
  },
];

export const routeCollections = {
  about: aboutRoutes,
  services: serviceRoutes,
  industries: industryRoutes,
  resources: resourceRoutes,
};

export const sectionOverviewRoutes: Record<string, EnterpriseRoute> = {
  services: {
    slug: "services",
    href: "/services",
    eyebrow: "Services",
    title: "AI, software, and automation systems for production-minded teams.",
    summary:
      "Avrixo helps companies move from technical ambition to reliable digital systems through AI solutions, custom software, intelligent automation, and SaaS product engineering.",
    theme: "light",
    stat: "4",
    statLabel: "service lines connected into one delivery operating model",
    highlights: [
      "AI solutions, custom software, intelligent automation, and SaaS product engineering.",
      "Architecture and implementation planned together from the start.",
      "Delivery shaped for enterprise buyers, SMEs, and investor-backed teams.",
    ],
    sections: [
      {
        title: "How services connect",
        body: "Most serious digital products need more than one capability. Avrixo links product strategy, interface design, backend engineering, data architecture, and cloud operations so the final system can actually be used, maintained, and scaled.",
      },
      {
        title: "Engagement shape",
        body: "Projects can begin as a focused technical assessment, a prototype sprint, or a full product build. The delivery path is chosen around risk, timeline, and the business outcome that matters most.",
      },
    ],
  },
  industries: {
    slug: "industries",
    href: "/industries",
    eyebrow: "Industries",
    title: "Transformation patterns for data-heavy, workflow-heavy markets.",
    summary:
      "Avrixo adapts AI and product engineering to the operating realities of healthcare, fintech, logistics, real estate, and other complex sectors.",
    theme: "dark",
    stat: "4",
    statLabel: "core industry contexts supported through digital transformation work",
    highlights: [
      "Domain-aware workflows rather than generic AI demos.",
      "Compliance, data sensitivity, and adoption considered early.",
      "Reusable architecture patterns tailored to each market.",
    ],
    sections: [
      {
        title: "Domain-first delivery",
        body: "Industry context changes everything: what data is trusted, who approves decisions, which workflows can be automated, and where risk lives. Avrixo designs around those constraints before writing production code.",
      },
      {
        title: "Cross-industry advantage",
        body: "Patterns from one sector often unlock value in another. We bring proven approaches from SaaS, operations, finance, and data platforms into new environments without flattening their domain requirements.",
      },
    ],
  },
  portfolio: {
    slug: "portfolio",
    href: "/portfolio",
    eyebrow: "Portfolio",
    title: "A research index of SaaS products, AI systems, and measurable outcomes.",
    summary:
      "The Avrixo portfolio is presented as technical case-study research: business context, core problem, system architecture, stack decisions, and quantified results.",
    theme: "dark",
    stat: "2",
    statLabel: "featured SaaS case studies prepared for content expansion",
    highlights: [
      "Executive summaries for decision makers.",
      "Technical solution notes for engineering reviewers.",
      "Metrics and stack matrices for fast evaluation.",
    ],
    sections: [
      {
        title: "Editorial model",
        body: "Each case study is structured like a concise research paper so future writers can expand the narrative without changing the underlying page architecture.",
      },
      {
        title: "Proof standard",
        body: "The portfolio favors business impact, architecture clarity, implementation tradeoffs, and measurable outcomes over decorative screenshots alone.",
      },
    ],
  },
};

export function getRouteBySlug(collection: keyof typeof routeCollections, slug: string) {
  return routeCollections[collection].find((route) => route.slug === slug);
}

export function getTopRoute(collection: keyof typeof routeCollections) {
  return routeCollections[collection][0];
}
