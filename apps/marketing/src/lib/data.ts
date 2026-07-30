import type { MarketingService, MarketingChannel, MarketingCase } from './types'

export const marketingServices: MarketingService[] = [
  {
    id: 'seo-sem',
    title: 'SEO / SEM',
    description:
      'Pozycjonowanie i kampanie w wyszukiwarkach, ktore zwiekszaja widocznosc Twojej firmy w Google. Optymalizacja techniczna, link building, analiza slow kluczowych i audyty SEO.',
    icon: 'Search',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description:
      'Strategie social media na Facebooku, Instagramie, LinkedIn i TikToku. Kreacja tresci, moderacja spolecznosci, kampanie reklamowe i raportowanie efektow.',
    icon: 'Share2',
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description:
      'Tworzenie tresci, ktore buduja autorytet marki i generuja leady. Artykuly blogowe, e-booki, infografiki, case studies i strategie contentowe szyte na miare.',
    icon: 'FileText',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description:
      'Newslettery, driptowe kampanie i automatyzacja mailingu, ktore zwiekszaja konwersje. Segmentacja bazy, testy A/B, personalizacja i analityka kampanii.',
    icon: 'Mail',
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description:
      'Automatyzacja procesow marketingowych od lead generation po remarketing. Scoring leadow, workflowy, integracje CRM i automatyczne kampanie omnichannel.',
    icon: 'Workflow',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description:
      'Kampanie Google Ads i Facebook Ads optymalizowane pod katem ROI. Retargeting, kampanie produktowe, testy kreacji i zaawansowana analityka konwersji.',
    icon: 'BarChart3',
  },
]

export const marketingChannels: MarketingChannel[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    description:
      'Kampanie w sieci wyszukiwania, reklamy produktowe (Shopping) i kampanie displayowe. Precyzyjne targetowanie intencji zakupowych uzytkownikow.',
    metrics: [
      { label: 'Srednie ROAS', value: '450%' },
      { label: 'Sredni CTR', value: '5.8%' },
      { label: 'Redukcja CPA', value: '-35%' },
    ],
    icon: 'Globe',
  },
  {
    id: 'social-ads',
    name: 'Social Media Ads',
    description:
      'Reklamy na Facebooku, Instagramie i LinkedIn precyzyjnie targetowane na demografie, zainteresowania i zachowania. Kampanie lead gen i konwersyjne.',
    metrics: [
      { label: 'Sredni CPM', value: '12 zl' },
      { label: 'Koszt leada', value: '8 zl' },
      { label: 'Zasieg mies.', value: '500K+' },
    ],
    icon: 'MessageCircle',
  },
  {
    id: 'email',
    name: 'Email Marketing',
    description:
      'Zautomatyzowane kampanie email z segmentacja i personalizacja. Sciezki powitalne, porzucone koszyki, rekomendacje produktowe i newslettery.',
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
      'Pozycjonowanie organiczne i content marketing jako dlugoterminowa strategia budowania ruchu. Artykuly, link building i optymalizacja techniczna.',
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
    title: 'Skalowanie sprzedazy e-commerce o 320% w 6 miesiecy',
    client: 'Marka modowa B2C',
    channel: 'Performance Marketing + Social Media',
    challenge:
      'Klient notowal stagnacje sprzedazy przy rosnacych kosztach reklam. Kampanie Google Ads i Facebook Ads nie byly zoptymalizowane pod katem ROAS, a struktura kont reklamowych byla chaotyczna.',
    solution:
      'Przebudowa struktury kampanii Google Ads (Performance Max + Search), wdrozenie dynamicznego retargetingu na Facebooku i Instagramie, optymalizacja feedu produktowego oraz testy A/B kreacji. Dodatkowo uruchomiono kampanie TikTok Ads dla nowej grupy docelowej.',
    result:
      'Wzrost przychodow o 320% przy jednoczesnym obnizeniu CPA o 42%. ROAS z poziomu 1.8 wzrosl do 5.2 w ciagu 6 miesiecy.',
    resultMetrics: [
      { label: 'Wzrost przychodow', value: '+320%' },
      { label: 'Obnizenie CPA', value: '-42%' },
      { label: 'Wzrost ROAS', value: '1.8 → 5.2' },
    ],
    tech: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Google Merchant Center', 'GA4'],
    icon: 'ShoppingBag',
  },
  {
    id: 'saas-leadgen',
    title: 'Lead generation B2B: 850+ kwalifikowanych leadow w 4 miesiace',
    client: 'Firma SaaS B2B',
    channel: 'LinkedIn Ads + Email Marketing',
    challenge:
      'Firma potrzebowala stabilnego doplywu leadow B2B z sektora MŚP i enterprise. Dotychczasowe dzialania opieraly sie wylacznie na cold mailingu z niska skutecznoscia (ponizej 2% response rate).',
    solution:
      'Opracowanie strategii ABM (Account-Based Marketing) na LinkedIn z precyzyjnym targetowaniem firm i decydentow. Uruchomienie kampanii Lead Gen Forms, polaczonej z automatyczna sciezka email marketingowa (5-etapowa sekwencja). Wdrozenie lead scoringu i integracji z CRM.',
    result:
      '850+ kwalifikowanych leadow w 4 miesiace. Response rate email wzrosl do 18%, a koszt pozyskania leada spadl o 60% wzgledem poprzednich dzialan.',
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
    title: 'Zwiekszenie ruchu lokalnego o 210% dla sieci punktow stacjonarnych',
    client: 'Sieć handlowa (15 lokalizacji)',
    channel: 'SEO Lokalne + Google Ads',
    challenge:
      'Sieć 15 punktow stacjonarnych mierzyla sie z malejacym ruchem i niska widocznoscia w wyszukiwarce Google. Wizytowki Google Business Profile byly niekompletne, a strona nie miala zoptymalizowanych podstron lokalnych.',
    solution:
      'Kompleksowa optymalizacja Google Business Profile dla wszystkich 15 lokalizacji (GPB posts, zdjecia, Q&A, opinie). Stworzenie dedykowanych landing page dla kazdej lokalizacji z lokalnymi slowami kluczowymi. Kampanie Google Ads z targetowaniem geograficznym i rozszerzeniami lokalizacji.',
    result:
      'Wzrost ruchu organicznego o 210%, ruchu bezposredniego z Google Maps o 175%. Kampanie Google Ads wygenerowaly dodatkowe 1200+ wizyt w punktach miesiecznie.',
    resultMetrics: [
      { label: 'Wzrost ruchu org.', value: '+210%' },
      { label: 'Wzrost z Maps', value: '+175%' },
      { label: 'Wizyty/mies.', value: '1200+' },
    ],
    tech: ['Google Business Profile', 'Google Ads', 'BrightLocal', 'Screaming Frog', 'Google Search Console'],
    icon: 'MapPin',
  },
]
