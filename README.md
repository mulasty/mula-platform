# Mula Platform

[![CI](https://github.com/mulasty/mula-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/mulasty/mula-platform/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-ef4444)](https://turbo.build/)
[![License](https://img.shields.io/badge/License-Private-red)]()

> **This is the main source of truth for Mula Group platform development.**  
> Legacy reference: [`mulasty/mulagroup-landing`](https://github.com/mulasty/mulagroup-landing) (archived)

---

## About

**Mula Group** is a technology group that helps businesses grow through AI, automation, software, e-commerce, marketing, cybersecurity, and engineering.

This monorepo powers the entire Mula Group digital ecosystem — **8 services, 1 codebase, 0 WordPress.**

**Production:** [https://mulagroup.eu](https://mulagroup.eu)

---

## Architecture

```
mula-platform/
├── apps/
│   ├── main/           → mulagroup.eu              Landing page
│   ├── ai/             → ai.mulagroup.eu            AI & Automation
│   ├── digital/        → digital.mulagroup.eu       Digital Transformation
│   ├── ecommerce/      → ecommerce.mulagroup.eu     E-commerce
│   ├── marketing/      → marketing.mulagroup.eu     Marketing & Media
│   ├── cyber/          → cyber.mulagroup.eu         Cybersecurity
│   ├── construction/   → construction.mulagroup.eu  Construction & Engineering
│   └── innovation/     → innovation.mulagroup.eu    Innovation & Startups
├── packages/
│   ├── ui/             → @mula/ui                   10 shared components
│   └── design-system/  → @mula/design-system        163 CSS custom properties
├── docs/               → 60+ project documents
├── playbooks/          → Copywriting & analytics guides
├── decisions/          → Architecture Decision Records
└── .github/workflows/  → CI pipeline
```

## 7 Competencies

| # | Pillar | Subdomain | Color |
|---|---|---|---|
| 1 | Technologie AI | [ai.mulagroup.eu](https://ai.mulagroup.eu) | `#3b82f6` |
| 2 | Transformacja Cyfrowa | [digital.mulagroup.eu](https://digital.mulagroup.eu) | `#8b5cf6` |
| 3 | E-commerce | [ecommerce.mulagroup.eu](https://ecommerce.mulagroup.eu) | `#f59e0b` |
| 4 | Marketing i Media | [marketing.mulagroup.eu](https://marketing.mulagroup.eu) | `#ec4899` |
| 5 | Cyberbezpieczeństwo | [cyber.mulagroup.eu](https://cyber.mulagroup.eu) | `#10b981` |
| 6 | Budownictwo i Inżynieria | [construction.mulagroup.eu](https://construction.mulagroup.eu) | `#ef4444` |
| 7 | Innowacje i Startup Studio | [innovation.mulagroup.eu](https://innovation.mulagroup.eu) | `#06b6d4` |

Full competency definitions → [`docs/COMPETENCIES.md`](docs/COMPETENCIES.md)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Monorepo | Turborepo 2.x |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
| Package Manager | npm |

---

## Shared Components (`@mula/ui`)

| # | Component | Type |
|---|---|---|
| 1 | `Navbar` | Navigation |
| 2 | `Footer` | Layout |
| 3 | `HeroSection` | Hero |
| 4 | `SectionHeader` | Typography |
| 5 | `PillarCard` | Card |
| 6 | `CTASection` | CTA |
| 7 | `ProcessTimeline` | Timeline |
| 8 | `TechnologyCloud` | Cloud |
| 9 | `ContactForm` | Form |
| 10 | `TestimonialCard` | Card |
| 11 | `FAQSection` | Planned |
| 12 | `PartnersSection` | Planned |

Component documentation → [`docs/COMPONENT_LIBRARY.md`](docs/COMPONENT_LIBRARY.md)

Agent instructions → [`AGENTS.md`](AGENTS.md)

---

## Domain Map

| App | Domain | Vercel Project | Dev Port |
|---|---|---|---|
| main | mulagroup.eu | mula-platform | 3001 |
| construction | construction.mulagroup.eu | mula-construction | 3002 |
| ai | ai.mulagroup.eu | mula-ai-tech | 3003 |
| digital | digital.mulagroup.eu | mula-digital | 3004 |
| ecommerce | ecommerce.mulagroup.eu | mula-ecom | 3005 |
| marketing | marketing.mulagroup.eu | mula-marketing | 3006 |
| cyber | cyber.mulagroup.eu | mula-cyber | 3007 |
| innovation | innovation.mulagroup.eu | mula-innovation | 3008 |

Full domain audit → [`docs/recovery/VERCEL_DOMAIN_AUDIT.md`](docs/recovery/VERCEL_DOMAIN_AUDIT.md)

---

## Continuous Integration

Every push and pull request to `master` triggers:

| Stage | Command | Blocking |
|---|---|---|
| Install | `npm ci` | Yes |
| Lint | `turbo lint` | Yes |
| Typecheck | `turbo typecheck` | Yes |
| Audit | `npm audit` | No (report only) |
| Build | `turbo build` (9 packages) | Yes |

Workflow → [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

---

## Getting Started

```bash
# Clone
git clone https://github.com/mulasty/mula-platform.git
cd mula-platform

# Install
npm install

# Develop all apps
npm run dev

# Develop single app
cd apps/main && npm run dev

# Build all
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

---

## Project Health

| Metric | Status |
|---|---|
| CI | ![CI](https://github.com/mulasty/mula-platform/actions/workflows/ci.yml/badge.svg) |
| Build (9 packages) | Passing |
| TypeScript | 0 errors |
| Lint | 10/10 packages pass |
| Tests | Vitest + Playwright configured |
| Domains | 9/9 active |
| Documentation | 60+ docs + AGENTS.md |
| Cohesion Score | 94/100 |

Full dashboard → [`docs/PRODUCT_HEALTH_DASHBOARD.md`](docs/PRODUCT_HEALTH_DASHBOARD.md)

---

## Documentation Index

| Section | Key Documents |
|---|---|
| **Strategy** | [NORTH_STAR.md](docs/NORTH_STAR.md) · [MATRIX_DIRECTIVE.md](docs/MATRIX_DIRECTIVE.md) · [decisions_log.md](decisions/decisions_log.md) |
| **Brand** | [BRAND_MANIFESTO.md](docs/brand/BRAND_MANIFESTO.md) · [TONE_OF_VOICE.md](docs/brand/TONE_OF_VOICE.md) · [COMPETENCIES.md](docs/COMPETENCIES.md) |
| **Architecture** | [ARCHITECTURE.md](docs/ARCHITECTURE.md) · [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) · [COMPONENT_LIBRARY.md](docs/COMPONENT_LIBRARY.md) |
| **Quality** | [QA_ACCEPTANCE.md](docs/QA_ACCEPTANCE.md) · [RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md) · [PRODUCT_HEALTH_DASHBOARD.md](docs/PRODUCT_HEALTH_DASHBOARD.md) |
| **Recovery** | [VERCEL_DOMAIN_AUDIT.md](docs/recovery/VERCEL_DOMAIN_AUDIT.md) · [PRODUCTION_CONSOLIDATION_REPORT.md](docs/recovery/PRODUCTION_CONSOLIDATION_REPORT.md) · [TECHNICAL_DEBT_REGISTER.md](docs/TECHNICAL_DEBT_REGISTER.md) |
| **Design** | [GRAPHICS_PIPELINE.md](docs/design/GRAPHICS_PIPELINE.md) · [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) |
| **Playbooks** | [COPYWRITING_GUIDE.md](playbooks/COPYWRITING_GUIDE.md) · [ANALYTICS_PLAN.md](playbooks/ANALYTICS_PLAN.md) |

Full index → [`docs/MASTER_INDEX.md`](docs/MASTER_INDEX.md)

---

## Mission History

| Mission | Description | Status |
|---|---|---|
| Mission 001 | North Star & Platform Bootstrap | ✅ |
| Mission 002 | Brand Authority | ✅ |
| Mission 002.1 | CI Enterprise Upgrade | ✅ |
| Mission 003 | Premium Landing Experience | ✅ |
| Mission 003.1 | Customer Journey Blueprint | ✅ |
| Mission 003.2 | Production Consolidation | ✅ |
| Mission 004 | Premium Graphics System | ✅ |
| Mission 004.R | Graphics Audit & Recovery | ✅ |
| Sprint A | Security & Quality (ESLint, headers, CVE, CI) | ✅ |
| Sprint B | Architecture & Performance | ✅ |
| Sprint C | Content, Brand, SEO, Accessibility | ✅ |
| Sprint D | Documentation, Tests, CI/CD | ✅ |
| Sprint 01-04 | Foundation & Design System | ✅ |
| Enterprise 01-02 | Documentation & Content | ✅ |
| Fix Pack 001 | Architecture Alignment | ✅ |
| Recovery Pack | Source of Truth Consolidation | ✅ |
| CI Fix 001-002 | CI/CD Stabilization | ✅ |

---

## Company

MULA GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ  
KRS: 0001010842 · NIP: 718-216-41-12 · REGON: 524057460  
ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża, Poland  
[info@mulagroup.eu](mailto:info@mulagroup.eu)

---

*Built with the Matrix Multi-Agent System. Deployed on Vercel. Maintained by Mula Group.*
