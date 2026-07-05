import { Pillar, ProcessStep, MulaMethodItem, TechItem, Product, CaseStudy, NavItem } from './types'

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
  heroTitle: 'Mula Group — Technologia, automatyzacja i AI dla nowoczesnego biznesu.',
  heroSubtitle: 'Projektujemy i wdrażamy rozwiązania, które pomagają firmom automatyzować procesy, rozwijać sprzedaż, budować silną obecność online i przygotować się na przyszłość opartą o AI.',
  heroCTA: 'Porozmawiajmy o projekcie',
  aboutText: `Mula Group powstał dla sytuacji, w których jedna specjalizacja to za mało. Nie jesteśmy agencją, software housem ani doradztwem w izolacji — jesteśmy ekosystemem biznesowym. Pomagamy firmom przejść od rozproszonych potrzeb do czytelnego następnego kroku, łącząc strategię, systemy cyfrowe, commerce, kompetencje techniczne i rozwój projektów w jedno spójne środowisko operacyjne.`,
  founderName: 'Piotr Muła',
  founderRole: 'Założyciel i Prezes',
  founderBio: 'Od lat związany z e-commerce, technologią i transformacją cyfrową. Łączy praktyczne doświadczenie operacyjne z myśleniem strategicznym.',
  mission: 'Pomagamy firmom przejść od rozproszonych potrzeb do czytelnego następnego kroku — łącząc kompetencje, systemy i ludzi w jeden spójny ekosystem wzrostu.',
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
    description: 'Projektujemy i wdrażamy systemy agentowe — od prostych copilotów po wieloagentowe architektury z pamięcią, RAG i pętlą decyzyjną. Automatyzujemy procesy, integrujemy systemy i budujemy przewagę konkurencyjną w oparciu o dane.',
    icon: 'Brain',
    href: 'https://ai.mulagroup.eu',
    color: '#3b82f6',
  },
  {
    id: 'digital',
    title: 'Transformacja Cyfrowa',
    subtitle: 'Cyfryzacja i automatyzacja przedsiębiorstw',
    description: 'Przeprojektowujemy sposób działania firm z myślą o technologii, danych i automatyzacji. Wdrażamy CRM, ERP, workflow i integracje procesów, które realnie usprawniają codzienną operację.',
    icon: 'Zap',
    href: 'https://digital.mulagroup.eu',
    color: '#8b5cf6',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Kompleksowa obsługa sprzedaży internetowej',
    description: 'Projektujemy i wdrażamy wielokanałową architekturę sprzedaży. Łączymy sklepy internetowe z marketplace w jeden spójny system z centralnym zarządzaniem zamówieniami i magazynem.',
    icon: 'ShoppingCart',
    href: 'https://ecommerce.mulagroup.eu',
    color: '#f59e0b',
  },
  {
    id: 'marketing',
    title: 'Marketing i Media',
    subtitle: 'Strategia, kreacja, widoczność',
    description: 'Budujemy strategie marketingowe łączące SEO, kampanie reklamowe, content marketing i social media w jedną mierzalną ścieżkę. Każda kampania to eksperyment: hipoteza → wykonanie → pomiar → optymalizacja.',
    icon: 'Megaphone',
    href: 'https://marketing.mulagroup.eu',
    color: '#ec4899',
  },
  {
    id: 'cyber',
    title: 'Cyberbezpieczeństwo',
    subtitle: 'Ochrona infrastruktury i zgodność',
    description: 'Przeprowadzamy audyty bezpieczeństwa, wdrażamy monitoring i backup, przygotowujemy dokumentację zgodną z NIS2 i ISO 27001. Chronimy infrastrukturę IT przed zagrożeniami.',
    icon: 'Shield',
    href: 'https://cyber.mulagroup.eu',
    color: '#10b981',
  },
  {
    id: 'construction',
    title: 'Budownictwo i Inżynieria',
    subtitle: 'Konstrukcje stalowe i projekty budowlane',
    description: 'Realizujemy projekty konstrukcji stalowych, montaż hal, wykończenia i dokumentację techniczną. Łączymy doświadczenie inżynierskie z nowoczesnymi narzędziami AI dla budownictwa.',
    icon: 'Building2',
    href: 'https://construction.mulagroup.eu',
    color: '#ef4444',
  },
  {
    id: 'innovation',
    title: 'Innowacje i Startup Studio',
    subtitle: 'Własne produkty i nowe przedsięwzięcia',
    description: 'Rozwijamy własne produkty SaaS, budujemy MVP, prowadzimy badania i rozwój. Szukamy nowych modeli biznesowych na styku AI, automatyzacji i realnych potrzeb rynku.',
    icon: 'Lightbulb',
    href: 'https://innovation.mulagroup.eu',
    color: '#06b6d4',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: 'Discover', description: 'Zrozumienie biznesu, wyzwania i potencjału. Zaczynamy od diagnozy.', icon: 'Search' },
  { step: 2, title: 'Design', description: 'Strategiczne i operacyjne ramy działania. Projektujemy rozwiązanie.', icon: 'PenTool' },
  { step: 3, title: 'Integrate', description: 'Połączenie właściwych filarów i kompetencji w jeden spójny system.', icon: 'Link2' },
  { step: 4, title: 'Execute', description: 'Od architektury do wdrożenia. Realizujemy z pełną odpowiedzialnością.', icon: 'Play' },
  { step: 5, title: 'Scale', description: 'System gotowy na rozwój, automatyzację i nowych partnerów.', icon: 'TrendingUp' },
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
