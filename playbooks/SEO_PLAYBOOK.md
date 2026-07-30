# SEO Playbook — Mula Group Ecosystem

Audit date: 2026-07-30 | Apps: 8 (main + 7 subdomains)

---

## 1. Applications Overview

| # | App | Domain | Title |
|---|-----|--------|-------|
| 1 | main | `https://mulagroup.eu` | Mula Group — ekosystem biznesowy |
| 2 | construction | `https://construction.mulagroup.eu` | Mula Construction – Konstrukcje i Hale Stalowe |
| 3 | ai | `https://ai.mulagroup.eu` | Mula AI – Sztuczna Inteligencja i Automatyzacja |
| 4 | digital | `https://digital.mulagroup.eu` | Mula Digital – Transformacja Cyfrowa |
| 5 | ecommerce | `https://ecommerce.mulagroup.eu` | Mula E-Commerce – Handel Internetowy i Marketplace |
| 6 | marketing | `https://marketing.mulagroup.eu` | Mula Marketing – Marketing Cyfrowy i Wzrost |
| 7 | cyber | `https://cyber.mulagroup.eu` | Mula Cyber – Cyberbezpieczeństwo dla Firm |
| 8 | innovation | `https://innovation.mulagroup.eu` | Mula Innovation – Technologie Przyszłości |

---

## 2. Meta Tags Checklist

### 2.1 — `main` (mulagroup.eu)

| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | Template: `%s \| Mula Group`, default with tagline |
| `description` | ✅ | Long-form, 200+ chars |
| `keywords` | ✅ | 13 keywords |
| `metadataBase` | ✅ | `https://mulagroup.eu` |
| `authors` | ✅ | Mula Group |
| `creator` | ✅ | Mula Group |
| `publisher` | ✅ | Mula Group |
| `alternates.canonical` | ✅ | `https://mulagroup.eu` |
| `openGraph.type` | ✅ | `website` |
| `openGraph.locale` | ✅ | `pl_PL` |
| `openGraph.images` | ✅ | 1200×630 WebP with alt |
| `twitter.card` | ✅ | `summary_large_image` |
| `twitter.images` | ✅ | Same OG image |
| `robots` | ✅ | index, follow + full googleBot directives |
| `favicon` | ✅ | ICO + 32×32 + 16×16 + apple-touch |
| `Cookiebot` | ✅ | Conditional via env |
| `GA4` | ✅ | Conditional via env |
| `JSON-LD` | ✅ | `Organization` with address, founder, foundingDate |

### 2.2 — `construction` (construction.mulagroup.eu)

| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | Template: `%s \| Mula Construction` |
| `description` | ✅ | |
| `keywords` | ✅ | 8 keywords (added this audit) |
| `metadataBase` | ✅ | `https://construction.mulagroup.eu` |
| `alternates.canonical` | ✅ | Added this audit |
| `openGraph` (full) | ✅ | Added locale, siteName, images this audit |
| `twitter` (full) | ✅ | Added card + images this audit |
| `robots` (full) | ✅ | Added googleBot directives this audit |
| `JSON-LD` | ✅ | `WebSite` (added this audit) |
| `favicon` (full) | ✅ | Added ICO + PNG + apple-touch this audit |

### 2.3 — `ai`, `digital`, `ecommerce`, `marketing`, `cyber`, `innovation`

All 6 subdomain apps are now at parity. Status after this audit:

| Tag | Status | Notes |
|-----|--------|-------|
| `title` (template) | ✅ | Changed from plain string to `{ default, template }` |
| `description` | ✅ | |
| `keywords` | ✅ | 8–14 keywords each |
| `metadataBase` | ✅ | Correct subdomain URL |
| `alternates.canonical` | ✅ | Added this audit |
| `openGraph.images` | ✅ | Added this audit |
| `twitter.images` | ✅ | Added this audit |
| `robots` (googleBot) | ✅ | Added googleBot directives this audit |
| `JSON-LD` | ✅ | `WebSite` with Organization publisher |
| `favicon` | ✅ | ICO link in head |

---

## 3. Sitemap Status

| App | File | Entries | Status |
|-----|------|---------|--------|
| main | `apps/main/src/app/sitemap.ts` | 2 (home + privacy) | ✅ |
| construction | `apps/construction/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| ai | `apps/ai/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| digital | `apps/digital/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| ecommerce | `apps/ecommerce/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| marketing | `apps/marketing/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| cyber | `apps/cyber/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |
| innovation | `apps/innovation/src/app/sitemap.ts` | 1 (home) | ⚠️ sparse |

All sitemaps use proper `lastModified`, `changeFrequency`, and `priority` fields.

**Action**: Subdomain sitemaps should list all available subpages (services, case studies, blog, contact).

---

## 4. Robots.txt Status

| App | File | Crawl | Sitemap | Status |
|-----|------|-------|---------|--------|
| main | `apps/main/src/app/robots.ts` | Allow `*` | `https://mulagroup.eu/sitemap.xml` | ✅ |
| construction | `apps/construction/src/app/robots.ts` | Allow `*` | `https://construction.mulagroup.eu/sitemap.xml` | ✅ |
| ai | `apps/ai/src/app/robots.ts` | Allow `*` | `https://ai.mulagroup.eu/sitemap.xml` | ✅ |
| digital | `apps/digital/src/app/robots.ts` | Allow `*` | `https://digital.mulagroup.eu/sitemap.xml` | ✅ |
| ecommerce | `apps/ecommerce/src/app/robots.ts` | Allow `*` | `https://ecommerce.mulagroup.eu/sitemap.xml` | ✅ |
| marketing | `apps/marketing/src/app/robots.ts` | Allow `*` | `https://marketing.mulagroup.eu/sitemap.xml` | ✅ |
| cyber | `apps/cyber/src/app/robots.ts` | Allow `*` | `https://cyber.mulagroup.eu/sitemap.xml` | ✅ |
| innovation | `apps/innovation/src/app/robots.ts` | Allow `*` | `https://innovation.mulagroup.eu/sitemap.xml` | ✅ |

All correct — 8/8 apps have properly configured robots.

---

## 5. Structured Data (JSON-LD)

| App | Type | Rich fields | Status |
|-----|------|-------------|--------|
| main | `Organization` | name, altName, url, email, address, foundingDate, founder | ✅ |
| construction | `WebSite` | name, url, description, publisher | ✅ |
| ai | `WebSite` | name, url, description, publisher | ✅ |
| digital | `WebSite` | name, url, description, publisher | ✅ |
| ecommerce | `WebSite` | name, url, description, publisher | ✅ |
| marketing | `WebSite` | name, url, description, publisher | ✅ |
| cyber | `WebSite` | name, url, description, publisher | ✅ |
| innovation | `WebSite` | name, url, description, publisher | ✅ |

All 8 apps have valid JSON-LD embedded via `<script type="application/ld+json">`.

---

## 6. Recommendations — Future SEO Work

### 6.1 — Hreflang Tags ⚠️

Currently **no `hreflang` tags** are implemented. Since the site is Polish-first (`pl_PL`), consider:

```ts
// In layout.tsx metadata:
alternates: {
  canonical: 'https://construction.mulagroup.eu',
  languages: {
    'pl-PL': 'https://construction.mulagroup.eu',
    'en-GB': 'https://construction.mulagroup.eu/en',
  },
},
```

### 6.2 — Breadcrumb Structured Data ⚠️

No `BreadcrumbList` schema. Consider adding to page-level layouts:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://..." }
  ]
}
```

### 6.3 — Schema Markup Expansion ⚠️

Consider adding richer schemas per app domain:
- **construction**: `LocalBusiness` + `Service` (konstrukcje stalowe)
- **ai**: `SoftwareApplication` (AI agents)
- **ecommerce**: `LocalBusiness` + `Product` (e-commerce services)
- **marketing**: `Service` (marketing services)
- **cyber**: `Service` (cybersecurity services)
- **innovation**: `Organization` (startup studio)
- **digital**: `Service` (digital transformation)

### 6.4 — Sitemap Expansion ⚠️

Subdomain sitemaps only have home page entries. Should include:
- Service subpages
- Blog/articles (if applicable)
- Case studies/portfolio
- Contact page
- Privacy policy

### 6.5 — OG Image Generation ⚠️

OG images reference `/images/og/home-og.webp`. Verify that:
- These images exist on each subdomain
- Each subdomain has a **unique** OG image matching its brand
- Images are exactly 1200×630px

### 6.6 — Page-Level Metadata ⚠️

Currently metadata is set only at the root layout level. Each page should have its own `generateMetadata()` or `metadata` export with:
- Unique title
- Unique description
- Canonical URL
- Breadcrumb JSON-LD (if applicable)

### 6.7 — Technical Audit

- Run Lighthouse SEO audit on all 8 subdomains
- Verify structured data with Google Rich Results Test
- Submit sitemaps to Google Search Console
- Set up Google Search Console properties for each subdomain

---

## 7. Verification Commands

```bash
# Type-check all apps
cd apps/main     && npx tsc --noEmit
cd apps/ai       && npx tsc --noEmit
cd apps/cyber    && npx tsc --noEmit
# ... repeat for all apps

# Check sitemap output (when running dev server)
curl -s https://mulagroup.eu/sitemap.xml
curl -s https://ai.mulagroup.eu/sitemap.xml

# Check robots output
curl -s https://mulagroup.eu/robots.txt
curl -s https://ai.mulagroup.eu/robots.txt

# Validate JSON-LD
curl -s https://mulagroup.eu | grep -o '<script type="application/ld+json">[^<]*</script>'
```

---

## 8. Change Log

| Date | Change |
|------|--------|
| 2026-07-30 | **construction**: Added keywords, canonical, OG images, twitter, googleBot robots, JSON-LD, favicon links, title template |
| 2026-07-30 | **ai, digital, ecommerce, marketing, cyber, innovation**: Added title templates, canonical URLs, OG images, twitter images, googleBot robot directives |
| 2026-07-30 | Created this playbook |
