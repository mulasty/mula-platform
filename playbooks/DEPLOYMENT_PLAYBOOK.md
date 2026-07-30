# Deployment Playbook — Mula Platform

**Last updated:** 2026-07-30
**Audience:** All developers contributing to `mulasty/mula-platform`

---

## 1. Architecture Overview

Mula Platform is a Turborepo monorepo with 8 Next.js 16 applications (App Router) deployed as 9 Vercel projects under the `mula-group-s-projects` team account. Each app corresponds to a business pillar and its own subdomain.

### 1.1 Vercel Project ─ Domain Mapping

| Vercel Project | Domain | App Package | Framework |
|---|---|---|---|
| mula-platform | mulagroup.eu | `@mula/main` | Next.js 16 |
| mula-platform | www.mulagroup.eu | `@mula/main` (alias) | Next.js 16 |
| mula-ai-tech | ai.mulagroup.eu | `@mula/ai` | Next.js 16 |
| mula-digital | digital.mulagroup.eu | `@mula/digital` | Next.js 16 |
| mula-ecom | ecommerce.mulagroup.eu | `@mula/ecommerce` | Next.js 16 |
| mula-marketing | marketing.mulagroup.eu | `@mula/marketing` | Next.js 16 |
| mula-cyber | cyber.mulagroup.eu | `@mula/cyber` | Next.js 16 |
| mula-construction | construction.mulagroup.eu | `@mula/construction` | Next.js 16 |
| mula-innovation | innovation.mulagroup.eu | `@mula/innovation` | Next.js 16 |

All 9 projects source from `mulasty/mula-platform` on the `master` branch. Each subdomain app has its own `vercel.json` specifying the root directory and build filter.

### 1.2 DNS

| Resource | Record | Target |
|---|---|---|
| `mulagroup.eu` (apex) | A | `76.76.21.21` (Vercel) |
| `*.mulagroup.eu` (wildcard) | CNAME | `cname.vercel-dns.com` |
| `www.mulagroup.eu` | CNAME | `cname.vercel-dns.com` |

Nameservers are currently at third-party provider (lighthosting: `ns.lh.pl` / `ns2.lighthosting.net`) with A/CNAME records pointing to Vercel. Full migration to Vercel DNS (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`) is recommended for auto-SSL visibility and edge configuration.

### 1.3 SSL

Vercel auto-provisions and renews Let's Encrypt certificates for all 9 domains. All traffic is HTTPS-only with HTTP → HTTPS 301 redirect.

### 1.4 Related Documents

- [ARCHITECTURE.md](../docs/ARCHITECTURE.md) — Full architecture, component hierarchy, data flow
- [VERCEL_DOMAIN_AUDIT.md](../docs/recovery/VERCEL_DOMAIN_AUDIT.md) — Domain-to-project verification
- [DEPLOYMENT_AUDIT.md](../docs/recovery/DEPLOYMENT_AUDIT.md) — Historical deployment audit and migration record
- [TECHNICAL_DEBT_REGISTER.md](../docs/TECHNICAL_DEBT_REGISTER.md) — Known tech debt and resolutions
- [PRODUCT_HEALTH_DASHBOARD.md](../docs/PRODUCT_HEALTH_DASHBOARD.md) — Live project health metrics

---

## 2. Pre-Deployment Checklist

Run these checks locally before merging to `master`. All must pass.

- [ ] **Typecheck** — `npm run typecheck` passes (0 errors)
- [ ] **Lint** — `npm run lint` passes across all packages
- [ ] **Tests** — `npm run test` passes (Vitest unit tests)
- [ ] **Build** — `npm run build` passes (turbo build, all apps)
- [ ] **Commit messages** follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.)
- [ ] **No hardcoded secrets** — all keys/tokens come from environment variables
- [ ] **`.env.example` updated** — new env vars are documented with placeholder values
- [ ] **E2E smoke** (optional) — `npm run test:e2e` passes (Playwright)

### Quick verification script

```bash
npm run typecheck; if ($?) { npm run lint }; if ($?) { npm run test }; if ($?) { npm run build }
```

---

## 3. Build Pipeline

### 3.1 Local Development

```
npm run dev
    ↓
turbo dev
    ↓ (parallel)
next dev --port 3001   (@mula/main)
next dev --port 3002   (@mula/construction)
...                    (all 8 apps on ports 3001–3008)
```

### 3.2 Production Build

```
npm run build
    ↓
turbo build
    ↓
Step 1: ^build (dependency packages, currently no-op for @mula/ui)
    ↓
Step 2: All 8 apps build in parallel
    ↓
Each app: next build → .next/ output
```

### 3.3 Vercel CI/CD Pipeline

```
Git push → master branch
    ↓
Vercel Git Integration detects push
    ↓
Each project runs:
  npm ci                          (root, respects package-lock.json)
  npx turbo build --filter=@mula/[app]
    ↓
Turborepo builds dependency graph, builds app and its deps
    ↓
Output: apps/[app]/.next/
    ↓
Deployed to Vercel Edge Network
  ├── Static assets → Edge CDN
  ├── SSR pages → Serverless Functions
  └── ISR pages → Edge Cache with revalidation
    ↓
Custom domain resolves → live at production URL
```

### 3.4 Root `vercel.json` (shared cron guardrail)

```json
{
  "crons": [
    {
      "path": "/api/cron/health",
      "schedule": "*/5 * * * *"
    }
  ]
}
```

The root file owns only the production health cron. Build settings live in each app-level `vercel.json` at `apps/[name]/vercel.json` with the corresponding `--filter=@mula/[name]` and `outputDirectory`.

Do not commit root-level `buildCommand`, `installCommand`, `outputDirectory`, or `framework`, and do not remove the cron. Vercel CLI can rewrite the root file when linked to a monorepo project. CI runs `npm run validate:vercel-config` to catch this before release.

---

## 4. Deployment Flow

### 4.1 Standard Deploy

1. Create a feature branch: `git checkout -b feat/my-change`
2. Make changes, commit with conventional commit message
3. Push branch and create a PR to `master`
4. After review and CI passing, merge to `master`
5. Vercel auto-detects the push and triggers builds for all 9 projects
6. Each project builds independently; Turborepo cache speeds up repeated builds
7. Deploy completes — verify health endpoint at `https://mulagroup.eu/api/cron/health`

### 4.2 Manual Redeploy

Via Vercel Dashboard:
1. Navigate to the project under `mula-group-s-projects`
2. Click **Deployments** tab
3. Click **Redeploy** on the latest deployment (or a previous one for rollback)

Via Vercel CLI:
```bash
vercel redeploy <deployment-url> --scope mula-group-s-projects
```

---

## 5. Health Monitoring

### 5.1 Health Check CRON

A health check endpoint runs **every 5 minutes** via Vercel Cron Jobs, hitting:

```
GET https://mulagroup.eu/api/cron/health
```

Response:
```json
{
  "status": "ok",
  "service": "mula-platform-main",
  "timestamp": "2026-07-30T12:00:00.000Z",
  "runtime": "v22.x"
}
```

This endpoint runs on Vercel Edge runtime with no cache, providing a fresh timestamp on every call.

### 5.2 Vercel Deployment Monitoring

Monitor deployment health via:
- **Vercel Dashboard** → Deployments tab — shows build status, errors, timing
- **Vercel Analytics** — request volume, error rate, performance metrics
- **Vercel Logs** — runtime logs for serverless functions

### 5.3 Future: Sentry Error Tracking

Error monitoring (Sentry) is planned for future sprints. See TD-004 in [TECHNICAL_DEBT_REGISTER.md](../docs/TECHNICAL_DEBT_REGISTER.md).

---

## 6. Rollback Procedure

### 6.1 Immediate Rollback (Vercel Dashboard)

1. Go to the affected Vercel project → **Deployments**
2. Click the three-dot menu on the **last known-good deployment**
3. Select **Promote to Production**
4. This instantly rolls back; the broken deployment is superseded

### 6.2 Rollback via Git Revert

1. Identify the faulty commit SHA: `git log --oneline -5`
2. Revert it cleanly:

```bash
git revert <faulty-commit-sha>
git push origin master
```

3. Vercel auto-detects push and redeploys the reverted state
4. Verify with: `curl -s https://mulagroup.eu/api/cron/health`

### 6.3 Rollback Considerations

- **Rollback is a temporary fix.** Always follow up with a proper fix via a new PR.
- **Multi-project impact:** A change in `@mula/ui` will trigger rebuilds across all 9 projects. Rolling back on one project may not be sufficient — ensure the fix is deployed to all affected projects.
- **Cache awareness:** Vercel caches static assets aggressively. If rollback doesn't appear to take effect, trigger a fresh deploy or clear the CDN cache from the Vercel dashboard.

---

## 7. Environment Variables

### 7.1 Required Variables (All Projects)

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_COOKIEBOT_CID` | Cookiebot GDPR consent manager ID | Production |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 measurement ID | Production |
| `NEXT_PUBLIC_API_URL` | Backend API endpoint (future) | Optional |

### 7.2 Variable Sources

- **`.env.example`** — Template with placeholder values; committed to repo
- **`.env.local`** — Local development overrides; gitignored
- **Vercel Environment Variables** — Production values set per project in Vercel dashboard

### 7.3 Adding / Updating Env Vars via Vercel CLI

```bash
# Add a new variable to a specific project
vercel env add NEXT_PUBLIC_API_URL production --scope mula-group-s-projects

# Add to all projects in the scope
vercel env add NEXT_PUBLIC_API_URL production --scope mula-group-s-projects

# List current variables for a project
vercel env ls --scope mula-group-s-projects

# Pull remote vars to local (for debugging)
vercel env pull .env.vercel --scope mula-group-s-projects
```

### 7.4 Adding / Updating Env Vars via Vercel Dashboard

1. Go to the project under `mula-group-s-projects`
2. Navigate to **Settings** → **Environment Variables**
3. Add or update key-value pairs
4. Select environments: Production, Preview, Development
5. Click **Save**
6. Redeploy for changes to take effect (env vars are injected at build time for `NEXT_PUBLIC_*`)

### 7.5 Important: `NEXT_PUBLIC_*` Prefix

Variables prefixed with `NEXT_PUBLIC_` are inlined at build time and visible in the browser bundle. **Never put secrets in `NEXT_PUBLIC_*` variables.** Secrets should use non-public prefixes and be accessed only in server-side code (Route Handlers, Server Components, `getServerSideProps`).

---

## 8. Troubleshooting

### 8.1 Build Failed on Vercel

1. Check Vercel deployment logs for the exact error
2. Common causes:
   - TypeScript error → run `npm run typecheck` locally
   - Missing dependency → check if `package.json` was updated
   - Turborepo cache issue → trigger a fresh deploy (use "Redeploy without cache" in Vercel)
   - Out of memory → large dependencies or build artifacts; check `.vercelignore`

### 8.2 Domain Not Resolving

1. Verify DNS records: `nslookup mulagroup.eu`
2. Check Vercel project domain settings: Settings → Domains
3. Ensure A record points to `76.76.21.21` (Vercel)
4. Propagation can take up to 24 hours after DNS changes

### 8.3 SSL Certificate Issues

1. Vercel auto-renews certificates; manual intervention should not be needed
2. If a certificate fails, check that the domain is correctly configured in Vercel project settings
3. Ensure DNS records are correct — mismatched records block certificate validation

### 8.4 Health Check Failing

1. Hit the endpoint manually: `curl -v https://mulagroup.eu/api/cron/health`
2. Check Vercel runtime logs for errors in the function
3. Verify the cron job is active in `vercel.json`

---

## 9. Change Log

| Date | Change |
|---|---|
| 2026-07-30 | Created deployment playbook; documented pre-deploy checklist, pipeline, rollback, env vars |
