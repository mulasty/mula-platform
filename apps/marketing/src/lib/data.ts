import type { MarketingService, MarketingChannel, MarketingCase } from './types'

export const marketingServices: MarketingService[] = [
  {
    id: 'seo-sem',
    title: 'SEO / SEM',
    description:
      'Pozycjonowanie i kampanie w wyszukiwarkach, które zwiększają widoczność Twojej firmy w Google. Optymalizacja techniczna, link building, analiza słów kluczowych i audyty SEO.',
    icon: 'Search',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description:
      'Strategie social media na Facebooku, Instagramie, LinkedIn i TikToku. Kreacja treści, moderacja społeczności, kampanie reklamowe i raportowanie efektów.',
    icon: 'Share2',
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description:
      'Tworzenie treści, które budują autorytet marki i generują leady. Artykuły blogowe, e-booki, infografiki, case studies i strategie contentowe szyte na miarę.',
    icon: 'FileText',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description:
      'Newslettery, driptowe kampanie i automatyzacja mailingu, które zwiększają konwersje. Segmentacja bazy, testy A/B, personalizacja i analityka kampanii.',
    icon: 'Mail',
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description:
      'Automatyzacja procesów marketingowych od lead generation po remarketing. Scoring leadów, workflowy, integracje CRM i automatyczne kampanie omnichannel.',
    icon: 'Workflow',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description:
      'Kampanie Google Ads i Facebook Ads optymalizowane pod kątem ROI. Retargeting, kampanie produktowe, testy kreacji i zaawansowana analityka konwersji.',
    icon: 'BarChart3',
  },
]

export const marketingChannels: MarketingChannel[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    description:
      'Kampanie w sieci wyszukiwania, reklamy produktowe (Shopping) i kampanie displayowe. Precyzyjne targetowanie intencji zakupowych użytkowników.',
    metrics: [
      { label: 'Średnie ROAS', value: '450%' },
      { label: 'Średni CTR', value: '5.8%' },
      { label: 'Redukcja CPA', value: '-35%' },
    ],
    icon: 'Globe',
  },
  {
    id: 'social-ads',
    name: 'Social Media Ads',
    description:
      'Reklamy na Facebooku, Instagramie i LinkedIn precyzyjnie targetowane na demografię, zainteresowania i zachowania. Kampanie lead gen i konwersyjne.',
    metrics: [
      { label: 'Średni CPM', value: '12 zł' },
      { label: 'Koszt leada', value: '8 zł' },
      { label: 'Zasięg mies.', value: '500K+' },
    ],
    icon: 'MessageCircle',
  },
  {
    id: 'email',
    name: 'Email Marketing',
    description:
      'Zautomatyzowane kampanie email z segmentacją i personalizacją. Ścieżki powitalne, porzucone koszyki, rekomendacje produktowe i newslettery.',
    metrics: [
      { label: 'Open Rate', value: '32%' },
      { label: 'CTR', value: '4.2%' },
      { label: 'Konwersja', value: '2.8%' },
    ],
    icon: 'AtSign',
  },
  {
    id: 'seo',
    name: 'SEO & Content',
    description:
      'Pozycjonowanie organiczne i content marketing jako długoterminowa strategia budowania ruchu. Artykuły, link building i optymalizacja techniczna.',
    metrics: [
      { label: 'Wzrost ruchu', value: '+180%' },
      { label: 'Top 10 fraz', value: '350+' },
      { label: 'Konwersja SEO', value: '3.5%' },
    ],
    icon: 'TrendingUp',
  },
]

export const marketingCases: MarketingCase[] = [
  {
    id: 'ecommerce-fashion',
    title: 'Skalowanie sprzedaży e-commerce o 320% w 6 miesięcy',
    client: 'Marka modowa B2C',
    channel: 'Performance Marketing + Social Media',
    challenge:
      'Klient notował stagnację sprzedaży przy rosnących kosztach reklam. Kampanie Google Ads i Facebook Ads nie były zoptymalizowane pod kątem ROAS, a struktura kont reklamowych była chaotyczna.',
    solution:
      'Przebudowa struktury kampanii Google Ads (Performance Max + Search), wdrożenie dynamicznego retargetingu na Facebooku i Instagramie, optymalizacja feedu produktowego oraz testy A/B kreacji. Dodatkowo uruchomiono kampanie TikTok Ads dla nowej grupy docelowej.',
    result:
      'Wzrost przychodów o 320% przy jednoczesnym obniżeniu CPA o 42%. ROAS z poziomu 1.8 wzrósł do 5.2 w ciągu 6 miesięcy.',
    resultMetrics: [
      { label: 'Wzrost przychodów', value: '+320%' },
      { label: 'Obniżenie CPA', value: '-42%' },
      { label: 'Wzrost ROAS', value: '1.8 → 5.2' },
    ],
    tech: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Google Merchant Center', 'GA4'],
    icon: 'ShoppingBag',
  },
  {
    id: 'saas-leadgen',
    title: 'Lead generation B2B: 850+ kwalifikowanych leadów w 4 miesiące',
    client: 'Firma SaaS B2B',
    channel: 'LinkedIn Ads + Email Marketing',
    challenge:
      'Firma potrzebowała stabilnego dopływu leadów B2B z sektora MŚP i enterprise. Dotychczasowe działania opierały się wyłącznie na cold mailingu z niską skutecznością (poniżej 2% response rate).',
    solution:
      'Opracowanie strategii ABM (Account-Based Marketing) na LinkedIn z precyzyjnym targetowaniem firm i decydentów. Uruchomienie kampanii Lead Gen Forms, połączonej z automatyczną ścieżką email marketingową (5-etapowa sekwencja). Wdrożenie lead scoringu i integracji z CRM.',
    result:
      '850+ kwalifikowanych leadów w 4 miesiące. Response rate email wzrósł do 18%, a koszt pozyskania leada spadł o 60% względem poprzednich działań.',
    resultMetrics: [
      { label: 'Kwalifikowane leady', value: '850+' },
      { label: 'Response rate', value: '2% → 18%' },
      { label: 'Koszt leada', value: '-60%' },
    ],
    tech: ['LinkedIn Ads', 'HubSpot', 'ActiveCampaign', 'Zapier', 'Apollo.io'],
    icon: 'Target',
  },
  {
    id: 'local-retail',
    title: 'Zwiększenie ruchu lokalnego o 210% dla sieci punktów stacjonarnych',
    client: 'Sieć handlowa (15 lokalizacji)',
    channel: 'SEO Lokalne + Google Ads',
    challenge:
      'Sieć 15 punktów stacjonarnych mierzyła się z malejącym ruchem i niską widocznością w wyszukiwarce Google. Wizytówki Google Business Profile były niekompletne, a strona nie miała zoptymalizowanych podstron lokalnych.',
    solution:
      'Kompleksowa optymalizacja Google Business Profile dla wszystkich 15 lokalizacji (GBP posts, zdjęcia, Q&A, opinie). Stworzenie dedykowanych landing page dla każdej lokalizacji z lokalnymi słowami kluczowymi. Kampanie Google Ads z targetowaniem geograficznym i rozszerzeniami lokalizacji.',
    result:
      'Wzrost ruchu organicznego o 210%, ruchu bezpośredniego z Google Maps o 175%. Kampanie Google Ads wygenerowały dodatkowe 1200+ wizyt w punktach miesięcznie.',
    resultMetrics: [
      { label: 'Wzrost ruchu org.', value: '+210%' },
      { label: 'Wzrost z Maps', value: '+175%' },
      { label: 'Wizyty/mies.', value: '1200+' },
    ],
    tech: ['Google Business Profile', 'Google Ads', 'BrightLocal', 'Screaming Frog', 'Google Search Console'],
    icon: 'MapPin',
  },
]
