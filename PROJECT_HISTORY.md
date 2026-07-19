# Avrixo Portfolio — Project History & Context Log

This file exists so that after a context compact, the assistant (or any future session) can recover
what has already been decided and built, without re-deriving it from scratch. Update this file
whenever a significant round of changes lands.

## Stack & deploy
- Next.js 16 (App Router, static export `output: "export"`), React 19, TypeScript, Tailwind v4.
- Hosted on Hostinger shared hosting (no server, static files only). Domain: avrixodigitals.com.
- **Deploy = GitHub Actions** (`.github/workflows/deploy.yml`): on push to `main`, builds the site and
  pushes `out/` to `public_html` via **SFTP** (port 65002 — Hostinger's FTP port is blocked from GitHub
  runners and from this dev machine's ISP, SFTP works). Secret `FTP_PASSWORD` is set in the GitHub repo.
  User's home ISP also blocks the server IP entirely (all ports) — user must use mobile hotspot/VPN to
  view the live site or reach hPanel File Manager directly.
- Local dev box has only ~4GB RAM. `npm run dev` / Playwright crash or hang under load — always prefer
  `npm run build` + `npx serve out -l 3999` (static serve) for verification over the dev server when
  doing heavy Playwright work. Kill stray `node`/`chrome` processes if things stall.

## Brand assets
- Logo: `/finalLogo.png` (black text, light bg) and generated `/finalLogo-white.png` (white text, for
  dark navbar/footer — the white variant was hand-generated from finalLogo.png by recoloring black→white
  pixels, since the source only ships a black-on-transparent version).
- Favicon: cropped from the "A" triangle mark in finalLogo.png. `app/icon.png` (512, transparent),
  `app/apple-icon.png` (180, white bg — iOS needs opaque), `app/favicon.ico` (hand-built multi-res
  16/32/48 PNG-in-ICO container via PowerShell, since no ImageMagick on this box).
- Fonts: **Montserrat** (site-wide body/UI, via `next/font/google`, CSS var `--font-montserrat`) +
  **Instrument Serif italic** (decorative accent only, CSS var `--font-instrument-serif`, exposed as
  the `.font-accent` utility class in `globals.css` — used for red italic accent words in section
  headlines and the Method section's step numbers, matching a client-provided prototype's aesthetic).

## Content system — case studies (`lib/case-studies.ts`)
- 14 case studies, ordered by array position (position = display order everywhere: home featured cards
  via `.slice(0,2)`, `/case-studies` index, `/portfolio`). Labels `AVX-CS-001`..`014` must stay sequential
  with array order — **when inserting a new case study, renumber ALL labels, do it in one pass to avoid
  duplicate-label collisions** (this has bitten us twice — a renumber loop that touches an already-edited
  label creates a dupe; always grep `label: "AVX-CS-` after any insert to confirm 001..014 unique).
- `CaseStudy` type has an optional `capabilities?: {group, items[]}[]` field — renders as a "What's
  Inside" grouped-bullet section on the detail page (`app/case-studies/[id]/page.tsx`) between the
  Technical Solution and Architecture Notes sections, only for studies that define it (StructumAI trio +
  AI SDR Agent currently have it; older studies don't and that's fine, the section just doesn't render).
- Studies present, in order: (1) `ai-sdr-agent` — AI SDR Agent flagship, Avrixo's own portfolio product,
  company field = "Avrixo Labs" (2) `structumai-estimating-billing` (3) `structumai-plans-collaboration`
  — **rewritten from a 2nd, more authoritative doc**: this is a ground-up SOLO build (~3mo, 48+ commits,
  26 tables, 35 permission keys), NOT a "take-over/rescue" — an earlier draft used the wrong narrative
  from a different source doc, corrected. Cover image is a **hand-built SVG**
  (`/portfolio/structumai-plans-detail.svg`) because the client-supplied PNG had the old "took over a
  broken module" narrative baked into the raster text, contradicting the corrected copy. (4)
  `structumai-scheduling` (5)-(14) the original 10 (Lexium, ParaVitae, fraud detection, real estate,
  Collentix, Swipsel, n8n workflow suite, elderly care chatbot, HOS video agency, multi-agent RAG).
- **Honesty discipline established this session** (do not regress): every stat on the site must be
  traceable to something real/checkable. Caught and fixed: "10 industries" (only 4 exist) → now dynamic
  `industryRoutes.length`-driven copy; "9/6 Service Lines" now literally 4; "130+ REST endpoints" /
  "15+ data tables" on the homepage were leftover from an older, since-corrected case-study draft and had
  no current source → replaced with "88+" (traceable to the Plans case study) and case-study count.
  Case-study count stats (`caseStudies.length`) are wired dynamically in `HeroSection.jsx` and
  `Impact.jsx` specifically so they never drift again when a study is added/removed — **keep them
  dynamic, don't hardcode a number back in**.

## Services — consolidated 6 → 4 (`lib/site-data.ts` → `serviceRoutes`)
User + a content creator's brief drove a full service-taxonomy consolidation. Old slugs
(ai-automation, generative-ai-rag, data-platforms, cloud-devops, ui-ux-product-design,
saas-product-engineering) are **gone** — replaced by exactly 4, content folded/merged in:
1. `ai-solutions` — was AI Automation + Generative AI/RAG
2. `custom-software` — new category, absorbed UI/UX Product Design content
3. `intelligent-automation` — was AI Automation's automation half + Data Platforms' pipeline content
4. `saas-product-engineering` — unchanged core, absorbed Cloud & DevOps content
Every consumer updated: `components/home/Services.jsx` (home tab list), `components/pages/ServicesPage.jsx`
(`serviceDetails`/`serviceCardTags` keyed by new slugs), `components/common/EnterpriseRoutePage.tsx`
(`SLUG_IMAGES` keyed by new slugs), `lib/site-data.ts` navGroups services mapping (simplified, removed a
fragile index-based name-override hack), `components/layout/Footer.tsx`. Since this is a brand-new site
with no real backlinks yet, breaking the old 6 URLs was judged acceptable (no redirects configured).

## Home page architecture (`app/page.tsx`) — evolving, check this file for current truth
Order has been revised multiple times this session; **this file's actual current content is the source
of truth**, not this log — but the reasoning behind the order: Hero → TrustedBy (quick stack signal) →
Services (what we do) → Methodology "The Avrixo Method" (how we work, 4 steps: Diagnose/Build/
Integrate/Optimize — this exact 4-step naming came from a client-provided prototype file and must not
drift) → Projects "Products we've shipped" (proof) → Industries (who we serve, 6 cards) → TechStack "How
We Build" (real, verified tooling only — do NOT copy the prototype's placeholder stack list verbatim,
e.g. it lists OpenAI/Anthropic/Pinecone/Hugging Face which we have never verifiably used; the real stack
per our own case studies is Gemini/Groq/LangGraph/Tavily/Langfuse/Pydantic, Next.js/React/TypeScript/
PostgreSQL/Tailwind, n8n/Pusher/webhooks, AWS/Docker/PM2+Nginx/Playwright) → then credibility/convert
sections (Impact, RiskReversal, CTA), with Testimonial/Insights sections layered in as requested —
**check for thematic overlap before adding any new section**: this site has repeatedly drifted toward
saying "fixed scope / you own it / production-grade / no handoffs" in 4-5 different sections (Impact's
old "principles", RiskReversal, CTASection's trust bar, and near-duplicates proposed from the client
prototype's "Why teams choose Avrixo" and "Built on a foundation you can trust" sections) — RiskReversal
is the canonical home for that message; don't re-add it elsewhere without deliberately replacing/trimming
the existing instance.

## Client-provided prototype reference
`file:///C:/Users/HP/Downloads/Avrixo_Website_Prototype_v4 (1).html` — a static HTML/CSS mockup the user
had a content creator make, used as a **content and structure reference only**, never copied wholesale
(explicit user instruction: "exact copy nh karna"). It uses CSS vars `--red:#E5342F` etc., Instrument
Serif italic accents, and section class names like `.method-steps`, `.ind-grid`, `.stack-rows`,
`.trust-grid`, `.testimonial-card` — grep that file directly (it's readable via the Read tool, local
path) if a future task references "the prototype" again; don't assume its placeholder content
(fake client logos, OpenAI/Anthropic claims, "Sample Client" testimonial) is meant to ship verbatim.

## Known gotchas / working patterns on this session
- **Playwright fullPage screenshots taken without first scrolling through the page will show blank gaps**
  for any section using Framer Motion `whileInView` + `viewport:{once:true}` — this is NOT a real bug,
  just an IntersectionObserver timing artifact. Always scroll-through before a fullPage capture (see the
  `scrollThrough()` helper pattern used in scratchpad verify scripts), and re-shoot with scroll-through
  before concluding a "blank section" is a real defect.
- Always run `npx tsc --noEmit` then a clean `rm -rf .next out && npm run build` before calling a change
  done. The overflow-checker script pattern (route × viewport matrix, checks
  `document.documentElement.scrollWidth - clientWidth`) has been reused several times this session to
  confirm zero horizontal overflow after big changes — reuse it again rather than re-deriving.
- Contact form posts to FormSubmit (`https://formsubmit.co/ajax/${formRecipient}`), recipient is
  `info@avrixodigitals.com` (`lib/company.ts`). **First real submission after changing the recipient
  triggers a one-time FormSubmit activation email to that inbox — must be clicked once.**
- Phone number site-wide is a **placeholder** `+123456789` (`lib/company.ts` `companyContact`), by
  explicit user request — do not "fix" this back to a real-looking number without being asked.
- Never mount `components/home/EnterpriseTrust.jsx` — it contains fabricated client logos, kept in the
  repo unused by deliberate user decision, not an oversight.
