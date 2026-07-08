# AGENTS.md — Mula Platform

Instructions for AI agents working on the `mulasty/mula-platform` repository.

---

## Project Overview

Mula Platform is a Next.js 16 monorepo (Turborepo) powering the Mula Group digital ecosystem: one landing page (`mulagroup.eu`) plus seven competency subdomains (`ai.`, `digital.`, `ecommerce.`, `marketing.`, `cyber.`, `construction.`, `innovation.`).

- **Language:** Polish (UI copy), English (code, docs, commit messages)
- **Package manager:** npm workspaces
- **Framework:** Next.js 16 App Router + TypeScript 5 + Tailwind CSS v4
- **Monorepo:** Turborepo 2.x
- **Shared packages:** `@mula/ui`, `@mula/design-system`

---

## Quick Start

```bash
# Install dependencies
npm install

# Run all apps in parallel (ports 3001-3008)
npm run dev

# Lint, typecheck, build
npm run lint
npm run typecheck
npm run build
```

Individual apps can be run with `cd apps/<name> && npm run dev`.

---

## Workspace Layout

```
apps/
  main/          → mulagroup.eu (landing page)
  ai/            → ai.mulagroup.eu
  digital/       → digital.mulagroup.eu
  ecommerce/     → ecommerce.mulagroup.eu
  marketing/     → marketing.mulagroup.eu
  cyber/         → cyber.mulagroup.eu
  construction/  → construction.mulagroup.eu
  innovation/    → innovation.mulagroup.eu
packages/
  ui/            → shared React components (@mula/ui)
  design-system/ → CSS tokens (@mula/design-system)
docs/            → product, architecture, and audit docs
playbooks/       → copywriting and analytics guides
```

---

## Development Workflow

1. Prefer **minimal, focused changes**.
2. Keep UI copy in **Polish** unless explicitly requested otherwise.
3. Use shared components from `@mula/ui` when they exist.
4. Import design tokens via `@mula/design-system/tokens.css`.
5. Run `npm run lint`, `npm run typecheck`, and `npm run build` before committing.
6. Do not commit directly to `master` unless explicitly instructed.
7. Write concise English commit messages in the repository style.

---

## Coding Standards

- TypeScript strict mode is enabled.
- Avoid `any`; use explicit types.
- Avoid `Math.random()` during render; use deterministic pseudo-random when needed.
- Use `next/image` for critical images instead of CSS `background-image`.
- Throttle expensive event handlers (e.g., `mousemove`, `scroll`).
- Include accessibility attributes: `aria-expanded`, `aria-controls`, focus-visible styles, skip links.
- Keep components in `apps/<name>/src/components/` or shared in `packages/ui/src/components/`.

---

## Testing

After Sprint D, the project uses:

- **Vitest** for unit tests
- **Playwright** for E2E tests

Run tests with:

```bash
npm run test        # unit tests
npm run test:e2e    # Playwright E2E tests
```

---

## Documentation

Key documents live in `docs/`:

- `docs/ARCHITECTURE.md` — system architecture
- `docs/DESIGN_SYSTEM.md` — design tokens and usage
- `docs/COMPONENT_LIBRARY.md` — shared component catalog
- `docs/PRODUCT_HEALTH_DASHBOARD.md` — current status
- `docs/TECHNICAL_DEBT_REGISTER.md` — open technical debt
- `docs/QA_ACCEPTANCE.md` — quality gates

Update these documents when changing architecture, components, or project status.

---

## Deployment

- Vercel auto-deploys each app from `master`.
- Each app has its own Vercel project.
- CI runs on every push/PR via `.github/workflows/ci.yml`.
- Security headers are configured in each app's `next.config.ts`.

---

## Common Tasks

### Add a new shared component

1. Create the component in `packages/ui/src/components/`.
2. Export it from `packages/ui/src/index.ts`.
3. Add a short entry to `docs/COMPONENT_LIBRARY.md`.

### Add a new page to `apps/main`

1. Create `apps/main/src/app/<route>/page.tsx`.
2. Add the route to `apps/main/src/app/sitemap.ts`.
3. Update internal links if needed.

### Add a new subdomain app

1. Copy an existing app scaffold under `apps/`.
2. Update root `package.json` workspaces (not needed for `apps/*`).
3. Add Vercel project and domain mapping.
4. Update `docs/recovery/VERCEL_DOMAIN_AUDIT.md` and README domain map.

---

*Last updated: 2026-07-08*
