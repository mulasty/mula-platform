# ADR-048: CMS Integration -- @mula/content (MDX-based)

**Status:** Accepted
**Date:** 2026-08-04
**Deciders:** Matrix + Architect

## Context

ADR-047 cancelled Sanity CMS due to complexity and cost. Need a content management solution for:
- Landing page copy (`mulagroup.eu`)
- Guardian AI landing (`guardian.mulagroup.eu`)
- 7 subdomain competency pages
- i18n support (pl/en)
- Non-developer content editing capability

## Decision

Create `@mula/content` -- a shared MDX-based content package:

1. **Shared types** (`src/types.ts`): `HeroSection`, `ServiceCard`, `CaseStudy`, `ProcessStep`, `FAQItem`, `CompanyInfo`, etc.
2. **Default content** (`src/index.ts`): `COMPANY_INFO`, `MAIN_NAV_LINKS`, `MAIN_FOOTER`, `subdomainConfig()`
3. **MDX support**: Each app can add `content/` directory with MDX files loaded at build time
4. **Content is git-versioned** -- changes are tracked, reviewed, and deployable

## Alternatives Considered

| Option | Pro | Con | Verdict |
|---|---|---|---|
| Sanity CMS | Rich editing UI | High cost, complex setup, ADR-047 cancelled | Rejected |
| Strapi | Self-hosted, REST API | Requires separate infra, overkill for landing pages | Rejected |
| Contentful | Good API | Expensive, vendor lock-in | Rejected |
| MDX + git | Free, versioned, simple | No WYSIWYG editor, need PR for changes | **Accepted** |

## Consequences

- Content changes require git commit + PR (no live editing)
- Future: Add TinaCMS or Decap CMS for non-dev editing UI
- All landing page copy is centralized in `@mula/content`
- `npm run build` validates all TypeScript types for content

## Implementation

- Package: `packages/content/`
- Imports: `@mula/content` in all 8 apps
- Next step: migrate inline data to shared content package
