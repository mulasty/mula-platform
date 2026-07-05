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
    └── ui/             → @mula/ui (10 współdzielonych komponentów)
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
| mulagroup.eu | 3001 | ✅ Deployed |
| construction.mulagroup.eu | 3002 | ✅ Built |
| ai.mulagroup.eu | 3003 | ✅ Built |
| digital.mulagroup.eu | 3004 | ✅ Built |
| ecommerce.mulagroup.eu | 3005 | ✅ Built |
| marketing.mulagroup.eu | 3006 | ✅ Built |
| cyber.mulagroup.eu | 3007 | ✅ Built |
| innovation.mulagroup.eu | 3008 | ✅ Built |

## Shared UI (@mula/ui)

10 reusable components:
Navbar, Footer, HeroSection, SectionHeader, PillarCard, CTASection, ProcessTimeline, TechnologyCloud, ContactForm, TestimonialCard

## Development

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
