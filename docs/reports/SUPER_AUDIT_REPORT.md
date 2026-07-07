# SUPER AUDIT REPORT — Mula Platform

**Data:** 2026-07-07  
**Repo:** `mulasty/mula-platform`  
**Branch:** `master`  
**Commit:** `0df8110`  
**Liczba audytów:** 8 równoległych (kod, wydajność, bezpieczeństwo, SEO/a11y, repo/docs, grafiki, CI/CD, treść/brand)  
**Status:** Raport audytowy — brak wprowadzonych zmian

---

## 1. Podsumowanie wykonawcze

Strona działa, buildy przechodzą, Vercel deployuje automatycznie. Jednak projekt ma znaczący dług techniczny i dokumentacyjny. Najpilniejsze problemy to: **brak działającego ESLint i testów, niespójna architektura shared UI, nieaktualna dokumentacja, brak security headers, problemy z accessibility oraz niespójności brandowe/treściowe.**

| Obszar | Ocena | Najważniejszy problem |
|---|---|---|
| Kod | ⚠️ średnia | Martwy ESLint, apps/main nie używa @mula/ui, duplikaty komponentów |
| Wydajność | ⚠️ średnia | 6.9MB martwe wideo, brak next/image, hero opacity 0 na start |
| Bezpieczeństwo | ⚠️ średnia | Brak CSP/HSTS/X-Frame, 2 podatności postcss |
| SEO / a11y | ⚠️ średnia | Brak focus-visible, słaby kontrast, brak polityki prywatności |
| Repo / docs | ❌ słaba | Dokumentacja mocno nieaktualna, brak AGENTS.md |
| Grafiki | ✅ dobra | Spójne, dobrze nazwane, ale root public/ może powodować 404 |
| CI/CD | ⚠️ średnia | Lint fałszywie pozytywny, brak testów, push bezpośredni na master |
| Treść / brand | ⚠️ średnia | Dwuznaczność Mula Method, anglicyzmy, puste linki |

---

## 2. Problemy krytyczne (do naprawy w pierwszej kolejności)

1. **ESLint nie działa** — skonfigurowany, ale brak pakietów i skryptów `lint` w aplikacjach.
2. **`apps/main` nie używa `@mula/ui`** — duplikuje komponenty, podwaja koszt utrzymania.
3. **Brak security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options.
4. **Podatność `postcss` via `next@16.2.10`** — 2 moderate CVE.
5. **Brak testów jednostkowych/E2E** — zero automatycznych testów.
6. **Push bezpośredni na `master`** — brak PR, branch protection, code review.
7. **Nieaktualna dokumentacja** — README, PROJECT_STATUS, MASTER_INDEX, HEALTH_CHECK mówią sprzeczne rzeczy.
8. **Dwuznaczność „Mula Method"** — jednocześnie 3 filary i 6 kroków.
9. **Pusty link do polityki prywatności** — `href="#"` w Footer.
10. **Brak `AGENTS.md`** — brak instrukcji dla agentów AI.

---

## 3. Problemy wysokie

11. Brak Prettier / spójnego formatowania.
12. `React.ComponentType<any>` w mapach ikon — utrata type safety.
13. `mousemove` w hero bez throttle — obciąża główny wątek.
14. `Math.random()` w renderze — niestabilność animacji i potencjalne layout shift.
15. Martwe komponenty w `apps/main`: `CTAButton`, `CTASection`, `TestimonialsSection`, `PartnersSection`, `WhyUsSection`.
16. Brak `robots.ts` / `sitemap.ts` w 5 subdomenach.
17. Brak focus-visible, aria-expanded, skip-link.
18. Słaby kontrast `mula-text-dim` (#64748b).
19. CTA hero prowadzi do `#needs` zamiast `#process`.
20. Placeholdery w `TestimonialsSection` i `PartnersSection`.
21. Martwe assety: `hero.mp4` (6.9MB), `home-hero-poster.webp`.
22. Niespójność `vercel.json` root vs `apps/main/vercel.json`.
23. `npm install` zamiast `npm ci` na Vercel.
24. Brak `.nvmrc`, `engines`, `.env.example`, `.vercelignore`.
25. Mieszanie języka polskiego z angielskim (`EU-based Poland`, `All rights reserved`, `high-priority`, `Design`, `Scale`).

---

## 4. Rekomendacje priorytetowe

### Sprint A — Bezpieczeństwo i jakość (1-2 dni)
- [ ] Naprawić ESLint (zainstalować pakiety, dodać skrypty do wszystkich apps).
- [ ] Dodać security headers w `next.config.ts`.
- [ ] Wyeliminować podatność `postcss` przez `overrides` w root `package.json`.
- [ ] Dodać branch protection na `master` i wymusić PR + zielony CI.
- [ ] Zmienić `npm audit || true` na blokujący lub zarządzany wyjątkami.

### Sprint B — Architektura i wydajność (2-3 dni)
- [ ] Zrefactorować `apps/main`, by korzystał z `@mula/ui`.
- [ ] Usunąć martwe komponenty lub dodać je do `page.tsx`.
- [ ] Usunąć martwe assety (`hero.mp4`, `home-hero-poster.webp`).
- [ ] Używać `next/image` zamiast CSS `background-image` dla krytycznych grafik.
- [ ] Dodać throttle do `mousemove` w hero.
- [ ] Ujednolicić `globals.css` / aktywować `@mula/design-system`.

### Sprint C — Treść, brand, SEO, a11y (1-2 dni)
- [ ] Ujednolicić nazewnictwo: Mula Method = 3 filary, proces = „Model operacyjny".
- [ ] Poprawić CTA hero → `#process`.
- [ ] Stworzyć stronę `/polityka-prywatnosci`.
- [ ] Wyeliminować anglicyzmy z polskich tekstów.
- [ ] Poprawić statystykę „5 letni model" na wartość zgodną z faktycznym stażem.
- [ ] Dodać focus-visible, aria-expanded, skip-link.
- [ ] Poprawić kontrast `mula-text-dim`.
- [ ] Dodać `robots.ts` / `sitemap.ts` do subdomen.

### Sprint D — Dokumentacja i CI/CD (1 dzień)
- [ ] Utworzyć `AGENTS.md`.
- [ ] Zaktualizować README, PROJECT_STATUS, MASTER_INDEX, HEALTH_CHECK.
- [ ] Dodać testy: Vitest + Playwright.
- [ ] Ujednolicić `vercel.json`, zmienić `installCommand` na `npm ci`.
- [ ] Dodać `.nvmrc`, `engines`, `.env.example`, `.vercelignore`.

---

## 5. Wnioski

Projekt ma solidne fundamenty techniczne (działający monorepo, Next.js 16, TypeScript strict, automatyczne deploye), ale wymaga pilnej konserwacji w obszarze **jakości kodu, bezpieczeństwa, dokumentacji i spójności treści**. Zalecane jest wdrożenie Sprintu A i B w pierwszej kolejności, ponieważ eliminują one największe ryzyka techniczne i wizerunkowe.

---

## 6. Pełne raporty źródłowe

Szczegółowe raporty z poszczególnych audytów dostępne są w historii sesji agentów:
- Audyt kodu
- Audyt wydajności
- Audyt bezpieczeństwa
- Audyt SEO/a11y
- Audyt repo/docs
- Audyt grafik
- Audyt CI/CD
- Audyt treści/brandu
