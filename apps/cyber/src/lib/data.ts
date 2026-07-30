import type { CyberService, CyberCase, CyberThreat } from './types'

export const services: CyberService[] = [
  {
    id: 'audyt-bezpieczenstwa',
    title: 'Audyt Bezpieczeństwa',
    description:
      'Kompleksowa analiza infrastruktury IT, aplikacji i procesów pod kątem luk w zabezpieczeniach. Dostarczamy szczegółowy raport z klasyfikacją ryzyka i konkretnymi rekomendacjami naprawczymi.',
    features: [
      'Skanowanie podatności infrastruktury i aplikacji webowych',
      'Analiza konfiguracji sieci, firewalli i systemów',
      'Testy socjotechniczne (social engineering)',
      'Raport z klasyfikacją ryzyka i planem naprawczym',
    ],
  },
  {
    id: 'ochrona-ddos',
    title: 'Ochrona przed Atakami DDoS',
    description:
      'Wdrażamy wielowarstwowe systemy ochrony przed atakami typu Distributed Denial of Service. Od analizy ruchu po automatyczne filtrowanie — zapewniamy ciągłość działania Twoich usług.',
    features: [
      'Analiza i profilowanie ruchu sieciowego w czasie rzeczywistym',
      'Konfiguracja WAF (Web Application Firewall)',
      'Rozwiązania CDN z wbudowaną protekcją DDoS',
      'Automatyczne skalowanie zasobów podczas ataku',
    ],
  },
  {
    id: 'monitoring-soc',
    title: 'Monitoring SOC 24/7',
    description:
      'Całodobowy monitoring infrastruktury przez zespół Security Operations Center. Proaktywne wykrywanie zagrożeń, analiza logów i natychmiastowa eskalacja incydentów.',
    features: [
      'Monitoring SIEM z korelacją zdarzeń w czasie rzeczywistym',
      'Analiza behawioralna użytkowników i endpointów (UEBA)',
      'Threat hunting — aktywne poszukiwanie wskaźników kompromitacji',
      'Alerting i eskalacja w modelu follow-the-sun',
    ],
  },
  {
    id: 'zarzadzanie-incydentami',
    title: 'Zarządzanie Incydentami',
    description:
      'Kompleksowy proces reagowania na incydenty bezpieczeństwa — od detekcji przez konteneryzację po analizę post-mortem. Minimalizujemy wpływ ataku na Twoją organizację.',
    features: [
      'Plan reagowania na incydenty (IRP) dopasowany do organizacji',
      'Natychmiastowa konteneryzacja i izolacja zagrożenia',
      'Analiza kryminalistyczna (forensics) po incydencie',
      'Raport post-incident z rekomendacjami zapobiegawczymi',
    ],
  },
  {
    id: 'zgodnosc-rodo-gdpr',
    title: 'Zgodność RODO/GDPR',
    description:
      'Zapewniamy zgodność przetwarzania danych osobowych z wymogami RODO. Od audytu zgodności po wdrożenie polityk bezpieczeństwa i szkolenia dla pracowników.',
    features: [
      'Audyt zgodności procesów przetwarzania danych osobowych',
      'Opracowanie i wdrożenie polityk bezpieczeństwa informacji',
      'Ocena skutków dla ochrony danych (DPIA)',
      'Przygotowanie do kontroli UODO',
    ],
  },
  {
    id: 'pentesty',
    title: 'Pentesty i Testy Penetracyjne',
    description:
      'Symulowane ataki na Twoją infrastrukturę i aplikacje przeprowadzane przez certyfikowanych etycznych hakerów. Identyfikujemy podatności, zanim zrobią to przestępcy.',
    features: [
      'Testy penetracyjne aplikacji webowych i mobilnych',
      'Testy infrastruktury wewnętrznej i zewnętrznej',
      'Red teaming — pełnoskalowa symulacja zaawansowanego ataku',
      'Retesty po wdrożeniu poprawek',
    ],
  },
]

export const cases: CyberCase[] = [
  {
    id: 'case-1-bank',
    title: 'Wdrożenie SOC 24/7 dla sektora finansowego',
    client: 'Instytucja Finansowa (bank komercyjny)',
    challenge:
      'Dynamiczny wzrost liczby alertów bezpieczeństwa i brak wewnętrznego zespołu SOC. Średni czas reakcji na incydent wynosił ponad 8 godzin, a 30% alertów pozostawało bez analizy.',
    solution:
      'Wdrożyliśmy zewnętrzne SOC z integracją SIEM, systemem korelacji zdarzeń i dedykowanym zespołem analityków. Skonfigurowaliśmy reguły detekcji pod specyfikę instytucji finansowej i zautomatyzowaliśmy eskalację krytycznych incydentów.',
    result:
      'Skrócenie czasu reakcji na incydent krytyczny z 8h do poniżej 15 minut. 100% alertów analizowanych w czasie rzeczywistym. Wykryto i powstrzymano 3 próby ataku spear-phishingowego w pierwszym miesiącu działania.',
  },
  {
    id: 'case-2-szpital',
    title: 'Kompleksowe zabezpieczenie infrastruktury szpitala',
    client: 'Sieć placówek medycznych (3 szpitale)',
    challenge:
      'Rozproszona infrastruktura IT bez jednolitej polityki bezpieczeństwa. Aplikacje medyczne podatne na ataki ransomware, brak segmentacji sieci i procedur backupu. Wymóg zgodności z RODO w zakresie danych pacjentów.',
    solution:
      'Przeprowadziliśmy pełny audyt bezpieczeństwa, wdrożyliśmy segmentację sieci, system backupu 3-2-1 oraz zaawansowany EDR na wszystkich endpointach. Opracowaliśmy polityki bezpieczeństwa i przeszkoliliśmy personel medyczny z cyberhigieny.',
    result:
      'Zero naruszeń bezpieczeństwa od czasu wdrożenia. Czas odtworzenia systemów krytycznych skrócony do poniżej 1 godziny. Pełna zgodność z wymogami RODO potwierdzona audytem zewnętrznym.',
  },
  {
    id: 'case-3-ecommerce',
    title: 'Ochrona e-commerce przed atakami DDoS i webowymi',
    client: 'Platforma e-commerce (branża retail)',
    challenge:
      'Wielokrotne ataki DDoS w okresach wyprzedażowych powodowały niedostępność serwisu i straty rzędu 200 tys. PLN dziennie. Ponadto ataki SQL injection i XSS zagrażały danym klientów.',
    solution:
      'Wdrożyliśmy wielowarstwową ochronę: WAF z regułami OWASP Top 10, protekcję DDoS na poziomie warstwy 3/4 i 7, CDN z geoblokowaniem podejrzanego ruchu oraz system automatycznego wykrywania botów. Dodatkowo przeprowadziliśmy pentest aplikacji.',
    result:
      '100% dostępności serwisu podczas Black Friday i świątecznego peaku. Zablokowano ponad 50 tys. złośliwych requestów dziennie. Czas ładowania strony skrócony o 40% dzięki CDN i optymalizacji WAF.',
  },
]

export const threats: CyberThreat[] = [
  {
    id: 'ransomware',
    name: 'Ransomware',
    description:
      'Ataki szyfrujące dane z żądaniem okupu. W 2024 roku średni koszt ataku ransomware wzrósł do 2,4 mln USD. Najczęstsze wektory to phishing i podatne usługi RDP.',
    severity: 'critical',
  },
  {
    id: 'supply-chain',
    name: 'Ataki na łańcuch dostaw',
    description:
      'Kompromitacja dostawców oprogramowania w celu uzyskania dostępu do klientów końcowych. Przykład: atak na SolarWinds, Kaseya. Coraz częściej targetowane są biblioteki open-source.',
    severity: 'critical',
  },
  {
    id: 'zero-day',
    name: 'Exploity zero-day',
    description:
      'Wykorzystanie nieznanych wcześniej podatności, zanim producent zdąży wydać łatkę. Średni czas od wykrycia do załatania to 52 dni — to okno dla atakujących.',
    severity: 'high',
  },
  {
    id: 'phishing',
    name: 'Phishing i socjotechnika',
    description:
      'Wyrafinowane kampanie phishingowe wykorzystujące AI do personalizacji wiadomości. 91% cyberataków zaczyna się od maila phishingowego. Deepfake voice i wideo to nowe narzędzia.',
    severity: 'high',
  },
  {
    id: 'insider',
    name: 'Zagrożenia wewnętrzne',
    description:
      'Celowe lub nieumyślne działania pracowników prowadzące do wycieku danych. 34% incydentów bezpieczeństwa ma źródło wewnątrz organizacji. Trudne do wykrycia tradycyjnymi narzędziami.',
    severity: 'high',
  },
  {
    id: 'iot',
    name: 'Podatności IoT/OT',
    description:
      'Niezabezpieczone urządzenia IoT i systemy przemysłowe (OT) jako punkty wejścia do sieci korporacyjnej. Kamery, drukarki, sterowniki PLC — często z domyślnymi hasłami i bez aktualizacji.',
    severity: 'medium',
  },
]
