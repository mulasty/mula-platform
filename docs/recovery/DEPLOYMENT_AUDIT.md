# Deployment Audit Report — Source of Truth Recovery Pack

> **Audit date:** 2026-07-05
> **Audit scope:** mulagroup.eu, www.mulagroup.eu, Vercel project mappings, GitHub connections
> **Vercel scope:** mula-group-s-projects

---

## DNS Resolution

| Domain | Resolves To | Nameserver Provider |
|---|---|---|
| mulagroup.eu | 76.76.21.21 (Vercel) | ns.lh.pl / ns2.lighthosting.net (third-party) |
| www.mulagroup.eu | 76.76.21.21 (Vercel) | ns.lh.pl / ns2.lighthosting.net (third-party) |

**Note:** Nameservers are NOT Vercel-managed (ns1.vercel-dns.com / ns2.vercel-dns.com intended but not active). DNS is configured via A records at lighthosting.

---

## Vercel Project-to-Domain Mapping

| Domain | Vercel Project | Project ID | GitHub Repo | Branch | Node | SSL | Last Deploy | Status |
|---|---|---|---|---|---|---|---|---|
| mulagroup.eu | mulagroup-landing | prj_1IqHa7exTPUk9sVMH0hxZAVM83SF | mulasty/mulagroup-landing | master | 24.x | cert_haLu... (40d, auto-renew) | 2026-07-05 (25m ago) | ACTIVE |
| www.mulagroup.eu | mulagroup-portal | prj_f3IJJ6MSxp5dAE1nxc4Ovtw33K6L | UNKNOWN (no local clone) | UNKNOWN | 22.x | cert_pP3n... (40d, auto-renew) | 2026-03-17 (110d ago) | ACTIVE |

---

## CRITICAL FINDINGS

### 1. Domain Conflict — mulagroup.eu assigned to TWO projects
`mulagroup.eu` is claimed by **both** `mulagroup-landing` and `mulagroup-portal`. Currently the latest deployment from `mulagroup-landing` is serving production traffic. The `mulagroup-portal` deployment (110 days stale) also has `mulagroup.eu` as an alias.

### 2. Production serves from LEGACY repo (mulagroup-landing)
`mulagroup.eu` currently serves from the **mulagroup-landing** project, which is the LEGACY repository. It does NOT serve from `mula-platform` (the main platform repo).

### 3. mula-platform local repo linked to WRONG Vercel project
The local clone at `C:\Users\uwpar\mula-platform` is linked to **mula-marketing** (prj_uaK8Ax5NDL2Lts0lgx9YuAnWTmNi), NOT to `mulagroup-portal` or any project serving the main domain.

### 4. www domain served by stale project
`www.mulagroup.eu` is served by `mulagroup-portal`, last deployed 110 days ago (Node.js v22.x). This is outdated and not built from `mula-platform`.

### 5. Third-party DNS
Nameservers are `ns.lh.pl` / `ns2.lighthosting.net` instead of Vercel's `ns1.vercel-dns.com` / `ns2.vercel-dns.com`. Domains work via A record pointing to Vercel's IP, but Vercel DNS management features (auto-SSL validation, edge configuration) may be limited.

---

## Vercel Project Inventory

| # | Project Name | Latest Prod URL | Node | Updated |
|---|---|---|---|---|
| 1 | mulagroup-landing | https://mulagroup.eu | 24.x | 5 Jul 2026 |
| 2 | mula-marketing | https://marketing.mulagroup.eu | 24.x | 5 Jul 2026 |
| 3 | mula-ai-tech | https://ai.mulagroup.eu | 24.x | 5 Jul 2026 |
| 4 | mula-ecom | https://mula-ecom.vercel.app | 24.x | 5 Jul 2026 |
| 5 | mula-construction | https://construction.mulagroup.eu | 24.x | 5 Jul 2026 |
| 6 | mula-cyber | https://cyber.mulagroup.eu | 24.x | 5 Jul 2026 |
| 7 | mula-innovation | https://innovation.mulagroup.eu | 24.x | 5 Jul 2026 |
| 8 | mula-digital | https://digital.mulagroup.eu | 24.x | 5 Jul 2026 |
| 9 | mulagroup-portal | https://www.mulagroup.eu | 22.x | 17 Mar 2026 |
| 10 | mulagroup-strategy | https://strategy.mulagroup.eu | 22.x | 11 days ago |
| 11 | mulagroup-digital | https://mulagroup-digital.vercel.app | 22.x | 11 days ago |
| 12 | main | main-mula-group-s-projects.vercel.app | 24.x | 3h ago |
| 13 | ai-publishing-agency-engine | ai-publishing-agency-engine-...vercel.app | 24.x | 6d ago |
| 14 | admin-ui | admin-ui-mula-group-s-projects.vercel.app | 24.x | 6d ago |
| 15 | krxproduce.pl | krxproducepl.vercel.app | 24.x | 7d ago |
| 16 | sternik-squad | sternik-squad.vercel.app | 24.x | 11d ago |
| 17 | frontend | frontend-mula-group-s-projects.vercel.app | 24.x | 11d ago |
| 18 | trading-bot | trading-bot-three-topaz.vercel.app | 24.x | 11d ago |
| 19 | pizzatorra | pizzatorra.vercel.app | 24.x | 11d ago |
| 20 | mula-recovery-dashboard | mula-recovery-dashboard.vercel.app | 24.x | 11d ago |

---

## Production Link Verification

| Check | Result |
|---|---|
| mulagroup.eu points to mula-platform (apps/main)? | **NO** — points to mulagroup-landing (LEGACY) |
| mulagroup.eu points to mulagroup-landing? | **YES** — CONFIRMED (legacy repo is still production) |
| www.mulagroup.eu active? | Yes, via mulagroup-portal (stale, 110d old) |
| mula-platform has a Vercel project for production? | **NO** — no `mula-platform` project exists in Vercel |

## Recommended Actions

1. **Create a `mula-platform` Vercel project** linked to `mulasty/mula-platform` (master), with build config from `vercel.json` (turbo build --filter=@mula/main)
2. **Remove `mulagroup.eu` from `mulagroup-landing` project** to eliminate domain conflict
3. **Point `mulagroup.eu` and `www.mulagroup.eu` to the new `mula-platform` project**
4. **Switch nameservers to Vercel DNS** (ns1.vercel-dns.com / ns2.vercel-dns.com) for full Vercel management
5. **Deprecate `mulagroup-portal`** after migration is confirmed
6. **Fix `mula-platform` local `.vercel` link** — currently points to `mula-marketing`, should point to the new `mula-platform` project
