# Mula Platform

Monorepo grupy technologicznej Mula Group — 8 serwisów, 1 kod, 0 WordPressa.

## Architektura

```
mula-platform/
├── apps/
│   ├── main/           → mulagroup.eu          (landing page)
│   ├── construction/   → construction.mulagroup.eu (hale stalowe)
│   ├── ai/             → ai.mulagroup.eu       (AI i automatyzacja)
│   ├── digital/        → digital.mulagroup.eu  (transformacja cyfrowa)
│   ├── ecommerce/      → ecommerce.mulagroup.eu(handel internetowy)
│   ├── marketing/      → marketing.mulagroup.eu(marketing i media)
│   ├── cyber/          → cyber.mulagroup.eu    (cyberbezpieczeństwo)
│   └── innovation/     → innovation.mulagroup.eu(innowacje i startupy)
└── packages/
    ├── design-system/  → @mula/design-system (163 CSS custom properties)
    └── ui/             → @mula/ui (10 implemented, 2 planned: FAQSection, PartnersSection)
```

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (custom theme, dark-first)
- **Framer Motion** (animacje)
- **Turborepo** (monorepo orchestration)
- **Vercel** (hosting)

## Hosting

| Domena | Port dev | Status |
|---|---|---|
| mulagroup.eu | 3001 | Deployed |
| construction.mulagroup.eu | 3002 | Deployed |
| ai.mulagroup.eu | 3003 | Deployed |
| digital.mulagroup.eu | 3004 | Deployed |
| ecommerce.mulagroup.eu | 3005 | Deployed |
| marketing.mulagroup.eu | 3006 | Deployed |
| cyber.mulagroup.eu | 3007 | Deployed |
| innovation.mulagroup.eu | 3008 | Deployed |

## Shared UI (@mula/ui)

10 implemented components + 2 planned:

| # | Component | Status |
|---|---|---|
| 1 | Navbar | Implemented |
| 2 | Footer | Implemented |
| 3 | HeroSection | Implemented |
| 4 | SectionHeader | Implemented |
| 5 | PillarCard | Implemented |
| 6 | CTASection | Implemented |
| 7 | ProcessTimeline | Implemented |
| 8 | TechnologyCloud | Implemented |
| 9 | ContactForm | Implemented |
| 10 | TestimonialCard | Implemented |
| 11 | FAQSection | Planned |
| 12 | PartnersSection | Planned |

## Project Artifacts

**43 total artifacts** (36 ACTIVE + 7 PLANNED): 17 documentation files, 4 playbooks, 1 decisions log, 12 components, 1 design system file, 8 apps.

Full inventory at → [docs/MASTER_INDEX.md](docs/MASTER_INDEX.md)

## Sprint & Pack History

| Milestone | Status |
|---|---|
| Sprint 01 — Foundation | Completed |
| Sprint 02 — Content & CMS | Planned |
| Sprint 03 — Subdomain Apps | Planned |
| Sprint 04 — Analytics & Optimization | Planned |
| Enterprise Pack 01 — Documentation & Process | Completed |
| Enterprise Pack 02 — Brand & Analytics | Completed |
| Enterprise Pack 03 — Test & CI/CD | Planned |
| Enterprise Pack 04 — Security & Compliance | Planned |
| Mission 001 — Full Platform Bootstrap | Completed |

## Quick Start

```bash
npm install          # Install all dependencies
npm run dev          # Start all apps in dev mode (Turborepo)
npm run build        # Build all apps
cd apps/main && npm run dev  # Run single app
```

## Deployment (Vercel)

```bash
vercel               # Deploy with auto-detection
vercel --prod        # Production deployment
```
