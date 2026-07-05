# Mula Platform — Analytics Plan

**Version:** 1.0.0
**Last updated:** 2026-07-05

---

## 1. Measurement IDs

### Google Analytics 4 (GA4)

| Property | Measurement ID | Status |
|---|---|---|
| Mula Group (global) | `G-XXXXXXXXXX` | Pending — replace with actual ID |
| Mula Group (staging) | `G-YYYYYYYYYY` | Pending — replace with actual ID |

**Setup:** Add Google Analytics script to each app's root layout via `@next/third-parties/google` (`GoogleAnalytics` component) or via a custom `<Script>` tag. Place the GA4 tag in `<head>` for accurate page_view measurement.

### Vercel Analytics

Already available via Vercel dashboard (no additional setup required if `@vercel/analytics` is installed). Provides:
- Page views (daily/hourly)
- Unique visitors
- Top pages
- Referrers
- Countries

---

## 2. Key Events to Track

### 2.1 Page View Events

| Event | Trigger | Parameters |
|---|---|---|
| `page_view` | On every page load (GA4 auto) | `page_location`, `page_title`, `page_referrer` |
| `scroll_75` | User scrolls past 75% of page height | `page_location`, `section_visible` |

### 2.2 Engagement Events

| Event | Trigger | Parameters |
|---|---|---|
| `cta_click` | Click on any CTA button | `cta_label`, `cta_section`, `cta_position` (hero/mid/bottom) |
| `pillar_click` | Click on a pillar card | `pillar_id`, `pillar_name`, `destination_url` |
| `contact_form_start` | User focuses first form field | `form_section`, `page_location` |
| `contact_form_submit` | Successful form submission | `form_section`, `page_location` |
| `contact_form_error` | Form validation error | `form_section`, `error_field`, `error_type` |
| `nav_click` | Click on navigation link | `nav_label`, `nav_type` (main/mobile/footer) |
| `external_link_click` | Click on link to external domain | `link_url`, `link_text`, `page_location` |

### 2.3 Conversion Events

| Event | Trigger | Parameters |
|---|---|---|
| `lead_generated` | Contact form submitted successfully | `lead_source` (organic/paid/referral/social), `page_location` |
| `consultation_requested` | User clicks "Zamów konsultację" CTA | `cta_location`, `page_location` |
| `subdomain_visit` | User navigates to a subdomain app | `destination_domain`, `source_page` |

### 2.4 Content Engagement Events

| Event | Trigger | Parameters |
|---|---|---|
| `faq_expand` | User opens an FAQ accordion item | `faq_question`, `faq_position` |
| `process_step_view` | Process step enters viewport | `step_number`, `step_name` |
| `case_study_view` | Case study card enters viewport | `case_study_client`, `case_study_industry` |
| `product_card_click` | Click on product preview card | `product_name`, `product_status` |

---

## 3. Conversion Funnel Definition

### 3.1 Primary Funnel: Landing Page → Lead

```
Step 1: Landing page visit
    ↓ (page_view)
Step 2: Scroll past 50% of page
    ↓ (scroll_75 triggered)
Step 3: CTA click (any CTA button)
    ↓ (cta_click)
Step 4: Contact form start
    ↓ (contact_form_start)
Step 5: Contact form submit
    ↓ (contact_form_submit)
Step 6: Lead generated
    ↓ (lead_generated — also fired as conversion event)
```

### 3.2 Secondary Funnel: Landing Page → Subdomain

```
Step 1: Landing page visit
    ↓ (page_view)
Step 2: Scroll to pillars section
    ↓ (pillars section enters viewport)
Step 3: Pillar card hover/click
    ↓ (pillar_click)
Step 4: Subdomain app loaded
    ↓ (page_view on subdomain)
```

### 3.3 Funnel Metrics to Track

| Metric | Formula | Target |
|---|---|---|
| Bounce rate | Sessions with 1 page_view ÷ total sessions | < 40% |
| Scroll depth (50%) | Sessions reaching 50% scroll ÷ total sessions | > 60% |
| CTA click-through rate | CTA clicks ÷ page views | > 5% |
| Form start rate | Form starts ÷ page views | > 3% |
| Form completion rate | Form submits ÷ form starts | > 70% |
| Lead conversion rate | Leads generated ÷ total sessions | > 2% |
| Subdomain referral rate | Subdomain visits ÷ landing page sessions | > 15% |

---

## 4. KPI Dashboard Structure

### 4.1 Dashboard Sections

The analytics dashboard (GA4 Explore or Looker Studio) must have these sections in order:

1. **Overview Cards** (top row — big numbers)
2. **Traffic Over Time** (line chart)
3. **Traffic Sources** (pie chart or stacked bar)
4. **Conversion Funnel** (funnel visualization)
5. **Top Pages** (table)
6. **CTA Performance** (bar chart by CTA label)
7. **Pillar Engagement** (horizontal bar by pillar)
8. **Geography** (map or table by country/city)
9. **Device Breakdown** (pie chart: mobile/tablet/desktop)

### 4.2 Overview Cards

| Card | Data |
|---|---|
| Total Users | GA4: `totalUsers` (last 30 days) |
| Sessions | GA4: `sessions` (last 30 days) |
| Avg Engagement Time | GA4: `averageSessionDuration` (last 30 days) |
| Leads Generated | Custom event: `lead_generated` count (last 30 days) |
| Lead Conversion Rate | Leads ÷ Sessions × 100 |
| Subdomain Visits | Custom event: `subdomain_visit` count (last 30 days) |

### 4.3 Traffic Over Time

- **Chart type:** Line chart
- **X-axis:** Date (daily granularity, last 30 days)
- **Y-axis:** Sessions + Users (dual lines)
- **Segmentation:** By source/medium or by campaign

### 4.4 Traffic Sources

- **Chart type:** Stacked bar or pie chart
- **Segments:**
  - Organic Search (`source = google, bing, duckduckgo etc.`)
  - Direct (`source = (direct)`)
  - Referral (`medium = referral`)
  - Social (`medium = social`)
  - Paid Search (when campaigns active)
  - Email (when campaigns active)

### 4.5 Conversion Funnel

- **Chart type:** Funnel visualization
- **Steps:** Page view → 50% scroll → CTA click → Form start → Form submit → Lead
- **Annotate:** Drop-off percentage at each step
- **Segment by:** Device category (mobile vs desktop)

### 4.6 CTA Performance

- **Chart type:** Horizontal bar chart
- **Y-axis:** CTA labels (`cta_label` parameter)
- **X-axis:** Click count
- **Color by:** CTA position (hero/mid/bottom)

### 4.7 Pillar Engagement

- **Chart type:** Horizontal bar chart
- **Y-axis:** Pillar names (`pillar_name` parameter)
- **X-axis:** Click count
- **Color by:** Pillar color (match brand colors)

---

## 5. Implementation Plan

### 5.1 Phase 1: Baseline (Sprint 02)

- Install `@next/third-parties` package
- Add `<GoogleAnalytics gaId="G-XXXXXXXXXX" />` to all 8 app layouts
- Implement custom event tracking for: `cta_click`, `pillar_click`, `contact_form_submit`
- Implement scroll depth tracking (50%, 75%, 100%)
- Configure GA4 custom dimensions: `cta_label`, `pillar_id`, `form_section`

### 5.2 Phase 2: Funnel (Sprint 03)

- Implement all remaining custom events from Section 2
- Build GA4 Explore funnel for primary conversion path
- Build Looker Studio dashboard with all KPI cards
- Set up automated weekly email report (PDF or link)

### 5.3 Phase 3: Optimization (Sprint 04+)

- Set up A/B tests on CTA copy and placement (Google Optimize or Vercel Edge Config)
- Implement event-based audiences for remarketing
- Connect GA4 to Google Ads for conversion tracking (when campaigns launch)
- Set up anomaly detection alerts (traffic drop >30%, bounce rate spike)

---

## 6. Event Tracking Code Examples

### 6.1 CTA Click Tracking

```typescript
// In any CTA component
function trackCTAClick(label: string, section: string, position: 'hero' | 'mid' | 'bottom') {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      cta_label: label,
      cta_section: section,
      cta_position: position,
      page_location: window.location.href,
    })
  }
}

// Usage:
<button onClick={() => trackCTAClick('Porozmawiajmy o projekcie', 'hero', 'hero')}>
  Porozmawiajmy o projekcie
</button>
```

### 6.2 Scroll Depth Tracking

```typescript
// In a client component wrapping the page
import { useEffect } from 'react'

function useScrollDepthTracking() {
  useEffect(() => {
    const thresholds = [50, 75, 100]
    const fired = new Set<number>()

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !fired.has(threshold)) {
          fired.add(threshold)
          if ((window as any).gtag) {
            (window as any).gtag('event', `scroll_${threshold}`, {
              page_location: window.location.href,
            })
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
```

### 6.3 Contact Form Tracking

```typescript
// In ContactForm component
function trackFormStart() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_form_start', {
      form_section: 'contact',
      page_location: window.location.href,
    })
  }
}

function trackFormSubmit() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_form_submit', {
      form_section: 'contact',
      page_location: window.location.href,
    })
    ;(window as any).gtag('event', 'lead_generated', {
      lead_source: document.referrer ? 'referral' : 'direct',
      page_location: window.location.href,
    })
  }
}
```

---

## 7. Privacy & Compliance

### 7.1 GDPR / RODO Compliance

- Implement cookie consent banner (required for EU traffic)
- GA4 tracking fires only after user accepts analytics cookies
- IP anonymization enabled by default in GA4 (no additional config needed)
- Data retention set to 14 months (EU recommended maximum)
- No personally identifiable information (PII) sent to GA4 — no email addresses, names, or phone numbers in event parameters
- Privacy policy must disclose GA4 usage, cookie types, and data processing purposes
- Users must have the ability to withdraw consent and request data deletion

### 7.2 Consent Management

Recommended: CookieYes, Cookiebot, or custom consent manager. GA4 tag must be gated behind consent:

```typescript
// Simplified consent-gated GA4 setup
if (hasConsentedTo('analytics')) {
  // Load GA4 script
} else {
  // Do not load GA4 script
  // Optionally load privacy-preserving Vercel Analytics
}
```

---

## 8. Reporting Cadence

| Report | Frequency | Audience | Format |
|---|---|---|---|
| Traffic dashboard | Real-time | Development team | GA4 / Looker Studio |
| Weekly KPI summary | Every Monday | Product Owner, Marketing lead | Email (automated) |
| Monthly performance report | 1st of each month | Leadership | PDF + presentation |
| Sprint review metrics | End of each sprint (every 2 weeks) | Full team | Dashboard screenshot + commentary |
| Quarterly business review | End of Q | Board / stakeholders | Comprehensive report with trends |

---

## 9. Appendix: Analytics Inventory

### Tracking Status

| App | GA4 Tag | Vercel Analytics | Custom Events | Cookie Consent |
|---|---|---|---|---|
| main | Not yet | Not yet | Not yet | Not yet |
| construction | Not yet | Not yet | Not yet | Not yet |
| ai | Not yet | Not yet | Not yet | Not yet |
| digital | Not yet | Not yet | Not yet | Not yet |
| ecommerce | Not yet | Not yet | Not yet | Not yet |
| marketing | Not yet | Not yet | Not yet | Not yet |
| cyber | Not yet | Not yet | Not yet | Not yet |
| innovation | Not yet | Not yet | Not yet | Not yet |

**Target:** All 8 apps instrumented by end of Sprint 03.
