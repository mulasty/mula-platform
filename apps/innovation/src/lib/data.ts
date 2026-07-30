import type { InnovationService, InnovationProduct, InnovationCase } from './types'

export const services: InnovationService[] = [
  {
    id: 'konsulting-innowacyjny',
    title: 'Konsulting innowacyjny',
    description:
      'Audyt potencjału innowacyjnego Twojej firmy. Identyfikujemy obszary do transformacji, analizujemy trendy rynkowe i budujemy strategię wdrożenia nowych technologii dopasowaną do Twojego budżetu.',
    icon: 'Lightbulb',
  },
  {
    id: 'prototypowanie-mvp',
    title: 'Prototypowanie MVP',
    description:
      'W kilka tygodni dostarczamy działający prototyp do walidacji pomysłu. Szybkie iteracje, testy z użytkownikami i gotowy produkt do pierwszej rundy finansowania lub pilotażu rynkowego.',
    icon: 'Box',
  },
  {
    id: 'transformacja-cyfrowa',
    title: 'Transformacja cyfrowa',
    description:
      'Przeprowadzamy kompleksową transformację cyfrową organizacji — od mapowania procesów, przez dobór technologii, po wdrożenie i szkolenie zespołów. Technologia jako motor wzrostu.',
    icon: 'RefreshCw',
  },
  {
    id: 'automatyzacja-procesow',
    title: 'Automatyzacja procesów',
    description:
      'Eliminujemy ręczne, powtarzalne czynności za pomocą RPA, agentów AI i integracji API. Redukcja kosztów operacyjnych nawet o 60% i eliminacja błędów ludzkich.',
    icon: 'Settings',
  },
  {
    id: 'iot-industry40',
    title: 'IoT i Industry 4.0',
    description:
      'Projektujemy i wdrażamy rozwiązania Internetu Rzeczy — od czujników i akwizycji danych, przez platformy analityczne, po cyfrowe bliźniaki procesów produkcyjnych.',
    icon: 'Wifi',
  },
  {
    id: 'startup-incubation',
    title: 'Startup incubation',
    description:
      'Inkubujemy wewnętrzne i zewnętrzne startupy technologiczne. Zapewniamy mentoring, wsparcie technologiczne, dostęp do sieci inwestorów i doradztwo w pozyskiwaniu grantów.',
    icon: 'Sprout',
  },
]

export const stageLabels: Record<InnovationProduct['stage'], string> = {
  concept: 'Koncepcja',
  mvp: 'MVP',
  beta: 'Beta',
  live: 'Wdrożone',
}

export const stageColors: Record<InnovationProduct['stage'], string> = {
  concept: 'bg-mula-warning/10 text-mula-warning border-mula-warning/30',
  mvp: 'bg-mula-accent/10 text-mula-accent border-mula-accent/30',
  beta: 'bg-mula-purple/10 text-mula-purple border-mula-purple/30',
  live: 'bg-mula-success/10 text-mula-success border-mula-success/30',
}

export const products: InnovationProduct[] = [
  {
    id: 'ai-document-analyzer',
    title: 'AI Document Analyzer',
    description:
      'Inteligentny system do automatycznej analizy, klasyfikacji i ekstrakcji danych z dokumentów biznesowych — od umów po faktury i raporty.',
    stage: 'beta',
    features: [
      'OCR z ekstrakcją kluczowych danych',
      'Klasyfikacja dokumentów ML',
      'Integracja z systemami DMS/ECM',
      'Automatyczne raportowanie zgodności',
    ],
  },
  {
    id: 'smart-logistics-tracker',
    title: 'Smart Logistics Tracker',
    description:
      'Platforma do monitorowania łańcucha dostaw w czasie rzeczywistym z predykcją opóźnień i optymalizacją tras opartą na AI.',
    stage: 'mvp',
    features: [
      'Śledzenie przesyłek w czasie rzeczywistym',
      'Predykcja opóźnień z wykorzystaniem AI',
      'Dynamiczna optymalizacja tras',
      'Integracja z czujnikami IoT',
    ],
  },
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    description:
      'Platforma do tworzenia cyfrowych bliźniaków procesów produkcyjnych — symulacje what-if, monitoring KPI i predykcja awarii.',
    stage: 'concept',
    features: [
      'Modelowanie 3D linii produkcyjnych',
      'Symulacje scenariuszy what-if',
      'Monitoring KPI w czasie rzeczywistym',
      'Predykcyjne wykrywanie awarii',
    ],
  },
  {
    id: 'automated-compliance-engine',
    title: 'Automated Compliance Engine',
    description:
      'Silnik do automatycznego monitorowania zgodności regulacyjnej — skanowanie zmian prawnych, mapowanie ryzyka i generowanie raportów.',
    stage: 'concept',
    features: [
      'Automatyczne skanowanie regulacji prawnych',
      'Mapowanie ryzyka i luk zgodności',
      'Generowanie raportów compliance',
      'Alerty o zmianach legislacyjnych',
    ],
  },
]

export const cases: InnovationCase[] = [
  {
    id: 'ai-docs-law-firm',
    title: 'AI Document Analyzer — wdrożenie w kancelarii',
    client: 'Kancelaria prawna (100+ pracowników)',
    technology:
      'System RAG z indeksacją dokumentów, agent AI do klasyfikacji klauzul, ekstrakcja danych z umów z dokładnością 95%.',
    result:
      'Redukcja czasu analizy dokumentów o 70%, automatyczna kategoryzacja 500+ umów miesięcznie, pełna zgodność z RODO.',
  },
  {
    id: 'smart-logistics-fleet',
    title: 'Smart Logistics Tracker — flota 200 pojazdów',
    client: 'Firma transportowa (flota 200 pojazdów)',
    technology:
      'Czujniki IoT w pojazdach, platforma analityczna w chmurze, modele predykcyjne czasu dostawy, integracja z systemem WMS.',
    result:
      'Skrócenie czasu dostaw o 25%, redukcja kosztów paliwa o 15%, 98% dokładność predykcji ETA.',
  },
  {
    id: 'digital-twin-factory',
    title: 'Digital Twin Platform — zakład produkcyjny',
    client: 'Zakład produkcyjny (branża automotive)',
    technology:
      'Cyfrowy bliźniak linii montażowej, sensory IoT, platforma symulacji what-if, system predykcyjnego utrzymania ruchu.',
    result:
      'Redukcja przestojów o 40%, wzrost OEE o 12 pkt. proc., zwrot z inwestycji w 8 miesięcy.',
  },
]
