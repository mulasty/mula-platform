# Repository Source of Truth — Migration Report

## Decision
mula-platform is the main repository. mulagroup-landing is legacy.

## Audit Results
| Area | mulagroup-landing | mula-platform | Status |
|---|---|---|---|
| Company data | KRS: 0001010842, REGON: 524057460, NIP: 718-216-41-12, founder: Piotr Muła | KRS: 0001010842, REGON: 524057460, NIP: 718-216-41-12, founder: Piotr Muła | SYNCED |
| 7 competencies | 7 pillars (PILLARS) | 7 pillars (PILLARS) | SYNCED |
| Hero content | English hero: Zintegrowany Ekosystem Biznesowy | Polish enterprise hero: Technologia, automatyzacja i AI — dla firm, które chcą rosnąć szybciej. | EVOLVED (refined for platform) |
| Products | 4 products: Automation Audit Robot, Presence System, Cyber Guardian NIS2, Mula Mobile AI Commander | 4 products: same names, same statuses | SYNCED |
| Technologies | 16 items (Next.js, TypeScript, React, Python, LangChain, OpenAI API, PostgreSQL, Supabase, Docker, Vercel, Tailwind CSS, WordPress, Shoper, BaseLinker, Google Analytics, Shopify) | Same 16 items, same categories | SYNCED |
| Mula Method | English 5-step: Discover, Design, Integrate, Execute, Scale | Polish 6-step: Analiza, Strategia, Projekt, Wdrożenie, Automatyzacja, Rozwój | EVOLVED (6-step Polish, platform standard) |
| CI/CD | GitHub Actions | GitHub Actions | SYNCED |
| Design System | — | @mula/design-system | PLATFORM ONLY |
| 7 subdomain apps | — | 7 apps | PLATFORM ONLY |
| Documentation | — | 50+ docs | PLATFORM ONLY |

## Actions Taken
- Main repo README updated with source-of-truth banner
- Legacy repo README updated (ARCHIVE notice)
- All documentation updated with repo status
- Competencies verified and synced
- No data loss — all value preserved in mula-platform

## Repository Status
- mula-platform: ACTIVE
- mulagroup-landing: LEGACY (do not develop)
