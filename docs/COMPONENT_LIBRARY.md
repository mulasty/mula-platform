# Mula Platform — Component Library

**Package:** `@mula/ui`  
**Location:** `packages/ui/src/components/`  
**Version:** 1.0  
**Last updated:** 2026-07-05

---

## Overview

The `@mula/ui` package provides 12 shared React components used across all 8 Mula Platform applications. Every component is built with TypeScript, styled with Tailwind CSS v4, and animated with Framer Motion.

All components are client-rendered (`'use client'`) where they use animations or state. Import from `@mula/ui`:

```tsx
import { Navbar, Footer, HeroSection, CTASection } from '@mula/ui'
```

---

## 1. Navbar

**File:** `Navbar.tsx`  
**Client component:** Yes

A fixed-position navigation bar with scroll-aware background transition, mobile hamburger menu with full-screen overlay, and optional CTA button.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `string` | `'Mula Group'` | Brand name displayed in the navbar |
| `logoHref` | `string` | `'/'` | URL the logo links to |
| `links` | `NavLink[]` | `[{ label: 'O nas', href: '#about' }, ...]` | Navigation links array |
| `ctaText` | `string` | `'Kontakt'` | Call-to-action button text |
| `ctaHref` | `string` | `'#contact'` | CTA button link URL |
| `variant` | `'dark' \| 'light'` | `'dark'` | Color scheme variant |

#### NavLink

| Field | Type | Description |
|---|---|---|
| `label` | `string` | Display text for the link |
| `href` | `string` | Target URL or anchor |

### Variants

- **dark** — Transparent background, white text. Transitions to `bg-black/90` with backdrop blur on scroll.
- **light** — Transparent background, gray-900 text. Transitions to `bg-white/90` on scroll.

### Usage

```tsx
<Navbar
  logo="Construction"
  logoHref="/"
  links={[
    { label: 'O nas', href: '#about' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
  ]}
  ctaText="Wyceń projekt"
  ctaHref="#contact"
  variant="dark"
/>
```

### Behavior

- Scroll-aware: Background becomes opaque after 20px of scroll.
- Mobile: Hamburger menu toggles a full-screen animated overlay with staggered link animations.
- Body scroll locked when mobile menu is open.

---

## 2. Footer

**File:** `Footer.tsx`  
**Client component:** No

A 4-column footer with company information, configurable link columns, contact details, and a bottom bar with copyright and privacy link.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `companyInfo` | `CompanyInfo` | Mula Group defaults | Company registration details |
| `columns` | `FooterColumn[]` | `[]` | Configurable footer link columns |
| `contactEmail` | `string` | `'info@mulagroup.eu'` | Contact email address |

#### CompanyInfo

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Company legal name |
| `krs` | `string` | Polish KRS registry number |
| `nip` | `string` | Polish NIP tax ID |
| `regon` | `string` | Polish REGON statistical number |
| `address` | `string` | Physical address |

#### FooterColumn

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Column heading |
| `links` | `FooterLink[]` | Links in the column |

#### FooterLink

| Field | Type | Description |
|---|---|---|
| `label` | `string` | Link display text |
| `href` | `string` | Link URL |

### Usage

```tsx
<Footer
  contactEmail="construction@mulagroup.eu"
  columns={[
    {
      title: 'Usługi',
      links: [
        { label: 'Budownictwo', href: '/services/construction' },
        { label: 'Renowacje', href: '/services/renovation' },
      ],
    },
  ]}
/>
```

### Layout

- 4-column grid on desktop (`lg:grid-cols-4`), col-1 spans company info, col-2/3 are link columns, col-4 is contact.
- Responsive: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- Bottom bar with copyright year (auto-calculated) and privacy policy link.

---

## 3. HeroSection

**File:** `HeroSection.tsx`  
**Client component:** Yes

A full-viewport hero section with animated gradient orbs, particle effects, grid background, gradient headline text, CTA button, and stats display.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | _required_ | Hero headline (gradient text) |
| `subtitle` | `string` | _required_ | Supporting paragraph text |
| `ctaText` | `string` | _required_ | CTA button label |
| `ctaHref` | `string` | _required_ | CTA button URL |
| `stats` | `Stat[]` | _required_ | Stats displayed in a 4-column grid |
| `brandName` | `string` | `'Mula Group'` | Brand badge text |

#### Stat

| Field | Type | Description |
|---|---|---|
| `label` | `string` | Stat description (e.g., "Aktywnych klientów") |
| `value` | `string` | Stat value (e.g., "120+") |

### Usage

```tsx
<HeroSection
  title="Przyszłość budownictwa jest cyfrowa"
  subtitle="Łączymy tradycyjne rzemiosło z nowoczesną technologią..."
  ctaText="Rozpocznij projekt"
  ctaHref="#contact"
  stats={[
    { label: 'Ukończonych projektów', value: '200+' },
    { label: 'Lat doświadczenia', value: '8+' },
    { label: 'Inżynierów', value: '50+' },
    { label: 'Miast w Polsce', value: '12' },
  ]}
/>
```

### Visual Features

- **Gradient orbs** — Two large blurred circles that follow the mouse cursor with spring physics.
- **Particle field** — 8 small dots that slowly rise and fade in a continuous loop.
- **Grid overlay** — 80px grid pattern at 3% opacity for a technical aesthetic.
- **Brand badge** — Inline pill with `Building2` icon above the headline.
- **Gradient headline** — `bg-gradient-to-r from-mula-accent via-mula-accent-light to-mula-purple`.
- **Stats grid** — 4-column on desktop, 2-column on mobile, each in a bordered card with backdrop blur.

---

## 4. SectionHeader

**File:** `SectionHeader.tsx`  
**Client component:** Yes

A section heading component with title, optional subtitle, configurable alignment, and an animated gradient divider line.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | _required_ | Section heading text |
| `subtitle` | `string` | `undefined` | Optional supporting paragraph |
| `align` | `'left' \| 'center'` | `'center'` | Text alignment |

### Variants

- **center** — Text centered, gradient divider centered with `mx-auto`.
- **left** — Text left-aligned, divider left-aligned.

### Usage

```tsx
<SectionHeader
  title="Nasze filary"
  subtitle="Siedem obszarów, w których dostarczamy realną wartość"
  align="center"
/>
```

### Animation

Fades in with a 24px upward slide when entering the viewport (`whileInView`, `once: true`).

### Visual

- Title: `text-3xl md:text-4xl font-bold text-mula-text`.
- Divider: `h-px w-24 bg-gradient-to-r from-mula-accent to-transparent`.
- Subtitle: `text-lg text-mula-text-muted max-w-2xl`.

---

## 5. PillarCard

**File:** `PillarCard.tsx`  
**Client component:** Yes

An interactive card representing a business pillar, service, or product. Features dynamic hover glow in the pillar's brand color, icon, description, and a "Learn more" link.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | _required_ | Card heading |
| `subtitle` | `string` | _required_ | Colored subtitle/tagline |
| `description` | `string` | _required_ | Body text |
| `icon` | `string` | _required_ | Lucide icon name (e.g., `'Brain'`, `'Shield'`) |
| `href` | `string` | _required_ | "Learn more" link target |
| `color` | `string` | _required_ | Hex color for icon, subtitle, and hover glow |

### Supported Icons

`Brain`, `Zap`, `ShoppingCart`, `Megaphone`, `Shield`, `Building2`, `Lightbulb`, `Store`, `ShoppingBag`, `Link2`, `Package`, `Workflow`, `Trophy`, `Search`, `Target`, `Share2`, `FileText`, `Palette`, `Radio`, `FileCheck`, `BadgeCheck`, `Eye`, `HardDrive`, `GraduationCap`, `Rocket`, `Box`, `Cloud`, `FlaskConical`, `FileSearch`, `PenTool`, `Play`, `TrendingUp`, `Bot`, `Clock`, `ShieldCheck`, `Smartphone`

### Usage

```tsx
<PillarCard
  title="Sztuczna inteligencja"
  subtitle="AI & Automatyzacja"
  description="Projektujemy i wdrażamy agentów AI..."
  icon="Brain"
  href="/ai"
  color="#8b5cf6"
/>
```

### Interactive Behavior

- **Hover lift** — Card translates up 4px (`y: -4`).
- **Hover glow** — Box shadow and border color change to the pillar's color at 20% and 40% opacity.
- **Entrance animation** — Fades in with 40px upward slide (`whileInView`, `once: true`).

---

## 6. CTASection

**File:** `CTASection.tsx`  
**Client component:** Yes

A call-to-action section with a centered layout: headline, supporting text, and an animated CTA button with hover scale and arrow slide.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | _required_ | CTA headline |
| `subtitle` | `string` | _required_ | Supporting paragraph |
| `ctaText` | `string` | _required_ | Button label |
| `ctaHref` | `string` | _required_ | Button link URL |

### Usage

```tsx
<CTASection
  title="Gotowy na transformację?"
  subtitle="Umów bezpłatną konsultację i odkryj potencjał..."
  ctaText="Rozpocznij współpracę"
  ctaHref="#contact"
/>
```

### Animation

- Title, subtitle, and button each fade in with a 24px slide-up, staggered by 100ms.
- Button has `whileHover: scale 1.03` and `whileTap: scale 0.98`.
- Arrow icon slides right 4px on hover via `group-hover:translate-x-1`.

---

## 7. ProcessTimeline

**File:** `ProcessTimeline.tsx`  
**Client component:** Yes

A horizontal step-by-step process display (desktop) that collapses to a vertical stack on mobile. Each step has a numbered badge, icon, title, and description.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `steps` | `ProcessStep[]` | _required_ | Process steps array |

#### ProcessStep

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Step name (e.g., "Odkrywamy") |
| `description` | `string` | Step description |
| `icon` | `string` | Lucide icon name |

### Supported Icons

`Search`, `PenTool`, `Link2`, `Play`, `TrendingUp`, `Brain`, `Zap`, `Shield`, `Lightbulb`

### Usage

```tsx
<ProcessTimeline
  steps={[
    { title: 'Odkrywamy', description: 'Analizujemy Twoje procesy...', icon: 'Search' },
    { title: 'Projektujemy', description: 'Tworzymy architekturę rozwiązania...', icon: 'PenTool' },
    { title: 'Integrujemy', description: 'Łączymy nowe systemy...', icon: 'Link2' },
    { title: 'Wdrażamy', description: 'Uruchamiamy rozwiązanie...', icon: 'Play' },
    { title: 'Skalujemy', description: 'Optymalizujemy i rozwijamy...', icon: 'TrendingUp' },
  ]}
/>
```

### Layout

- **Desktop** — Horizontal row with a connecting gradient line. Number badges in top-right corner at 4% opacity. Each card has a connecting dot on the gradient line.
- **Mobile** — Vertical stack of cards with numbered badges.

### Animation

Staggered entrance: each card fades in with a 30px upward slide, 150ms delay between cards.

---

## 8. TechnologyCloud

**File:** `TechnologyCloud.tsx`  
**Client component:** Yes

A tag cloud / pill grid displaying technology names. Tags have a hover glow effect with a blue border and subtle shadow.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `TechItem[]` | _required_ | Array of technology tags |

#### TechItem

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Technology name |

### Usage

```tsx
<TechnologyCloud
  items={[
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'TypeScript' },
    { name: 'Python' },
    { name: 'TensorFlow' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'PostgreSQL' },
  ]}
/>
```

### Animation

- Staggered entrance: tags fade in from below with a scale effect, 40ms delay between each tag.
- Hover: tag scales to 1.05, border turns blue, and a blue glow shadow appears.

---

## 9. ContactForm

**File:** `ContactForm.tsx`  
**Client component:** Yes

A two-column contact section with a description panel and a CTA panel. Designed as a "contact prompt" rather than a traditional form — directs users to email.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `email` | `string` | _required_ | Contact email address |
| `address` | `string` | _required_ | Physical address |

### Usage

```tsx
<ContactForm
  email="info@mulagroup.eu"
  address="ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża"
/>
```

### Layout

- **Left column** — Heading ("Umów bezpłatną rozmowę"), description, email CTA button, address.
- **Right column** — Bordered card with description text and "Wyślij wiadomość" button.

### Animation

- Both columns fade in with 20px slide-up, left first, then right with 150ms delay.
- Email button has `whileHover: scale 1.03` and `whileTap: scale 0.98`.

---

## 10. TestimonialCard

**File:** `TestimonialCard.tsx`  
**Client component:** Yes

A testimonial card displaying a quote, author name, and role. Features a decorative quote icon and hover effects.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `quote` | `string` | _required_ | The testimonial text |
| `author` | `string` | _required_ | Person's name |
| `role` | `string` | _required_ | Person's role/title |

### Usage

```tsx
<TestimonialCard
  quote="Mula Group transformed our document processing..."
  author="Anna Kowalska"
  role="CTO, TechCorp"
/>
```

### Visual

- Rounded card (`rounded-2xl`) with border.
- `Quote` icon in top-left at 30% opacity in accent color.
- Author name in white, role in dim text.

### Animation

- Enters with 30px slide-up in viewport.
- Hover: lifts 4px, border turns accent color.

---

## 11. FAQSection

**File:** `FAQSection.tsx` _(pending implementation)_

An accordion-style FAQ section with expandable question/answer pairs.

### Props (planned)

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `FAQItem[]` | _required_ | FAQ questions and answers |

#### FAQItem

| Field | Type | Description |
|---|---|---|
| `question` | `string` | The question text |
| `answer` | `string` | The answer text |

### Behavior (planned)

- Single-expand accordion (opening one closes others).
- Smooth height animation with Framer Motion `AnimatePresence`.
- Plus/minus icon toggle.
- Staggered entrance animation.

---

## 12. PartnersSection

**File:** `PartnersSection.tsx` _(pending implementation)_

A logo grid or carousel displaying partner/client logos.

### Props (planned)

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | _required_ | Section heading |
| `logos` | `PartnerLogo[]` | _required_ | Partner logos array |
| `variant` | `'grid' \| 'carousel'` | `'grid'` | Display mode |

#### PartnerLogo

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Partner company name (alt text) |
| `src` | `string` | Logo image URL |
| `href` | `string` | Optional link to partner's site |

### Behavior (planned)

- **Grid mode:** Responsive grid of centered logos with grayscale-to-color hover effect.
- **Carousel mode:** Manual navigation only (no auto-play). Previous/next buttons with smooth slide animation.

---

## Shared Patterns

All components follow these conventions:

### CSS Class Naming

- Use Tailwind utility classes exclusively.
- Custom CSS properties via `--mula-*` tokens from `packages/design-system/tokens.css`.
- No custom CSS files per component.

### Animation Conventions

```tsx
// Entrance pattern
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>

// Staggered list pattern
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>

// Hover interaction pattern
<motion.a
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
>
```

### TypeScript

- Every component has a defined `Props` interface exported for consumers.
- Sub-types (e.g., `NavLink`, `Stat`, `ProcessStep`) are defined in the same file.
- No `any` types in public interfaces.

### Accessibility

- All interactive elements are focusable and have adequate contrast.
- Mobile menus have `aria-label` on toggle buttons.
- Body scroll is locked when overlay menus are open.
- Icons include implicit `aria-hidden` through Lucide's defaults.
