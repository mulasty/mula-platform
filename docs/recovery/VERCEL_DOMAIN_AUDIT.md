# Vercel Domain Audit — Mula Platform

**Audit Date:** 2026-07-30
**Mission:** 003.2 — Domain & Deployment Governance
**Scope:** All mulagroup.eu subdomains, Vercel project mappings, GitHub repo links

---

## Domain-to-Project Mapping

| Domain | Vercel Project | Repo | Status |
|---|---|---|---|
| mulagroup.eu | mula-platform | mulasty/mula-platform | MAIN |
| www.mulagroup.eu | mula-platform | mulasty/mula-platform | Active |
| guardian.mulagroup.eu | mula-platform | mulasty/mula-platform | Guardian landing |
| app.guardian.mulagroup.eu | cyber-guardian | separate Guardian app deployment | Guardian app login |
| guardian-app.mulagroup.eu | cyber-guardian | separate Guardian app deployment | Alternate Guardian app alias |
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
| Main and competency domains resolve to Vercel | ✅ Verified |
| Guardian landing and app aliases resolve to Vercel | ✅ Verified |
| All Mula Platform Vercel projects linked to mulasty/mula-platform | ✅ Verified |
| Primary domain (mulagroup.eu) serves from mula-platform | ✅ Verified |
| www.mulagroup.eu redirects/aliases to mulagroup.eu | ✅ Verified |
| Subdomain apps use shared @mula/ui components | ✅ Verified |
| Root vercel.json remains cron-only; build routing handled by app configs/build router | ✅ Verified by CI |
| SSL certificates active (auto-renew Vercel) | ✅ Verified |
| Production smoke monitoring | ✅ Every 15 minutes via GitHub Actions |
| DNS nameservers | mixed third-party/Vercel-managed records depending on domain |

---

## DNS Configuration Note

Some DNS records remain at third-party DNS while selected domains use Vercel-managed records. Full migration to Vercel DNS (ns1.vercel-dns.com / ns2.vercel-dns.com) is recommended for:
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
2. Root `vercel.json` MUST remain cron-only; app build settings belong in `apps/<name>/vercel.json`
3. Domain aliases (www → apex) MUST be configured in Vercel project settings
4. Third-party DNS coordination: update A records within 24h of any Vercel project migration
5. Audit this file after any domain addition, removal, or Vercel project change
6. Run `npm run smoke:production` after production domain or routing changes
