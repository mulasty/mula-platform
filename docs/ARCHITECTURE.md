# Mula Platform — Architecture Documentation

**Version:** 1.0.0
**Last updated:** 2026-07-05

---

## 1. Executive Summary

Mula Platform is a TypeScript monorepo powering the Mula Group technology ecosystem. Eight Next.js 16 applications — one per business pillar — share a single codebase, a unified design system, and an automated deployment pipeline. The architecture prioritizes component reuse, static-first data delivery, and zero-infrastructure content management.

---

## 2. Monorepo Structure

```
mula-platform/
├── apps/                          # 8 Next.js applications (App Router)
│   ├── main/                      # @mula/main       → mulagroup.eu (landing)
│   ├── construction/              # @mula/construction → construction.mulagroup.eu
│   ├── ai/                        # @mula/ai         → ai.mulagroup.eu
│   ├── digital/                   # @mula/digital    → digital.mulagroup.eu
│   ├── ecommerce/                 # @mula/ecommerce  → ecommerce.mulagroup.eu
│   ├── marketing/                 # @mula/marketing  → marketing.mulagroup.eu
│   ├── cyber/                     # @mula/cyber      → cyber.mulagroup.eu
│   └── innovation/                # @mula/innovation → innovation.mulagroup.eu
│
├── packages/                      # Shared packages
│   └── ui/                        # @mula/ui — 10 reusable React components
│
├── decisions/                     # Architectural Decision Records
│   └── decisions_log.md
│
├── docs/                          # Project documentation
│   ├── PROJECT_STATUS.md
│   ├── SPRINT_01_REPORT.md
│   ├── DOCUMENTATION_STANDARD.md
│   ├── RELEASE_CHECKLIST.md
│   └── ARCHITECTURE.md           # (this file)
│
├── playbooks/                     # Operational guides
│   ├── COPYWRITING_GUIDE.md
│   └── ANALYTICS_PLAN.md
│
├── package.json                   # Root: workspaces config, turbo scripts
├── turbo.json                     # Turborepo task pipeline
├── vercel.json                    # Vercel build configuration (root override)
└── README.md                      # Project overview
```

### 2.1 Workspace Configuration

The root `package.json` declares npm workspaces:

```json
"workspaces": ["apps/*", "packages/*"]
```

All apps use the package manager `npm@11.12.1` and depend on `turbo@^2.5.0` and `typescript@^5.0.0` at the root level. Each app declares its own runtime dependencies (`next`, `react`, `framer-motion`, `lucide-react`, `tailwindcss`) and uses `@mula/ui` via workspace protocol (`"@mula/ui": "*"`).

---

## 3. Application Architecture

### 3.1 App Structure Pattern (every app)

```
apps/[name]/
├── package.json              # @mula/[name], scripts (dev/build/start), deps
├── tsconfig.json             # Extends shared TypeScript config
├── next.config.ts            # Next.js configuration
├── vercel.json               # App-specific Vercel config (per project)
├── postcss.config.mjs        # Tailwind CSS v4 PostCSS plugin
├── next-env.d.ts             # Auto-generated Next.js type declarations
└── src/
    ├── app/
    │   ├── layout.tsx        # Root layout: metadata, JSON-LD, <html lang="pl">
    │   ├── page.tsx          # Home page: composes all sections in order
    │   ├── globals.css       # Tailwind imports + CSS custom properties
    │   ├── sitemap.ts        # Next.js MetadataRoute.Sitemap export
    │   └── robots.ts         # Next.js MetadataRoute.Robots export
    ├── components/
    │   ├── Navbar.tsx        # App-specific navigation
    │   ├── Footer.tsx        # App-specific footer
    │   ├── HeroSection.tsx   # App-specific hero
    │   ├── [Section].tsx     # One file per page section (7-10 per app)
    │   └── ...
    └── lib/
        ├── data.ts           # All static content (single source of truth)
        ├── types.ts          # TypeScript interfaces for data structures
        └── utils.ts          # Shared utility functions (cn(), formatters, etc.)
```

### 3.2 Port Allocation (Development)

| App | Port | Domain |
|---|---|---|
| main | 3001 | mulagroup.eu |
| construction | 3002 | construction.mulagroup.eu |
| ai | 3003 | ai.mulagroup.eu |
| digital | 3004 | digital.mulagroup.eu |
| ecommerce | 3005 | ecommerce.mulagroup.eu |
| marketing | 3006 | marketing.mulagroup.eu |
| cyber | 3007 | cyber.mulagroup.eu |
| innovation | 3008 | innovation.mulagroup.eu |

Ports are set via `next dev --port XXXX` in each app's `package.json` scripts. Ports are sequential (3001-3008) for predictability.

### 3.3 App Composition Model

Every app follows the same composition pattern in `page.tsx`:

```typescript
export default function HomePage() {
  return (
    <>
      <Navbar />           {/* App-specific navigation */}
      <main>
        <HeroSection />    {/* Above-fold, primary CTA */}
        <SectionOne />     {/* Content sections in order */}
        <CTASection />     {/* Interspersed CTAs */}
        <SectionTwo />
        <ContactSection /> {/* Always last before footer */}
      </main>
      <Footer />           {/* App-specific footer */}
    </>
  )
}
```

Sections are rendered server-side by default (no `'use client'`). Interactive components (Navbar, Hero, forms) opt into client rendering with the `'use client'` directive. Framer Motion animations are client-only and wrapped in `'use client'` components.

---

## 4. Shared UI Package Design (`@mula/ui`)

### 4.1 Package Structure

```
packages/ui/
├── package.json            # name: "@mula/ui", exports map
├── tsconfig.json           # TypeScript configuration
└── src/
    ├── index.ts            # Barrel export (re-exports all components)
    └── components/
        ├── Navbar.tsx
        ├── Footer.tsx
        ├── HeroSection.tsx
        ├── SectionHeader.tsx
        ├── PillarCard.tsx
        ├── CTASection.tsx
        ├── ProcessTimeline.tsx
        ├── TechnologyCloud.tsx
        ├── ContactForm.tsx
        └── TestimonialCard.tsx
```

### 4.2 Export Strategy

The package uses TypeScript source exports — no build step, no bundler. Next.js resolves `.ts` and `.tsx` files directly via its native TypeScript support:

```json
"exports": {
  ".": "./src/index.ts",
  "./*": "./src/*.tsx"
}
```

This eliminates the need for a `tsup`, `swc`, or `babel` build step on the shared package. Every change is immediately available to consuming apps on the next hot reload.

### 4.3 Component Design Principles

1. **Data-agnostic** — Shared components accept data via props; they never import from `data.ts` directly. Each app wraps them or passes its own data.
2. **Styling via className merge** — Components accept an optional `className` prop merged with defaults using `cn()` (the Tailwind `clsx`-style utility).
3. **Animation presets** — Components expose Framer Motion variant overrides via props where animation is configurable.
4. **Accessible by default** — All interactive elements have `aria-label`, keyboard navigation, and focus indicators.
5. **No side effects** — Components are pure render functions; data fetching, analytics, and event tracking happen in the consuming app.

### 4.4 Current Inventory

| # | Component | Purpose | Consumed By |
|---|---|---|---|
| 1 | Navbar | Fixed navigation with mobile hamburger menu | All 8 apps (wrapped per app) |
| 2 | Footer | Multi-column link footer | All 8 apps (wrapped per app) |
| 3 | HeroSection | Full-width hero with animated background | All 8 apps (pass data as props) |
| 4 | SectionHeader | Animated section title with optional subtitle | All section-level components |
| 5 | PillarCard | Clickable card with icon, description, color | main app PillarsGrid |
| 6 | CTASection | Call-to-action banner with variant styling | main app (interspersed) |
| 7 | ProcessTimeline | Horizontal/vertical step-by-step timeline | main, construction apps |
| 8 | TechnologyCloud | Tag cloud of technology items | main app |
| 9 | ContactForm | Form with client-side validation | All apps with contact sections |
| 10 | TestimonialCard | Client testimonial card with quote attribution | main app TestimonialsSection |

### 4.5 App vs. Shared Resolution

When an app needs behavior beyond the shared component, it creates an app-local component with the same name that:
1. Imports the shared component
2. Wraps it with app-specific data binding, analytics hooks, or layout containers
3. Re-exports with the same component name

Example: `apps/main/src/components/Navbar.tsx` imports `NAV_ITEMS` from its own `data.ts` and renders custom navigation, while `apps/construction/src/components/Navbar.tsx` uses construction-specific nav items. Neither depends on `packages/ui/src/components/Navbar.tsx` directly because navigation structure differs per app.

---

## 5. Data Flow

### 5.1 Static Content Architecture (Current State)

All content is static and defined in TypeScript modules:

```
apps/[name]/src/lib/
├── types.ts    → TypeScript interfaces and type aliases
├── data.ts     → Static data exports (constants)
└── utils.ts    → Pure utility functions
```

**Flow:**

```
types.ts (interfaces)
    ↓ imported by
data.ts (typed constants: COMPANY, PILLARS, PROCESS_STEPS, etc.)
    ↓ imported by
components/[Section].tsx (render data into JSX)
    ↓ composed in
app/page.tsx (orchestrate sections in render order)
    ↓ rendered with
app/layout.tsx (metadata, JSON-LD, global styles)
```

### 5.2 Key Data Exports (main app)

| Export | Type | Feeds | Sections |
|---|---|---|---|
| `COMPANY` | `object` | Brand identity, legal info, copy | Navbar, Hero, About, Footer, layout (SEO) |
| `NAV_ITEMS` | `NavItem[]` | Navigation links | Navbar, Footer |
| `PILLARS` | `Pillar[]` | 7 business domains | PillarsGrid |
| `PROCESS_STEPS` | `ProcessStep[]` | 5-step methodology | ProcessSection |
| `MULA_METHOD` | `MulaMethodItem[]` | Acceleration framework | MulaMethod |
| `TECH_STACK` | `TechItem[]` | Technology list | TechnologyCloud |
| `PRODUCTS` | `Product[]` | In-development products | ProductsPreview |
| `CASE_STUDIES` | `CaseStudy[]` | Client success stories | TestimonialsSection |

### 5.3 Future Data Flow (Sanity CMS)

When Sanity CMS is integrated (planned Sprint 02-03):

```
Sanity CMS (hosted headless CMS)
    ↓ GROQ queries / API
apps/[name]/src/lib/sanity.ts (Sanity client, query functions)
    ↓ async data fetching
components/[Section].tsx (React Server Components fetch data)
    ↓ server-rendered HTML
Browser (hydrates with client interactivity where needed)
```

Static `data.ts` will remain as fallback/default content for build-time generation, with Sanity providing live editable content at runtime or ISR revalidation.

---

## 6. Component Hierarchy (Main App)

```
RootLayout (layout.tsx)
├── <html lang="pl" className="dark">
├── <head>
│   ├── <meta> tags (title, description, OG, Twitter)
│   ├── <link> favicon variants
│   └── <script type="application/ld+json"> (Organization schema)
└── <body>
    └── HomePage (page.tsx)
        ├── Navbar                    # Fixed top, scroll-aware blur
        ├── <main>
        │   ├── HeroSection           # Full viewport, mouse-follow blobs, stats
        │   ├── AboutSection          # Company story, founder, values
        │   ├── PillarsGrid           # 7-column grid → stacked on mobile
        │   ├── CTASection (primary)  # "Chcesz dowiedzieć się więcej?"
        │   ├── ProcessSection        # 5-step horizontal timeline → vertical on mobile
        │   ├── CTASection (process)  # "Zobacz jak pracujemy"
        │   ├── MulaMethod            # 3-column acceleration framework
        │   ├── WhyUsSection          # Animated stat counters
        │   ├── TechnologyCloud       # Tag cloud (3 columns → 1 on mobile)
        │   ├── ProductsPreview       # 4 product cards (2x2 grid → 1 column)
        │   ├── PartnersSection       # Partner logos/links
        │   ├── TestimonialsSection   # Case study cards
        │   ├── FAQSection            # Accordion FAQ
        │   └── ContactSection        # Contact form + booking copy
        └── Footer                    # Multi-column link footer
        └── StickyCTA                 # Fixed bottom bar, appears on scroll
```

### 6.1 Animation Strategy

| Animation Type | Implementation | Location |
|---|---|---|
| Mouse-follow blobs | `useEffect` + `motion.div` with spring physics | HeroSection |
| Floating particles | CSS `@keyframes` via Framer `motion.div` | HeroSection |
| Scroll-triggered reveal | `motion.div` with `whileInView` + `viewport` config | All content sections |
| Stagger children | `containerVariants` + `staggerChildren` | HeroSection, WhyUsSection |
| Hover micro-interactions | `whileHover` / `whileTap` on interactive elements | CTAs, PillarCards, nav links |
| Page transitions | (planned) `AnimatePresence` on route changes | app/layout.tsx (future) |

---

## 7. Build Pipeline

### 7.1 Local Development

```
npm run dev
    ↓
turbo dev
    ↓ (parallel, one process per app)
next dev --port 3001   (main)
next dev --port 3002   (construction)
next dev --port 3003   (ai)
...                    (all 8 apps)
    ↓
Turborepo coordinates: shared cache, dependency resolution
@mula/ui changes trigger hot reload in all consumers
```

### 7.2 Production Build

```
npm run build
    ↓
turbo build
    ↓
Step 1: @mula/ui builds (if it had a build step — currently no-op)
    ↓
Step 2: All 8 apps build in parallel (dependsOn: ["^build"])
    ↓
Each app:
  next build
  → .next/ output (static HTML + JS bundles + RSC payload)
    ↓
Turborepo caches: .next/** (excluding .next/cache/**)
Cache keyed on: source files + dependencies + turbo.json
```

### 7.3 Vercel Deployment Pipeline

```
Git push → main
    ↓
Vercel detects monorepo (8 projects, 1 repo)
    ↓
Each project has its own vercel.json specifying:
  - Root directory (e.g., apps/main)
  - Build command (next build OR npx turbo build --filter=@mula/[app])
  - Output directory (.next)
  - Install command (npm install at root)
    ↓
Vercel builds in isolated environment
    ↓
Deploys to edge network:
  - Static assets → Vercel Edge CDN
  - SSR pages → Vercel Serverless Functions
  - ISR pages → Vercel Edge Cache with revalidation
    ↓
Custom domains resolve via Vercel DNS:
  mulagroup.eu → main project
  construction.mulagroup.eu → construction project
  ... (all 8 subdomains)
```

### 7.4 Turborepo Configuration (`turbo.json`)

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],       // Build dependencies first
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]         // Lint dependencies first
    },
    "dev": {
      "cache": false,                // Never cache dev server
      "persistent": true             // Long-running process
    },
    "clean": {
      "cache": false                 // Never cache cleanup
    }
  }
}
```

---

## 8. DNS / Hosting Architecture

### 8.1 Domain Structure

```
mulagroup.eu                     → Vercel Project: mula-main
├── construction.mulagroup.eu    → Vercel Project: mula-construction
├── ai.mulagroup.eu              → Vercel Project: mula-ai
├── digital.mulagroup.eu         → Vercel Project: mula-digital
├── ecommerce.mulagroup.eu       → Vercel Project: mula-ecommerce
├── marketing.mulagroup.eu       → Vercel Project: mula-marketing
├── cyber.mulagroup.eu           → Vercel Project: mula-cyber
└── innovation.mulagroup.eu      → Vercel Project: mula-innovation
```

### 8.2 DNS Configuration

```
Apex domain (mulagroup.eu):
  A record → Vercel edge IP (76.76.21.21)

Subdomains (*.mulagroup.eu):
  CNAME record → cname.vercel-dns.com
  (wildcard resolves all 7 subdomains from a single record)
```

### 8.3 SSL/TLS

Vercel auto-provisions SSL certificates via Let's Encrypt for all custom domains. Certificates are renewed automatically before expiration. All 8 domains serve exclusively over HTTPS with HTTP → HTTPS 301 redirect.

### 8.4 Edge Network

Vercel's global edge network caches static assets (JS bundles, CSS, images, fonts) at the CDN edge. Server-rendered pages execute at the nearest edge region to the user. For Polish visitors (primary audience), the nearest edge region is typically Warsaw or Frankfurt.

---

## 9. Design System

### 9.1 CSS Custom Properties (Tailwind v4 Theme)

```css
--mula-bg:            #0a0a0a    /* Page background */
--mula-surface:       #1a1a2e    /* Card / elevated surface */
--mula-border:        rgba(255,255,255,0.06)   /* Subtle borders */
--mula-accent:        #3b82f6    /* Primary blue */
--mula-accent-light:  #60a5fa    /* Lighter blue for hover/gradients */
--mula-purple:        #8b5cf6    /* Secondary purple */
--mula-text:          #ffffff    /* Primary text */
--mula-text-muted:    rgba(255,255,255,0.7)    /* Secondary text */
--mula-text-dim:      rgba(255,255,255,0.4)    /* Tertiary/muted text */
--mula-success:       #10b981    /* Success/positive state */
--mula-warning:       #f59e0b    /* Warning/attention state */
```

### 9.2 Typography

- **Font stack:** Native system font (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- **Language:** Polish-optimized (supports ąęćłńóśźż characters, proper `lang="pl"` attribute)
- **Scale:** Tailwind defaults (`text-xs` through `text-6xl`) with responsive modifiers
- **Rendering:** `antialiased` on `<body>`

### 9.3 Responsive Breakpoints

| Breakpoint | Min Width | Target Device |
|---|---|---|
| (default) | 0px | Mobile (portrait) |
| `sm` | 640px | Mobile (landscape) |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop (small) |
| `xl` | 1280px | Desktop (standard) |
| `2xl` | 1536px | Desktop (wide) |

Navigation collapses to hamburger below `md`. Grids switch from multi-column to single-column below `md`. Typography scales proportionally.

---

## 10. External Dependencies

### 10.1 Runtime Dependencies (per app)

| Package | Version | Purpose |
|---|---|---|
| next | ^16.0.0 | React framework (App Router) |
| react | ^19.0.0 | UI library |
| react-dom | ^19.0.0 | React DOM renderer |
| framer-motion | ^12.0.0 | Animation library |
| lucide-react | ^1.0.0 | Icon library (tree-shakeable) |
| tailwindcss | ^4.0.0 | Utility-first CSS framework |
| @tailwindcss/postcss | ^4.0.0 | Tailwind v4 PostCSS plugin |
| @mula/ui | * (workspace) | Shared UI components |

### 10.2 Dev Dependencies (monorepo root)

| Package | Version | Purpose |
|---|---|---|
| turbo | ^2.5.0 | Monorepo build orchestrator |
| typescript | ^5.0.0 | Type checker |

### 10.3 Platform Dependencies

| Platform | Purpose |
|---|---|
| Vercel | Hosting, deployment, edge network, analytics |
| GitHub | Source control, CI trigger via Vercel Git integration |
| npm | Package registry and workspace management |
| (planned) Sanity | Headless CMS for dynamic content |

---

## 11. Security Architecture

### 11.1 Content Security

- All user-facing pages are static or server-rendered — no client-side API calls to untrusted origins
- `dangerouslySetInnerHTML` used only for JSON-LD script injection (trusted static content)
- No eval(), no inline event handlers
- Forms use client-side validation; server-side validation enforced at API endpoint (when implemented)
- CSP headers planned but not yet configured (low risk for static sites)

### 11.2 Dependency Security

- Dependencies pinned with `^` ranges in `package.json`; `package-lock.json` locks exact versions
- Regular `npm audit` runs recommended (not yet automated)
- No runtime dependency on user-controlled npm packages — all imports are from workspace or well-known packages

### 11.3 Infrastructure Security

- Vercel handles DDoS protection, WAF, and edge-level security
- SSL/TLS enforced via auto-provisioned certificates
- Environment variables stored in Vercel project settings, never committed
- `.env*` and `.vercel` excluded from Git via `.gitignore`

---

## 12. Future Architecture Considerations

### 12.1 Sanity CMS Integration (Sprint 02-03)
- Add `apps/main/src/lib/sanity.ts` client
- Create Sanity schemas matching current `types.ts` interfaces
- Migrate `data.ts` content to Sanity
- Implement ISR with `revalidate` for dynamic pages (blog, case studies)

### 12.2 Shared App Template
- Extract common app scaffold into `packages/app-template/` or a Yeoman/generator script
- New apps (`apps/finance`, `apps/hr`, etc.) can be generated with `npx turbo gen`

### 12.3 Testing Framework (Sprint 03+)
- Vitest for unit tests (`src/lib/utils.test.ts`, component unit tests)
- Playwright or Cypress for E2E tests (smoke test all 8 domains)
- Lighthouse CI for automated performance budgets

### 12.4 CI/CD Beyond Vercel Git Integration
- GitHub Actions for pre-deploy checks (lint, type check, build, Lighthouse)
- Automated dependency updates via Renovate or Dependabot
- Preview deployments for PR branches

### 12.5 Internationalization (i18n)
- When expanding beyond Poland: `next-intl` or `next-i18next` for route-based locales
- URL structure: `mulagroup.eu/en/...`, `mulagroup.eu/de/...`
- Content translation workflow via Sanity localization

---

## 13. Diagrams

### 13.1 Request Flow (Runtime)

```
User Browser
    │
    ├─ DNS lookup ─→ Vercel Edge DNS ─→ Returns edge IP
    │
    ├─ HTTPS request ─→ Vercel Edge CDN
    │                       │
    │                       ├─ Static asset? ─→ Serve from edge cache
    │                       │
    │                       └─ Dynamic page? ─→ Vercel Serverless Function
    │                                               │
    │                                               ├─ RSC render (React Server Components)
    │                                               ├─ Static generation (SSG/ISR)
    │                                               └─ Return HTML + RSC payload
    │
    └─ Browser renders HTML, hydrates client components
```

### 13.2 Build Time Flow

```
Developer commits code
    ↓
Git push → GitHub
    ↓
Vercel detects push on main branch
    ↓
Vercel runs: npm install (root)
    ↓
Vercel runs: npx turbo build --filter=@mula/[app]
    ↓
Turborepo resolves dependency graph:
  @mula/ui → no build step (source exports)
  @mula/[app] → dependsOn: ^build (triggers @mula/ui first)
    ↓
Each app: next build → .next/
    ↓
Vercel deploys .next/ output to edge
    ↓
DNS updates → live at production domain
```

---

## 14. Glossary

| Term | Definition |
|---|---|
| **App** | A Next.js application in `apps/`, corresponds to one subdomain and one business pillar |
| **Package** | A shared module in `packages/`, consumed by apps via workspace protocol |
| **Section** | A semantic `<section>` on a page, rendered by a dedicated component |
| **Pillar** | One of the 7 business domains of Mula Group (AI, Digital, E-commerce, Marketing, Cyber, Construction, Innovation) |
| **Mula Method** | The 3-element acceleration framework: Technologia, Automatyzacja, AI |
| **Turbo** | Turborepo — build orchestrator for monorepos |
| **ISR** | Incremental Static Regeneration — Next.js feature for revalidating static pages |
| **RSC** | React Server Components — server-rendered React components |
| **JSON-LD** | JSON Linked Data — structured data format for search engines |
| **CDN** | Content Delivery Network — Vercel's global edge cache |
