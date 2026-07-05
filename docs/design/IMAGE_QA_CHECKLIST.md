# Image QA Checklist

**Mission 004 — Premium Graphics System**

## Per-Asset Verification

For each graphics asset (`*.webp`), verify the following before acceptance:

- [ ] No text on image (text stays in HTML)
- [ ] No logos
- [ ] No watermarks
- [ ] No stock people
- [ ] No cheap 3D icons
- [ ] No cartoon/gaming style
- [ ] No crypto coin aesthetics
- [ ] No excessive neon
- [ ] No generic laptop/product scenes
- [ ] Color consistency with competency palette
- [ ] Dark-tech visual cohesion across all assets
- [ ] Readability at small sizes (card, mobile, OG)
- [ ] Correct mobile framing (no critical elements near edges)
- [ ] Correct desktop framing (object not too close to edges)
- [ ] WebP compression without visible quality loss
- [ ] Alt text present (descriptive) or empty (decorative)
- [ ] No negative Lighthouse impact
- [ ] Valid file dimensions per specification

## Per-Format Checks

### Desktop (3840x2160)
- [ ] 16:9 aspect ratio
- [ ] Quality retained on large monitors
- [ ] Space for HTML text overlay
- [ ] No text on image

### Card (1600x1200)
- [ ] 4:3 aspect ratio
- [ ] Main motif readable when scaled down
- [ ] No fine details that vanish on mobile
- [ ] Consistent with desktop variant

### Mobile (1080x1350)
- [ ] 4:5 aspect ratio
- [ ] Main object centered or slightly above center
- [ ] No critical elements at edges
- [ ] Works in vertical phone layout
- [ ] Not compositionally too wide

### Open Graph (1200x630)
- [ ] 1.91:1 aspect ratio
- [ ] Strong central motif
- [ ] Readable in small social preview
- [ ] No text on image
- [ ] No elements cropped by social preview

## Responsive Breakpoints Test

Verify each asset renders correctly at:
- [ ] 320px
- [ ] 375px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px
- [ ] 1920px

## Performance Checks

- [ ] WebP format
- [ ] Reasonable file weight
- [ ] LCP under budget
- [ ] No CLS from image loading
- [ ] Lazy loading configured
- [ ] `srcset` with appropriate `sizes`
- [ ] Lighthouse Performance > 90

## Per-Phase Sign-Off

### Phase 1 — Style Prototype
- [ ] AI card prototype approved
- [ ] Desktop preview confirmed
- [ ] Mobile preview confirmed
- [ ] Style direction signed off

### Phase 2 — Core Competency Cards
- [ ] All 7 competency cards QA passed
- [ ] Color consistency verified
- [ ] Visual cohesion across all 7

### Phase 3 — Landing Expansion
- [ ] Home, Method, About, Contact cards approved
- [ ] Cohesion with competency cards

### Phase 4 — Responsive Variants
- [ ] All 44 landing page files verified
- [ ] Desktop/Desktop match
- [ ] OG images validated in social preview

### Phase 5 — Background Assets
- [ ] All 10 backgrounds verified
- [ ] CSS `background-image` compatible
- [ ] Reusable, low-weight

### Phase 6 — Premium Icons
- [ ] All 15 SVG icons verified
- [ ] Consistent stroke style
- [ ] CSS `currentColor` compatible
- [ ] Works on dark background

### Phase 7 — Subdomain Heroes
- [ ] All 7 hero images verified
- [ ] Per-subdomain consistency

### Phase 8 — Social Templates
- [ ] All 5 templates verified
- [ ] Consistent with Asset Library

## Final Acceptance

- [ ] All QA checklists per phase passed
- [ ] Lighthouse scores maintained
- [ ] No performance regression
- [ ] All alt texts present
- [ ] Documentation updated
- [ ] Mission report completed
