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
    id: "structumai-estimating-billing",
    label: "AVX-CS-001",
    image: "/portfolio/structumai-billing.svg",
    company: "StructumAI",
    title: "StructumAI Estimating & Billing",
    subtitle:
      "A construction estimating and AIA-compatible contract billing platform that connects a single estimate all the way through to the owner billing ledger.",
    category: "Construction SaaS · Product We Engineered",
    year: "2026",
    duration: "Multi-phase build",
    tags: ["SaaS Platform", "Financial Engineering", "Data Modeling"],
    abstract: [
      "StructumAI needed the financial backbone of construction project delivery: an Excel-like estimating surface that flows cleanly into contracts, schedule of values, pay applications, change orders, and a final owner billing ledger. Avrixo designed and engineered the platform end to end.",
      "The result is a multi-tenant product where a number entered at estimate time stays traceable through every downstream billing document — with the retainage, AIA pay-application, and change-order rules that construction finance teams actually depend on.",
    ],
    coreProblem: [
      "Construction billing breaks when the estimate, the contract, and the owner invoice live in disconnected spreadsheets. Teams re-key the same values across documents, retainage is calculated by hand, and a single change order can silently desync the whole billing trail.",
      "The platform had to enforce real financial rules — retainage accrual and release, schedule-of-values integrity, pay-application math, and change-order lineage — while staying fast and familiar enough that estimators would actually use it instead of falling back to Excel.",
    ],
    technicalSolution: [
      "Avrixo built a strict Routes → Controllers → Services → Repositories architecture on Next.js 15 and PostgreSQL, with every input validated by Zod and all SQL isolated in a repository layer. The data model spans 15 core tables linking estimates, contracts, SOV, pay apps, change orders, retainage rules, and stored materials.",
      "An Excel import pipeline scores each parsed row for confidence and flags anything below a 0.8 threshold as review-required, so bulk imports never silently commit bad data. Retainage release is idempotent, and an internal-only-line guard stops draft estimate detail from bleeding into owner-facing schedule of values.",
      "Pay applications, owner change-order billing queues, and the running owner ledger are generated from the same source of truth, with PDF and XLSX export wired through AWS S3 and a permission system spanning 18 estimating-specific access keys.",
    ],
    architectureNotes: [
      "15-table data model carrying a value from estimate to owner ledger.",
      "Idempotent retainage accrual/release with over-release guards.",
      "Excel import with ≥0.8 confidence scoring and review-required flagging.",
      "18 granular permission keys with role mappings for multi-tenant access.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 15", "React 19", "Tailwind CSS", "Zustand"],
      },
      {
        group: "Application & API",
        tools: ["TypeScript", "Express", "Zod Validation", "42 REST Endpoints"],
      },
      {
        group: "Data Platform",
        tools: ["PostgreSQL (Neon)", "Repository-Isolated SQL", "Audit Events"],
      },
      {
        group: "Documents & Infra",
        tools: ["jsPDF", "ExcelJS", "AWS S3", "Idempotent Migrations"],
      },
    ],
    metrics: [
      {
        value: "42",
        label: "production REST endpoints",
        detail:
          "A complete API surface across estimates, contracts, SOV, pay apps, change orders, retainage, markup, and ledger.",
      },
      {
        value: "AIA",
        label: "compliant pay-app billing",
        detail:
          "Schedule of values, pay applications, retainage, and change-order lineage built to the standards construction finance teams expect.",
      },
      {
        value: "≥0.8",
        label: "import confidence gate",
        detail:
          "Excel imports score every row and flag low-confidence data for review before it can commit, protecting the billing trail.",
      },
    ],
  },
  {
    id: "structumai-plans-collaboration",
    label: "AVX-CS-002",
    image: "/portfolio/structumai-plans.svg",
    company: "StructumAI",
    title: "StructumAI Plans — Real-time Collaboration",
    subtitle:
      "A collaborative construction drawing platform with live multi-user annotation, presence, measurement, and revision control on large plan sets.",
    category: "Real-time SaaS · Product We Engineered",
    year: "2026",
    duration: "Multi-phase build",
    tags: ["Real-time", "Collaboration", "PDF Engineering"],
    abstract: [
      "StructumAI Plans gives construction teams a shared, live workspace for drawing sets: upload, view, measure, annotate, comment, and assign tasks on plans while seeing exactly where teammates are working in real time.",
      "Avrixo engineered the full collaboration layer — live cursors, presence, threaded comments, measurement tooling, and revision compare — on top of a heavy PDF rendering pipeline, packaged as a multi-tenant platform with role-based permissions.",
    ],
    coreProblem: [
      "Plan review is collaborative by nature but usually happens in disconnected PDF viewers and email threads. Markups get lost, two people unknowingly edit the same sheet, and there's no reliable record of who changed what across revisions.",
      "The product needed true real-time multi-user editing on large, performance-heavy drawing files, plus measurement, comments, tasks, and permissioned access — all without the viewer becoming sluggish under the weight of a full construction plan set.",
    ],
    technicalSolution: [
      "Avrixo built a real-time synchronization layer on Pusher that broadcasts live cursors, presence, comments, and annotation changes between users on the same sheet. The PDF viewer uses react-pdf and pdfjs with a measurement and calibration overlay so distances map to real-world units.",
      "The platform follows the same disciplined Routes → Controllers → Services → Repositories pattern, exposing 88 REST endpoints across plans, annotations, comments, tasks, permissions, notifications, and scheduled reports. Image processing runs through Sharp, with plan files and exports stored on AWS S3.",
      "Revision history and a compare mode let teams diff plan-set versions, while a permissions matrix governs access by member, company, and trade — turning ad-hoc plan review into an auditable, multi-tenant collaboration system.",
    ],
    architectureNotes: [
      "Pusher-based real-time sync for cursors, presence, comments, and annotations.",
      "react-pdf / pdfjs viewer with measurement + calibration overlay.",
      "Revision history and compare mode for plan-set versioning.",
      "Permissions matrix across members, companies, and trades.",
    ],
    stack: [
      {
        group: "Experience Layer",
        tools: ["Next.js 15", "React 19", "Framer Motion", "Zustand"],
      },
      {
        group: "Real-time & Data",
        tools: ["Pusher", "React Query", "PostgreSQL", "88 REST Endpoints"],
      },
      {
        group: "PDF & Media",
        tools: ["react-pdf", "pdfjs-dist", "Sharp", "jsPDF"],
      },
      {
        group: "Infrastructure",
        tools: ["AWS S3", "Express", "Scheduled Reports", "Notifications"],
      },
    ],
    metrics: [
      {
        value: "Live",
        label: "multi-user collaboration",
        detail:
          "Real-time cursors, presence, comments, and annotation sync keep every reviewer on the same sheet at the same time.",
      },
      {
        value: "88",
        label: "production REST endpoints",
        detail:
          "Plans, annotations, comments, tasks, permissions, notifications, and scheduled reports across one collaboration platform.",
      },
      {
        value: "143",
        label: "UI components engineered",
        detail:
          "A deep viewer, permissions, tasks, reports, and compare experience built for performance on large plan sets.",
      },
    ],
  },
  {
    id: "lexium-educational-assistant",
    label: "AVX-CS-003",
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
    label: "AVX-CS-004",
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
    label: "AVX-CS-005",
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
    label: "AVX-CS-006",
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
    label: "AVX-CS-007",
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
    label: "AVX-CS-008",
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
    label: "AVX-CS-009",
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
    label: "AVX-CS-010",
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
    label: "AVX-CS-011",
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
    label: "AVX-CS-012",
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
