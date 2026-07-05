# Legacy Repository Archive Recommendation

**Date:** 2026-07-05
**Mission:** 003.2 — Domain & Deployment Governance
**Target Repo:** [mulasty/mulagroup-landing](https://github.com/mulasty/mulagroup-landing)

---

## Recommendation: **ARCHIVE**

The `mulagroup-landing` repository should be archived on GitHub.

---

## Rationale

| Factor | Assessment |
|---|---|
| Production role | None — mulagroup.eu now serves from mulasty/mula-platform |
| Content state | Frozen — last meaningful update was prior to mula-platform migration |
| Data parity | All company data, competencies, products, technologies synced to mula-platform |
| Documentation | All docs migrated to mula-platform (50+ documents) |
| Build pipeline | No active CI/CD — mula-platform handles all deployments |
| Vercel linkage | Domain removed from mulagroup-landing project; serving from mula-platform |
| Risk of confusion | HIGH — developers may clone or reference legacy repo mistakenly |

---

## Pre-Archive Verification

| Item | Status |
|---|---|
| All 7 competencies synced | ✅ Verified (REPOSITORY_SOURCE_OF_TRUTH_REPORT.md) |
| Company registration data (KRS, REGON, NIP) synced | ✅ Verified |
| Mula Method steps synced (Evolved to 6-step Polish) | ✅ Verified |
| Product catalog synced (4 products) | ✅ Verified |
| Technology stack synced (16 items) | ✅ Verified |
| Domain DNS migrated to mula-platform Vercel project | ✅ Verified |
| README.md on legacy repo updated with ARCHIVE notice | ✅ Verified |

---

## Archive Instructions

### On GitHub (mulasty/mulagroup-landing repository):

1. Navigate to **Settings** → **General** → **Danger Zone**
2. Click **Archive this repository**
3. Confirm the archive action

### Effects of Archiving:

- Repository becomes **read-only**
- Issues and PRs remain readable but cannot be modified
- Forking remains possible
- Clone and pull still work for existing clones
- Repository won't appear in active project lists
- All GitHub URLs remain valid

---

## Unarchive Criteria

If mula-platform ever needs historical content recovery from this repo, GitHub allows unarchiving (Settings → Unarchive this repository). This is a reversible operation.

---

## Final Status

| Repo | Status | Action | Date |
|---|---|---|---|
| mulasty/mula-platform | ACTIVE / MAIN | — | 2026-07-05 |
| mulasty/mulagroup-landing | LEGACY | **ARCHIVE** | 2026-07-05 |
