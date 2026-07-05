# Mula Platform — Pre-Release Checklist

**Version:** 1.0.0
**Last updated:** 2026-07-05

This checklist MUST be completed in full before any production deployment across all 8 apps. Each item includes the verification method and the responsible role/command.

---

## Build & Compilation

- [ ] **All builds pass (`npx turbo build`)**
  - Command: `npx turbo build` from monorepo root
  - Expect: All 8 apps + `@mula/ui` build without errors
  - Failure: Block deployment — investigate per-app logs in `.next/` and `.turbo/`

- [ ] **TypeScript compilation clean**
  - Command: `npx turbo lint` (or `npx tsc --noEmit` per app)
  - Expect: Zero TypeScript errors across all apps and packages
  - Failure: Fix type errors; confirm no `as any`, `@ts-ignore`, or `@ts-expect-error` remain without documented justification

- [ ] **No console errors in dev mode**
  - Command: `npm run dev` → open each app in browser → check browser console
  - Expect: Zero red errors; warnings may exist but must be documented with `@todo` comments

---

## Responsive Design

- [ ] **Mobile (320px — 767px)**
  - Verify: No horizontal overflow, readable text (min 14px), tappable targets (min 44x44px), hamburger menu functions, forms are usable, no content clipped
  - Applies to: All 8 apps

- [ ] **Tablet (768px — 1023px)**
  - Verify: Grid layouts reflow correctly, navigation is visible (no hamburger unless intentional), typography scales, CTAs remain prominent
  - Applies to: All 8 apps

- [ ] **Desktop (1024px+)**
  - Verify: Full navigation visible, hover states functional, max-width constraints respected (`max-w-7xl`), animations perform at 60fps
  - Applies to: All 8 apps

- [ ] **Dark mode baseline coverage**
  - Verify: All apps use dark-first Tailwind theme; no white-flash on load; all interactive elements visible on dark background; form inputs readable
  - Applies to: All 8 apps (this is the default theme)

---

## SEO & Metadata

- [ ] **Page title and description present for every route**
  - Verify: Each app's `layout.tsx` exports a complete `metadata` object with `title`, `description`, `openGraph`, and `twitter` fields
  - Verify: Title includes brand name (template: `%s | Mula Group`)
  - Verify: Description is 120-160 characters, includes primary keywords

- [ ] **Canonical URL set for every page**
  - Verify: `metadata.alternates.canonical` matches the production domain
  - Applies to: All 8 apps, each pointing to its respective subdomain

- [ ] **`hreflang` tags present (if multi-language)**
  - Current state: Polish-only (`pl_PL`)
  - Verify: `<html lang="pl">` on root layout
  - Future: When English/German pages added, add `hreflang` alternates

- [ ] **`robots.txt` serves correctly for each app**
  - Verify: Visiting `https://[domain]/robots.txt` returns valid robots file
  - Verify: `sitemap.xml` URL is absolute (not relative)
  - Verify: Production blocks nothing (allow: `/`); staging should block all

- [ ] **`sitemap.xml` generates correctly for each app**
  - Verify: Visiting `https://[domain]/sitemap.xml` returns valid XML sitemap
  - Verify: All listed URLs resolve to 200 (no 404s in sitemap)
  - Verify: `lastModified` dates are accurate

---

## Structured Data

- [ ] **Schema.org JSON-LD present on main landing page**
  - Verify: `apps/main/src/app/layout.tsx` includes `<script type="application/ld+json">` with Organization schema
  - Verify against: Google Rich Results Test (https://search.google.com/test/rich-results)
  - Required fields: `name`, `url`, `email`, `address` (PostalAddress), `foundingDate`, `founder` (Person)

- [ ] **Schema.org JSON-LD present on each subdomain app**
  - Verify: Each app's layout includes an Organization or WebSite schema specific to that subdomain
  - Construction app: Consider `LocalBusiness` with construction-specific properties
  - E-commerce app: Consider additional `WebSite` with `potentialAction.SearchAction`

---

## Links & Navigation

- [ ] **All internal anchor links resolve**
  - Verify: Every `href="#section-id"` on every page matches an `id="section-id"` on a rendered element
  - Verify: No broken anchor links (browser console shows no "target not found" warnings)
  - Method: Manual scroll-through OR automated with Cypress/Playwright

- [ ] **All external links open correctly**
  - Verify: Subdomain links (e.g., `href="https://ai.mulagroup.eu"`) resolve to live pages
  - Verify: Social media / external links have `target="_blank"` and `rel="noopener noreferrer"`

- [ ] **Navigation consistency across all 8 apps**
  - Verify: Each app's Navbar links to the correct subdomains (cross-app navigation)
  - Verify: Footer links are consistent structure across all apps
  - Verify: "Mula Group" logo/brand links back to `https://mulagroup.eu`

---

## Forms & CTAs

- [ ] **Contact form submits successfully**
  - Verify: All form fields validate client-side (required fields, email format)
  - Verify: Form submission triggers correct action (API endpoint, email service, or CRM webhook)
  - Verify: Success state renders (confirmation message, no double-submit)
  - Verify: Error state renders (inline validation errors, server error fallback)
  - Applies to: `apps/main` ContactSection, all subdomain apps with contact forms

- [ ] **CTA buttons have correct links**
  - Verify: "Porozmawiajmy o projekcie" → `#contact`
  - Verify: "Zobacz obszary działalności" → `#pillars`
  - Verify: StickyCTA bottom bar appears after scroll threshold and links to `#contact`
  - Verify: All CTA buttons have visible hover/focus states

---

## DNS & Domains

- [ ] **All 8 production domains resolve**
  - Verify: `dig [domain]` or `nslookup [domain]` returns Vercel edge IPs
  - Domains: mulagroup.eu, construction.mulagroup.eu, ai.mulagroup.eu, digital.mulagroup.eu, ecommerce.mulagroup.eu, marketing.mulagroup.eu, cyber.mulagroup.eu, innovation.mulagroup.eu

- [ ] **All 8 domains serve on HTTPS**
  - Verify: Visiting `https://[domain]` shows lock icon, no mixed-content warnings
  - Verify: HTTP → HTTPS redirect works (301 redirect)
  - Verify: SSL certificate is valid (Vercel auto-provisions via Let's Encrypt)

- [ ] **Wildcard DNS confirmed (if used)**
  - Verify: `*.mulagroup.eu` CNAME record points to `cname.vercel-dns.com`
  - Verify: TTL is set to 300s (5 minutes) for fast propagation

- [ ] **WWW subdomain redirects**
  - Verify: `www.mulagroup.eu` → `mulagroup.eu` (301 redirect)
  - Verify: `www.[sub].mulagroup.eu` → `[sub].mulagroup.eu` (for all 7 subdomains)

---

## Vercel Deployment

- [ ] **All 8 Vercel projects confirmed deployed**
  - Verify: Vercel dashboard shows "Production" status for each of the 8 projects
  - Verify: Latest deployment matches the commit SHA being released

- [ ] **Build logs reviewed (no warnings/errors)**
  - Verify: Each Vercel project's latest build log shows zero errors
  - Verify: Any warnings are understood and documented (e.g., "static generation bailout")

- [ ] **Environment variables set in Vercel (if any)**
  - Verify: No missing env vars across any project
  - Verify: Production env vars differ from preview/staging where appropriate
  - Current state: No env vars required (fully static sites), but verify this holds

- [ ] **Vercel Analytics enabled (if configured)**
  - Verify: `@vercel/analytics` package installed and initialized in each app's layout
  - Verify: Analytics data flowing to Vercel dashboard

---

## GitHub

- [ ] **README.md reflects current state**
  - Verify: Architecture tree matches actual monorepo structure
  - Verify: Tech stack versions are current
  - Verify: Hosting table shows correct domains and statuses
  - Verify: Development commands work as documented

- [ ] **All commits in the release are pushed**
  - Verify: `git status` shows clean working tree
  - Verify: `git log origin/main..HEAD` is empty (all local commits are on remote)

- [ ] **No secrets or sensitive data committed**
  - Verify: `.env*` in `.gitignore` (confirmed in repo settings)
  - Verify: Grep for common secret patterns: `grep -r "sk-" --include="*.ts" --include="*.tsx"` returns nothing
  - Verify: No hardcoded API keys, tokens, or credentials in any source file

---

## Post-Deployment Verification

- [ ] **Quick smoke test on all 8 domains**
  - Visit each domain, confirm page loads in under 3 seconds (cold start acceptable up to 5s)
  - Verify: No blank pages, no infinite spinners, no uncaught runtime errors

- [ ] **Lighthouse audit on main landing page**
  - Run: Chrome DevTools → Lighthouse → Desktop → Performance + SEO + Accessibility
  - Target: Performance ≥ 90, SEO = 100, Accessibility ≥ 90, Best Practices ≥ 90

- [ ] **Core Web Vitals verified**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

---

## Sign-off

| Role | Name | Date | Signature |
|---|---|---|---|
| Lead Developer | | | |
| QA Reviewer | | | |
| Product Owner | | | |

**Release approved:** ☐ Yes ☐ No (reason: _______________)
