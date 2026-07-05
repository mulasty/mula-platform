import { Pillar, ProcessStep, MulaMethodItem, TechItem, Product, CaseStudy, NavItem } from './types'

export const HERO_VARIANTS = {
  enterprise: {
    headline: "Technologia, automatyzacja i AI — dla firm, które chcą rosnąć szybciej.",
    subheadline: "Mula Group to grupa technologiczna łącząca 7 kompetencji w jeden spójny ekosystem. Nie jesteśmy agencją. Nie jesteśmy software housem. Jesteśmy partnerem technologicznym, który bierze odpowiedzialność za efekt biznesowy.",
    stats: [
      { label: "Rok założenia", value: "2023" },
      { label: "Filary kompetencji", value: "7" },
      { label: "Zrealizowanych projektów", value: "10+" },
      { label: "Działamy w", value: "EU" },
    ],
  },
  ai: {
    headline: "AI nie jest przyszłością. AI jest teraz. Wykorzystaj ją zanim zrobi to konkurencja.",
    subheadline: "Wdrażamy agentów AI, automatyzujemy procesy, budujemy przewagę operacyjną. Od audytu po produkcję — w jednym ekosystemie.",
    stats: [
      { label: "Rok założenia", value: "2023" },
      { label: "Filary kompetencji", value: "7" },
      { label: "Zrealizowanych projektów", value: "10+" },
      { label: "Działamy w", value: "EU" },
    ],
  },
  business: {
    headline: "Od chaosu operacyjnego do skalowalnego systemu — w 5 krokach.",
    subheadline: "Mula Method to nasz sprawdzony proces: Discover → Design → Integrate → Execute → Scale. Każdy projekt przechodzi tę samą ścieżkę — od diagnozy po wzrost.",
    stats: [
      { label: "Rok założenia", value: "2023" },
      { label: "Filary kompetencji", value: "7" },
      { label: "Zrealizowanych projektów", value: "10+" },
      { label: "Działamy w", value: "EU" },
    ],
  },
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'O nas', href: '#about' },
  { label: 'Działalność', href: '#pillars' },
  { label: 'Jak pracujemy', href: '#process' },
  { label: 'Technologie', href: '#tech' },
  { label: 'Kontakt', href: '#contact' },
]

export const COMPANY = {
  name: 'Mula Group',
  fullName: 'MULA GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  tagline: 'Technologia, Automatyzacja i AI dla Biznesu',
  krs: '0001010842',
  regon: '524057460',
  nip: '718-216-41-12',
  address: 'ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża',
  email: 'info@mulagroup.eu',
  founded: 2023,
  heroTitle: 'Technologia, automatyzacja i AI — dla firm, które chcą rosnąć szybciej.',
  heroSubtitle: 'Mula Group to grupa technologiczna łącząca 7 kompetencji w jeden spójny ekosystem. Nie jesteśmy agencją. Nie jesteśmy software housem. Jesteśmy partnerem technologicznym, który bierze odpowiedzialność za efekt biznesowy.',
  heroCTA: 'Porozmawiajmy o projekcie',
  aboutText: 'Mula Group to grupa technologiczna łącząca AI, software, e-commerce, marketing, cyberbezpieczeństwo i inżynierię. Pomagamy firmom przechodzić od chaosu operacyjnego do uporządkowanych, skalowalnych systemów działania.',
  founderName: 'Piotr Muła',
  founderRole: 'Założyciel i Prezes',
  founderBio: 'Od lat związany z e-commerce, technologią i transformacją cyfrową. Łączy praktyczne doświadczenie operacyjne z myśleniem strategicznym.',
  mission: 'Pomagamy firmom rosnąć szybciej, działać sprawniej i podejmować lepsze decyzje dzięki technologii.',
  values: [
    { title: 'Ekosystem, nie silos', description: 'Myślimy całościowo, nie wycinamy wycinków' },
    { title: 'Najpierw zrozumieć, potem działać', description: 'Żadnego rozwiązania bez diagnozy' },
    { title: 'Wykonanie, nie prezentacje', description: 'Naszą rolą jest przejść od architektury do realizacji' },
    { title: 'Skalowalność od pierwszego dnia', description: 'Projektujemy systemy gotowe na rozwój' },
  ]
}

export const PILLARS: Pillar[] = [
  {
    id: 'ai',
    title: 'Technologie AI',
    subtitle: 'Sztuczna inteligencja i automatyzacja',
    description: 'Wdrażamy AI, która realnie skraca czas obsługi, automatyzuje powtarzalne zadania i daje firmom przewagę operacyjną. Od prostych copilotów po wieloagentowe architektury — zawsze z myślą o konkretnym wyniku biznesowym.',
    icon: 'Brain',
    href: 'https://ai.mulagroup.eu',
    color: '#3b82f6',
  },
  {
    id: 'digital',
    title: 'Transformacja Cyfrowa',
    subtitle: 'Cyfryzacja i automatyzacja przedsiębiorstw',
    description: 'Pomagamy firmom wyeliminować ręczne procesy, zintegrować rozproszone systemy i zyskać pełną kontrolę nad danymi. Wdrażamy CRM, ERP i workflow, które realnie skracają czas realizacji zadań i redukują liczbę błędów.',
    icon: 'Zap',
    href: 'https://digital.mulagroup.eu',
    color: '#8b5cf6',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Sprzedaż wielokanałowa i marketplace',
    description: 'Zwiększamy zasięg sprzedaży i redukujemy koszty operacyjne. Łączymy sklepy internetowe z marketplace w jeden system, który automatycznie synchronizuje stany magazynowe, zamówienia i cenniki.',
    icon: 'ShoppingCart',
    href: 'https://ecommerce.mulagroup.eu',
    color: '#f59e0b',
  },
  {
    id: 'marketing',
    title: 'Marketing i Media',
    subtitle: 'Strategia, kreacja, widoczność',
    description: 'Zwiększamy widoczność i generujemy leady, które realnie przekładają się na sprzedaż. Łączymy SEO, kampanie reklamowe i content marketing w mierzalny system, który stale optymalizujemy na podstawie danych.',
    icon: 'Megaphone',
    href: 'https://marketing.mulagroup.eu',
    color: '#ec4899',
  },
  {
    id: 'cyber',
    title: 'Cyberbezpieczeństwo',
    subtitle: 'Ochrona infrastruktury i zgodność',
    description: 'Chronimy firmy przed kosztownymi przestojami, wyciekami danych i karami za brak zgodności. Wdrażamy monitoring, backup i dokumentację pod NIS2 oraz ISO 27001.',
    icon: 'Shield',
    href: 'https://cyber.mulagroup.eu',
    color: '#10b981',
  },
  {
    id: 'construction',
    title: 'Budownictwo i Inżynieria',
    subtitle: 'Konstrukcje stalowe i projekty budowlane',
    description: 'Dostarczamy konstrukcje stalowe i projekty budowlane od koncepcji po montaż — terminowo i zgodnie z dokumentacją. Wykorzystujemy narzędzia AI do optymalizacji kosztów i harmonogramów.',
    icon: 'Building2',
    href: 'https://construction.mulagroup.eu',
    color: '#ef4444',
  },
  {
    id: 'innovation',
    title: 'Produkty własne i startupy',
    subtitle: 'Własne produkty i nowe przedsięwzięcia',
    description: 'Tworzymy własne produkty SaaS i MVP, które rozwiązują realne problemy rynku. Inwestujemy w badania i rozwój na styku AI i automatyzacji, dostarczając narzędzia, które zmieniają sposób działania firm.',
    icon: 'Lightbulb',
    href: 'https://innovation.mulagroup.eu',
    color: '#06b6d4',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: 'Analiza', description: 'Diagnozujemy procesy, identyfikujemy wąskie gardła i możliwości. Zaczynamy od zrozumienia Twojego biznesu.', icon: 'Search' },
  { step: 2, title: 'Strategia', description: 'Opracowujemy plan działania dopasowany do celów biznesowych. Każdy krok ma uzasadnienie i mierzalny cel.', icon: 'Compass' },
  { step: 3, title: 'Projekt', description: 'Projektujemy architekturę rozwiązania: od integracji systemów po interfejs użytkownika.', icon: 'PenTool' },
  { step: 4, title: 'Wdrożenie', description: 'Realizujemy projekt zgodnie z harmonogramem. Kod, konfiguracja, testy — wszystko w jednym procesie.', icon: 'Play' },
  { step: 5, title: 'Automatyzacja', description: 'Eliminujemy ręczne zadania. Łączymy systemy w zautomatyzowany workflow, który działa 24/7.', icon: 'RefreshCw' },
  { step: 6, title: 'Rozwój', description: 'System gotowy na skalowanie. Monitorujemy, optymalizujemy i rozwijamy wraz z Twoim biznesem.', icon: 'TrendingUp' },
]

export const MULA_METHOD: MulaMethodItem[] = [
  {
    id: 'tech',
    title: 'Technologia',
    description: 'Projektujemy i wdrażamy nowoczesne systemy cyfrowe — od architektury chmurowej po integracje API. Next.js, TypeScript, Python, Docker. Stack dopasowany do skali Twojego biznesu, nie odwrotnie.',
    icon: 'Cpu',
    color: '#3b82f6',
  },
  {
    id: 'automation',
    title: 'Automatyzacja',
    description: 'Eliminujemy powtarzalne procesy i zastępujemy je inteligentnymi workflowami. Agentowe systemy AI, automatyzacja CRM/ERP, synchronizacja wielokanałowa. Mniej klikania, więcej wyników.',
    icon: 'Workflow',
    color: '#8b5cf6',
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Wdrażamy sztuczną inteligencję tam, gdzie realnie zwiększa przewagę konkurencyjną. Agenci AI z pamięcią i RAG, analityka predykcyjna, rekomendacje biznesowe oparte na danych.',
    icon: 'Bot',
    color: '#10b981',
  },
]

export const TECH_STACK: TechItem[] = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'LangChain', category: 'AI' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Shoper', category: 'E-commerce' },
  { name: 'BaseLinker', category: 'E-commerce' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Shopify', category: 'E-commerce' },
]

export const PRODUCTS: Product[] = [
  { name: 'Automation Audit Robot', description: 'Autonomiczny system audytu procesów biznesowych z rekomendacjami AI', status: 'development', icon: 'Bot' },
  { name: 'Presence System', description: 'Inteligentny system rejestracji czasu pracy z analizą produktywności', status: 'beta', icon: 'Clock' },
  { name: 'Cyber Guardian NIS2', description: 'Platforma do zarządzania zgodnością z NIS2 dla MŚP z automatycznym monitoringiem', status: 'beta', icon: 'ShieldCheck' },
  { name: 'Mula Mobile AI Commander', description: 'Mobilny asystent AI do zarządzania projektami i zadaniami zespołu', status: 'development', icon: 'Smartphone' },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Dystrybutor B2B',
    industry: 'Dystrybucja',
    challenge: '200+ zapytań tygodniowo bez segmentacji i scoringu — obsługa ręczna',
    solution: 'Agent AI z routingiem intencji, weryfikacją w KRS/GUS i pętlą akceptacji',
    results: 'Czas pierwszego kontaktu z 48h do 15min. Wykrywalność leadów high-priority +40%',
    technologies: ['Python', 'LangChain', 'OpenAI', 'CRM API', 'Slack'],
    year: 2025,
  },
  {
    client: 'Dystrybutor DIY',
    industry: 'E-commerce',
    challenge: 'Ręczne wystawianie ofert na 3 kanałach, brak synchronizacji stanów',
    solution: 'Centralny system zarządzania katalogiem z automatyczną synchronizacją i cennikami warunkowymi',
    results: '100% synchronizacji stanów. -60% chargebacków. +35% sprzedaży w 6 miesięcy',
    technologies: ['Shoper', 'Allegro API', 'Amazon SP-API', 'Python', 'ERP'],
    year: 2024,
  },
  {
    client: 'Firma usługowa B2B',
    industry: 'Usługi',
    challenge: 'Stara strona na szablonie, niska konwersja, brak ścieżki leadowej',
    solution: 'Nowa strona w Next.js z optymalizacją SEO, integracją CRM i kampaniami Google Ads',
    results: '+150% ruchu organicznego, +80% konwersji formularza, -45% koszt leada',
    technologies: ['Next.js', 'Tailwind', 'WordPress', 'Google Ads', 'GA4'],
    year: 2025,
  },
]
