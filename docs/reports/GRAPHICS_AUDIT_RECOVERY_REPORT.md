# GRAPHICS AUDIT & RECOVERY — FINAL REPORT

**Mission:** 004.R  
**Repo:** `mulasty/mula-platform`  
**Branch:** `master`  
**Date:** 2026-07-06

---

## Commit SHA

`TBD_AFTER_PUSH`

## GitHub Actions

Pending

## Vercel

Pending

## Production URL

https://mulagroup.eu

---

# 1. Co znaleziono?

- **Liczba wszystkich grafik:** 66 files (incl. SVG sources, WebP variants, poster, backgrounds)
- **Liczba grafik w public:** 66
- **Liczba grafik w assets:** Folder `assets` nie istnieje w repo. 4 premium grafiki znajdowały się w `OneDrive/Bureaublad/MulaGroup-Strona/asety website/background assets/` i zostały przeniesione do `public/images/backgrounds/`.
- **Liczba grafik używanych w kodzie:** 15 direct references (7 dynamic via PillarCard, 4 backgrounds, 1 poster, 1 OG, 2 section cards)
- **Liczba martwych grafik:** 0
- **Liczba duplikatów:** 0

---

# 2. Grafiki premium z folderu assets

| Plik | Czy trafił do repo? | Czy jest w public? | Czy jest używany? | Decyzja |
|---|---|---|---|---|
| `Data 1.jpg` → `bg-hero-grid.webp` | TAK | TAK | HeroSection | keep |
| `Data 2.jpg` → `bg-subtle-grid.webp` | TAK | TAK | ProcessSection | keep |
| `Data 3.jpg` → `bg-gradient-mesh.webp` | TAK | TAK | ClientNeedsSection | keep |
| `Data 4.jpg` → `bg-dark-surface.webp` | TAK | TAK | FAQSection | keep |

---

# 3. Aktywne grafiki na stronie

| Sekcja | Aktualny plik | Źródło | Czy premium? | Decyzja |
|---|---|---|---|---|
| Hero | `bg-hero-grid.webp` | premium-upload | TAK | keep |
| AI | `ai-card.webp` | generated-code | NIE | keep-for-now |
| Digital | `digital-card.webp` | generated-code | NIE | keep-for-now |
| E-commerce | `ecommerce-card.webp` | generated-code | NIE | keep-for-now |
| Marketing | `marketing-card.webp` | generated-code | NIE | keep-for-now |
| Cyber | `cyber-card.webp` | generated-code | NIE | keep-for-now |
| Construction | `construction-card.webp` | generated-code | NIE | keep-for-now |
| Innovation | `innovation-card.webp` | generated-code | NIE | keep-for-now |
| Method | `method-card.webp` | generated-code | NIE | keep-for-now |
| About | `about-card.webp` | generated-code | NIE | keep-for-now |
| Contact | `contact-card.webp` | generated-code | NIE | keep-for-now |

---

# 4. Konflikty

1. **Widoczność tła:** Początkowo tła premium były niewidoczne z powodu zbyt niskiej opacity (0.05–0.18) i zbyt mocnego gradientu. Naprawione w `25dcd17` poprzez zwiększenie opacity do 0.35–0.45.
2. **Brak scentralizowanej mapy assetów:** Ścieżki grafik były rozproszone w komponentach. Rozwiązane przez utworzenie `apps/main/src/lib/assets.ts` jako single source of truth.
3. **Brak raportów audytowych:** Brakowało dokumentacji inwentaryzacji. Rozwiązane przez utworzenie `docs/reports/GRAPHICS_FILE_INVENTORY.txt` i `docs/reports/GRAPHICS_USAGE_MAP.md`.

---

# 5. Co naprawiono?

1. Przeniesiono 4 premium tła z `asety website/background assets` do `public/images/backgrounds/`.
2. Skonwertowano je do WebP (1920x1280, quality 85).
3. Zintegrowano w 4 sekcjach: Hero, Process, ClientNeeds, FAQ.
4. Zwiększono opacity tła, aby grafiki były widoczne.
5. Utworzono single source of truth: `apps/main/src/lib/assets.ts`.
6. Utworzono raporty audytowe w `docs/reports/`.

---

# 6. Co wymaga decyzji właściciela?

1. **Czy zastąpić wygenerowane `*-card.webp` kompetencji grafikami premium?** Obecnie są to grafiki generowane kodem (SVG → WebP). Jeśli pojawią się lepsze premium assety, można je podmienić bez zmiany ścieżek.
2. **Czy przywrócić wideo w hero?** Wideo jest wyłączone testowo (`92948d9`). Plik `public/videos/hero.mp4` pozostaje w repo i można je łatwo przywrócić.
3. **Czy generować brakujące formaty dla premium tła?** Obecnie są tylko warianty 1920x1280. Można dodać desktop/mobile/og jeśli będą potrzebne.

---

# 7. Rekomendacja Matrixa

Czy można kontynuować Mission 004?

**TAK** — po audycie wszystkie premium tła są widoczne, dobrze nazwane i zintegrowane. Struktura assetów jest teraz uporządkowana i gotowa na dalsze grafiki premium.
