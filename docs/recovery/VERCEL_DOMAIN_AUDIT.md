# Vercel Domain Audit — Mula Platform

**Audit Date:** 2026-07-05
**Mission:** 003.2 — Domain & Deployment Governance
**Scope:** All mulagroup.eu subdomains, Vercel project mappings, GitHub repo links

---

## Domain-to-Project Mapping

| Domain | Vercel Project | Repo | Status |
|---|---|---|---|
| mulagroup.eu | mula-platform | mulasty/mula-platform | MAIN |
| www.mulagroup.eu | mula-platform | mulasty/mula-platform | Active |
| ai.mulagroup.eu | mula-ai-tech | mulasty/mula-platform | Active |
| digital.mulagroup.eu | mula-digital | mulasty/mula-platform | Active |
| ecommerce.mulagroup.eu | mula-ecom | mulasty/mula-platform | Active |
| marketing.mulagroup.eu | mula-marketing | mulasty/mula-platform | Active |
| cyber.mulagroup.eu | mula-cyber | mulasty/mula-platform | Active |
| construction.mulagroup.eu | mula-construction | mulasty/mula-platform | Active |
| innovation.mulagroup.eu | mula-innovation | mulasty/mula-platform | Active |

---

## Verification Checklist

| Check | Result |
|---|---|
| All 9 domains resolve to Vercel IP (76.76.21.21) | ✅ Verified |
| All Vercel projects linked to mulasty/mula-platform | ✅ Verified |
| Primary domain (mulagroup.eu) serves from mula-platform | ✅ Verified |
| www.mulagroup.eu redirects/aliases to mulagroup.eu | ✅ Verified |
| Subdomain apps use shared @mula/ui components | ✅ Verified |
| vercel.json build config present at repo root | ✅ Verified |
| SSL certificates active (auto-renew Vercel) | ✅ All 9 domains |
| DNS nameservers | ns.lh.pl / ns2.lighthosting.net (third-party, A records → Vercel IP) |

---

## DNS Configuration Note

Nameservers remain at third-party (lighthosting) with A records pointing to Vercel IP `76.76.21.21`. Full migration to Vercel DNS (ns1.vercel-dns.com / ns2.vercel-dns.com) is recommended for:
- Automatic SSL validation and renewal visibility
- Edge configuration management
- DDoS protection and CDN optimization
- DNS propagation speed

---

## Historical Artifacts Deprecated

| Domain | Old Project | Old Repo | Action |
|---|---|---|---|
| mulagroup.eu | mulagroup-landing | mulasty/mulagroup-landing | Removed from production, repo archived |
| www.mulagroup.eu | mulagroup-portal | UNKNOWN (stale, 110d old) | Deprecated |

---

## Governance Rules

1. All new subdomains MUST be created as Vercel projects linked to `mulasty/mula-platform`
2. All domains MUST use `vercel.json` build config from repo root
3. Domain aliases (www → apex) MUST be configured in Vercel project settings
4. Third-party DNS coordination: update A records within 24h of any Vercel project migration
5. Audit this file after any domain addition, removal, or Vercel project change
