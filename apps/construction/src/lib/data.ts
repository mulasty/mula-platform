import { ProcessStep, PortfolioProject, FAQItem, SteelType, HallType } from './types'

export const COMPANY = {
  name: 'Mula Construction',
  fullName: 'MULA GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  tagline: 'Konstrukcje i Hale Stalowe',
  krs: '0001010842',
  regon: '524057460',
  nip: '718-216-41-12',
  address: 'ul. gen. Władysława Sikorskiego 166/0.03, 18-400 Łomża',
  email: 'construction@mulagroup.eu',
}

export const NAV_ITEMS = [
  { label: 'Oferta', href: '#offer' },
  { label: 'Realizacje', href: '#portfolio' },
  { label: 'Proces', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Oferta',
    links: [
      { label: 'Konstrukcje od ręki', href: '#konstrukcje' },
      { label: 'Hale magazynowe', href: '#magazynowe' },
      { label: 'Hale przemysłowe', href: '#przemyslowe' },
      { label: 'Hale rolnicze', href: '#rolnicze' },
      { label: 'Hale sportowe', href: '#sportowe' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Blog', href: '/blog' },
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Konsultacja',
    description: 'Analizujemy Twoje potrzeby, budżet i wymagania techniczne. Doradzamy optymalne rozwiązanie konstrukcyjne.',
    icon: 'MessageSquare',
  },
  {
    step: 2,
    title: 'Projekt',
    description: 'Tworzymy dokumentację techniczną, obliczenia statyczne i wizualizacje 3D Twojej przyszłej hali.',
    icon: 'PenTool',
  },
  {
    step: 3,
    title: 'Produkcja',
    description: 'Wytwarzamy konstrukcję stalową w naszym zakładzie produkcyjnym z certyfikowanych materiałów.',
    icon: 'Factory',
  },
  {
    step: 4,
    title: 'Transport',
    description: 'Dostarczamy gotowe elementy na plac budowy własnym transportem na terenie całej Polski.',
    icon: 'Truck',
  },
  {
    step: 5,
    title: 'Montaż',
    description: 'Profesjonalny montaż przez naszą wykwalifikowaną ekipę. Nadzór techniczny na każdym etapie.',
    icon: 'Wrench',
  },
]

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: '1',
    title: 'Hala magazynowa',
    area: '1 500 m²',
    location: 'Nowy Targ',
    year: 2023,
    category: 'magazynowa',
  },
  {
    id: '2',
    title: 'Hala produkcyjna',
    area: '1 200 m²',
    location: 'Grodzisk Mazowiecki',
    year: 2023,
    category: 'przemysłowa',
  },
  {
    id: '3',
    title: 'Hala usługowa',
    area: '2 250 m²',
    location: 'Lublin',
    year: 2023,
    category: 'usługowa',
  },
  {
    id: '4',
    title: 'Hala produkcyjna',
    area: '1 080 m²',
    location: 'Kraków',
    year: 2022,
    category: 'przemysłowa',
  },
  {
    id: '5',
    title: 'Hala sportowo-rekreacyjna',
    area: '1 500 m²',
    location: 'Nowy Targ',
    year: 2023,
    category: 'sportowa',
  },
  {
    id: '6',
    title: 'Hala magazynowa',
    area: '9 000 m²',
    location: 'Piekoszów',
    year: 2022,
    category: 'magazynowa',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Ile kosztuje hala stalowa?',
    answer: 'Koszt hali stalowej zależy od wielu czynników: powierzchni, wysokości, przeznaczenia, rodzaju konstrukcji (jedno- lub dwuspadowa), ocieplenia oraz lokalizacji. Szacunkowy koszt hali nieocieplonej to od 180 do 350 zł/m² netto, a hali ocieplonej od 350 do 650 zł/m² netto. Każda wycena jest indywidualna — przygotowujemy ją bezpłatnie w ciągu 24 godzin.',
  },
  {
    question: 'Ile trwa budowa hali stalowej?',
    answer: 'Standardowy czas realizacji hali o powierzchni do 2 000 m² wynosi od 8 do 16 tygodni — od podpisania umowy do przekazania obiektu. Sam montaż konstrukcji stalowej trwa zazwyczaj od 2 do 6 tygodni, w zależności od skali projektu i warunków pogodowych. W przypadku konstrukcji dostępnych od ręki czas oczekiwania jest znacznie krótszy.',
  },
  {
    question: 'Czy potrzebuję pozwolenia na budowę?',
    answer: 'W większości przypadków tak — hale stalowe o powierzchni powyżej 35 m² wymagają pozwolenia na budowę. Pomagamy w przygotowaniu kompletnej dokumentacji technicznej niezbędnej do uzyskania pozwolenia, włączając projekt budowlany, obliczenia statyczne i niezbędne uzgodnienia. W przypadku mniejszych obiektów (do 35 m²) wystarczy zgłoszenie budowy.',
  },
  {
    question: 'Czy hale stalowe są ocieplane?',
    answer: 'Tak, oferujemy zarówno hale nieocieplone (zimne), jak i ocieplane (ciepłe). Hale ocieplane wykorzystują płyty warstwowe z rdzeniem z wełny mineralnej lub pianki PIR, zapewniając doskonałą izolację termiczną. Wybór zależy od przeznaczenia hali — magazyny często nie wymagają ocieplenia, natomiast hale produkcyjne, sportowe czy handlowe zazwyczaj tak.',
  },
  {
    question: 'Jaka jest gwarancja na halę stalową?',
    answer: 'Udzielamy 5-letniej gwarancji na konstrukcje stalowe oraz gwarancji producenta na materiały użyte do budowy (blachy, płyty warstwowe, śruby). Żywotność konstrukcji stalowych przy prawidłowej konserwacji przekracza 50 lat. Zapewniamy również serwis pogwarancyjny i przeglądy techniczne.',
  },
  {
    question: 'Czy wykonujecie fundamenty?',
    answer: 'Tak, wykonujemy kompleksową usługę od fundamentów po montaż hali pod klucz. Alternatywnie, jeśli posiadasz już wykonane fundamenty lub wolisz zlecić je osobno — dostarczamy szczegółowy projekt fundamentów do realizacji przez lokalną firmę budowlaną. W takim przypadku zapewniamy nadzór nad zgodnością wykonania z projektem.',
  },
]

export const STEEL_TYPES: SteelType[] = [
  {
    id: 'jednospadowa',
    title: 'Konstrukcja jednospadowa',
    description: 'Ekonomiczne i szybkie w montażu rozwiązanie idealne do hal magazynowych, garaży i wiat. Prosty dach o jednym nachyleniu zapewnia skuteczne odprowadzanie wody.',
    icon: 'TrendingUp',
    dimensions: [
      { label: 'Szerokość', value: '6 m – 24 m' },
      { label: 'Długość', value: 'dowolna, moduł co 5 m' },
      { label: 'Wysokość okapu', value: '2,5 m – 6 m' },
      { label: 'Nachylenie dachu', value: '5% – 15%' },
    ],
  },
  {
    id: 'dwuspadowa',
    title: 'Konstrukcja dwuspadowa',
    description: 'Klasyczna, sprawdzona konstrukcja o większej rozpiętości. Doskonała do hal produkcyjnych, magazynowych i rolniczych. Umożliwia efektywne wykorzystanie przestrzeni wewnętrznej.',
    icon: 'Triangle',
    dimensions: [
      { label: 'Szerokość', value: '12 m – 40 m' },
      { label: 'Długość', value: 'dowolna, moduł co 5 m' },
      { label: 'Wysokość okapu', value: '3 m – 8 m' },
      { label: 'Nachylenie dachu', value: '10% – 30%' },
    ],
  },
]

export const HALL_TYPES: HallType[] = [
  {
    id: 'magazynowe',
    title: 'Hale magazynowe',
    description: 'Przestronne obiekty do składowania towarów, logistyki i dystrybucji. Projektowane z myślą o maksymalnej funkcjonalności i łatwym dostępie dla wózków widłowych oraz samochodów ciężarowych.',
    icon: 'Warehouse',
    exampleDimensions: 'Od 500 m² do 20 000 m²',
  },
  {
    id: 'przemyslowe',
    title: 'Hale przemysłowe',
    description: 'Hale produkcyjne i warsztatowe dostosowane do specyfiki Twojej branży. Wytrzymałe konstrukcje przystosowane do montażu suwnic, systemów wentylacji i instalacji przemysłowych.',
    icon: 'Factory',
    exampleDimensions: 'Od 300 m² do 10 000 m²',
  },
  {
    id: 'rolnicze',
    title: 'Hale rolnicze',
    description: 'Obory, chlewnie, stodoły i magazyny paszowe. Konstrukcje odporne na agresywne środowisko rolnicze, z możliwością wentylacji naturalnej i mechanicznej.',
    icon: 'Tractor',
    exampleDimensions: 'Od 200 m² do 5 000 m²',
  },
  {
    id: 'sportowe',
    title: 'Hale sportowo-rekreacyjne',
    description: 'Obiekty sportowe — od kortów tenisowych po pełnowymiarowe boiska. Hale widowiskowe z trybunami, odpowiednim oświetleniem i systemami akustycznymi.',
    icon: 'Trophy',
    exampleDimensions: 'Od 600 m² do 3 000 m²',
  },
]
