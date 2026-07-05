# Mula Platform — Master Index

**Single Source of Truth for all project artifacts.**
**Generated:** 2026-07-05
**Commit:** `057c41af08b75633c6d0ccf57ad695507e9bd3db`

---

## Strategy

| Document | Location | Status | Description |
|---|---|---|---|
| NORTH_STAR.md | docs/ | ACTIVE | Vision, mission, 5 core principles, product KPIs, technology North Star, anti-patterns |
| MATRIX_DIRECTIVE.md | docs/ | ACTIVE | 7 operating rules: verify build, commit+push+deploy, log decisions, consult North Star, update tech debt, health dashboard, QA gate |
| decisions_log.md | decisions/ | ACTIVE | 46 architectural decisions across Sprint 01-04, Enterprise Packs 01-02, Mission 001 |
| RECOVERY_ALIGNMENT_REPORT.md | docs/ | ACTIVE | Cohesion assessment, document audit, recommendations, ready-for-next-mission verdict |

---

## Brand

| Document | Location | Status | Description |
|---|---|---|---|
| BRAND_GUIDELINES.md | docs/ | ACTIVE | Brand identity, visual palette, typography, iconography, imagery rules, animation conventions, anti-patterns |
| BRAND_MANIFESTO.md | docs/brand/ | ACTIVE | Mission 002 — Brand identity: who we are, what we believe, brand promise, guiding sentence, what we're not, what we want to be |
| TONE_OF_VOICE.md | docs/brand/ | ACTIVE | Mission 002 — Tone of voice: rules, banned words, approved verbs |
| TRUST_SIGNALS.md | docs/brand/ | ACTIVE | Mission 002 — Trust signals: implemented and planned credibility indicators |
| COPYWRITING_GUIDE.md | playbooks/ | ACTIVE | Brand voice, headline formula, CTA formula, 15 banned words, 13 approved verbs, tone by section, SEO writing, current copy audit |

---

## Platform

| Document | Location | Status | Description |
|---|---|---|---|
| ARCHITECTURE.md | docs/ | ACTIVE | Full system architecture (619 lines): monorepo structure, app composition, data flow, build pipeline, DNS/hosting, security |
| DESIGN_SYSTEM.md | docs/ | ACTIVE | Design token system, color hierarchy, spacing scale, typography, component architecture, animation tiers, responsive strategy |
| DESIGN_TOKENS | packages/design-system/tokens.css | ACTIVE | 163 CSS custom properties: colors (35), spacing (28), typography (28), radius (8), shadows (10), z-index (8), animation (8), breakpoints (5), layout (5) |
| PROJECT_STATUS.md | docs/ | ACTIVE | Current state: apps deployed, infrastructure, documentation inventory, what's missing, risks, enterprise pack status, next sprint priorities |
| PROJECT_HEALTH_CHECK.md | docs/ | ACTIVE | Full health audit: directory tree, app statuses, document audit (ACTIVE/PLANNED/DRAFT/DEPRECATED), open issues, blockers, risks, roadmap |
| ARCHITECTURE_ALIGNMENT.md | docs/ | ACTIVE | Cross-reference verification: repo structure vs ARCHITECTURE.md, package naming vs imports, tokens vs components, docs vs files |
| README.md | root | ACTIVE | Project overview: architecture tree, tech stack, hosting table, shared UI inventory, dev commands, deployment commands |

---

## Documentation Process

| Document | Location | Status | Description |
|---|---|---|---|
| DOCUMENTATION_STANDARD.md | docs/ | ACTIVE | DDD standard: JSDoc requirements, section docs, README cadence, decision logging format, sprint report structure, enforcement rules |
| RELEASE_CHECKLIST.md | docs/ | ACTIVE | 10-section pre-release verification: build, responsive, SEO, structured data, links, forms, DNS, Vercel, GitHub, post-deploy |
| QA_ACCEPTANCE.md | docs/ | ACTIVE | Pre-deployment checklist (5 items) + post-deployment checklist (5 items) |

---

## Quality

| Document | Location | Status | Description |
|---|---|---|---|
| DEMO_STANDARD.md | docs/ | ACTIVE | Matrix Demo Standard v2.0 (Lean): mandatory post-Mission report format, screenshot requirements, quality metrics, optimization principles |

---

## Mission Packs — History

| Document | Location | Status | Description |
|---|---|---|---|
| SPRINT_01_REPORT.md | docs/ | ACTIVE | Sprint 01 — Foundation: WordPress migration, 8 app scaffolds, 10 shared components, landing page, Vercel deploy. Completed. |
| SPRINT_02_REPORT.md | docs/ | PLANNED | Sprint 02 — Content & CMS: Not yet documented. Decisions logged in decisions_log.md. |
| SPRINT_03_REPORT.md | docs/ | PLANNED | Sprint 03 — Subdomain Apps: Not yet documented. Decisions logged. |
| SPRINT_04_REPORT.md | docs/ | PLANNED | Sprint 04 — Analytics & Optimization: In progress per PRODUCT_HEALTH_DASHBOARD.md. |
| Enterprise Pack 01 | (tracked in decisions_log.md) | COMPLETED | Documentation & Process: DOCUMENTATION_STANDARD.md, RELEASE_CHECKLIST.md, ARCHITECTURE.md |
| Enterprise Pack 02 | (tracked in decisions_log.md) | COMPLETED | Brand & Analytics: COPYWRITING_GUIDE.md, ANALYTICS_PLAN.md, decisions_log.md updated |
| Enterprise Pack 03 | (tracked in PROJECT_STATUS.md) | PLANNED | Test & CI/CD: Vitest, Playwright, Lighthouse CI, GitHub Actions, Renovate |
| Enterprise Pack 04 | (tracked in PROJECT_STATUS.md) | PLANNED | Security & Compliance: CSP headers, security audit, GDPR review, cookie consent, privacy policy, accessibility audit |
| Mission 001 | (tracked in decisions_log.md) | COMPLETED | Full Platform Bootstrap: WordPress migration, 8 apps, landing page, subdomain scaffolds, Vercel, SEO, 10 components, dark design system |
| Mission 002 | (tracked in decisions_log.md) | COMPLETED | Brand Authority: BRAND_MANIFESTO.md, TONE_OF_VOICE.md, TRUST_SIGNALS.md, ClientNeedsSection component, page.tsx integration |
| MISSION_003_REPORT.md | docs/missions/ | ACTIVE | Mission 003 — Premium Landing Experience: Hero Enterprise variant, streamlined 8-section flow, visual polish, cohesive hierarchy |

---

## Design System

| Document | Location | Status | Description |
|---|---|---|---|
| DESIGN_SYSTEM.md | docs/ | ACTIVE | Architecture overview: 3-layer design (tokens -> components -> apps), token categories, integration guide |
| COMPONENT_LIBRARY.md | docs/ | ACTIVE | Per-component API reference: props tables, TypeScript interfaces, usage examples, animation patterns, accessibility notes |
| BRAND_GUIDELINES.md | docs/ | ACTIVE | Visual identity, color palette, typography scale, icon sizing, animation duration tokens, layout spacing |
| DESIGN_TOKENS | packages/design-system/tokens.css | ACTIVE | Single source of visual truth: all CSS custom properties |
| Figma Component Kit | — | PLANNED | Listed in DESIGN_SYSTEM.md roadmap (Sprint 06) |
| Storybook | — | PLANNED | Listed in DESIGN_SYSTEM.md roadmap (Sprint 07) |
| Visual Regression Testing | — | PLANNED | Listed in DESIGN_SYSTEM.md roadmap (Sprint 08) |

---

## Components (Shared UI — @mula/ui)

All components in `packages/ui/src/components/`. Imported via `@mula/ui`.

| # | Component | File | Status | Consumed By |
|---|---|---|---|---|
| 1 | Navbar | Navbar.tsx | IMPLEMENTED | All 8 apps (wrapped per app) |
| 2 | Footer | Footer.tsx | IMPLEMENTED | All 8 apps (wrapped per app) |
| 3 | HeroSection | HeroSection.tsx | IMPLEMENTED | All 8 apps (pass data as props) |
| 4 | SectionHeader | SectionHeader.tsx | IMPLEMENTED | All section-level components |
| 5 | PillarCard | PillarCard.tsx | IMPLEMENTED | main app PillarsGrid |
| 6 | CTASection | CTASection.tsx | IMPLEMENTED | main app (interspersed) |
| 7 | ProcessTimeline | ProcessTimeline.tsx | IMPLEMENTED | main, construction apps |
| 8 | TechnologyCloud | TechnologyCloud.tsx | IMPLEMENTED | main app |
| 9 | ContactForm | ContactForm.tsx | IMPLEMENTED | All apps with contact sections |
| 10 | TestimonialCard | TestimonialCard.tsx | IMPLEMENTED | main app TestimonialsSection |
| 11 | FAQSection | FAQSection.tsx | PLANNED | main app FAQSection |
| 12 | PartnersSection | PartnersSection.tsx | PLANNED | main app PartnersSection |

### Shared Patterns (applies to all components)
- Tailwind CSS v4 utility classes exclusively
- Framer Motion `whileInView` with `once: true`
- Full TypeScript interfaces (no `any` in public APIs)
- `cn()` utility for className merging
- WCAG AA accessible: ARIA labels, keyboard navigation, focus indicators
- Data-agnostic: receive data via props, never import from `data.ts`

---

## AI & Analytics

| Document | Location | Status | Description |
|---|---|---|---|
| ANALYTICS_PLAN.md | playbooks/ | ACTIVE (plan) | GA4 measurement ID placeholder, 13 custom events, conversion funnel (6 steps), KPI dashboard (9 sections), 3-phase implementation plan, GDPR compliance, reporting cadence |

Implementation status: NOT YET STARTED. GA4 measurement ID is still placeholder (`G-XXXXXXXXXX`). Cookie consent not implemented. All 8 apps show "Not yet" for GA4 tag, Vercel Analytics, custom events, and cookie consent.

---

## Operations

| Document | Location | Status | Description |
|---|---|---|---|
| PRODUCT_HEALTH_DASHBOARD.md | docs/ | ACTIVE | Current metrics: apps deployed (8/8), build success (8/8), TS errors (0), SSL coverage (7/8), Lighthouse (TBD), sprint progress |
| TECHNICAL_DEBT_REGISTER.md | docs/ | ACTIVE | 8 items tracked with IDs (TD-001 through TD-008), priorities (High/Medium/Low), status (all Open) |
| PROJECT_HEALTH_CHECK.md | docs/ | ACTIVE | Full health audit with scorecard, risk matrix, open issues register, roadmap |
| ARCHITECTURE_ALIGNMENT.md | docs/ | ACTIVE | Cross-reference consistency verification report |
| RECOVERY_ALIGNMENT_REPORT.md | docs/ | ACTIVE | Final recovery pack report with cohesion score and go/no-go recommendation |

---

## Quick Reference — All Artifacts by Directory

### Root
```
README.md                     ACTIVE — Project overview
package.json                  ACTIVE — Workspace config, turbo scripts
turbo.json                    ACTIVE — Turborepo task pipeline
vercel.json                   ACTIVE — Vercel build configuration
```

### docs/
```
ARCHITECTURE.md               ACTIVE — System architecture (619 lines)
ARCHITECTURE_ALIGNMENT.md     ACTIVE — Consistency verification report
BRAND_GUIDELINES.md           ACTIVE — Brand identity & visual system
COMPONENT_LIBRARY.md          ACTIVE — Shared component API reference
DEMO_STANDARD.md              ACTIVE — Matrix Demo Standard v2.0 (Lean)
DESIGN_SYSTEM.md              ACTIVE — Design token system & integration
DOCUMENTATION_STANDARD.md     ACTIVE — DDD standard & enforcement
MASTER_INDEX.md               ACTIVE — (this file)
MATRIX_DIRECTIVE.md           ACTIVE — 7 operating rules
NORTH_STAR.md                 ACTIVE — Vision, mission, principles
PRODUCT_HEALTH_DASHBOARD.md   ACTIVE — Live metrics dashboard
PROJECT_HEALTH_CHECK.md       ACTIVE — Full health audit
PROJECT_STATUS.md             ACTIVE — Current project state
QA_ACCEPTANCE.md              ACTIVE — Pre/post-deployment checklists
RECOVERY_ALIGNMENT_REPORT.md  ACTIVE — Final recovery report
RELEASE_CHECKLIST.md          ACTIVE — Pre-release verification
SPRINT_01_REPORT.md           ACTIVE — Sprint 01 retrospective
TECHNICAL_DEBT_REGISTER.md    ACTIVE — Technical debt tracking
SPRINT_02_REPORT.md           PLANNED
SPRINT_03_REPORT.md           PLANNED
SPRINT_04_REPORT.md           PLANNED
```

### docs/brand/
```
BRAND_MANIFESTO.md            ACTIVE — Mission 002: Brand identity & manifesto
TONE_OF_VOICE.md              ACTIVE — Mission 002: Tone of voice guidelines
TRUST_SIGNALS.md              ACTIVE — Mission 002: Trust signals & credibility
```

### docs/missions/
```
MISSION_003_REPORT.md         ACTIVE — Mission 003: Premium Landing Experience
```

### playbooks/
```
ANALYTICS_PLAN.md             ACTIVE (plan) — Analytics architecture
COPYWRITING_GUIDE.md          ACTIVE — Brand voice & copywriting
SEO_PLAYBOOK.md               PLANNED
DEPLOYMENT_PLAYBOOK.md        PLANNED
```

### decisions/
```
decisions_log.md              ACTIVE — 46 decisions logged
```

### packages/design-system/
```
tokens.css                    ACTIVE — 163 CSS custom properties
```

### packages/ui/src/
```
index.ts                      ACTIVE — Barrel export (10 components)
components/Navbar.tsx          IMPLEMENTED — Fixed navigation + mobile menu
components/Footer.tsx          IMPLEMENTED — Multi-column footer
components/HeroSection.tsx     IMPLEMENTED — Full-viewport hero with animations
components/SectionHeader.tsx   IMPLEMENTED — Animated section titles
components/PillarCard.tsx      IMPLEMENTED — Business pillar card
components/CTASection.tsx      IMPLEMENTED — CTA banner
components/ProcessTimeline.tsx IMPLEMENTED — Step-by-step timeline
components/TechnologyCloud.tsx IMPLEMENTED — Tech tag cloud
components/ContactForm.tsx     IMPLEMENTED — Contact prompt (CTA, not full form)
components/TestimonialCard.tsx IMPLEMENTED — Testimonial card
components/FAQSection.tsx      PLANNED — Accordion FAQ
components/PartnersSection.tsx PLANNED — Partner logo grid/carousel
```

### apps/main/src/components/ (app-level components)
```
ClientNeedsSection.tsx         ACTIVE — Mission 002: Client needs/problem cards (7 pillars)
```

### apps/ (8 apps)
```
main/                          DEPLOYED — mulagroup.eu (full content, 15 sections)
construction/                  DEPLOYED — construction.mulagroup.eu (full content)
ai/                            DEPLOYED — ai.mulagroup.eu (scaffold)
digital/                       DEPLOYED — digital.mulagroup.eu (scaffold)
ecommerce/                     DEPLOYED — ecommerce.mulagroup.eu (scaffold)
marketing/                     DEPLOYED — marketing.mulagroup.eu (scaffold)
cyber/                         DEPLOYED — cyber.mulagroup.eu (scaffold)
innovation/                    DEPLOYED — innovation.mulagroup.eu (scaffold)
```

---

## Count Summary

| Category | ACTIVE | PLANNED | TOTAL |
|---|---|---|---|
| Documentation files (docs/) | 18 (+ 3 planned sprint reports) | 3 | 21 |
| Playbooks | 2 | 2 | 4 |
| Decisions | 1 | 0 | 1 |
| Shared components | 10 | 2 | 12 |
| App-level components | 1 | 0 | 1 |
| Brand docs (docs/brand/) | 3 | 0 | 3 |
| Mission reports (docs/missions/) | 1 | 0 | 1 |
| Design system files | 1 (tokens.css) | 0 | 1 |
| Apps deployed | 8 | 0 | 8 |
| **TOTAL ARTIFACTS** | **45** | **7** | **52** |
