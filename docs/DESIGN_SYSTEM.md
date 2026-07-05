# Mula Platform — Design System

**Version:** 1.0  
**Last updated:** 2026-07-05  
**Status:** Active  
**Package:** `@mula/ui` (packages/ui)  
**Tokens:** `packages/design-system/tokens.css`

---

## Architecture Overview

The Mula Design System is a single-source-of-truth design infrastructure powering all 8 Mula Group subdomain applications. It consists of three layers:

```
┌─────────────────────────────────────────────────┐
│                  APPLICATIONS                    │
│  main │ construction │ ai │ digital │ ecommerce │
│  marketing │ cyber │ innovation                  │
├─────────────────────────────────────────────────┤
│              COMPONENT LIBRARY                   │
│  @mula/ui — 12 shared React components           │
│  TypeScript + Tailwind CSS v4 + Framer Motion    │
├─────────────────────────────────────────────────┤
│               DESIGN TOKENS                      │
│  packages/design-system/tokens.css               │
│  CSS custom properties: colors, spacing, type,   │
│  shadows, z-index, animation, breakpoints        │
└─────────────────────────────────────────────────┘
```

### Design Tokens (`tokens.css`)

The foundation layer. All visual attributes are defined as CSS custom properties on `:root`. Components reference tokens rather than hardcoding values, enabling:

- **Single-source truth** — Change a color once, it propagates everywhere.
- **Theme support** — Light theme defined via `.theme-light` overrides on the same token names.
- **Reduced motion** — All animation durations collapse to `0ms` under `prefers-reduced-motion: reduce`.
- **Consistent scaling** — Spacing, type, and radius scales ensure visual rhythm across all surfaces.

### Component Library (`@mula/ui`)

12 shared React components built on the token layer. Each component is:

- **Framework-specific** — Next.js 16 + React 19, leveraging server/client component boundaries.
- **Animation-aware** — Framer Motion for entrance animations, hover states, and transitions.
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, focus management.
- **Typed** — Full TypeScript interfaces with no `any` in public APIs.

### Applications

Each of the 8 apps (`apps/*`) imports components from `@mula/ui` and composes them with app-specific data and layout. Applications never define their own design tokens — they inherit everything from the shared system.

---

## Token System

### Token Categories

| Category | Prefix | Tokens | Description |
|---|---|---|---|
| Colors | `--mula-*` | 32 | Full palette: primaries, surfaces, text, semantic colors |
| Spacing | `--mula-space-*` | 28 | 0–96 scale (0.125rem through 24rem) |
| Typography | `--mula-text-*`, `--mula-font-*`, `--mula-leading-*`, `--mula-tracking-*` | 28 | Size, weight, line height, letter spacing |
| Border Radius | `--mula-radius-*` | 8 | none through full |
| Shadows | `--mula-shadow-*` | 10 | sm through 2xl, glow variants, inner |
| Z-Index | `--mula-z-*` | 8 | Layering scale: base through tooltip |
| Animation | `--mula-duration-*`, `--mula-ease-*` | 8 | Durations (fast–xslow) and easing curves |
| Breakpoints | `--mula-breakpoint-*` | 5 | sm (640) through 2xl (1536) |
| Layout | `--mula-container-*`, `--mula-header-*`, `--mula-sidebar-*` | 4 | Container max-width, header height, sidebar width |

### Token Usage Pattern

```css
/* COMPONENT — references tokens */
.mula-card {
  background: var(--mula-bg-tertiary);
  border: 1px solid var(--mula-border);
  border-radius: var(--mula-radius-2xl);
  padding: var(--mula-space-6);
  box-shadow: var(--mula-shadow-sm);
  transition: box-shadow var(--mula-duration-fast) var(--mula-ease-default);
}

/* In practice: Tailwind utility classes that map to tokens */
/* bg-mula-surface, border-mula-border, rounded-2xl, p-6, shadow-sm */
```

### Theme Switching

```css
/* Default: dark theme */
:root { --mula-bg-primary: #0a0a0a; }

/* Light theme override */
.theme-light { --mula-bg-primary: #ffffff; }

/* Usage */
<html class="theme-light">  <!-- or leave default for dark -->
```

### Accessibility Hook

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --mula-duration-fast: 0ms;
    --mula-duration-normal: 0ms;
    --mula-duration-slow: 0ms;
    --mula-duration-xslow: 0ms;
  }
}
```

---

## Color System

### Semantic Color Map

```
Primary (Blue)    → CTAs, links, active states, brand emphasis
Secondary (Purple) → Accent highlights, gradient endpoints, AI branding
Background         → Page, section, card surfaces (dark-first)
Text               → Primary, secondary, tertiary, muted, dim hierarchy
Semantic           → Success (green), Warning (amber), Error (red)
Utility            → Border, border-hover, accent aliases
```

### Text Hierarchy

| Token | Contrast Role | Usage |
|---|---|---|
| `--mula-text-primary` | Headline (high) | Section titles, card headings |
| `--mula-text-secondary` | Body (medium) | Default paragraph text |
| `--mula-text-tertiary` | Supporting (low) | Captions, meta, secondary info |
| `--mula-text-muted` | Muted (medium-low) | Body text on dark surfaces |
| `--mula-text-dim` | Dim (low) | Legal text, timestamps, KRS/NIP |

### State Colors

```
Success  → Confirmation messages, checkmarks, "done" indicators
Warning  → Caution alerts, "needs attention" badges
Error    → Error messages, destructive actions, "failed" states
```

---

## Spacing System

### Scale

All spacing is based on a 4px base unit (`--mula-space-1 = 0.25rem = 4px`). The full scale:

```
0 → 0.5 → 1 → 1.5 → 2 → 2.5 → 3 → 3.5 → 4 → 5 → 6 → 7 → 8 → 9 → 10
→ 11 → 12 → 14 → 16 → 20 → 24 → 28 → 32 → 36 → 40 → 44 → 48 → 52
→ 56 → 60 → 64 → 72 → 80 → 96
```

### Usage Guidelines

| Range | Use For |
|---|---|
| 0–4 | Tight internal padding, icon gaps, inline spacing |
| 5–8 | Standard component padding, card gaps |
| 10–16 | Section spacing within components, form group gaps |
| 20–32 | Section padding (`py-24` = `--mula-space-24` = 6rem) |
| 40–96 | Hero spacing, large dividers, special layouts |

---

## Typography System

### Font Stack Strategy

1. **Sans-serif (primary)** — System font stack. Zero network requests. Instant rendering. Consistent across platforms.
2. **Monospace (code)** — JetBrains Mono with fallbacks. Used for code snippets, tech specs, data displays.

### Type Scale Rationale

```
xs (12px)  → Legal, badges, meta
sm (14px)  → Body, nav links, captions
base (16px)→ Default body
lg (18px)  → Lead paragraphs, intro text
xl (20px)  → Subheadings, feature titles
2xl (24px) → Section subheadings
3xl (30px) → Standard section headings
4xl (36px) → Major section headings
5xl+ (48px+) → Hero headlines only
```

### Weight Map

| Weight | Token | Usage |
|---|---|---|
| 400 | `--mula-font-normal` | Body text |
| 500 | `--mula-font-medium` | Buttons, nav links, emphasis |
| 600 | `--mula-font-semibold` | Card titles, subheadings |
| 700 | `--mula-font-bold` | All heading levels |
| 800 | `--mula-font-extrabold` | Hero headlines only |

---

## Component Architecture

### Directory Structure

```
packages/ui/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts               # Barrel export: all 12 components
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
        ├── TestimonialCard.tsx
        ├── FAQSection.tsx         # planned
        └── PartnersSection.tsx    # planned
```

### Component Composition Model

```
Application Page
  └─→ HeroSection        (imported from @mula/ui)
  └─→ SectionHeader      (imported from @mula/ui)
  └─→ PillarCard × N     (imported from @mula/ui, mapped from data)
  └─→ ProcessTimeline    (imported from @mula/ui)
  └─→ CTASection         (imported from @mula/ui)
  └─→ ContactForm        (imported from @mula/ui)
  └─→ Footer             (imported from @mula/ui)
```

Each app provides its own:
- Data objects (passed as props)
- Page-specific layout (Next.js `page.tsx`)
- Route structure (Next.js App Router)
- SEO metadata (Next.js `generateMetadata`)

---

## Animation System

### Three-Tier Animation Architecture

```
Tier 1: CSS Transitions (Tailwind)
  → Hover colors, opacity changes, transform scales
  → Controlled by --mula-duration-fast/normal/slow
  → Utility classes: transition-all, duration-200, etc.

Tier 2: Framer Motion Entrance Animations
  → whileInView fades, slides, staggers
  → All use viewport={{ once: true }}
  → Controlled by --mula-duration-normal/slow

Tier 3: Framer Motion Interaction Animations
  → whileHover, whileTap for buttons and cards
  → Mouse-follow effects (HeroSection gradient orbs)
  → Particle effects (HeroSection floating dots)
```

### Animation Constraints

1. Entrance animations fire **once** per page load (never re-trigger on scroll-back).
2. No animation exceeds **700ms** (`--mula-duration-xslow`).
3. All animations respect **`prefers-reduced-motion`**.
4. Stagger delays are **100–150ms** between children.
5. Hover animations are **150ms** or less.

---

## Responsive Strategy

### Breakpoint Map

```
sm    640px   → Large phones, small tablets portrait
md    768px   → Tablets portrait, small landscape
lg    1024px  → Tablets landscape, small laptops
xl    1280px  → Desktop, large laptops
2xl   1536px  → Large desktop displays
```

### Responsive Patterns

**Grid Adaptation**
```
grid-cols-1               # Mobile: single column
sm:grid-cols-2            # Tablet: 2 columns
lg:grid-cols-3            # Desktop: 3 columns
```

**Typography Scaling**
```
text-3xl                   # Mobile
md:text-4xl                # Tablet+
lg:text-5xl                # Desktop
```

**Navigation**
- Desktop (`md:`): Horizontal inline links + CTA button
- Mobile (`md:hidden`): Hamburger menu → fullscreen overlay with staggered links

**Process Timeline**
- Desktop: Horizontal connected cards with gradient line
- Mobile: Vertical stacked cards

**Container Padding**
- `px-4` on mobile (16px)
- `sm:px-6` on tablet (24px)
- `lg:px-8` on desktop (32px)

---

## Integration Guide

### Using the Design System in an App

**1. Import tokens in your root layout:**

```tsx
// app/layout.tsx
import '@mula/design-system/tokens.css'
```

**2. Import components as needed:**

```tsx
import { Navbar, Footer, HeroSection, PillarCard } from '@mula/ui'
```

**3. Compose with app-specific data:**

```tsx
export default function Page() {
  return (
    <>
      <Navbar logo="Construction" variant="dark" />
      <main>
        <HeroSection title="..." subtitle="..." ctaText="..." ctaHref="#contact" stats={stats} />
        <SectionHeader title="Nasze usługi" subtitle="..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => <PillarCard key={s.title} {...s} />)}
        </div>
        <CTASection title="..." subtitle="..." ctaText="..." ctaHref="#contact" />
        <ContactForm email="..." address="..." />
      </main>
      <Footer />
    </>
  )
}
```

**4. Use tokens in any custom app CSS:**

```css
.my-custom-section {
  background: var(--mula-bg-secondary);
  padding: var(--mula-space-16);
  border-radius: var(--mula-radius-2xl);
}
```

---

## Design Decisions

### Why CSS Custom Properties Instead of Tailwind Config Extensions?

CSS custom properties are framework-agnostic. They work in Tailwind, vanilla CSS, and any future styling approach. They're inspectable in browser DevTools. They enable runtime theme switching without JavaScript build steps.

### Why Dark-First?

The Mula brand identity is technology-forward. Dark interfaces are the standard in developer tools, AI platforms, and technical dashboards. A light theme is provided as an override, but the default is dark.

### Why System Fonts?

Zero network requests. Instant rendering. No layout shift from font loading. System fonts are optimized for each OS and have excellent rendering quality on all platforms.

### Why Lucide Icons?

Consistent 24px grid, feather-weight stroke style, comprehensive catalog (1,500+ icons), active maintenance, and first-class React support via `lucide-react`.

### Why Framer Motion?

Industry-standard React animation library. Declarative API, server-compatible (no `window` access at import time), `whileInView` support, and spring physics. It's the animation library used by Vercel, Stripe, and Linear — projects Mula Platform aspires to match in quality.

---

## Future Roadmap

| Phase | Deliverable | Status |
|---|---|---|
| Sprint 04 | Design tokens, brand guidelines, component docs | In progress |
| Sprint 05 | FAQSection + PartnersSection implementation | Planned |
| Sprint 06 | Figma component kit | Planned |
| Sprint 07 | Storybook integration for isolated dev | Planned |
| Sprint 08 | Visual regression testing (Chromatic/Percy) | Planned |
| Sprint 09 | Accessibility audit and WCAG 2.1 AA certification | Planned |
| Sprint 10 | Dark/light theme toggle component | Planned |

---

## File Index

| File | Purpose |
|---|---|
| `packages/design-system/tokens.css` | CSS custom properties — single source of visual truth |
| `packages/ui/src/components/*.tsx` | 12 React components (10 implemented, 2 planned) |
| `packages/ui/src/index.ts` | Barrel export for all components |
| `docs/BRAND_GUIDELINES.md` | Brand voice, visual identity, animation principles |
| `docs/COMPONENT_LIBRARY.md` | Per-component API reference with props and examples |
| `docs/DESIGN_SYSTEM.md` | Architecture overview, token system, integration guide |
| `docs/PROJECT_STATUS.md` | Overall project status and sprint tracking |
