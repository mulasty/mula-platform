# Background Assets

Premium background textures for Mula Platform landing page.

## Files

| File | Dimensions | Used in | Description |
|------|------------|---------|-------------|
| `bg-hero-grid.webp` | 1920x1280 | HeroSection | Subtle grid texture behind hero video |
| `bg-subtle-grid.webp` | 1920x1280 | ProcessSection | Delicate grid for process section |
| `bg-gradient-mesh.webp` | 1920x1280 | ClientNeedsSection | Gradient mesh ambient background |
| `bg-dark-surface.webp` | 1920x1280 | FAQSection | Neutral dark surface texture |

## Usage

Backgrounds are applied as CSS `background-image` with very low opacity (`opacity: 0.05-0.06`) and a gradient overlay to ensure text readability.

```tsx
<div
  aria-hidden="true"
  className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
  style={{ backgroundImage: 'url(/images/backgrounds/bg-name.webp)' }}
/>
<div className="absolute inset-0 bg-gradient-to-b from-mula-bg/80 via-mula-bg/90 to-mula-bg/80" />
```

## Optimization

- WebP format at 85% quality
- Resized to 1920x1280 cover
- Low opacity keeps Lighthouse score high
- Gradient overlays guarantee WCAG contrast for text
