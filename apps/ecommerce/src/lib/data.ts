import type { EcomService, EcomPlatform, EcomCase } from './types'

export const ecomServices: EcomService[] = [
  {
    id: 'sklepy-internetowe',
    title: 'Sklepy internetowe',
    description:
      'Projektujemy i wdrażamy sklepy internetowe dopasowane do Twojego modelu biznesowego. Od Shopify i WooCommerce po dedykowane rozwiązania Next.js Commerce — wybieramy technologię pod Twój wolumen i plany wzrostu.',
    icon: 'Store',
  },
  {
    id: 'integracje',
    title: 'Integracje marketplace',
    description:
      'Sprzedaż wielokanałowa przez Allegro, Amazon, eBay i Shopify z centralnym zarządzaniem zamówieniami, stanami magazynowymi i cennikami. BaseLinker, ErpBox i dedykowane integracje API.',
    icon: 'ShoppingCart',
  },
  {
    id: 'optymalizacja-konwersji',
    title: 'Optymalizacja konwersji',
    description:
      'Audyty UX, testy A/B, analityka lejka sprzedażowego i optymalizacja stron produktowych. Zwiększamy współczynnik konwersji poprzez dane, nie zgadywanie — średnio +25% w ciągu 3 miesięcy.',
    icon: 'TrendingUp',
  },
  {
    id: 'automatyzacja-logistyki',
    title: 'Automatyzacja logistyki',
    description:
      'Integracja z kurierami (InPost, DPD, DHL), automatyczne generowanie listów przewozowych, monitoring przesyłek i powiadomienia dla klientów. Fulfilment od przyjęcia towaru po wysyłkę.',
    icon: 'Package',
  },
  {
    id: 'analityka-sprzedazy',
    title: 'Analityka sprzedaży',
    description:
      'Dashboardy sprzedażowe w czasie rzeczywistym, analiza koszyków porzuconych, predykcja popytu i automatyczne raporty. Podejmuj decyzje w oparciu o dane, nie intuicję.',
    icon: 'BarChart3',
  },
  {
    id: 'mobile-commerce',
    title: 'Mobile commerce',
    description:
      'Responsywne sklepy, PWA i aplikacje mobilne dla e-commerce. Optymalizacja ścieżki zakupowej na urządzeniach mobilnych — tam gdzie dziś generowane jest 70%+ ruchu.',
    icon: 'Smartphone',
  },
]

export const ecomPlatforms: EcomPlatform[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    description:
      'Wiodąca platforma SaaS dla e-commerce. Szybkie wdrożenie, tysiące wtyczek i aplikacji, natywna integracja z social commerce i marketplace.',
    features: [
      'Hosting i utrzymanie w cenie abonamentu',
      'Ponad 8000 wtyczek w App Store',
      'Natywna integracja z Meta, TikTok, Google',
      'Wbudowany POS dla sprzedaży stacjonarnej',
      'Shopify Markets dla sprzedaży cross-border',
    ],
    bestFor: 'Firmy oczekujące szybkiego startu bez zarządzania infrastrukturą. Idealny dla sprzedaży B2C z budżetem na abonament miesięczny.',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description:
      'Najpopularniejsza wtyczka e-commerce dla WordPress. Pełna kontrola nad kodem, nieskończone możliwości customizacji i zerowe koszty licencyjne.',
    features: [
      'Open source — pełna własność kodu',
      'Dowolna customizacja frontendu i backendu',
      'Ogromna społeczność i tysiące darmowych wtyczek',
      'Niskie koszty startowe (hosting od 30 zł/mies.)',
      'Integracja z dowolnym systemem przez REST API',
    ],
    bestFor: 'Firmy z istniejącą stroną na WordPress, wymagające pełnej kontroli nad kodem i niskich kosztów utrzymania.',
  },
  {
    id: 'prestashop',
    name: 'PrestaShop',
    description:
      'Europejska platforma open source z silnym wsparciem dla rynków lokalnych. Zaawansowane zarządzanie wielosklepowe i wielojęzyczne.',
    features: [
      'Natywne zarządzanie wieloma sklepami z jednego panelu',
      'Zaawansowane silnik promocji i rabatów',
      'Wielojęzyczność i wielowalutowość w standardzie',
      'Silne wsparcie dla rynków europejskich (VAT, fakturowanie)',
      'Aktywna polska społeczność i dokumentacja',
    ],
    bestFor: 'Średnie i duże sklepy na rynku europejskim, szczególnie z wieloma wersjami językowymi i złożonymi regułami rabatowymi.',
  },
  {
    id: 'nextjs-commerce',
    name: 'Next.js Commerce',
    description:
      'Dedykowany headless commerce na Next.js. Maksymalna wydajność, pełna customizacja frontendu i architektura gotowa na miliony odsłon miesięcznie.',
    features: [
      'Headless — frontend oddzielony od backendu',
      'Wydajność 95+ w Google Lighthouse',
      'Pełna customizacja UX/UI bez ograniczeń szablonu',
      'Architektura JAMstack — bezpieczeństwo i skalowalność',
      'Integracja z dowolnym backendem (Shopify, Stripe, Medusa)',
    ],
    bestFor: 'Marki premium i sklepy z dużym ruchem, dla których wydajność i unikalny UX są kluczowe dla konwersji.',
  },
]

export const ecomCases: EcomCase[] = [
  {
    id: 'case-1',
    title: 'Wielokanałowa integracja sprzedaży',
    client: 'Producent artykułów sportowych',
    metric: 'Wzrost przychodu o 68%',
    result: 'Pełna automatyzacja zamówień z 4 kanałów w jednym panelu. Czas obsługi zamówienia zredukowany z 15 do 2 minut.',
    description:
      'Klient sprzedawał przez Allegro, Amazon i własny sklep WooCommerce — każdy kanał obsługiwany ręcznie, co prowadziło do błędów w stanach magazynowych i opóźnień w wysyłce. Wdrożyliśmy centralny system zarządzania zamówieniami przez BaseLinker z dedykowanymi integracjami API do ERP klienta.',
    technologies: ['BaseLinker', 'WooCommerce', 'Allegro API', 'Amazon SP-API', 'ERP Integracja'],
  },
  {
    id: 'case-2',
    title: 'Optymalizacja konwersji i redesign sklepu',
    client: 'Sklep z kosmetykami naturalnymi',
    metric: 'Konwersja +42%, średnia wartość koszyka +35%',
    result: 'Przeprojektowana ścieżka zakupowa, wdrożone rekomendacje AI i automatyzacja porzuconych koszyków. Przychód miesięczny wzrósł ze 120 tys. do 210 tys. zł.',
    description:
      'Istniejący sklep Shopify miał wysoki ruch ale niską konwersję (1.2%). Przeprowadziliśmy audyt UX, testy A/B, wdrożyliśmy dynamiczne rekomendacje produktowe i sekwencje e-mail dla porzuconych koszyków. Dodatkowo zoptymalizowaliśmy szybkość ładowania (z 4.2s do 1.1s) i wdrożyliśmy mobile-first checkout.',
    technologies: ['Shopify', 'Klaviyo', 'Google Analytics 4', 'Hotjar', 'Shopify Scripts'],
  },
  {
    id: 'case-3',
    title: 'Automatyzacja fulfilmentu i logistyki',
    client: 'Sieć 3 sklepów z elektroniką',
    metric: 'Koszty logistyki -45%, czas dostawy -60%',
    result: 'Zautomatyzowany proces od przyjęcia zamówienia do nadania przesyłki. 100% zamówień wysyłanych w ten sam dzień, błędy kompletacji spadły do <0.5%.',
    description:
      'Klient obsługiwał miesięcznie 3000+ zamówień z trzech sklepów stacjonarnych i online. Kompletacja ręczna, brak integracji z kurierami i częste pomyłki. Wdrożyliśmy system WMS z integracją kurierską, automatycznym drukowaniem etykiet, skanowaniem kodów kreskowych i powiadomieniami SMS/e-mail dla klientów.',
    technologies: ['WMS', 'InPost API', 'DPD API', 'BaseLinker', 'GS1'],
  },
]
