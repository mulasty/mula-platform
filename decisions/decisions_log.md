# Mula Platform — Decisions Log

## Sprint 01 — Foundation

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | WordPress → Next.js full migration | Max tech stack, unified codebase, performance gains, developer experience | JAMstack (Gatsby/Astro), staying on WordPress with headless frontend | All 8 apps | No — full platform rewrite |
| 2026-07-05 | Monorepo with Turborepo | Single repo, shared components, parallel CI, dependency management | Nx (steeper learning curve), Lerna (less maintained), Yarn workspaces only (no build orchestration) | Entire platform | Yes — can switch to Nx or pnpm workspaces |
| 2026-07-05 | Shared UI package (@mula/ui) | DRY across 8 apps, consistent design system, single source of truth for components | Copy-paste components per app, npm private package (overhead), Bit.dev (overkill) | All 8 apps | No — foundational to codebase |
| 2026-07-05 | Vercel hosting | Auto-deploy from Git, edge network, free tier sufficient for static sites, built-in analytics | Netlify (comparable, but Vercel is Next.js native), AWS Amplify (more complex), Cloudflare Pages (less Next.js optimized) | All 8 apps | Yes — can migrate to Netlify or Cloudflare |
| 2026-07-05 | Dark premium theme | Enterprise tech feel, differentiates from typical agency websites, reduces eye strain for tech audience | Light theme (common, less distinctive), toggle (increased complexity, low priority) | All 8 apps | Yes — can add light mode toggle later |
| 2026-07-05 | Tailwind CSS v4 + Framer Motion | Utility-first styling with performant animations, Tailwind v4 has native CSS variable support | CSS Modules (more boilerplate), Styled Components (runtime overhead), vanilla CSS (less maintainable) | All 8 apps | No — deeply integrated into component design |
| 2026-07-05 | App Router (Next.js 16) | Server components, streaming, improved SEO, future-proof architecture | Pages Router (legacy, less performant), Remix (different ecosystem) | All 8 apps | No — App Router is the default for new Next.js projects |
| 2026-07-05 | TypeScript 5 strict mode | Type safety across monorepo, catches errors at build time, enables better IDE tooling | JavaScript (no type safety), TypeScript with loose config (less protection) | All apps + packages | Yes — can relax strict mode per tsconfig if needed |
| 2026-07-05 | Polish language primary (pl_PL) | Target market: Poland and EU, all content targets Polish business owners | English (more global but less relevant to current market), bilingual (increased complexity) | All content + SEO | Yes — can add i18n via next-intl later |
| 2026-07-05 | Lucide icons over custom SVG | Lightweight, tree-shakeable, consistent style, 1000+ icons, MIT licensed | Heroicons (fewer icons), Phosphor (heavier), custom SVG (maintenance burden) | All apps + @mula/ui | Yes — can swap icon library if needed |
| 2026-07-05 | Mula Method framework | 3-pillar acceleration model (Technologia, Automatyzacja, AI) — differentiates brand, communicates value proposition clearly | Generic "our process" (undifferentiated), 5-pillar framework (overlapped with business pillars) | main app landing page | Yes — framework content can evolve with brand |
| 2026-07-05 | Sanity CMS (planned Sprint 02) | Headless CMS for non-dev content editing, real-time preview, GROQ query language, generous free tier | Contentful (more expensive), Strapi (self-hosted overhead), WordPress headless (defeats migration purpose) | All apps (when implemented) | Yes — not yet implemented, can choose alternative |
| 2026-07-05 | npm workspaces (not pnpm) | npm is the default Node.js package manager, zero install overhead, already in use | pnpm (faster but adds tooling dependency), Yarn (legacy, declining usage) | Monorepo root | Yes — can migrate to pnpm with `pnpm import` |
| 2026-07-05 | Static content in data.ts (no CMS yet) | Fastest path to MVP, type-safe content, no infrastructure dependency, easy CMS migration path later | Sanity CMS from day 1 (slower initial setup), markdown files (less type-safe) | main app (temporary) | Yes — migrating to Sanity is the plan |

---

## Sprint 02 — Content & CMS (Planned)

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | Sanity CMS integration deferred to Sprint 03 | Prioritized landing page completeness — all sections built, responsive verified, SEO verified | Sanity in Sprint 02 (blocked by content strategy finalization) | main app | Yes — rescheduled |
| 2026-07-05 | Case study detail page structure: /cases/[slug] | Dynamic routes allow Sanity-powered case studies, SEO-friendly URLs, consistent with Next.js conventions | /case-studies/[slug], /projects/[slug], /portfolio/[slug] | main app | Yes — URL structure can change |
| 2026-07-05 | Real images deferred — placeholder icons for MVP | Brand photoshoot not yet scheduled, icons provide acceptable visual experience for launch | Stock photography (less authentic), AI-generated images (brand risk) | All 8 apps | Yes — can swap in real images when available |
| 2026-07-05 | 10 shared UI components sufficient for all 8 apps | Covers navigation, layout, interactive elements, and content display for all planned pages | More components (complexity), fewer (app-specific duplication) | @mula/ui package | Yes — can add or remove components |

---

## Sprint 03 — Subdomain Apps (Planned)

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | Each subdomain app gets its own Vercel project | Isolated deployments prevent cascade failures, independent domain management, per-app analytics | Single Vercel project with rewrites (complex, fragile), subdomain routing within Next.js (not supported well) | All 8 apps | Yes — can consolidate into fewer projects |
| 2026-07-05 | Subdomain app structure mirrors main app | Consistency reduces cognitive load, same component library, same data flow pattern, same build pipeline | Different structure per app (flexibility but inconsistency) | All subdomain apps | No — consistency is a core principle |
| 2026-07-05 | Construction app demo content: 6 portfolio projects, 6 FAQ items, 2 steel types, 4 hall types | Demonstrates full feature set, validates data model, provides concrete starting point for content team | Minimal scaffold (bare skeleton), full content (blocks content team contribution) | construction app | Yes — content is replaceable |

---

## Enterprise Pack 01 — Documentation & Process

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | Documentation-driven development (DDD) standard | Every component/section/document must be documented as it's built; prevents knowledge silos, enables team scaling | No formal standard (chaos), README-only docs (insufficient), Notion/wiki (disconnected from code) | Entire platform | Yes — process can evolve |
| 2026-07-05 | JSDoc required on all component exports | IDE tooling benefits (hover previews, IntelliSense), documentation lives with code, no external tool required | TSDoc (more strict, less widely adopted), Storybook (great but adds tooling), no docs (unacceptable) | All apps + @mula/ui | No — quality standard |
| 2026-07-05 | Pre-release checklist with 10 verification items | Prevents deployment failures, ensures quality gate before production push, covers build/SEO/performance/DNS | No checklist (reactive firefighting), manual QA only (inconsistent) | All 8 apps | Yes — checklist can expand or contract |
| 2026-07-05 | Architecture document as single source of truth | Onboarding reference, decision justification, system design documentation, lives in repo | Diagram tool (Miro/Lucid — external, can drift), README only (insufficient detail) | Entire platform | No — keeping architecture docs in repo is standard |
| 2026-07-05 | Section registry pattern in page.tsx | Every page must declare its section list and data dependencies as a JSDoc comment — serves as living documentation and diff-friendly change log | No registry (unknown section impact), separate manifest file (drift risk) | All apps | Yes — can move to separate file |
| 2026-07-05 | Decisions log format: date + decision + rationale + alternatives + scope + reversible | Architectural Decision Records (ADR) format adapted for this project — captures not just what was decided but what was rejected and why | Simple date/decision/rationale (insufficient context), full ADR files per decision (overkill for project scale) | Entire platform | Yes — format can evolve |

---

## Enterprise Pack 02 — Brand & Analytics

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | Brand voice defined as "direct, confident, outcome-focused" | Differentiates from corporate/agency tone, matches founder's communication style, resonates with business audience | Generic "professional" voice (background noise), casual/playful (mismatches B2B focus), academic (too dry) | All content across all apps | Yes — voice can evolve with brand |
| 2026-07-05 | Headline formula: "[Co robimy] — [Wartość dla klienta]" | Action-to-outcome pattern proven effective in B2B tech copy, ensures every headline delivers concrete value proposition | Question headlines ("Szukasz..."), feature-dump headlines, template headlines ("Witamy w...") | All headlines across all pages | Yes — formula is a guideline, not a rule |
| 2026-07-05 | CTA formula: action verb + value noun + timeframe | Eliminates generic CTAs ("Kliknij tutaj", "Dowiedz się więcej"), every CTA is specific and outcome-oriented | Generic CTAs (convenient but low conversion), no CTA strategy (random) | All CTAs across all pages | No — CTA strategy is critical to conversion |
| 2026-07-05 | 15 banned words and 13 approved verbs defined | Proactive copy quality control, eliminates corporate buzzwords, ensures consistent language across the ecosystem | No banned list (inconsistent quality), longer list (overly restrictive) | All content | Yes — list can expand or contract |
| 2026-07-05 | GA4 measurement ID placeholder (G-XXXXXXXXXX) until account created | Separates analytics planning from implementation, GA4 property not yet provisioned — placeholder ensures the plan is executable | Real GA4 ID (not yet available), no analytics plan (flying blind) | All 8 apps | Yes — replace with real ID on provisioning |
| 2026-07-05 | 13 custom events defined for conversion tracking | Covers full funnel (page view → scroll → CTA → form → lead), enables data-driven optimization from day one of analytics | GA4 defaults only (insufficient for conversion tracking), more events (overly granular) | All 8 apps | Yes — events can be added or removed |
| 2026-07-05 | 3-phase analytics implementation: baseline → funnel → optimization | Phased rollout reduces risk, ensures foundational tracking works before building complex funnels and dashboards | Full implementation at once (risky, hard to debug), no phases (no roadmap) | All 8 apps | Yes — phases can be reordered or combined |
| 2026-07-05 | Cookie consent required before GA4 loads (GDPR/RODO) | Legal requirement for EU traffic, non-negotiable — analytics are secondary to privacy compliance | No consent (illegal in EU), consent only for marketing cookies (analytics still requires consent under GDPR) | All 8 apps | No — legal requirement |

---

## Mission 001 — Full Platform Bootstrap

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | 8 apps deployed in single mission — no progressive rollout | Unified launch communicates ecosystem strength, all subdomains active from day one, no partial brand presence | Progressive rollout (less risky but slower brand build), main app only (fragmented brand perception) | All 8 apps | No — already deployed |
| 2026-07-05 | Apps/ai, apps/cyber, apps/digital, apps/ecommerce, apps/marketing as scaffold only (Sprint 01) | Lays foundation for all domains without slowing down main and construction apps which have real content | All apps with full content (too slow for Sprint 01), no scaffold (unclear structure) | ai, cyber, digital, ecommerce, marketing apps | Yes — scaffolds are replaceable/extensible |
| 2026-07-05 | Construction app as second full-feature app (after main) | Construction is the most content-ready pillar (existing portfolio, FAQ, product types), validates multi-app pattern | AI app first (less content, more abstract), digital app first (overlapping with main) | construction app | No — already built |
| 2026-07-05 | Tailwind CSS v4 with `@tailwindcss/postcss` plugin (not `@tailwindcss/vite`) | Next.js uses PostCSS natively, Tailwind v4 PostCSS plugin is the correct integration path, avoids Vite-related complexity | Tailwind v3 (proven but older), Tailwind v4 with Vite (wrong for Next.js), UnoCSS (less ecosystem support) | All apps | No — already implemented |
| 2026-07-05 | npm 11.12.1 as package manager (Node 24 compatible) | Latest npm version, improved workspace support, better lockfile handling, ships with current Node LTS | npm 10 (older), pnpm 9 (not installed), Yarn 4 (declining ecosystem) | Monorepo root | Yes — can change package manager |
| 2026-07-05 | No automated testing framework in Sprint 01 | Speed to deploy was priority; tests will be added retroactively in Sprint 03 | Vitest setup in Sprint 01 (slower launch), Playwright E2E from day 1 (overkill for static content) | All apps | Yes — tests can be added anytime |
| 2026-07-05 | Enterprise Packs 01+02 executed as documentation/capability sprints | Formalizes processes, standards, and brand strategy that were implicit or ad-hoc during Sprint 01 — provides executable playbooks for future sprints | No formalization (keeps ad-hoc), separate "documentation only" sprint (wasteful), embedding docs into feature sprints (distracting) | Entire platform | No — documentation standard is now enforced |

---

## Sprint 04 — Analytics & Optimization (Planned)

| Date | Decision | Rationale | Alternatives Considered | Scope | Reversible? |
|---|---|---|---|---|---|
| 2026-07-05 | Analytics implementation postponed to Sprint 04 | Enterprise Pack 02 defines the plan; GA4 property creation and event tracking require separate implementation sprint | Analytics in Sprint 03 (blocked by GA4 account provisioning) | All 8 apps | Yes — rescheduled |
| 2026-07-05 | Cookie consent solution: CookieYes (or similar managed service) | Managed consent platforms handle GDPR complexity, update automatically for regulatory changes, reduce legal risk | Custom consent banner (maintenance burden), no consent (illegal in EU) | All 8 apps | Yes — can switch provider |
| 2026-07-05 | Looker Studio for dashboard (not GA4 Explore only) | GA4 Explore is limited for stakeholder reporting; Looker Studio provides branded, shareable dashboards with custom layouts | Google Data Studio (rebranded to Looker Studio), Tableau (overkill), Metabase (self-hosted overhead) | Analytics reporting | Yes — dashboard tool is swappable |

---

## Summary Statistics

| Category | Decisions |
|---|---|
| Sprint 01 — Foundation | 14 |
| Sprint 02 — Content & CMS | 4 |
| Sprint 03 — Subdomain Apps | 3 |
| Enterprise Pack 01 — Documentation & Process | 6 |
| Enterprise Pack 02 — Brand & Analytics | 8 |
| Mission 001 — Full Platform Bootstrap | 8 |
| Sprint 04 — Analytics & Optimization | 3 |
| **Total** | **46** |
