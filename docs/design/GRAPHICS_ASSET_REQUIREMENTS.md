# MULA PLATFORM --- GRAPHICS ASSET REQUIREMENTS

## Premium Asset Library for mulagroup.eu

**Status:** ACTIVE\
**Mission:** 004 --- Premium Graphics System\
**Main repo:** `mulasty/mula-platform`\
**Branch:** `master`\
**Purpose:** Define the complete graphics demand for Mula Group landing
page, subdomains, responsive layouts, Open Graph, social media and
future brand assets.

------------------------------------------------------------------------

# 1. Executive Summary

Mula Group nie potrzebuje pojedynczych przypadkowych grafik.

Mula Group potrzebuje spójnej biblioteki assetów premium:

``` text
Mula Group Premium Asset Library
```

Biblioteka grafik ma obsługiwać:

-   główny landing page `mulagroup.eu`,
-   7 kompetencji firmy,
-   przyszłe subdomeny,
-   wersje desktop,
-   wersje mobile,
-   Open Graph,
-   social media,
-   materiały sprzedażowe,
-   prezentacje ofertowe,
-   grafiki do kampanii marketingowych.

------------------------------------------------------------------------

# 2. Główna zasada

Nie generować od razu wszystkich grafik.

Najpierw:

1.  zatwierdzić styl bazowy,
2.  stworzyć jeden prototyp dla `Technologie AI`,
3.  sprawdzić go na stronie,
4.  ocenić desktop i mobile,
5.  dopiero potem skalować styl na pozostałe grafiki.

Powód:

``` text
Jeden zły styl × 89 assetów = duża strata czasu, kosztów i spójności.
```

Najpierw jakość.\
Dopiero potem skala.

------------------------------------------------------------------------

# 3. Minimalny zestaw grafik dla landing page

Główna strona `mulagroup.eu` powinna być wzbogacona o 11 unikalnych
grafik bazowych.

  ---------------------------------------------------------------------------
  \#                Sekcja                Grafika           Cel biznesowy
  ----------------- --------------------- ----------------- -----------------
  1                 Hero                  Hero główne Mula  Pierwsze wrażenie
                                          Group             premium

  2                 Technologie AI        Grafika           Pokazanie
                                          kompetencji AI    nowoczesności i
                                                            AI

  3                 Transformacja Cyfrowa Grafika           Pokazanie
                                          cyfryzacji        procesów i
                                                            automatyzacji

  4                 E-commerce            Grafika commerce  Pokazanie
                                                            sprzedaży i
                                                            integracji

  5                 Marketing i Media     Grafika           Pokazanie zasięgu
                                          marketingowa      i danych

  6                 Cyberbezpieczeństwo   Grafika cyber     Pokazanie ochrony
                                                            i zaufania

  7                 Budownictwo i         Grafika           Pokazanie
                    Inżynieria            inżynieryjna      kompetencji
                                                            technicznej

  8                 Innowacje i Startup   Grafika innowacji Pokazanie wizji i
                    Studio                                  produktów

  9                 Mula Method           Grafika procesu   Pokazanie sposobu
                                                            pracy

  10                O nas                 Grafika           Budowanie
                                          ekosystemu firmy  wiarygodności

  11                CTA końcowe           Grafika           Wzmocnienie
                                          kontaktowa /      konwersji
                                          systemowa         
  ---------------------------------------------------------------------------

Minimalny zestaw bazowy:

``` text
11 grafik
```

------------------------------------------------------------------------

# 4. Responsywność --- wymagane formaty

Każda grafika bazowa powinna mieć 4 wersje responsywne.

## 4.1 Desktop / Hero

Rozmiar:

``` text
3840x2160
```

Proporcja:

``` text
16:9
```

Zastosowanie:

-   hero,
-   szerokie sekcje,
-   tła subdomen,
-   duże ekrany,
-   prezentacje.

Nazwa pliku:

``` text
{name}-desktop.webp
```

Wymagania:

-   główny obiekt nie może być zbyt blisko krawędzi,
-   grafika musi zachować jakość na dużych monitorach,
-   powinna mieć miejsce na tekst HTML,
-   nie może zawierać tekstu wygenerowanego w obrazie.

------------------------------------------------------------------------

## 4.2 Card / Section

Rozmiar:

``` text
1600x1200
```

Proporcja:

``` text
4:3
```

Zastosowanie:

-   karty kompetencji,
-   kafle landing page,
-   sekcje opisowe,
-   elementy w gridzie.

Nazwa pliku:

``` text
{name}-card.webp
```

Wymagania:

-   główny motyw czytelny nawet po zmniejszeniu,
-   dobra czytelność w gridzie,
-   brak drobnych detali, które znikną na mobile,
-   spójność z desktop hero.

------------------------------------------------------------------------

## 4.3 Mobile

Rozmiar:

``` text
1080x1350
```

Proporcja:

``` text
4:5
```

Zastosowanie:

-   mobile hero,
-   pionowe sekcje,
-   social stories,
-   mobile cards,
-   responsywne kadry.

Nazwa pliku:

``` text
{name}-mobile.webp
```

Wymagania:

-   główny obiekt centralny lub lekko powyżej środka,
-   brak ważnych elementów przy krawędziach,
-   grafika nie może być za szeroka kompozycyjnie,
-   musi działać w pionowym układzie telefonu.

------------------------------------------------------------------------

## 4.4 Open Graph / Social Preview

Rozmiar:

``` text
1200x630
```

Proporcja:

``` text
1.91:1
```

Zastosowanie:

-   `og:image`,
-   LinkedIn preview,
-   Facebook preview,
-   komunikatory,
-   udostępnianie linków.

Nazwa pliku:

``` text
{name}-og.webp
```

Wymagania:

-   mocny centralny motyw,
-   czytelność w małym podglądzie,
-   brak tekstu na obrazie,
-   brak elementów przyciętych przez social preview.

------------------------------------------------------------------------

# 5. Liczba plików dla landing page

11 grafik bazowych × 4 formaty:

``` text
11 × 4 = 44 pliki
```

To jest docelowy zestaw dla samego landing page.

------------------------------------------------------------------------

# 6. 7 kompetencji --- grafiki główne

Każda kompetencja wymaga osobnej grafiki bazowej.

## 6.1 Technologie AI

Slug:

``` text
ai
```

Kolor:

``` text
#3b82f6
```

Motyw:

-   agenci AI,
-   system wieloagentowy,
-   węzły decyzyjne,
-   sieć neuronowa,
-   warstwy danych,
-   automatyzacja poznawcza.

Pliki:

``` text
ai-desktop.webp
ai-card.webp
ai-mobile.webp
ai-og.webp
```

------------------------------------------------------------------------

## 6.2 Transformacja Cyfrowa

Slug:

``` text
digital
```

Kolor:

``` text
#8b5cf6
```

Motyw:

-   cyfrowa mapa firmy,
-   workflow,
-   integracje,
-   automatyzacja procesów,
-   przepływ danych,
-   porządkowanie operacji.

Pliki:

``` text
digital-desktop.webp
digital-card.webp
digital-mobile.webp
digital-og.webp
```

------------------------------------------------------------------------

## 6.3 E-commerce

Slug:

``` text
ecommerce
```

Kolor:

``` text
#f59e0b
```

Motyw:

-   marketplace,
-   zamówienia,
-   magazyn,
-   synchronizacja kanałów,
-   przepływ sprzedaży,
-   system commerce.

Pliki:

``` text
ecommerce-desktop.webp
ecommerce-card.webp
ecommerce-mobile.webp
ecommerce-og.webp
```

------------------------------------------------------------------------

## 6.4 Marketing i Media

Slug:

``` text
marketing
```

Kolor:

``` text
#ec4899
```

Motyw:

-   kampanie,
-   sygnały marketingowe,
-   zasięg,
-   social media jako abstrakcyjna sieć,
-   dane reklamowe,
-   content flow.

Pliki:

``` text
marketing-desktop.webp
marketing-card.webp
marketing-mobile.webp
marketing-og.webp
```

------------------------------------------------------------------------

## 6.5 Cyberbezpieczeństwo

Slug:

``` text
cyber
```

Kolor:

``` text
#10b981
```

Motyw:

-   warstwy ochrony,
-   monitoring,
-   infrastruktura zabezpieczona,
-   zgodność,
-   zaszyfrowane kanały,
-   spokojne poczucie bezpieczeństwa.

Pliki:

``` text
cyber-desktop.webp
cyber-card.webp
cyber-mobile.webp
cyber-og.webp
```

------------------------------------------------------------------------

## 6.6 Budownictwo i Inżynieria

Slug:

``` text
construction
```

Kolor:

``` text
#ef4444
```

Motyw:

-   konstrukcja stalowa,
-   hala,
-   blueprint,
-   siatka techniczna,
-   połączenie inżynierii i AI,
-   techniczna precyzja.

Pliki:

``` text
construction-desktop.webp
construction-card.webp
construction-mobile.webp
construction-og.webp
```

------------------------------------------------------------------------

## 6.7 Innowacje i Startup Studio

Slug:

``` text
innovation
```

Kolor:

``` text
#06b6d4
```

Motyw:

-   MVP,
-   prototyp,
-   roadmapa,
-   idea przechodząca w produkt,
-   startup studio,
-   system rozwoju produktu.

Pliki:

``` text
innovation-desktop.webp
innovation-card.webp
innovation-mobile.webp
innovation-og.webp
```

------------------------------------------------------------------------

# 7. Dodatkowe grafiki landing page

Poza 7 kompetencjami strona główna potrzebuje jeszcze 4 grafik bazowych.

## 7.1 Hero Mula Group

Slug:

``` text
home
```

Cel:

Pierwsze wrażenie premium.

Motyw:

-   Mula Group jako ekosystem,
-   7 kompetencji jako połączone obszary,
-   centrum operacyjne,
-   dark-tech,
-   efekt firmy technologicznej klasy enterprise.

Pliki:

``` text
home-desktop.webp
home-card.webp
home-mobile.webp
home-og.webp
```

------------------------------------------------------------------------

## 7.2 Mula Method

Slug:

``` text
method
```

Cel:

Pokazanie procesu pracy.

Motyw:

-   6 etapów:
    -   Analiza,
    -   Strategia,
    -   Projekt,
    -   Wdrożenie,
    -   Automatyzacja,
    -   Rozwój,
-   przepływ od diagnozy do skalowania,
-   ścieżka / pipeline / system.

Pliki:

``` text
method-desktop.webp
method-card.webp
method-mobile.webp
method-og.webp
```

------------------------------------------------------------------------

## 7.3 O nas / Ekosystem firmy

Slug:

``` text
about
```

Cel:

Budowanie zaufania do Mula Group.

Motyw:

-   firma jako ekosystem,
-   zespoły i kompetencje jako węzły,
-   centrum koordynacji,
-   stabilność,
-   partner technologiczny.

Pliki:

``` text
about-desktop.webp
about-card.webp
about-mobile.webp
about-og.webp
```

------------------------------------------------------------------------

## 7.4 CTA / Kontakt

Slug:

``` text
contact
```

Cel:

Wzmocnienie konwersji.

Motyw:

-   otwarte połączenie,
-   konsultacja,
-   kanał komunikacji,
-   zaproszenie do rozmowy,
-   bezpieczne wejście do współpracy.

Pliki:

``` text
contact-desktop.webp
contact-card.webp
contact-mobile.webp
contact-og.webp
```

------------------------------------------------------------------------

# 8. Background assets

Dodatkowo potrzebujemy zestawu assetów tła, które można używać
wielokrotnie.

## Lista tła

  \#   Nazwa                         Cel
  ---- ----------------------------- -----------------------------
  1    `bg-hero-grid.webp`           tło głównego hero
  2    `bg-subtle-grid.webp`         delikatna siatka sekcji
  3    `bg-gradient-mesh.webp`       premium gradient mesh
  4    `bg-particle-flow.webp`       przepływ danych
  5    `bg-blueprint-grid.webp`      tło techniczne/inżynieryjne
  6    `bg-glow-overlay.webp`        warstwa świetlna
  7    `bg-noise-texture.webp`       subtelna tekstura
  8    `bg-connection-lines.webp`    linie połączeń
  9    `bg-abstract-geometry.webp`   geometryczne tło
  10   `bg-dark-surface.webp`        neutralne tło premium

Liczba:

``` text
10 assetów tła
```

Formaty:

-   WebP,
-   opcjonalnie SVG dla prostych linii,
-   bez tekstu,
-   niska waga,
-   możliwość użycia jako CSS background.

------------------------------------------------------------------------

# 9. Premium icons

Potrzebny jest spójny zestaw ikon SVG.

Nie chodzi o losowe ikony z paczki, ale o zestaw dopasowany do Mula
Group.

## Lista ikon

  \#   Ikona          Zastosowanie
  ---- -------------- -------------------------------
  1    AI             Technologie AI
  2    Digital        Transformacja Cyfrowa
  3    Commerce       E-commerce
  4    Marketing      Marketing i Media
  5    Cyber          Cyberbezpieczeństwo
  6    Construction   Budownictwo
  7    Innovation     Startup Studio
  8    Automation     Automatyzacja
  9    Security       Bezpieczeństwo
  10   Analytics      Dane / KPI
  11   Integration    Integracje
  12   Platform       Platforma
  13   Contact        Kontakt
  14   Arrow          Nawigacja / CTA
  15   Check          Potwierdzenia / trust signals

Liczba:

``` text
15 ikon SVG
```

Wymagania:

-   SVG,
-   jeden styl linii,
-   brak wypełnień losowych,
-   możliwość kolorowania przez CSS,
-   zgodność z dark theme.

------------------------------------------------------------------------

# 10. Open Graph images

Open Graph to osobny wymóg, ponieważ social preview często kadruje
inaczej niż strona.

## Potrzebne OG images

  \#   Strona         Plik
  ---- -------------- ------------------------
  1    Home           `home-og.webp`
  2    AI             `ai-og.webp`
  3    Digital        `digital-og.webp`
  4    E-commerce     `ecommerce-og.webp`
  5    Marketing      `marketing-og.webp`
  6    Cyber          `cyber-og.webp`
  7    Construction   `construction-og.webp`
  8    Innovation     `innovation-og.webp`

Liczba:

``` text
8 grafik OG
```

Wymagania:

-   1200x630,
-   bez tekstu,
-   mocny centralny motyw,
-   działa w małym podglądzie,
-   zgodność kolorystyczna z kompetencją.

------------------------------------------------------------------------

# 11. Social media templates

Dodatkowo warto przygotować szablony social media.

Nie muszą być generowane od razu, ale powinny być zaplanowane.

## Lista szablonów

  \#   Platforma           Format
  ---- ------------------- -----------
  1    LinkedIn post       1200x1200
  2    LinkedIn banner     1584x396
  3    Facebook post       1200x630
  4    Instagram post      1080x1080
  5    YouTube thumbnail   1280x720

Liczba:

``` text
5 szablonów
```

Wymagania:

-   warstwa tła jako obraz,
-   tekst dodawany osobno w narzędziu graficznym lub HTML/canvas,
-   spójność z Asset Library,
-   możliwość użycia dla wszystkich 7 kompetencji.

------------------------------------------------------------------------

# 12. Subdomain hero images

Każda przyszła subdomena powinna mieć własny hero image.

## Lista

  \#   Subdomena                   Grafika
  ---- --------------------------- -------------------
  1    ai.mulagroup.eu             AI hero
  2    digital.mulagroup.eu        Digital hero
  3    ecommerce.mulagroup.eu      E-commerce hero
  4    marketing.mulagroup.eu      Marketing hero
  5    cyber.mulagroup.eu          Cyber hero
  6    construction.mulagroup.eu   Construction hero
  7    innovation.mulagroup.eu     Innovation hero

Liczba:

``` text
7 grafik hero dla subdomen
```

Uwaga:

Te grafiki mogą bazować na `desktop` wariantach kompetencji, ale warto
przygotować osobne kadry dla hero subdomen.

------------------------------------------------------------------------

# 13. Łączne zapotrzebowanie

## 13.1 Landing Page

``` text
11 grafik bazowych × 4 formaty = 44 pliki
```

## 13.2 Background assets

``` text
10 plików
```

## 13.3 Premium icons

``` text
15 SVG
```

## 13.4 Open Graph

Wliczone częściowo w 44, ale jako osobna kategoria kontrolna:

``` text
8 grafik OG
```

## 13.5 Social templates

``` text
5 szablonów
```

## 13.6 Subdomain hero

``` text
7 grafik
```

------------------------------------------------------------------------

# 14. Finalna liczba assetów

## Minimalny profesjonalny zestaw

``` text
44 pliki
```

To obejmuje landing page z responsywnymi wariantami.

## Pełna biblioteka premium

``` text
około 89 assetów
```

Rozbicie:

  Kategoria                          Liczba
  -------------------------------- --------
  Landing page responsive assets         44
  Background assets                      10
  Premium SVG icons                      15
  Open Graph control set                  8
  Social templates                        5
  Subdomain hero images                   7
  **Razem**                          **89**

Uwaga:

Open Graph częściowo pokrywa się z wariantami w 44 plikach, ale powinien
być traktowany jako osobny zestaw kontrolny w QA.

------------------------------------------------------------------------

# 15. Rekomendowana kolejność produkcji

## Faza 1 --- Style Prototype

Liczba:

``` text
1 grafika
```

Zakres:

-   AI Style Prototype,
-   1600x1200,
-   test na stronie,
-   ocena desktop/mobile.

Cel:

Zatwierdzić styl.

------------------------------------------------------------------------

## Faza 2 --- Core Competency Cards

Liczba:

``` text
7 grafik
```

Zakres:

-   `*-card.webp` dla 7 kompetencji.

Cel:

Wzbogacić sekcję 7 kompetencji.

------------------------------------------------------------------------

## Faza 3 --- Main Landing Expansion

Liczba:

``` text
4 grafiki
```

Zakres:

-   home,
-   method,
-   about,
-   contact.

Cel:

Wzbogacić całą stronę główną.

------------------------------------------------------------------------

## Faza 4 --- Responsive Variants

Liczba:

``` text
33 dodatkowe pliki
```

Zakres:

-   desktop,
-   mobile,
-   OG,
-   dla 11 grafik.

Cel:

Pełna responsywność i social preview.

------------------------------------------------------------------------

## Faza 5 --- Background Assets

Liczba:

``` text
10 assetów
```

Cel:

Ujednolicić tła i sekcje.

------------------------------------------------------------------------

## Faza 6 --- Premium Icons

Liczba:

``` text
15 SVG
```

Cel:

Zbudować spójny system ikon.

------------------------------------------------------------------------

## Faza 7 --- Subdomain Hero

Liczba:

``` text
7 grafik
```

Cel:

Przygotować subdomeny do pełnej prezentacji.

------------------------------------------------------------------------

## Faza 8 --- Social Templates

Liczba:

``` text
5 szablonów
```

Cel:

Przygotować marketing i publikacje.

------------------------------------------------------------------------

# 16. Zasady jakości

## 16.1 Brak tekstu na grafikach

Tekst musi pozostać w HTML.

Powody:

-   SEO,
-   dostępność,
-   responsywność,
-   tłumaczenia,
-   łatwiejsze zmiany.

------------------------------------------------------------------------

## 16.2 Jeden styl wizualny

Wszystkie grafiki muszą wyglądać jak część jednego systemu.

Elementy wspólne:

-   dark-tech,
-   subtelna siatka,
-   elegancka głębia,
-   kolor kompetencji,
-   czyste światło,
-   brak chaosu.

------------------------------------------------------------------------

## 16.3 Optymalizacja

Każdy asset musi być zoptymalizowany.

Wymagania:

-   WebP,
-   rozsądna waga pliku,
-   lazy loading,
-   `srcset`,
-   odpowiednie `sizes`,
-   brak ciężkich obrazów ładowanych niepotrzebnie na mobile.

------------------------------------------------------------------------

## 16.4 Dostępność

Każdy obraz musi mieć:

-   opis alt, jeśli niesie znaczenie,
-   pusty alt, jeśli jest dekoracyjny,
-   brak tekstu w obrazie jako jedynego nośnika informacji.

------------------------------------------------------------------------

## 16.5 Responsywność

Każda grafika musi być sprawdzona w:

-   320 px,
-   375 px,
-   430 px,
-   768 px,
-   1024 px,
-   1440 px,
-   1920 px.

------------------------------------------------------------------------

## 16.6 Performance

Przed wdrożeniem większej liczby grafik sprawdzić:

-   Lighthouse Performance,
-   LCP,
-   CLS,
-   INP,
-   rozmiar paczki,
-   rozmiar obrazów,
-   lazy loading.

------------------------------------------------------------------------

# 17. Struktura katalogów

Docelowa struktura:

``` text
public/
  images/
    competencies/
      ai-desktop.webp
      ai-card.webp
      ai-mobile.webp
      ai-og.webp
      digital-desktop.webp
      ...
    backgrounds/
      bg-hero-grid.webp
      bg-subtle-grid.webp
      ...
    social/
      linkedin-post-template.webp
      facebook-post-template.webp
      ...
  icons/
    premium/
      ai.svg
      digital.svg
      commerce.svg
      ...
```

------------------------------------------------------------------------

# 18. Dokumentacja do utworzenia

Matrix powinien utworzyć lub zaktualizować:

``` text
docs/design/GRAPHICS_ASSET_REQUIREMENTS.md
docs/design/GRAPHICS_SYSTEM.md
docs/design/IMAGE_PROMPTS.md
docs/design/IMAGE_QA_CHECKLIST.md
docs/missions/MISSION_004_GRAPHICS_REPORT.md
```

------------------------------------------------------------------------

# 19. QA Checklist

Przed akceptacją każdej grafiki sprawdzić:

-   [ ] brak tekstu,
-   [ ] brak logo,
-   [ ] brak ludzi stockowych,
-   [ ] brak tanich ikon 3D,
-   [ ] spójność kolorów,
-   [ ] spójność z dark-tech,
-   [ ] czytelność w małym rozmiarze,
-   [ ] poprawne kadrowanie mobile,
-   [ ] poprawne kadrowanie desktop,
-   [ ] kompresja WebP,
-   [ ] alt text,
-   [ ] brak negatywnego wpływu na Lighthouse,
-   [ ] zgodność z 7 kompetencjami,
-   [ ] zgodność z Mula Platform.

------------------------------------------------------------------------

# 20. Decyzja strategiczna

Nie budujemy tylko grafik dla jednej strony.

Budujemy bibliotekę wizualną Mula Group, która ma pracować przez lata.

Dlatego finalny kierunek to:

``` text
20–25 kluczowych grafik bazowych
```

z których tworzymy:

-   warianty responsywne,
-   OG images,
-   tła,
-   subdomain hero,
-   materiały social.

To zmniejsza koszt, utrzymuje spójność i daje Mula Group profesjonalny
system wizualny zamiast pojedynczych przypadkowych obrazów.
