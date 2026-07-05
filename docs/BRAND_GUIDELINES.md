# Mula Platform — Brand Guidelines

**Version:** 1.0  
**Last updated:** 2026-07-05  
**Status:** Active

---

## Brand Identity

### Core Message

Mula Group accelerates business through technology. We are a technology-first holding group that builds, scales, and operates digital-native companies across AI, cybersecurity, e-commerce, construction, marketing, and innovation.

### Brand Tone

- **Professional** — Clear, precise, and authoritative. No filler. No hype.
- **Technology-first** — Every communication demonstrates deep technical competence. We don't just talk about tech; we show it.
- **Confident but not arrogant** — We know what we're capable of and we deliver. We let results speak louder than claims.
- **Forward-leaning** — Language should feel like it's pulling the reader toward the future. Active voice, present tense where possible.
- **Polish primary, English secondary** — Core site content in Polish. Technical documentation and SDKs may be in English. Company name always "Mula Group" — never translated.

### Voice Attributes

| Attribute | Do | Don't |
|---|---|---|
| Clarity | "We build AI agents that automate document workflows." | "Leveraging cutting-edge artificial intelligence paradigms to optimize enterprise knowledge processes." |
| Specificity | "Reduced invoice processing from 4 hours to 12 minutes." | "Significant time savings achieved." |
| Technical credibility | Link to case studies, show architecture diagrams. | Make unsupported claims about "best" or "fastest." |
| Polish warmth | "Porozmawiajmy o Twoim projekcie." | Overly stiff formal register that feels bureaucratic. |

---

## Visual Identity

### Logo

- **Wordmark:** "Mula Group" in system sans-serif, bold weight, tracking-tight.
- **Icon:** `Building2` from Lucide, colored `--mula-accent` (#3b82f6).
- **Clear space:** Minimum 1x icon width around all sides.
- **Minimum size:** 120px wide for digital, 40px for favicon.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--mula-primary` | `#3b82f6` | Primary CTAs, links, active states |
| `--mula-primary-hover` | `#2563eb` | Hover state for primary elements |
| `--mula-secondary` | `#8b5cf6` | Accent highlights, gradient endpoints |
| `--mula-bg-primary` | `#0a0a0a` | Page background |
| `--mula-bg-secondary` | `#111111` | Section backgrounds |
| `--mula-bg-tertiary` | `#1a1a1a` | Card backgrounds |
| `--mula-text-primary` | `#f8fafc` | Headlines, body text |
| `--mula-text-secondary` | `#94a3b8` | Secondary body text, captions |
| `--mula-success` | `#10b981` | Success indicators, confirmation messages |
| `--mula-warning` | `#f59e0b` | Warnings, cautionary states |
| `--mula-error` | `#ef4444` | Error states, destructive actions |

### Gradients

- **Primary gradient (blue):** `linear-gradient(to right, #3b82f6, #60a5fa, #8b5cf6)`
- **Text gradient:** `bg-gradient-to-r from-mula-accent via-mula-accent-light to-mula-purple bg-clip-text text-transparent`
- **Background glow:** Radial gradients using `--mula-accent` at 5-10% opacity with 100-120px blur.
- **Divider:** `bg-gradient-to-r from-mula-accent to-transparent` for horizontal rules.

---

## Typography

### Font Stack

- **Sans-serif (primary):** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **Monospace (code/data):** `'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace`

### Type Scale

| Token | Size | Usage |
|---|---|---|
| `text-xs` | 0.75rem | Legal text, badges, meta info |
| `text-sm` | 0.875rem | Body text, navigation links, captions |
| `text-base` | 1rem | Default body text |
| `text-lg` | 1.125rem | Large body, intro paragraphs |
| `text-xl` | 1.25rem | Subheadings, feature titles |
| `text-2xl` | 1.5rem | Section subheadings |
| `text-3xl` | 1.875rem | Section headings |
| `text-4xl` | 2.25rem | Major section headings |
| `text-5xl`+ | 3rem+ | Hero headlines only |

### Headlines

- Use `font-bold` (700) for all headings.
- `tracking-tight` (-0.025em) for headlines.
- Line height: `leading-[1.1]` for hero, `leading-tight` (1.25) for section headings.

### Body Text

- Use `text-mula-text-muted` for body paragraphs.
- Use `leading-relaxed` (1.625) for comfortable reading.
- Max width: `max-w-2xl` or `max-w-3xl` for blocks of text.
- Never use pure white (#fff) for body text — use `--mula-text-secondary` or `--mula-text-muted`.

---

## Iconography

### Icon Library

All icons come from **Lucide** (`lucide-react`). Never mix icon libraries. If Lucide doesn't have the exact icon, choose the closest semantic match.

### Sizing Standards

| Context | Size | Tailwind Class |
|---|---|---|
| UI icons (buttons, links) | 20px | `w-5 h-5` |
| UI icons (navigation) | 24px | `w-6 h-6` |
| Feature/pillar icons | 28px | `w-7 h-7` |
| Hero/section decorative | 32px | `w-8 h-8` |
| Footer icons | 16px | `w-4 h-4` |

### Color

- Icons in interactive elements use their parent's text color via `currentColor`.
- Decorative icons use `--mula-accent`.
- Inactive/supporting icons use `--mula-text-dim`.
- Never use pure white as the default icon color.

---

## Imagery

### Principles

- **Dark backgrounds only** — All photography and illustration should work on `#0a0a0a` backgrounds.
- **Gradient overlays** — When using photos, apply subtle gradient overlays to maintain the dark-first aesthetic. Overlay should feel like a dark vignette.
- **No stock photos where possible** — Prefer custom abstract compositions, 3D renders, or technical diagrams over generic stock photography.
- **If stock is required** — Use only from Unsplash, with a preference for dark-toned, tech-adjacent imagery (server rooms, abstract tech, architectural).

### Image Formats

- **Photos:** WebP with JPEG fallback. Compress to ≤200KB for hero images, ≤100KB for cards.
- **Icons:** SVG inline (Lucide components).
- **Diagrams:** SVG or PNG. If PNG, include 2x resolution for retina displays.

### Aspect Ratios

| Context | Ratio | Usage |
|---|---|---|
| Hero/feature images | 16:9 or 21:9 | Wide hero banners |
| Card thumbnails | 4:3 | Case study cards, blog posts |
| Team/portrait | 1:1 | Team member photos |
| Logo | 3:1 or 4:1 | Partner/client logos |

---

## Animation

### Principles

- **Subtle** — Animations should enhance, never distract. No bouncing logos, no rotating text, no auto-play carousels.
- **Purpose-driven** — Every animation communicates something: hierarchy, state change, spatial relationship, or feedback.
- **Fast** — Enter animations complete within 300-600ms. No animation should exceed 700ms.

### Framer Motion Conventions

```tsx
// Standard entrance animation
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

### Rules

1. **Always use `whileInView` with `once: true`** — Elements animate once when they enter the viewport. No repeated animations on scroll.
2. **No auto-play carousels** — If a carousel is needed, it's manual navigation only.
3. **No infinite animations** — No spinning, pulsing, or oscillating elements except for loading indicators.
4. **Stagger children** — When animating lists, use `staggerChildren: 0.1-0.15` for a natural cascade.
5. **Prefers-reduced-motion** — All animation durations collapse to `0ms` when the user has `prefers-reduced-motion: reduce` enabled.

### Duration Tokens

| Token | Value | Usage |
|---|---|---|
| `--mula-duration-fast` | 150ms | Hover states, focus rings, toggle transitions |
| `--mula-duration-normal` | 300ms | Standard entrance animations, page transitions |
| `--mula-duration-slow` | 500ms | Complex reveals, hero animations |
| `--mula-duration-xslow` | 700ms | Maximum — use sparingly |

### Easing

- **Default:** `cubic-bezier(0.4, 0, 0.2, 1)` — Standard Material Design easing.
- **Exit/outgoing:** `cubic-bezier(0.4, 0, 1, 1)` — Deceleration curve.
- **Entrance/incoming:** `cubic-bezier(0, 0, 0.2, 1)` — Acceleration curve.

---

## AI & Technology Presentation

### How We Show AI

Mula Group's AI capabilities should be presented through:

1. **Technical diagrams** — Architecture diagrams showing data flow, model routing, agent configurations. Use monospace labels and clean linework.
2. **Code-like visual elements** — Snippets, JSON configs, API endpoint representations (not actual code, but stylistic code blocks).
3. **Data visualization aesthetic** — Charts, graphs, node-link diagrams. The visual language of data science and engineering.
4. **Concrete use cases** — "Automated invoice processing for accounting firms" over "AI-powered workflow optimization."

### How We Show Services

Each service (Construction, Cyber, Digital, etc.) should be presented with:

1. **Clean icon** — Lucide icon in `--mula-accent`, sized `w-7 h-7` inside a colored container.
2. **Benefit-first copy** — Start with what the client gains, not what we do. "Reduce cyber risk by 80%" before "We conduct penetration tests."
3. **Real use cases** — Reference actual industries, company sizes, and scenarios. Generic claims undermine credibility.

---

## Layout & Spacing

### Section Padding

```css
/* Standard section */
section { padding-top: 6rem; padding-bottom: 6rem; } /* py-24 */

/* Compact section */
section { padding-top: 4rem; padding-bottom: 4rem; } /* py-16 */

/* Hero section */
section { min-height: 100vh; padding-top: 6rem; padding-bottom: 4rem; }
```

### Container

- Max width: `max-w-7xl` (1280px) for page content.
- Padding: `px-4 sm:px-6 lg:px-8` for responsive gutters.
- Centered: `mx-auto`.

### Grid System

- Primary grid: 12-column, `gap-8` between columns.
- Card grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` auto-adapt.
- Feature comparisons: `grid-cols-1 md:grid-cols-2` with `gap-16`.

---

## Accessibility

### Minimum Requirements

- **Color contrast:** All text must meet WCAG AA (4.5:1 for body, 3:1 for large text).
- **Focus states:** All interactive elements must have visible focus rings using `focus-visible:outline-2 focus-visible:outline-mula-accent`.
- **Alt text:** All images must have descriptive `alt` attributes. Icons that are purely decorative should use `aria-hidden="true"`.
- **Keyboard navigation:** All interactive elements must be reachable and operable via keyboard.
- **Semantic HTML:** Use proper heading hierarchy (h1 > h2 > h3), landmark regions (`<nav>`, `<main>`, `<footer>`), and ARIA labels where necessary.
- **Reduced motion:** Respect `prefers-reduced-motion: reduce` across all animations.

---

## Toolkit

| Category | Tool | Version |
|---|---|---|
| Framework | Next.js | 16 |
| Styling | Tailwind CSS | v4 |
| Animation | Framer Motion | latest |
| Icons | Lucide React | latest |
| Fonts | System fonts + JetBrains Mono | — |
| CMS | Sanity | planned |
| Hosting | Vercel | — |

---

## Anti-Patterns

These should **never** appear in the Mula brand:

- Auto-playing video or audio
- Carousels that auto-rotate
- Infinite animation loops (except loading spinners)
- Pure black text on pure white backgrounds (too harsh)
- Placeholder stock photography (silhouettes of people in suits pointing at screens)
- Overuse of emojis in formal copy
- Gradient text on body copy (reserved for hero headlines only)
- More than 2 fonts per page
- Drop shadows brighter than 30% opacity
- Border radius above `--mula-radius-2xl` (1.5rem) except for pills/buttons
