# Technical Debt Register

| ID | Description | Priority | Sprint | Status |
|---|---|---|---|---|
| TD-001 | No automated tests | High | TBD | Open |
| TD-002 | No Storybook/component explorer | Medium | TBD | Open |
| TD-003 | No CI/CD pipeline beyond Vercel auto-deploy | Low | TBD | Open |
| TD-004 | No error monitoring (Sentry/Datadog) | Medium | TBD | Open |
| TD-005 | No CMS integration (Sanity planned) | Medium | TBD | Open |
| TD-006 | Placeholder images/partners/testimonials | Medium | TBD | Open |
| TD-007 | No i18n infrastructure | Low | TBD | Open |
| TD-008 | No automated Lighthouse checks in CI | Low | TBD | Open |
| TD-009 | Missing playbook files (SEO_PLAYBOOK.md, DEPLOYMENT_PLAYBOOK.md) | Low | TBD | Open |
| TD-010 | 5 of 8 apps are scaffold-only with placeholder content | Medium | Mission 002 | Open |
| TD-011 | No cookie consent banner (GDPR/RODO legal requirement) | High | Sprint 04 | Open |
| TD-012 | GA4 measurement ID still placeholder (G-XXXXXXXXXX) | Medium | Sprint 04 | Open |

## Recovery Fix Pack 001 — Resolved

| ID | Description | Priority | Resolution |
|---|---|---|---|
| RF-001 | ARCHITECTURE.md token names drifted from tokens.css (6 HIGH-severity mismatches) | HIGH | ✅ Section 9.1 updated to match tokens.css canonical names and values |
| RF-002 | `@mula/design-system` not listed in ARCHITECTURE.md directory tree | MEDIUM | ✅ Added `packages/design-system/tokens.css` with note about `@mula/design-system` package |
| RF-003 | ARCHITECTURE.md docs/ listing stale (omitted 10+ newer docs) | LOW | ✅ Reorganized into sub-categories: core/, status/, quality/, recovery/, missions/ |
| RF-004 | Component count inconsistent: README said "10" while internal docs said "12" | LOW | ✅ All docs now reference "10 implemented, 2 planned (FAQSection, PartnersSection)" |
| RF-005 | DESIGN_SYSTEM.md referenced unimportable `@mula/design-system/tokens.css` | HIGH | ✅ Confirmed `packages/design-system/package.json` exists with proper exports; documented import path |
| RF-006 | ARCHITECTURE.md used outdated token names (`--mula-bg`, `--mula-surface`, `--mula-text`, etc.) | HIGH | ✅ Replaced with canonical names from tokens.css (`--mula-bg-primary`, `--mula-bg-tertiary`, `--mula-text-primary`, etc.) |
