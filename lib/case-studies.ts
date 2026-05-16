export type CaseStudyMetric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  id: string;
  label: string;
  image: string;
  company: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  tags: string[];
  abstract: string[];
  coreProblem: string[];
  technicalSolution: string[];
  architectureNotes: string[];
  stack: {
    group: string;
    tools: string[];
  }[];
  metrics: CaseStudyMetric[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "orionops-intelligence-suite",
    label: "AVX-CS-001",
    image: "/portfolio/P1.avif",
    company: "OrionOps",
    title: "OrionOps Intelligence Suite",
    subtitle:
      "An AI operations SaaS that converts fragmented service tickets, sensor events, and technician notes into governed, real-time decision intelligence.",
    category: "Enterprise Operations SaaS",
    year: "2026",
    duration: "14 weeks",
    tags: ["RAG Pipeline", "Vector Search", "SaaS Platform"],
    abstract: [
      "OrionOps needed a command layer for operational teams managing high-volume service incidents across distributed assets. Avrixo designed a multi-tenant intelligence suite that unified ticket history, telemetry, customer context, and procedural documentation into one searchable reasoning interface.",
      "The resulting SaaS product reduced manual triage effort, improved escalation accuracy, and gave leadership a measurable view of recurring failure patterns across regions, asset classes, and support queues.",
    ],
    coreProblem: [
      "The client had valuable operational knowledge, but it was scattered across CRM notes, PDF runbooks, IoT event streams, and historic issue logs. Support managers relied on senior engineers to interpret incidents, which created queue bottlenecks and inconsistent resolution paths.",
      "Existing search returned documents rather than answers. The platform needed to preserve source traceability, avoid hallucinated remediation steps, and support thousands of concurrent queries from regional teams without slowing ticket workflows.",
    ],
    technicalSolution: [
      "Avrixo implemented a retrieval-augmented generation architecture with tenant-aware vector partitions, semantic chunking, document lineage metadata, and strict answer citation rules. Incoming tickets were embedded, matched against prior incidents, and enriched with asset-specific telemetry before being passed into the reasoning layer.",
      "The engineering team added an event-driven ingestion path for new documents and sensor batches, allowing the knowledge base to update without interrupting active support sessions. A queue-backed inference layer handled burst traffic while preserving low-latency responses for critical incidents.",
      "The UI was shaped like a research console: every recommendation surfaced evidence, confidence bands, related incidents, and suggested workflow actions so operators could act quickly without losing governance.",
    ],
    architectureNotes: [
      "Tenant-isolated vector namespaces for secure retrieval boundaries.",
      "Streaming incident enrichment pipeline with retryable workers.",
      "Answer provenance layer mapping recommendations back to source records.",
      "Role-based dashboards for agents, managers, and executive stakeholders.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      },
      {
        group: "AI and Retrieval",
        tools: ["RAG", "Vector Database", "Embeddings", "Prompt Guardrails"],
      },
      {
        group: "Data Platform",
        tools: ["PostgreSQL", "Prisma", "Redis Queues", "Object Storage"],
      },
      {
        group: "Infrastructure",
        tools: ["AWS RDS", "Serverless Workers", "CI/CD", "Observability"],
      },
    ],
    metrics: [
      {
        value: "40%",
        label: "lower median triage latency",
        detail:
          "Incident summaries and recommended next actions reached agents before manual knowledge-base lookup was required.",
      },
      {
        value: "10k/sec",
        label: "event stream capacity",
        detail:
          "The ingestion architecture sustained burst telemetry without blocking support workflows.",
      },
      {
        value: "31%",
        label: "higher first-response accuracy",
        detail:
          "Cited recommendations improved alignment between agent response and historical resolution patterns.",
      },
    ],
  },
  {
    id: "ledgerflow-risk-copilot",
    label: "AVX-CS-002",
    image: "/portfolio/Architect.jpg",
    company: "LedgerFlow",
    title: "LedgerFlow Risk Copilot",
    subtitle:
      "A fintech risk intelligence SaaS that models transaction behavior, flags anomalous account movement, and gives compliance teams explainable review workflows.",
    category: "Fintech Risk SaaS",
    year: "2026",
    duration: "11 weeks",
    tags: ["Predictive Modeling", "Compliance AI", "Data Platform"],
    abstract: [
      "LedgerFlow required a defensible intelligence layer for financial operations teams reviewing high-volume payment activity. Avrixo built a risk copilot that combined behavioral modeling, rules orchestration, and analyst feedback loops inside a single B2B SaaS experience.",
      "The platform translated complex model outputs into operationally useful evidence packets, allowing reviewers to prioritize cases, explain decisions, and continuously improve detection quality without overburdening engineering teams.",
    ],
    coreProblem: [
      "The client depended on rigid rules that generated too many false positives during seasonal transaction spikes. Analysts spent hours validating low-risk activity, while higher-risk cases could be buried inside noisy review queues.",
      "The business also needed explainability. Any AI-assisted alert had to show contributing signals, historic account context, and policy references so compliance leaders could defend decisions during internal or external audits.",
    ],
    technicalSolution: [
      "Avrixo designed a hybrid risk engine that paired deterministic compliance rules with machine learning scores from transaction sequence features. The system normalized payment metadata, account behavior, velocity signals, and counterparty history into a feature store used by the scoring service.",
      "A feedback loop captured analyst outcomes and routed them into retraining datasets, enabling the model to adapt as fraud patterns changed. The frontend exposed risk bands, feature attributions, and policy mappings in an auditable case-review interface.",
      "To support enterprise rollout, the SaaS architecture included workspace isolation, granular permissions, configurable rulesets, and exportable evidence trails for governance teams.",
    ],
    architectureNotes: [
      "Feature pipeline for transaction velocity, merchant patterns, and account drift.",
      "Hybrid scoring that combines model probability with policy rule severity.",
      "Analyst feedback capture for supervised retraining cycles.",
      "Audit-first interface with source records and decision history.",
    ],
    stack: [
      {
        group: "Application",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
      },
      {
        group: "Modeling",
        tools: ["TensorFlow", "Anomaly Detection", "Feature Store", "A/B Validation"],
      },
      {
        group: "Backend",
        tools: ["Supabase", "PostgreSQL", "Prisma", "Edge Functions"],
      },
      {
        group: "Governance",
        tools: ["Role-Based Access", "Audit Logs", "Policy Mapping", "SOC2 Ready"],
      },
    ],
    metrics: [
      {
        value: "52%",
        label: "reduction in false positives",
        detail:
          "Adaptive scoring helped analysts focus on cases with stronger behavioral evidence.",
      },
      {
        value: "3.8x",
        label: "faster case review throughput",
        detail:
          "Evidence packets reduced the time spent collecting source data across tools.",
      },
      {
        value: "24/7",
        label: "continuous risk monitoring",
        detail:
          "Streaming checks and alert queues kept high-risk movement visible outside office hours.",
      },
    ],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((study) => study.id === id);
}
