# Graphics Usage Map

Generated: 2026-07-06

## Active image references in code

| File | Line | Reference |
|---|---|---|
| `apps/main/src/app/layout.tsx` | 28 | `/images/competencies/home-og.webp` (OpenGraph) |
| `apps/main/src/app/layout.tsx` | 39 | `/images/competencies/home-og.webp` (Twitter) |
| `apps/main/src/components/HeroSection.tsx` | 71 | `/images/backgrounds/bg-hero-grid.webp` |
| `apps/main/src/components/ProcessSection.tsx` | 43 | `/images/backgrounds/bg-subtle-grid.webp` |
| `apps/main/src/components/ClientNeedsSection.tsx` | 30 | `/images/backgrounds/bg-gradient-mesh.webp` |
| `apps/main/src/components/FAQSection.tsx` | 26 | `/images/backgrounds/bg-dark-surface.webp` |
| `apps/main/src/components/PillarCard.tsx` | 53 | `/images/competencies/${pillar.id}-card.webp` for all 7 competencies |
| `apps/main/src/components/MulaMethod.tsx` | 36 | `/images/competencies/method-card.webp` |
| `apps/main/src/components/AboutSection.tsx` | 85 | `/images/competencies/about-card.webp` |
| `apps/main/src/components/ContactSection.tsx` | 68 | `/images/competencies/contact-card.webp` |

## Dynamic PillarCard mapping

`PillarCard` loads the card variant for each competency based on `pillar.id`:

| Competency | File used |
|---|---|
| ai | `/images/competencies/ai-card.webp` |
| digital | `/images/competencies/digital-card.webp` |
| ecommerce | `/images/competencies/ecommerce-card.webp` |
| marketing | `/images/competencies/marketing-card.webp` |
| cyber | `/images/competencies/cyber-card.webp` |
| construction | `/images/competencies/construction-card.webp` |
| innovation | `/images/competencies/innovation-card.webp` |

## Premium assets from `asety website/background assets`

| Source file | Final public path | Component |
|---|---|---|
| `Data 1.jpg` | `/images/backgrounds/bg-hero-grid.webp` | HeroSection |
| `Data 2.jpg` | `/images/backgrounds/bg-subtle-grid.webp` | ProcessSection |
| `Data 3.jpg` | `/images/backgrounds/bg-gradient-mesh.webp` | ClientNeedsSection |
| `Data 4.jpg` | `/images/backgrounds/bg-dark-surface.webp` | FAQSection |

## Status summary

- All 4 premium background assets are in `public/images/backgrounds/`.
- All 4 are actively referenced in components.
- Previous visibility issue was caused by too-low opacity (fixed in commit `25dcd17`).
- No filename conflicts detected.
- No duplicates detected.
