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
    id: "structumai-estimating-billing",
    label: "AVX-CS-001",
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
    label: "AVX-CS-002",
    image: "/portfolio/structumai-plans.png",
    company: "StructumAI",
    title: "StructumAI Plans — Construction Drawing Workspace",
    subtitle:
      "An inherited, half-broken plans module taken over, stabilized at the root cause, integrated into the platform with single sign-on, and extended with five client-facing features.",
    category: "Construction SaaS · Take-Over & Rescue",
    year: "2026",
    duration: "Phased engagement",
    tags: ["Take-Over & Rescue", "Real-time Collaboration", "Platform Integration"],
    abstract: [
      "The Plans module is StructumAI's construction-drawing workspace: teams upload plan sets, mark them up, drop CSI-coded stamps that become field tasks, compare revisions, and generate reports — with realtime presence, cursors, and comments. It arrived from a previous developer partially working and disconnected from the main platform.",
      "Avrixo took it over, root-caused the failures to a single architectural flaw in the session layer, rebuilt the auth core, connected the module to the platform's single sign-on and shared database, and then shipped five paid client-facing features — verified by an end-to-end Playwright suite that ran green before every handoff.",
    ],
    coreProblem: [
      "On take-over the module looked broken everywhere: sheets wouldn't load, the notifications API returned HTTP 500, and there was no working connection to the platform's login. Deployment was blocked by a placeholder JWT secret, failing database credentials, and an S3 bucket/region mismatch — with no automated tests to lean on.",
      "The decisive finding: the inherited session layer threw an exception on any unauthenticated request, and every route turned that into a 500. A logged-out user saw 'server crash' everywhere instead of 'please log in.' The dozens of visible bugs were one architectural flaw in disguise.",
    ],
    technicalSolution: [
      "Avrixo rewrote the auth/session core: a typed UnauthorizedError, robust JWT claim mapping, cookie or Bearer token support, and a shared error-response contract that returns 401 for auth failures and 500 only for real errors — one pattern used across ~60 API routes. The gate moved to Next.js 16's proxy convention so pages redirect to login and APIs return clean 401s, with edge-safe token expiry checks.",
      "Platform integration followed the real contract: the platform signs a JWT shared via a domain cookie, and the module verifies it with the same secret while reading the same multi-tenant Postgres — so the logged-in tenant sees their own projects with no second login. A public health endpoint (database, JWT config, dev-auth flag) made every deployment verifiable with one request, and the live blockers — env-file precedence, DB credentials, S3 region mismatch — were diagnosed and fixed.",
      "With the foundation stable, Avrixo shipped five client-facing features: page-level report filtering flowing through to PDF/CSV export, markup/stamp count indicators on sheet previews, sheet-level report export straight from the drawing viewer, CSI-code filtering of visible stamps and tasks, and per-stamp visibility overrides that sync over the existing realtime channel.",
    ],
    capabilities: [
      {
        group: "Stabilization",
        items: [
          "Rebuilt session/auth core — typed errors, robust JWT claim mapping, cookie or Bearer support",
          "Edge-safe auth gate (Next.js 16 proxy convention) — page redirects, clean API 401s",
          "Fixed notifications 500 — schema mismatch in the embedded-DB bootstrap",
          "Dev-auth fallback so the module runs locally without the platform cookie",
        ],
      },
      {
        group: "Platform Integration",
        items: [
          "Single sign-on via shared-JWT cookie scoped to the platform domain",
          "Shared multi-tenant Postgres — same projects, same tenant/user IDs as the platform",
          "Public /api/v1/health endpoint — DB, JWT config, dev-auth flag, no login required",
          "Diagnosed and resolved live blockers: DB credentials, env precedence, S3 region mismatch",
        ],
      },
      {
        group: "Admin & UX Polish",
        items: [
          "Admin-only Permissions page gated by a my-permissions endpoint",
          "Responsive dashboard header — collapsing nav, protected notification bell",
          "Brand favicon and logo across headers, sheet cards, and report PDFs",
        ],
      },
      {
        group: "Shipped Features",
        items: [
          "Page-level report filtering (Task/Photo/Sheet), flowing through to PDF/CSV export",
          "Sheet markup/stamp indicators with live counts on previews",
          "Sheet-level PDF/CSV export straight from the drawing viewer",
          "CSI-code filtering of visible/exported stamps and tasks",
          "Per-stamp visibility override (Show/Hide/Default), synced over realtime",
        ],
      },
    ],
    architectureNotes: [
      "Single-source auth contract — getUserContext() + a shared error responder across ~60 routes; auth failures are 401 by design, never 500.",
      "Edge-safe auth gate: token presence and expiry checked at the edge, full signature verification on the Node side.",
      "Per-stamp visibility stored in annotation geometry, so it propagates over the existing realtime channel with no extra plumbing.",
      "Public health endpoint (DB, JWT, dev-auth) so any deployment is verifiable with a single unauthenticated request.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 16 (App Router)", "React 19", "TypeScript", "jsPDF Reports"],
      },
      {
        group: "Realtime & Data",
        tools: ["Pusher", "PostgreSQL (RDS / Neon)", "AWS S3", "React Query"],
      },
      {
        group: "Platform Integration",
        tools: ["Shared-JWT SSO", "Edge Auth Gate (proxy.ts)", "Multi-Tenant RBAC", "Health Endpoint"],
      },
      {
        group: "Quality & Ops",
        tools: ["Playwright E2E", "PM2 + nginx", "Idempotent DB Bootstrap", "Audit Log"],
      },
    ],
    metrics: [
      {
        value: "500 → 401",
        label: "auth fixed at the source",
        detail:
          "One architectural flaw made every page crash for logged-out users. The rebuilt session core degrades gracefully — login redirect for pages, clean 401 for APIs.",
      },
      {
        value: "5",
        label: "client-facing features shipped",
        detail:
          "Page-level + CSI report filtering, markup/stamp indicators, sheet-level export from the viewer, and per-stamp visibility — delivered after stabilization.",
      },
      {
        value: "10/10",
        label: "end-to-end tests green",
        detail:
          "A Playwright suite covering auth behavior, notifications, sheets, admin gating, and report filtering — run green before each handoff.",
      },
    ],
  },
  {
    id: "structumai-scheduling",
    label: "AVX-CS-003",
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
    label: "AVX-CS-004",
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
    label: "AVX-CS-005",
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
    label: "AVX-CS-006",
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
    label: "AVX-CS-007",
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
    label: "AVX-CS-008",
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
    label: "AVX-CS-009",
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
    label: "AVX-CS-010",
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
    label: "AVX-CS-011",
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
    label: "AVX-CS-012",
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
    label: "AVX-CS-013",
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
