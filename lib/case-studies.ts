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
  capabilities?: {
    group: string;
    items: string[];
  }[];
  architectureNotes: string[];
  stack: {
    group: string;
    tools: string[];
  }[];
  metrics: CaseStudyMetric[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-sdr-agent",
    label: "AVX-CS-001",
    image: "/portfolio/ai-sdr-agent.png",
    company: "Avrixo Labs",
    title: "Autonomous AI SDR Agent",
    subtitle:
      "A configurable multi-agent system that discovers, enriches, scores, researches, and writes hyper-personalized outreach for every qualified lead — grounded strictly in verified facts, with zero fabricated data.",
    category: "Agentic AI · Portfolio Flagship",
    year: "2026",
    duration: "Two-Phase Build",
    tags: ["Multi-Agent System", "LangGraph", "Zero-Hallucination Outreach"],
    abstract: [
      "Sales teams and agencies lose hours per batch to manual prospecting — searching for leads, opening every website, reading reviews, judging fit, and hand-writing emails — while generic mass outreach gets ignored. Avrixo built an autonomous AI SDR agent that runs the entire top-of-funnel workflow end to end: discover businesses matching an ideal customer profile, enrich and score each one, research genuine personalization angles, and draft outreach grounded strictly in verified facts.",
      "Delivered as a live web app, a public GitHub repository, and a documented case study, the system is built as a configurable template — swap the ICP and the offer, and it retargets any vertical, from salons to law firms to DTC brands. The demo instance targets dental clinics for an AI-receptionist / missed-call-capture offer, chosen because the data — websites, reviews, ratings — is entirely public, making the system free to build, demo, and hand to a client pointed at their own market.",
    ],
    coreProblem: [
      "Manual prospecting is slow and inconsistent: finding qualified leads for a niche takes hours per batch, researching each prospect for genuine personalization is the biggest time sink, and the shortcut most teams take — bad targeting plus generic copy — produces low reply rates and wasted spend. Generic mass email gets ignored, and real personalization does not scale with a human doing it lead by lead.",
      "A basic scraper solves half the problem by dumping a list, but a list alone does not drive replies. The system had to reason about each lead individually — score genuine fit against the ICP, find unique angles instead of generic flattery, and never invent a fact about a business it hadn't actually verified. That last constraint is what separates a demo from a tool a sales team can actually trust to send from.",
    ],
    technicalSolution: [
      "A LangGraph supervisor coordinates four specialist agents through a single lead's journey: a Discovery agent finds N businesses matching the configured ICP via search and directory tools; an Enrichment agent pulls each business's website, contact info, rating, reviews, and services; a Scoring step ranks fit 0–100 with a written reason; and a Research agent digs into recent reviews, service gaps, and news to surface genuine personalization angles before a Writer agent drafts the outreach.",
      "Every output is schema-validated with Pydantic before it reaches a user — thin-data or low-confidence leads are flagged rather than silently passed through, and duplicates are removed before they reach scoring. The Writer agent operates under an explicit anti-hallucination guardrail: it may only reference facts the Research agent actually found, producing a tailored first email plus two follow-ups per lead instead of one generic template blasted at everyone.",
      "The system evaluates itself before a batch is trusted: an LLM-as-judge scores personalization quality and fit-score sensibility on a sample set, and Langfuse traces every agent decision per lead — so a fabricated claim or a bad fit score is traceable back to the exact step that produced it, not a black box.",
      "The whole stack runs on free-tier infrastructure by design — Gemini or Groq for reasoning, Tavily or Serper for search, Streamlit for the UI, hosted on Streamlit Community Cloud — so the same architecture behind the dental-clinic demo can be repointed at any vertical by swapping only the ICP and offer configuration, with results exported to Google Sheets or CSV, or pushed to an n8n-friendly webhook.",
    ],
    capabilities: [
      {
        group: "Lead Discovery & Enrichment",
        items: [
          "ICP and offer defined in simple, swappable configuration",
          "Lead discovery via search / directory tools, matched to the ICP",
          "Per-lead enrichment — website, contact info, rating, reviews, services, socials",
          "Structured, Pydantic-validated output exported to CSV / Google Sheet",
        ],
      },
      {
        group: "Fit Scoring & Research",
        items: [
          "Fit scoring 0–100 with a written, explainable reason per lead",
          "Deep per-lead research agent surfacing personalization angles (recent reviews, service gaps, news)",
          "Dedup and low-confidence / thin-data flagging before a lead reaches outreach",
        ],
      },
      {
        group: "Personalized Outreach",
        items: [
          "Tailored first email plus two follow-ups per lead",
          "Anti-hallucination guardrail — outreach only references facts the research agent actually verified",
          "Human-review-first design — drafts, never auto-sends",
        ],
      },
      {
        group: "Orchestration & Observability",
        items: [
          "LangGraph supervisor coordinating discovery → enrichment → research → writer agents",
          "Langfuse tracing of every agent decision, per lead",
          "LLM-as-judge evaluation of personalization quality and fit-score sensibility",
        ],
      },
      {
        group: "Delivery & Reuse",
        items: [
          "Streamlit input and results UI — enter an ICP, view the scored lead table",
          "Google Sheet / CSV export plus an n8n-friendly webhook",
          "Configurable ICP and offer — repoint the same system at any vertical",
          "Public GitHub repository with a documented case-study README",
        ],
      },
    ],
    architectureNotes: [
      "Public-data only, by design: the system uses only publicly available business data — no scraping behind logins and no personal or private data — respecting robots.txt and rate limits with CAN-SPAM / GDPR-aware anti-spam practices built in from the start.",
      "Drafts, not blasts: outreach is generated for human review before sending; the agent assists a sales rep, it does not mass-blast on its own — a deliberate scope boundary, not a missing feature.",
      "Zero fabricated data as the actual success bar: the system only counts as working if a stranger can open the live URL, enter a niche, and get a usable lead sheet with drafts that reference real, specific, trace-verifiable details about each business.",
      "Deliberately bounded scope: no paid data providers (Apollo / ZoomInfo) — free public sources only, keeping the entire stack reproducible at zero cost; no CRM billing, multi-tenant auth, or payments; phone/voice outreach is treated as a separate flagship, not scope creep on this one.",
    ],
    stack: [
      {
        group: "Reasoning & Search",
        tools: ["Gemini / Groq (free tier)", "Tavily / Serper", "LLM-as-Judge Eval"],
      },
      {
        group: "Agents & Data",
        tools: ["LangGraph (Multi-Agent Supervisor)", "Pydantic v2", "SQLite"],
      },
      {
        group: "Enrichment",
        tools: ["httpx", "BeautifulSoup / trafilatura"],
      },
      {
        group: "Delivery & Ops",
        tools: ["Streamlit", "Langfuse", "Google Sheets API / CSV", "GitHub (Public Repo)"],
      },
    ],
    metrics: [
      {
        value: "5",
        label: "agent pipeline stages",
        detail:
          "Discover, enrich, score, research, and write — one supervisor-coordinated workflow from ICP to a personalized draft.",
      },
      {
        value: "0–100",
        label: "explainable fit scoring",
        detail:
          "Every lead is ranked against the ICP with a written reason, not just dumped into a raw list.",
      },
      {
        value: "Zero",
        label: "fabricated facts, by design",
        detail:
          "Outreach is grounded strictly in verified research and traced per decision — an anti-hallucination guardrail, not a best-effort promise.",
      },
    ],
  },
  {
    id: "structumai-estimating-billing",
    label: "AVX-CS-002",
    image: "/portfolio/structumai-estimating-billing.png",
    company: "StructumAI",
    title: "StructumAI Estimating & Billing",
    subtitle:
      "A complete estimating-to-billing module — from the first bid to the final AIA pay application — with QuickBooks, Plaid, and AI receipt capture, integrated into a multi-tenant construction platform.",
    category: "Construction SaaS · Product We Engineered",
    year: "2026",
    duration: "Multi-phase build",
    tags: ["Construction SaaS", "QuickBooks + Plaid", "Multi-Tenant"],
    abstract: [
      "StructumAI needed one module to carry a construction project end to end: estimate → awarded contract → schedule of values → AIA-style pay applications → change orders → billing ledger, plus the full cost side — budgets, purchase orders, and vendor invoices. Avrixo designed, architected, built, and deployed it as a standalone Next.js application integrated natively into the multi-tenant platform.",
      "The result is a production revenue-and-cost loop where a number entered at bid time stays traceable through every downstream document — accounting-ready through QuickBooks Online, QuickBooks Desktop, and Plaid bank feeds, with AI-assisted receipt capture feeding purchase orders automatically.",
    ],
    coreProblem: [
      "Construction firms run estimating, owner billing, change orders, purchase orders, vendor invoices, and accounting sync across spreadsheets and disconnected tools. Values get re-keyed between documents, retainage is calculated by hand, and a single change order can silently desync the whole billing trail — profitability stays invisible until the project is over.",
      "The platform had to enforce real financial rules — retainage accrual and release, schedule-of-values integrity, AIA pay-application math, and change-order lineage — while staying fast and familiar enough that estimators would actually use it instead of falling back to Excel. And it had to slot into an existing multi-tenant platform — shared login, shared projects, shared database with sibling modules — without colliding with the platform's own finance tables.",
    ],
    technicalSolution: [
      "The estimating surface is an Excel-fast grid with seven line types (standard, allowance, alternate, unit-price, deduct, contingency, internal-only), per-line and rule-based markup, and internal-vs-owner visibility. Estimates carry versioning with lock/approve controls, import from Excel through a preview-then-commit flow with AI special-row detection flagging unusual lines for review, and clone from company-level estimate and line-item templates.",
      "An awarded estimate converts into a contract and a balanced Schedule of Values. From there: AIA-compatible pay applications with retainage, stored materials, and a submit → approve → owner-approve → record-payment flow; owner change orders with full lineage back to the contract and SOV; a cross-contract billing ledger; and PDF + XLSX export that balances exactly to AIA math.",
      "On the cost side — budget baselines from the awarded estimate, commitments and purchase orders, vendor invoices with approval and posting, and reports for profit fade, change-order gap, and billing-vs-cost. An AI receipt pipeline extracts vendor, total, line items, CSI codes, and date from an uploaded receipt and auto-aggregates it into a per-project purchase order.",
      "The module ships as its own Next.js 16 application on a dedicated subdomain, but feels native inside StructumAI: single sign-on via a shared JWT cookie scoped to the platform domain (no second login, logged-out users redirect to the platform login), and a shared multi-tenant PostgreSQL database that reads the platform's real projects and membership — the same projects shown across Plans and Schedule. Where the module's tables would have collided with the platform's own finance tables, they were namespaced so each side stays isolated.",
    ],
    capabilities: [
      {
        group: "Estimating",
        items: [
          "Excel-fast estimate grid — 7 line types with per-line and rule-based markup",
          "Internal-vs-owner visibility on every line",
          "Versioning with lock/approve controls",
          "Excel import — preview-then-commit, with AI special-row detection",
          "Company-level estimate and line-item templates",
        ],
      },
      {
        group: "Contracts, SOV & Owner Billing",
        items: [
          "Convert an awarded estimate into a contract with a balanced Schedule of Values",
          "AIA-compatible pay applications — retainage, stored materials, period billing",
          "Submit / approve / owner-approve / record-payment workflow",
          "Owner change orders with lineage back to the contract and SOV",
          "Cross-contract billing ledger with PDF + XLSX export that balances to AIA math",
        ],
      },
      {
        group: "Cost Side",
        items: [
          "Budget baselines generated from the awarded estimate",
          "Commitments and purchase orders",
          "Vendor invoices with approval and posting",
          "Profit-fade, change-order-gap, and billing-vs-cost reporting",
        ],
      },
      {
        group: "AI-Assisted Receipts",
        items: [
          "Upload a receipt — extraction pulls vendor, total, line items, CSI codes, date",
          "Auto-aggregated into a per-project purchase order",
        ],
      },
      {
        group: "Accounting & Banking",
        items: [
          "QuickBooks Online — push approved POs as payable Bills, sync paid % back",
          "Duplicate-bill guard and full audit trail on every QBO push",
          "QuickBooks Desktop — Web Connector + qbXML, per-customer .QWC provisioning",
          "Plaid — bank-transaction import with weighted transaction-to-receipt matching",
          "Missing-receipt flagging on unmatched bank transactions",
        ],
      },
      {
        group: "Permissions & Audit",
        items: [
          "Granular tenant-scoped RBAC — role templates and project memberships",
          "Per-user permission overrides",
          "Full permission and billing audit log",
        ],
      },
    ],
    architectureNotes: [
      "Shared-database coexistence: introspected the live platform schema, namespaced the colliding finance tables, and migrated cleanly with zero impact to the platform's existing data.",
      "Multi-tenant accounting connectivity: QuickBooks Desktop has no cloud API, so Avrixo built a productized Web Connector/qbXML/SOAP subsystem with per-customer provisioning and encrypted credentials — each customer connects independently.",
      "Production data migration: re-homed an existing dataset (estimates, contracts, SOV, pay-apps, commitments and more) into the shared platform database, re-tenanted and relationship-preserving, idempotently.",
      "AIA document fidelity: pay-application PDFs and XLSX balance exactly (Original + approved COs = Contract-to-Date; Completed − Retainage − Previous = Current Due).",
      "Hardened data layer: resilient PostgreSQL pooling with transient-error retry and environment-aware SSL for managed (RDS) and serverless (Neon) databases.",
      "Connected from the platform UI — a top-nav entry carries project context straight from the StructumAI dashboard into the module.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 16 (App Router, Turbopack)", "React", "TypeScript (strict)", "Tailwind CSS v4"],
      },
      {
        group: "Application & Data",
        tools: ["Next.js API Routes", "PostgreSQL (raw pg)", "Repository + Service Layers", "Multi-Tenant RBAC"],
      },
      {
        group: "Integrations",
        tools: ["QuickBooks Online (OAuth2/REST)", "QuickBooks Desktop (Web Connector/qbXML/SOAP)", "Plaid", "AWS S3"],
      },
      {
        group: "Documents & Ops",
        tools: ["AIA PDF/XLSX Generation", "Shared-JWT SSO", "Audit Logging", "pm2 / Docker, Subdomain Deploy"],
      },
    ],
    metrics: [
      {
        value: "Bid → Bill",
        label: "one connected workflow",
        detail:
          "Estimate, contract, schedule of values, pay applications, change orders, and the owner billing ledger — one workspace, one source of truth.",
      },
      {
        value: "3",
        label: "accounting & banking integrations",
        detail:
          "QuickBooks Online, QuickBooks Desktop (Web Connector/qbXML), and Plaid — productized so every customer connects their own accounts independently.",
      },
      {
        value: "7",
        label: "estimate line types",
        detail:
          "Standard, allowance, alternate, unit-price, deduct, contingency, and internal-only — with per-line markup and owner-visibility control.",
      },
    ],
  },
  {
    id: "structumai-plans-collaboration",
    label: "AVX-CS-003",
    image: "/portfolio/structumai-plans-detail.svg",
    company: "StructumAI",
    title: "StructumAI Plans — Drawing & Field Collaboration Platform",
    subtitle:
      "A PlanGrid-class construction drawing, markup, and field-collaboration module built from the ground up — 26 tables, real-time multi-user collaboration, and a permission engine with 35 discrete access keys.",
    category: "Construction SaaS · Product We Engineered",
    year: "2026",
    duration: "3-Month Build",
    tags: ["PDF Markup Engine", "Real-Time Collaboration", "Multi-Tenant SSO"],
    abstract: [
      "Plans is StructumAI's construction-drawing workspace, built to stand shoulder-to-shoulder with commercial tools like PlanGrid, Autodesk Build, and Fieldwire: upload blueprint sets, mark them up in the field, track punch-list and RFI-style tasks against exact drawing locations, compare drawing revisions, and roll all of it into reports — inside a secure, multi-tenant product that plugs into a larger platform without ever breaking its shared login.",
      "Avrixo designed and built the module end to end — architecture, backend, frontend, database, and deployment — in roughly three months. The result is a production system with 26 database tables, a full role-based permission engine, real-time multi-user collaboration, scheduled report automation, and a hardened authentication contract now shared across the platform's other independently-deployed modules.",
    ],
    coreProblem: [
      "The module had to live inside an existing multi-tenant platform — sharing a single sign-on session issued by a separate API service, with no login screen of its own, and never surfacing a raw server error to a field user mid-shift on a job site. Mixed teams working the same drawing set — GCs, subcontractors, engineers — each needed different visibility into the same sheets, enforced at the permission level, not just hidden in the UI.",
      "It also had to support real construction workflows, not just 'draw on a PDF': scaled measurements, drawing-revision history, cross-sheet linked call-outs, CSI-coded stamp templates that generate tasks in one click, and a formal publish/archive lifecycle so draft markups don't leak to subcontractors before a foreman approves them — all while running reliably on a modest single server processing large, multi-hundred-page PDF sets without exhausting memory.",
    ],
    technicalSolution: [
      "Multi-file PDF upload triggers automatic sheet extraction — every page of a plan set becomes an individually addressable, searchable sheet with a server-rendered thumbnail (pdfjs-dist + sharp / @napi-rs/canvas), full-text searchable via Postgres tsvector/GIN indexes. On top of that sits an 11-tool markup suite — pin, rectangle, circle, cloud, arrow, freehand, highlight, line, X-mark, text, and a custom 'worm' linked pin for cross-sheet call-outs — with per-annotation styling, undo/redo, and stamp placement that instantly generates a linked, pre-configured task.",
      "A per-sheet scale-calibration tool derives a real-world scale factor from a reference line, driving a true-distance measure tool. Tasks are drawing-linked, first-class entities surfaced through a Task Center with rich filtering, saved views, and CSI MasterFormat 2018 stamp templates. Sheets carry full revision history with a side-by-side Compare view, plus a carry-forward workflow — review each open markup from the prior revision and mark it carried, skipped, or flagged with a confidence rating, every decision logged — solving the classic 'did we lose our punch list when the drawing was reissued?' problem.",
      "Every annotation and task carries a publish / unpublish / archive state independent of its workflow status, so field staff can draft privately before a project admin publishes to the wider team. Pusher powers real-time collaboration — live cursors, a presence bar, and instant sync of annotations, tasks, and comments across users on the same sheet — while three report types (Task, Photo, Sheet) export to branded PDF, CSV, and XLSX, backed by a cron-driven Scheduled Reports engine running three production jobs with per-run status tracking.",
      "Platform integration is the hardest constraint solved: the platform sets a shared JWT cookie on its root domain after login, and the module — deployed as a /plans sub-path of the same host specifically to avoid cross-origin cookie issues — verifies that same token server-side with the same secret, trusting { userId, tenantId, email } and scoping every query by tenant. No second login, no separate user table, no cross-origin dance. Avrixo authored the internal Module ↔ Platform Integration Guide used to onboard the platform's other modules onto this same pattern.",
    ],
    capabilities: [
      {
        group: "Drawing & Plan Management",
        items: [
          "Multi-file PDF upload with automatic sheet extraction and server-rendered thumbnails",
          "Plan sets organized into tabs with processing / ready / error status tracking",
          "Bulk sheet curation — multi-select, batch delete, rename, append-to-set",
          "Full-text search across sheets and tasks (Postgres tsvector / GIN)",
        ],
      },
      {
        group: "Markup & Annotation",
        items: [
          "11 tool types, including a custom cross-sheet \"worm\" linked pin",
          "Per-annotation styling, undo/redo history, floating toolbar, style panel",
          "Stamp placement that instantly generates a pre-configured, linked task",
          "Threaded comments with @mentions driving in-app and email notifications",
        ],
      },
      {
        group: "Measurement & Field Tools",
        items: [
          "Per-sheet scale calibration (ft / in / m / cm / mm / yd)",
          "True-distance measure tool driven by that calibration",
        ],
      },
      {
        group: "Task Management",
        items: [
          "Drawing-linked tasks — status, priority, assignee, checklist, full change history",
          "Task Center with rich filtering, saved/shareable views, and bulk actions",
          "CSI MasterFormat 2018 stamp templates with default checklist and assignee",
          "Document attachments via presigned S3, plus a generic Linked Objects layer to RFIs, submittals, and issues",
        ],
      },
      {
        group: "Revisions & Lifecycle",
        items: [
          "Full revision history with a side-by-side Compare view",
          "Carry-forward workflow — carried / skipped / flagged with confidence rating, fully audited",
          "Publish / unpublish / archive state machine gated by permissions",
        ],
      },
      {
        group: "Real-Time & Reporting",
        items: [
          "Pusher-based live cursors, presence bar, and connection-state indicator",
          "3 report types (Task, Photo, Sheet) exporting to branded PDF, CSV, and XLSX",
          "Scheduled Reports — recurring cron delivery with per-run status and retry tracking",
        ],
      },
      {
        group: "Permissions & Notifications",
        items: [
          "35 permission keys across 9 categories, with 6 role templates",
          "Per-user permission overrides and company / trade-group scoping",
          "Full permission and membership audit log",
          "15+ typed notification events with per-user, per-type delivery preferences",
        ],
      },
    ],
    architectureNotes: [
      "Auth failing silently as a 500 instead of a clean 401: centralized every route's error handling through one apiErrorResponse() helper so an expired or missing token returns a proper 401, never a raw crash.",
      "pdfjs-dist worker version mismatch: a hardcoded CDN worker URL silently broke PDF rendering once the installed package moved to a newer version — traced to the version pin and fixed at the source in both the viewer and compare view.",
      "Out-of-memory crashes on large plan-set uploads: switched to sequential page rendering, explicit buffer freeing, lower render DPI, and a capped DB connection pool to keep multi-hundred-page uploads stable on a modest single server.",
      "Schema drift between the handover spec and actual migrations: a production audit found 5 items referenced in code but missing from migrations, reconciled them, and confirmed one phantom table didn't exist anywhere before dropping it from the spec.",
      "Tenant-context leak from a module-scoped dev shortcut: an early auth shortcut cached a dev identity at module load time, leaking one tenant's context into another's request under real traffic — replaced with a per-request getUserContext(req) call.",
      "basePath-aware API client: every client-side call routes through a shared apiFetch wrapper that prepends the module's base path and always sends credentials, since a raw fetch/axios call would silently 404 or drop the auth cookie once deployed under /plans.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 16 (App Router)", "React 19", "Tailwind CSS 4", "Zustand"],
      },
      {
        group: "PDF & Media Pipeline",
        tools: ["pdfjs-dist / react-pdf", "pdf-lib", "sharp / @napi-rs/canvas", "jsPDF + autotable"],
      },
      {
        group: "Data & Real-Time",
        tools: ["PostgreSQL (26 tables)", "Pusher", "AWS S3 (presigned URLs)", "Zod Validation"],
      },
      {
        group: "Quality & Ops",
        tools: ["Playwright E2E", "JWT (HS256) Shared SSO", "PM2 + Nginx", "Ubuntu / AWS EC2"],
      },
    ],
    metrics: [
      {
        value: "26",
        label: "database tables",
        detail:
          "A production data model spanning plan sets, sheets, annotations, tasks, permissions, notifications, and scheduled reports.",
      },
      {
        value: "35",
        label: "permission keys",
        detail:
          "Across 9 categories with 6 role templates and per-user overrides — enforced centrally at the API layer, not just the UI.",
      },
      {
        value: "48+",
        label: "commits, solo build",
        detail:
          "Architecture, backend, frontend, database, and deployment — delivered end to end in roughly three months.",
      },
    ],
  },
  {
    id: "structumai-scheduling",
    label: "AVX-CS-004",
    image: "/portfolio/structumai-scheduling.png",
    company: "StructumAI",
    title: "StructumAI Schedule — Web-Native Construction Scheduling",
    subtitle:
      "A browser-based scheduling module in the spirit of MS Project and Primavera P6 — interactive Gantt, a real critical-path engine, dependencies, calendars, and baselines — integrated into the platform with SSO and tenant isolation.",
    category: "Construction SaaS · Product We Engineered",
    year: "2026",
    duration: "Two-phase build",
    tags: ["Gantt + CPM", "Scheduling Engine", "Platform Integration"],
    abstract: [
      "Construction planners live in MS Project and Primavera P6 — powerful tools that are desktop-bound, expensive, and disconnected from the project's drawings, estimates, and documents. StructumAI needed scheduling as a first-class module of its construction-intelligence platform: as capable as the desktop tools, but web-native, multi-user, and behind the same login.",
      "Avrixo built it in two phases — first as a self-contained scheduling product with a real critical-path engine, then integrated into the StructumAI platform: same sign-on, same projects, same database, correct tenant isolation. It's live on staging, reachable from the platform's top navigation, with sample data loaded for client UAT.",
    ],
    coreProblem: [
      "Desktop schedulers silo the schedule on one person's machine. Collaboration means emailing files and reconciling versions, licensing is expensive for occasional users, and the schedule never connects to the rest of the project's data.",
      "Matching desktop-class planning power on the web is an engineering problem: a real CPM engine with forward/backward passes and float, four dependency types with lag, working calendars that drive every computed date, baselines, and an interface fast enough that planners don't miss the desktop — all multi-tenant and permission-safe inside a shared platform database.",
    ],
    technicalSolution: [
      "The planning surface pairs an MS-Project-style spreadsheet grid with a synchronized interactive Gantt — drag to move or resize bars, draw dependency links, zoom from day to quarter. The task model covers durations, milestones, WBS roll-ups, constraints, deadlines, and construction-aware fields like trade, zone, work package, and permit flags.",
      "The scheduling engine is implemented in TypeScript: Critical Path Method with forward and backward passes, total and free float, driving-relationship detection, and working calendars (workweeks, holidays, exceptions, hours-per-day) that drive every calculated date. Baselines capture snapshots for planned-vs-actual comparison, and a guided wizard imports CSV, Excel, and JSON through an async, progress-tracked job.",
      "The workspace loads in a single round-trip: one bootstrap endpoint primes schedule, tasks, dependencies, and calendars, hydrating Zustand and React Query together so the grid and Gantt render immediately. Mutations are optimistic with controlled server reconciliation. For platform integration, all scheduling tables live in a dedicated Postgres schema on the shared multi-tenant database, projects come from the platform, and the shared-JWT cookie provides single sign-on — the module never touches the platform's auth model.",
    ],
    capabilities: [
      {
        group: "Planning Surface",
        items: [
          "Dual view — synchronized spreadsheet grid and interactive Gantt",
          "Drag to move/resize bars, draw dependency links, zoom day → quarter",
          "Durations, milestones, WBS roll-ups, constraints (ASAP, SNET, FNET, MSO, MFO)",
          "Construction-aware fields — trade, zone, work package, permit/inspection flags",
        ],
      },
      {
        group: "Scheduling Engine",
        items: [
          "4 dependency types (FS, SS, FF, SF) with lag and driving-relationship detection",
          "Critical Path Method — forward/backward pass, total & free float",
          "Working calendars — workweeks, holidays, exceptions, hours-per-day",
          "Configurable critical threshold and automatic critical-path highlighting",
        ],
      },
      {
        group: "Productivity & Data",
        items: [
          "Baselines — snapshot and compare planned vs. current",
          "Guided import (CSV, Excel, JSON) with field-mapping wizard, async progress-tracked job",
          "Export to Excel, CSV, and a branded PDF schedule report",
          "Reusable schedule templates, Ctrl-K command palette, undo/redo, saved views",
        ],
      },
    ],
    architectureNotes: [
      "Critical-path engine in TypeScript: forward/backward pass, total & free float, calendar resolution, and a configurable critical threshold.",
      "Single-round-trip bootstrap endpoint that hydrates the store and query cache together — grid and Gantt render immediately.",
      "Dedicated `schedule` Postgres schema on the shared platform database, environment-driven, avoiding table collisions with sibling modules.",
      "Versioned, persisted client cache that always revalidates on mount and reconciles 404s to server truth — instant first paint without phantom records.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Zustand"],
      },
      {
        group: "Scheduling Engine",
        tools: ["Custom CPM Engine", "4 Dependency Types", "Working Calendars", "Baselines"],
      },
      {
        group: "Data & Platform",
        tools: ["PostgreSQL (raw SQL)", "TanStack React Query", "Shared-JWT SSO", "AWS S3"],
      },
      {
        group: "Quality & Ops",
        tools: ["Playwright E2E", "PM2 + nginx", "Async Import Jobs", "PDF / Excel Export"],
      },
    ],
    metrics: [
      {
        value: "CPM",
        label: "real critical-path engine",
        detail:
          "Forward and backward passes, total and free float, and calendar-aware dates — the math planners trust desktop tools for, running in the browser.",
      },
      {
        value: "4",
        label: "dependency link types",
        detail:
          "Finish-Start, Start-Start, Finish-Finish, and Start-Finish with lag, plus automatic driving-relationship detection and critical-path highlighting.",
      },
      {
        value: "1",
        label: "round-trip to load a schedule",
        detail:
          "A single bootstrap endpoint primes schedule, tasks, dependencies, and calendars, so the grid and Gantt render immediately.",
      },
    ],
  },
  {
    id: "lexium-educational-assistant",
    label: "AVX-CS-005",
    image: "/portfolio/lexium.jpg",
    company: "Lexium AI",
    title: "Lexium AI — Intelligent Educational Assistant",
    subtitle:
      "A RAG-powered study assistant that turns textbooks, lecture notes, and course material into an interactive tutor students can question in plain language.",
    category: "EdTech · Generative AI",
    year: "2026",
    duration: "Full product build",
    tags: ["RAG", "EdTech", "Conversational AI"],
    abstract: [
      "Avrixo designed and built Lexium AI, an educational assistant that converts dense course material into a conversational tutor. Students ask natural-language questions and receive accurate, context-aware answers grounded in their own textbooks and notes — instead of searching through PDFs or waiting on faculty.",
      "The product was piloted with 2,000+ students at FAST NUCES, where it supported self-paced learning and reduced repetitive question load on teaching staff.",
    ],
    coreProblem: [
      "Course material lives in textbooks, slide decks, and lecture notes that students can't query directly. Faculty field the same foundational questions over and over, and learners stall whenever help isn't available in the moment.",
      "An answer engine for education can't simply generate plausible text — it has to stay grounded in the actual source material so students trust it and don't learn the wrong thing.",
    ],
    technicalSolution: [
      "Avrixo built a retrieval-augmented generation pipeline that ingests course materials, embeds them, and grounds every answer in the retrieved source context so responses stay faithful to the curriculum rather than the model's open-ended memory.",
      "The experience is a React front end backed by a Python FastAPI service that handles ingestion, retrieval, and conversational responses, packaged as a tool students can use independently at their own pace.",
    ],
    architectureNotes: [
      "Retrieval-augmented answers grounded in the student's own course material.",
      "Document ingestion and embedding pipeline over textbooks and notes.",
      "React front end with a Python / FastAPI retrieval and chat service.",
      "Piloted at scale with 2,000+ FAST NUCES students.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["React", "Conversational UI"],
      },
      {
        group: "AI & Retrieval",
        tools: ["Retrieval Augmented Generation", "Embeddings", "Python"],
      },
      {
        group: "Application & API",
        tools: ["FastAPI", "Document Ingestion"],
      },
    ],
    metrics: [
      {
        value: "2,000+",
        label: "students in pilot",
        detail:
          "Piloted with over 2,000 students at FAST NUCES, supporting self-paced study and reducing repetitive faculty workload.",
      },
      {
        value: "RAG",
        label: "grounded answers",
        detail:
          "Every response is retrieval-grounded in the student's own course material, not open-ended model memory.",
      },
      {
        value: "Self-paced",
        label: "personalized learning",
        detail:
          "Students ask questions in natural language and learn at their own pace, any time of day.",
      },
    ],
  },
  {
    id: "paravitae-emr-telehealth",
    label: "AVX-CS-006",
    image: "/portfolio/emr-telehealth.jpg",
    company: "ParaVitae",
    title: "ParaVitae — AI EMR & Telehealth Platform",
    subtitle:
      "A unified healthcare platform that brings telehealth, in-person care, patient records, and hospital operations into a single secure system.",
    category: "Healthcare · SaaS Platform",
    year: "2026",
    duration: "Multi-phase build",
    tags: ["Healthcare", "Telehealth", "Operations"],
    abstract: [
      "Avrixo engineered a unified EMR and telehealth platform that connects virtual visits, in-person care, patient records, and hospital operations — including transport and logistics — in one place, with AI-driven automation streamlining the workflows in between.",
      "The platform is built to scale from individual providers to clinics and full hospitals, with secure data handling and improved patient outcomes as the organizing goal.",
    ],
    coreProblem: [
      "Healthcare delivery is fragmented across scheduling tools, telehealth apps, record systems, and operational logistics that don't talk to each other. Staff re-enter the same information, and leadership has no single view of capacity or case movement.",
      "Bringing these together demands a system that handles sensitive data carefully while staying usable for providers, schedulers, and administrators with very different needs.",
    ],
    technicalSolution: [
      "Avrixo delivered web and mobile applications over a shared platform, with a scheduling and assisting chatbot to streamline coordination, role-based access for different provider levels, and operational dashboards for tasks, turnaround, and equipment status.",
      "Telehealth, patient records, and in-person care flow through one system, with hospital logistics such as transport connected into the same operational picture so coordination stops living in spreadsheets and phone calls.",
    ],
    architectureNotes: [
      "Telehealth, records, and in-person care unified in one platform.",
      "Web and mobile applications over a shared data layer.",
      "Scheduling and assisting chatbot for coordination.",
      "Operational dashboards across capacity, tasks, and equipment.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Web Application", "Mobile App", "Operational Dashboards"],
      },
      {
        group: "Automation & AI",
        tools: ["Scheduling Chatbot", "Workflow Automation"],
      },
      {
        group: "Platform",
        tools: ["Role-Based Access", "Secure Patient Data"],
      },
    ],
    metrics: [
      {
        value: "Unified",
        label: "telehealth + in-person",
        detail:
          "Virtual visits, patient records, and in-person care managed inside one secure system rather than disconnected tools.",
      },
      {
        value: "Web + Mobile",
        label: "across provider levels",
        detail:
          "Built to scale from individual providers to clinics and full hospitals, on both web and mobile.",
      },
      {
        value: "Ops",
        label: "dashboards & logistics",
        detail:
          "Operational dashboards connect scheduling, hospital logistics, and equipment status in one view.",
      },
    ],
  },
  {
    id: "ai-fraud-detection-finance",
    label: "AVX-CS-007",
    image: "/portfolio/fraud-detection.jpeg",
    company: "PennyPilot",
    title: "AI-Based Fraud Detection System for Finance",
    subtitle:
      "A secure fraud detection system with real-time transaction monitoring, behavioral analysis, and risk scoring, surfaced through mobile dashboards.",
    category: "Fintech · Applied Machine Learning",
    year: "2026",
    duration: "End-to-end build",
    tags: ["Fintech", "Machine Learning", "Risk Scoring"],
    abstract: [
      "Avrixo designed and deployed a fraud detection system for a finance product, combining real-time transaction monitoring with behavioral analysis and machine-learning risk scoring to flag suspicious activity as it happens.",
      "Risk signals are surfaced through mobile-integrated dashboards so the team can see balances, spending patterns, and flagged activity in one place.",
    ],
    coreProblem: [
      "Fraud in financial products is fast and adaptive. Static rules miss new patterns, and reviewing transactions after the fact means the loss has already happened.",
      "The system had to score transactions in real time and explain risk in a way an operations team could act on, not just produce an opaque flag.",
    ],
    technicalSolution: [
      "Avrixo built the detection pipeline in Python with scikit-learn models for behavioral analysis and risk scoring, deployed on AWS for real-time processing of transaction streams.",
      "Risk output feeds mobile-integrated dashboards that present balances, spending, and flagged activity so analysts and users can respond quickly to potential fraud.",
    ],
    architectureNotes: [
      "Real-time transaction monitoring and scoring.",
      "Behavioral analysis with scikit-learn models.",
      "AWS deployment for stream processing.",
      "Mobile-integrated risk dashboards.",
    ],
    stack: [
      {
        group: "AI & Modeling",
        tools: ["Python", "scikit-learn", "Behavioral Analysis"],
      },
      {
        group: "Infrastructure",
        tools: ["AWS", "Real-time Processing"],
      },
      {
        group: "Experience Layer",
        tools: ["Mobile Dashboards", "Risk Scoring UI"],
      },
    ],
    metrics: [
      {
        value: "Real-time",
        label: "transaction monitoring",
        detail:
          "Transactions are scored as they happen, so suspicious activity is caught in the moment rather than after the loss.",
      },
      {
        value: "ML",
        label: "behavioral risk scoring",
        detail:
          "scikit-learn models analyze behavior patterns to separate normal activity from likely fraud.",
      },
      {
        value: "Mobile",
        label: "risk dashboards",
        detail:
          "Balances, spending, and flagged activity surface through mobile-integrated dashboards for fast response.",
      },
    ],
  },
  {
    id: "real-estate-listing-scoring",
    label: "AVX-CS-008",
    image: "/portfolio/real-estate.jpg",
    company: "TruHome",
    title: "AI Real Estate Listing & Scoring Engine",
    subtitle:
      "A self-service real estate platform with an AI Listing Score that analyzes MLS data, media quality, and comparables in real time.",
    category: "PropTech · Full-Stack AI",
    year: "2026",
    duration: "Multi-phase build",
    tags: ["Next.js", "AI Scoring", "PropTech"],
    abstract: [
      "Avrixo built a self-service real estate platform pairing a Next.js dashboard with a Node.js/Express API, centered on an AI-driven Listing Score that evaluates MLS data, media quality, and comparables in real time.",
      "The platform combines property data, payments, and security into a guided onboarding experience that lets brokerages stand up listings without manual setup overhead.",
    ],
    coreProblem: [
      "Listing quality is uneven and hard to assess objectively. Brokerages spend significant effort on setup, and there's no consistent signal for how strong a listing actually is.",
      "Delivering an objective score means pulling together MLS records, media, and comparable sales into one real-time evaluation — and wrapping it in payments and security a brokerage can trust.",
    ],
    technicalSolution: [
      "Avrixo engineered a Next.js dashboard over a Node.js/Express API, with an AI Listing Score that analyzes MLS data, media quality, and comps in real time. The platform integrates the ATTOM property data API, Stripe payments, and end-to-end encryption.",
      "A multi-step onboarding flow, QA automation, and CI/CD were built in to keep listing setup fast and reliable as the platform scales.",
    ],
    architectureNotes: [
      "AI Listing Score over MLS data, media quality, and comps.",
      "Next.js dashboard with a Node.js / Express API.",
      "ATTOM data, Stripe payments, and end-to-end encryption.",
      "Multi-step onboarding with QA automation and CI/CD.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js", "Self-Service Dashboard"],
      },
      {
        group: "Application & API",
        tools: ["Node.js", "Express", "ATTOM API"],
      },
      {
        group: "Payments & Security",
        tools: ["Stripe", "End-to-End Encryption", "CI/CD"],
      },
    ],
    metrics: [
      {
        value: "AI Score",
        label: "listing intelligence",
        detail:
          "An AI Listing Score evaluates MLS data, media quality, and comparables in real time to rate every listing.",
      },
      {
        value: "ATTOM",
        label: "property data integration",
        detail:
          "Live MLS and property data flow in through the ATTOM API for accurate, current analysis.",
      },
      {
        value: "Stripe",
        label: "payments & security",
        detail:
          "Stripe payments and end-to-end encryption make the platform safe for self-service brokerage use.",
      },
    ],
  },
  {
    id: "collentix-shopify-app",
    label: "AVX-CS-009",
    image: "/portfolio/collentix.jpeg",
    company: "Collentix",
    title: "Collentix — Smart Collection Manager for Shopify",
    subtitle:
      "A Shopify app that imports and exports Custom and Smart Collections using simple Excel files, turning hours of manual work into a single upload.",
    category: "E-commerce · Shopify App",
    year: "2026",
    duration: "Published app",
    tags: ["Shopify", "Remix", "Node.js"],
    abstract: [
      "Avrixo built Collentix, a Shopify app that streamlines how merchants manage store collections. It lets them import and export both Custom and Smart Collections through simple Excel (.xlsx) files instead of editing collections one at a time.",
      "Merchants can bring in hundreds of collections at once, edit offline in Excel and re-import changes, export everything for backups or store migrations, and optionally update existing collections by handle.",
    ],
    coreProblem: [
      "Managing collections in Shopify's admin is slow and manual. Bulk changes, backups, and moving collections between stores all mean repetitive, error-prone work.",
      "Merchants needed a way to work with collections the way they already work with data — in a spreadsheet — and push changes back reliably.",
    ],
    technicalSolution: [
      "Avrixo developed Collentix on Shopify's Remix-based app framework with a Node.js backend, building an import/export pipeline that maps Excel rows to Custom and Smart Collections and reports per-row insert, update, and skip results.",
      "An optional handle-based update mode lets merchants safely update existing collections rather than duplicating them, with export used for backups and store-to-store migration.",
    ],
    architectureNotes: [
      "Bulk import/export of Custom and Smart Collections via .xlsx.",
      "Per-row insert / update / skip reporting on every run.",
      "Handle-based update mode for existing collections.",
      "Export for backups and store-to-store migration.",
    ],
    stack: [
      {
        group: "Shopify App",
        tools: ["Shopify", "Remix", "App Framework"],
      },
      {
        group: "Backend",
        tools: ["Node.js", "Excel (.xlsx) Pipeline"],
      },
    ],
    metrics: [
      {
        value: "Published",
        label: "Shopify app",
        detail:
          "A working Shopify app merchants install to manage collections through Excel rather than the admin UI.",
      },
      {
        value: "XLSX",
        label: "import & export",
        detail:
          "Custom and Smart Collections move in and out through simple Excel files, with insert/update/skip results per row.",
      },
      {
        value: "Bulk",
        label: "hundreds at once",
        detail:
          "Import or export hundreds of collections in a single upload, with offline editing and re-import.",
      },
    ],
  },
  {
    id: "swipsel-marketplace-app",
    label: "AVX-CS-010",
    image: "/portfolio/swipsel.jpg",
    company: "Swipsel",
    title: "Swipsel — Buy, Rent & Swap Marketplace App",
    subtitle:
      "A React Native marketplace for renting, swapping, and buying properties, vehicles, and more — with smart search, real-time chat, and subscription ad posting.",
    category: "Mobile · Marketplace",
    year: "2026",
    duration: "Full app build",
    tags: ["React Native", "Marketplace", "Real-time Chat"],
    abstract: [
      "Avrixo built Swipsel, a modern marketplace app for renting, swapping, and buying properties, vehicles, and more. It pairs a clean, intuitive interface with the features a real marketplace needs to feel trustworthy and fast.",
      "Smart search and filters, user profiles, bookmarks, real-time chat, and subscription-based ad posting make listing and discovering items seamless on both iOS and Android.",
    ],
    coreProblem: [
      "General marketplaces are cluttered and slow, and most don't handle renting and swapping well alongside buying. Listing an item is tedious, and buyers struggle to find what they actually want.",
      "The product needed a clean listing and discovery flow, trustworthy buyer–seller communication, and a sustainable way to monetize through paid ad placement.",
    ],
    technicalSolution: [
      "Avrixo developed Swipsel in React Native for a single cross-platform codebase, with smart search and filtering to surface relevant listings and real-time chat so buyers and sellers can negotiate in-app.",
      "Subscription-based ad posting gives sellers prominence and creates a recurring revenue model, while profiles and bookmarks keep the experience personal and easy to return to.",
    ],
    architectureNotes: [
      "Cross-platform React Native app for iOS and Android.",
      "Smart search and filtering across listing categories.",
      "Real-time chat between buyers and sellers.",
      "Subscription-based ad posting for monetization.",
    ],
    stack: [
      {
        group: "Mobile",
        tools: ["React Native", "iOS", "Android"],
      },
      {
        group: "Features",
        tools: ["Real-time Chat", "Search & Filters", "Bookmarks"],
      },
      {
        group: "Monetization",
        tools: ["Subscriptions", "Ad Posting"],
      },
    ],
    metrics: [
      {
        value: "iOS + Android",
        label: "one codebase",
        detail:
          "Built in React Native so a single codebase ships to both app stores.",
      },
      {
        value: "Real-time",
        label: "buyer–seller chat",
        detail:
          "In-app real-time chat lets users negotiate rentals, swaps, and sales directly.",
      },
      {
        value: "Subscriptions",
        label: "ad posting model",
        detail:
          "Subscription-based ad posting gives sellers reach and creates recurring revenue.",
      },
    ],
  },
  {
    id: "workflow-automation-suite",
    label: "AVX-CS-011",
    image: "/portfolio/n8n-automation.jpg",
    company: "Workflow Automation",
    title: "AI Workflow Automation Suite (n8n · Notion · GHL)",
    subtitle:
      "A set of production n8n automations connecting CRM, email, Notion, Google Sheets, social platforms, and voice training into hands-off workflows.",
    category: "AI Automation · n8n",
    year: "2026",
    duration: "Ongoing automation work",
    tags: ["n8n", "Automation", "AI Agents"],
    abstract: [
      "Avrixo designed and built a suite of n8n automations that remove manual effort across CRM, email, knowledge, and content workflows. Each one starts from a trigger and runs end to end without a person in the loop.",
      "The suite spans an OpenAI-powered agent that parses structured data and drives email through GoHighLevel and Notion, a data-processing and contact-management pipeline syncing APIs, Google Sheets, and contacts, an automated social posting system across Facebook and Instagram, and a scheduled training-and-retell workflow that coordinates Notion, GHL, and Retell voice sessions.",
    ],
    coreProblem: [
      "Operations teams lose hours moving data between CRMs, spreadsheets, email, Notion, and social platforms by hand. The work is repetitive, error-prone, and doesn't scale with the business.",
      "Reliable automation means handling triggers, structured data parsing, conditional logic, loops, and timing across multiple third-party systems without silent failures.",
    ],
    technicalSolution: [
      "Avrixo built each workflow in n8n with webhook or scheduled triggers, structured output parsing, and conditional branching. An OpenAI-powered agent extracts and structures data, then routes it to email via HTTP, contact records in GoHighLevel, and pages in Notion — updated in real time with the results.",
      "Adjacent workflows run API actors and sync results into Google Sheets and contact records, publish scheduled social content across Facebook and Instagram with status tracking, and coordinate scheduled training plus Retell voice sessions with built-in wait functions and timestamp comparisons.",
    ],
    architectureNotes: [
      "Webhook and scheduled triggers with structured output parsing.",
      "OpenAI agent routing data to email, GHL contacts, and Notion.",
      "Google Sheets sync with create/update contact loops.",
      "Scheduled social posting and Retell voice-training coordination.",
    ],
    stack: [
      {
        group: "Automation Engine",
        tools: ["n8n", "Webhooks", "Scheduled Triggers"],
      },
      {
        group: "AI & Data",
        tools: ["OpenAI Agent", "Structured Output Parsing"],
      },
      {
        group: "Integrations",
        tools: ["Notion", "GoHighLevel", "Google Sheets", "Retell", "Meta APIs"],
      },
    ],
    metrics: [
      {
        value: "n8n",
        label: "production workflows",
        detail:
          "A suite of live n8n automations running CRM, email, knowledge, content, and voice-training workflows.",
      },
      {
        value: "Multi-system",
        label: "CRM · Notion · Sheets",
        detail:
          "Workflows sync across GoHighLevel, Notion, Google Sheets, Retell, and social platforms in real time.",
      },
      {
        value: "Hands-off",
        label: "trigger to outcome",
        detail:
          "Each workflow runs end to end from a single trigger, removing repetitive manual effort and errors.",
      },
    ],
  },
  {
    id: "elderly-care-ai-chatbot",
    label: "AVX-CS-012",
    image: "/portfolio/ai-agent.jpg",
    company: "Elderly Care Assistant",
    title: "Elderly Care AI Chatbot",
    subtitle:
      "An AI assistant that helps family caregivers with personalized recommendations and local services, built on Claude, RAG, React, and Node.js.",
    category: "Generative AI · Healthcare",
    year: "2026",
    duration: "Full-stack build",
    tags: ["Claude", "RAG", "Full-Stack"],
    abstract: [
      "Avrixo developed an AI-powered assistant that supports family caregivers managing elderly care, giving personalized recommendations and surfacing relevant local services on demand.",
      "Built with Claude and retrieval-augmented generation on a React and Node.js stack, it streamlines access to the information and support caregivers need without the usual back-and-forth.",
    ],
    coreProblem: [
      "Family caregivers juggle complex, high-stakes decisions with information scattered across providers, services, and resources. Finding the right local support at the right moment is genuinely hard.",
      "A helpful assistant here has to give grounded, trustworthy guidance — not generic answers — while staying simple enough for non-technical caregivers to rely on.",
    ],
    technicalSolution: [
      "Avrixo built the assistant on Claude with a retrieval-augmented generation layer so responses are grounded in real resource data, integrating OpenAI for additional NLP and external APIs for local-service information.",
      "The full-stack application runs on React and Node.js with secure authentication, delivering a user-friendly tool that improves how caregivers access information and support.",
    ],
    architectureNotes: [
      "Claude-based assistant with retrieval-augmented generation.",
      "API integration for local-services resource data.",
      "React and Node.js full-stack application.",
      "Secure authentication for caregiver accounts.",
    ],
    stack: [
      {
        group: "AI Layer",
        tools: ["Claude", "Retrieval Augmented Generation", "OpenAI NLP"],
      },
      {
        group: "Application",
        tools: ["React", "Node.js", "Secure Auth"],
      },
      {
        group: "Integrations",
        tools: ["Local Services APIs", "Resource Data"],
      },
    ],
    metrics: [
      {
        value: "Claude",
        label: "grounded assistant",
        detail:
          "Built on Claude with RAG so caregiver guidance is grounded in real resource data, not generic output.",
      },
      {
        value: "RAG",
        label: "trusted recommendations",
        detail:
          "Retrieval-augmented responses keep recommendations relevant to the caregiver's actual situation and services.",
      },
      {
        value: "Full-stack",
        label: "React + Node.js",
        detail:
          "A complete React and Node.js application with secure authentication, built for non-technical caregivers.",
      },
    ],
  },
  {
    id: "hos-video-agency-website",
    label: "AVX-CS-013",
    image: "/portfolio/hos.jpg",
    company: "HOS",
    title: "HOS — Video Production Agency Website",
    subtitle:
      "A custom, SEO-optimized Next.js website for a cinematic video production agency, with dynamic routing and scroll-based animation.",
    category: "Web · Next.js",
    year: "2026",
    duration: "Custom site build",
    tags: ["Next.js", "SEO", "Responsive"],
    abstract: [
      "Avrixo developed a fully custom, SEO-optimized website for HOS, a cinematic video production agency. The site delivers a fast, scalable, responsive experience that puts the brand's creative identity front and center.",
      "Dynamic routing, smooth scroll-based animations, and a performance-driven architecture keep the storytelling engaging across devices.",
    ],
    coreProblem: [
      "A video production agency lives or dies on how its work feels online. A generic template can't carry cinematic brand identity, and a heavy site undermines the very polish it's trying to show.",
      "The site had to feel premium and animated while staying fast and discoverable in search.",
    ],
    technicalSolution: [
      "Avrixo built the site in Next.js with dynamic routing and scroll-based animation, designed around performance so motion and media never come at the cost of load speed.",
      "SEO and responsive design were treated as first-class concerns, so the site ranks and reads well from large desktop displays down to mobile.",
    ],
    architectureNotes: [
      "Custom Next.js build, no template.",
      "Dynamic routing across content sections.",
      "Scroll-based animation with performance budgets.",
      "SEO-optimized, responsive across devices.",
    ],
    stack: [
      {
        group: "Framework",
        tools: ["Next.js", "Dynamic Routing"],
      },
      {
        group: "Experience",
        tools: ["Scroll Animation", "Responsive Design"],
      },
      {
        group: "Performance",
        tools: ["SEO", "Performance-First Architecture"],
      },
    ],
    metrics: [
      {
        value: "Next.js",
        label: "fully custom build",
        detail:
          "A bespoke Next.js site built around the agency's cinematic brand, not a template.",
      },
      {
        value: "SEO",
        label: "optimized & discoverable",
        detail:
          "SEO and performance built in so the site ranks well and loads fast despite rich media.",
      },
      {
        value: "Responsive",
        label: "across every device",
        detail:
          "Smooth scroll animation and responsive layout deliver the same polish from desktop to mobile.",
      },
    ],
  },
  {
    id: "multi-agent-rag-system",
    label: "AVX-CS-014",
    image: "/portfolio/rag-agents.png",
    company: "Multi-Agent System",
    title: "Multi-Agent RAG Development System",
    subtitle:
      "A LangGraph multi-agent pipeline that automates code generation, testing, debugging, and regeneration through a decision-based workflow.",
    category: "Generative AI · AI Agents",
    year: "2026",
    duration: "System build",
    tags: ["LangGraph", "LangChain", "AI Agents"],
    abstract: [
      "Avrixo built a LangGraph-powered multi-agent system, using LangChain and FastAPI, that automates the software development cycle. Specialized agents handle code generation, testing, debugging, and regeneration, coordinated through a decision-based workflow.",
      "The result is a self-improving pipeline: when execution surfaces errors, the system routes back through solution and regeneration agents until the code works, then finalizes a clean output.",
    ],
    coreProblem: [
      "Turning a problem statement into working, tested code is iterative and slow. A single-shot model output rarely runs correctly, and manual debugging loops eat time.",
      "Automating that loop needs more than one model call — it needs agents with distinct roles and a controller that decides what happens next based on real execution results.",
    ],
    technicalSolution: [
      "Avrixo designed a graph of agents in LangGraph: a code generator produces a solution, a compiler agent runs static and dynamic analysis plus tests, and a decision node routes failures to solution and regeneration agents that rework the code automatically.",
      "When execution passes, a finalization agent assembles the output and logs; the whole pipeline is exposed through FastAPI, with LangChain orchestrating the LLM steps and prompt engineering shaping each agent's behavior.",
    ],
    architectureNotes: [
      "LangGraph decision graph coordinating specialized agents.",
      "Compiler agent with static/dynamic analysis and test execution.",
      "Error-driven routing to solution and regeneration agents.",
      "FastAPI-exposed pipeline with finalized output and logs.",
    ],
    stack: [
      {
        group: "Agent Orchestration",
        tools: ["LangGraph", "LangChain", "Decision Routing"],
      },
      {
        group: "AI",
        tools: ["LLM Prompt Engineering", "Generative AI"],
      },
      {
        group: "Application & Ops",
        tools: ["FastAPI", "MLOps"],
      },
    ],
    metrics: [
      {
        value: "Multi-agent",
        label: "role-specialized pipeline",
        detail:
          "Distinct agents own generation, testing, debugging, and regeneration within one coordinated workflow.",
      },
      {
        value: "Self-healing",
        label: "error-driven regeneration",
        detail:
          "Execution errors route back through solution and regeneration agents until the code runs correctly.",
      },
      {
        value: "LangGraph",
        label: "decision-based control",
        detail:
          "A LangGraph decision graph governs what each agent does next based on real execution results.",
      },
    ],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((study) => study.id === id);
}
