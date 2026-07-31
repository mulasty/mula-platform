# Production Runbook — Mula Platform

**Last updated:** 2026-07-30  
**Repository:** `mulasty/mula-platform`  
**Default branch:** `master`  
**Vercel team:** `mula-group-s-projects`

This runbook is the operational source of truth for release, monitoring, rollback, and incident response.

---

## 1. Production Surface

### 1.1 Domains and Vercel projects

| Domain | Vercel project | App / service | Purpose |
|---|---|---|---|
| `mulagroup.eu` | `mula-platform` | `@mula/main` | Main Mula Group site |
| `www.mulagroup.eu` | `mula-platform` | `@mula/main` | Main alias |
| `guardian.mulagroup.eu` | `mula-platform` | `@mula/main` Guardian route | Guardian AI landing |
| `app.guardian.mulagroup.eu` | `cyber-guardian` | Guardian app | Guardian AI application login |
| `guardian-app.mulagroup.eu` | `cyber-guardian` | Guardian app | Legacy/alternate app alias |
| `ai.mulagroup.eu` | `mula-ai-tech` | `@mula/ai` | AI competency site |
| `digital.mulagroup.eu` | `mula-digital` | `@mula/digital` | Digital competency site |
| `ecommerce.mulagroup.eu` | `mula-ecom` | `@mula/ecommerce` | E-commerce competency site |
| `marketing.mulagroup.eu` | `mula-marketing` | `@mula/marketing` | Marketing competency site |
| `cyber.mulagroup.eu` | `mula-cyber` | `@mula/cyber` | Cyber competency site |
| `construction.mulagroup.eu` | `mula-construction` | `@mula/construction` | Construction competency site |
| `innovation.mulagroup.eu` | `mula-innovation` | `@mula/innovation` | Innovation competency site |

### 1.2 DNS and SSL

- Apex `mulagroup.eu` uses Vercel A record `76.76.21.21`.
- Subdomains use Vercel CNAME / wildcard routing where configured.
- SSL is Vercel-managed and auto-renewed.
- If SSL fails, verify the domain mapping first, then DNS records, then re-issue from Vercel only if needed.

---

## 2. Release Governance

### 2.1 Branch protection

`master` is protected for **everyone**, including admins:

- Pull request required.
- 1 approving review required.
- Stale reviews are dismissed after new pushes.
- Required status check: `quality` / `quality (22)`.
- Strict status checks enabled.
- Force-push disabled.
- Branch deletion disabled.

Validation command:

```bash
gh api repos/mulasty/mula-platform/branches/master/protection \
  --jq '{required_status_checks, required_pull_request_reviews, enforce_admins, allow_force_pushes, allow_deletions}'
```

### 2.2 Standard release flow

1. Create a feature branch.
2. Commit focused changes.
3. Push branch and open PR to `master`.
4. Wait for `quality (22)` and preview checks.
5. Obtain review approval.
6. Merge PR.
7. Let Vercel deploy from `master`.
8. Verify with `npm run smoke:production` or the `Production Smoke` workflow.

Do **not** use direct pushes to `master` except for a documented emergency, and only if branch protection is intentionally changed and restored.

---

## 3. CI and Guardrails

### 3.1 CI workflow

Workflow: `.github/workflows/ci.yml`

Required job:

```text
quality (22)
```

Current checks:

- checkout
- Node 22 setup
- Vercel config validation
- `npm ci`
- lint
- typecheck
- audit gate
- build

### 3.2 Vercel config validation

Command:

```bash
npm run validate:vercel-config
```

Script:

```text
scripts/validate-vercel-config.mjs
```

Purpose:

- Root `vercel.json` must remain cron-only.
- App build settings must live in `apps/<name>/vercel.json`.
- Each app config must point to the expected `@mula/<app>` Turbo filter and output directory.
- Prevents accidental Vercel CLI rewrites from entering production.

### 3.3 Audit gate

Command:

```bash
node scripts/audit-gate.mjs
```

Purpose:

- Keep `npm audit` strict for new vulnerabilities.
- Temporarily allow known upstream transitive advisories from stable Next/Vercel/ESLint where npm suggests unsafe or invalid fixes.
- Remove allowlist entries once stable upstream fixes are available.

---

## 4. Production Monitoring

### 4.1 Smoke workflow

Workflow:

```text
.github/workflows/production-smoke.yml
```

Schedule:

```text
Every 15 minutes
```

Manual run:

```bash
gh workflow run "Production Smoke" --ref master
```

Local equivalent:

```bash
npm run smoke:production
```

Script:

```text
scripts/production-smoke.mjs
```

Current coverage:

- Main apex and `www`.
- All competency subdomains.
- `robots.txt`, `sitemap.xml`, and `favicon.ico` for production domains.
- Guardian landing domain and route.
- Guardian login redirect to the app domain.
- Guardian app login.
- Main health cron endpoint.
- Known stale construction path redirects.

### 4.2 Smoke alerting

The workflow has `issues: write` permission.

On failure:

- Creates label `production-smoke` if missing.
- Opens issue titled `Production Smoke failed`.
- If an alert issue already exists, adds a comment instead of creating duplicates.
- Includes the last 120 lines of smoke logs.
- Fails the workflow.

On recovery:

- Comments on open `production-smoke` issues.
- Closes the resolved alert.

Alert label:

```text
production-smoke
```

Check open alerts:

```bash
gh issue list --state open --label production-smoke
```

---

## 5. Guardian AI Production Notes

### 5.1 Landing and app routing

- `guardian.mulagroup.eu` serves Guardian landing from `@mula/main`.
- `guardian.mulagroup.eu/guardian` serves the same landing route.
- `guardian.mulagroup.eu/login` redirects to `https://app.guardian.mulagroup.eu/login`.
- `app.guardian.mulagroup.eu` is owned by the Guardian app deployment.

### 5.2 SEO

Guardian landing includes:

- title/description/keywords
- canonical `https://guardian.mulagroup.eu`
- OpenGraph/Twitter metadata
- JSON-LD `SoftwareApplication`, `Organization`, and `WebPage`
- sitemap entry for `https://guardian.mulagroup.eu`

### 5.3 Analytics

Guardian CTA events:

- `guardian_login_click`
- `guardian_demo_click`
- `guardian_app_open_click`

Events are sent to:

- Vercel Analytics via `@vercel/analytics` custom events.
- GA4 via `window.gtag`, only when `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is configured.

---

## 6. Rollback

### 6.1 Preferred emergency rollback

Use Vercel dashboard:

1. Open the affected Vercel project.
2. Go to **Deployments**.
3. Select the last known-good deployment.
4. Use **Promote to Production**.
5. Run `npm run smoke:production`.

### 6.2 Code rollback

Use a PR with `git revert` unless this is an immediate outage:

```bash
git switch -c revert/<incident-name>
git revert <bad-sha>
git push -u origin revert/<incident-name>
gh pr create --base master --title "revert: <summary>" --body "Rollback for <incident>."
```

Merge only after CI/review unless emergency governance has been explicitly approved.

---

## 7. Incident Response Checklist

1. Confirm failure in `Production Smoke` or Vercel deployment status.
2. Check if a `production-smoke` issue exists.
3. Identify affected domain/project.
4. Inspect latest deployment and recent merged PRs.
5. Decide: rollback deployment vs revert code.
6. Execute rollback/fix.
7. Run `npm run smoke:production`.
8. Confirm alert issue closes or comment manually with remediation details.
9. Add follow-up action if root cause requires prevention.

---

## 8. Useful Commands

```bash
# Repo status
git status -sb

# CI runs

# Production smoke runs

# Manual production smoke

# Local production smoke
npm run smoke:production

# Vercel production deployments
npx vercel@latest ls --prod

# Vercel aliases
npx vercel@latest alias list

# Smoke alert issues
```
