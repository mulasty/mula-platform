import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  ArrowLeft,
  Building,
  Users,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Audyt NIS2 — Wyniki',
  description:
    'Przykładowy raport audytu NIS2 dla firmy z sektora finansowego. Zobacz wyniki oceny zgodności i rekomendacje działań naprawczych.',
  metadataBase: new URL('https://mulagroup.eu'),
  alternates: {
    canonical: '/audyt-nis2',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://mulagroup.eu/audyt-nis2',
    siteName: 'Mula Group',
    title: 'Audyt NIS2 — Wyniki',
    description:
      'Przykładowy raport audytu NIS2 dla firmy z sektora finansowego. Zobacz wyniki oceny zgodności i rekomendacje działań naprawczych.',
    images: [{ url: '/images/competencies/home-og.svg', width: 1200, height: 630, alt: 'Audyt NIS2 — Mula Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audyt NIS2 — Wyniki',
    description:
      'Przykładowy raport audytu NIS2 dla firmy z sektora finansowego. Zobacz wyniki oceny zgodności i rekomendacje działań naprawczych.',
    images: ['/images/competencies/home-og.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const categories = [
  {
    name: 'Governance i Organizacja',
    percentage: 40,
    score: 2,
    maxScore: 5,
    icon: Users,
  },
  {
    name: 'Techniczne środki bezpieczeństwa',
    percentage: 40,
    score: 2,
    maxScore: 5,
    icon: Shield,
  },
  {
    name: 'Reagowanie na incydenty i BC',
    percentage: 40,
    score: 2,
    maxScore: 5,
    icon: AlertTriangle,
  },
  {
    name: 'Łańcuch dostaw i strony trzecie',
    percentage: 20,
    score: 1,
    maxScore: 5,
    icon: Building,
  },
]

interface Finding {
  severity: 'critical' | 'high' | 'medium'
  text: string
}

const findings: Finding[] = [
  { severity: 'critical', text: 'Brak CISO' },
  { severity: 'critical', text: 'Zarząd nieprzeszkolony' },
  { severity: 'critical', text: 'Brak procedury zgłaszania incydentów' },
  { severity: 'high', text: 'Brak analizy ryzyka' },
  { severity: 'high', text: 'MFA niepełne' },
  { severity: 'high', text: 'Brak patch management' },
  { severity: 'high', text: 'Umowy bez klauzul bezpieczeństwa' },
  { severity: 'medium', text: 'Brak testów tabletop' },
  { severity: 'medium', text: 'Brak cyber insurance' },
  { severity: 'medium', text: 'Częściowa ocena dostawców' },
  { severity: 'medium', text: 'Brak monitoringu dostawców' },
  { severity: 'medium', text: 'Brak procedury łańcucha dostaw' },
]

const recommendations = [
  {
    priority: 1,
    title: 'Powołaj CISO i przeszkol zarząd',
    description:
      'Wyznacz osobę odpowiedzialną za cyberbezpieczeństwo. Przeprowadź szkolenie dla zarządu z zakresu NIS2 i odpowiedzialności za bezpieczeństwo informacji.',
  },
  {
    priority: 2,
    title: 'Wdróż politykę zgłaszania incydentów',
    description:
      'Opracuj i wdróż formalną procedurę zgłaszania, eskalacji i dokumentowania incydentów bezpieczeństwa zgodnie z wymogami NIS2 (24h early warning, 72h full notification).',
  },
  {
    priority: 3,
    title: 'Przeprowadź analizę ryzyka i wdróż MFA',
    description:
      'Wykonaj pełną ocenę ryzyka zgodnie z ISO 27005. Wdróż uwierzytelnianie wieloskładnikowe (MFA) dla wszystkich krytycznych systemów i dostępu zdalnego.',
  },
  {
    priority: 4,
    title: 'Ustanów proces patch management i klauzule bezpieczeństwa',
    description:
      'Wdróż politykę zarządzania poprawkami. Zaktualizuj wszystkie umowy z dostawcami o klauzule bezpieczeństwa i SLA zgodne z NIS2.',
  },
  {
    priority: 5,
    title: 'Uzupełnij program zarządzania łańcuchem dostaw',
    description:
      'Przeprowadź pełną ocenę dostawców krytycznych, wdróż ciągły monitoring i opracuj procedurę zarządzania ryzykiem w łańcuchu dostaw.',
  },
]

const severityConfig = {
  critical: {
    label: 'Krytyczny',
    badge: 'bg-red-100 text-red-700 border-red-200',
    dot: 'bg-red-500',
    icon: XCircle,
  },
  high: {
    label: 'Wysoki',
    badge: 'bg-amber-100 text-amber-700 border-amber-200',
    dot: 'bg-amber-500',
    icon: AlertTriangle,
  },
  medium: {
    label: 'Średni',
    badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    dot: 'bg-yellow-500',
    icon: AlertTriangle,
  },
}

export default function AudytNis2Page() {
  const overallScore = 38
  const criticalCount = findings.filter((f) => f.severity === 'critical').length
  const highCount = findings.filter((f) => f.severity === 'high').length
  const mediumCount = findings.filter((f) => f.severity === 'medium').length

  return (
    <main className="min-h-screen bg-mula-bg text-mula-text py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-mula-text-muted hover:text-mula-text text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót na stronę główną
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-mula-accent" />
            <h1 className="text-3xl md:text-4xl font-bold">Audyt NIS2 — Wyniki</h1>
          </div>
          <p className="text-mula-text-muted">
            Przykładowy raport oceny zgodności z dyrektywą NIS2 dla firmy z sektora finansowego
          </p>
        </div>

        <div className="mula-card p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center shrink-0">
            <Building className="w-6 h-6 text-mula-accent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Firma Finansowa Demo</h2>
            <p className="text-mula-text-muted text-sm">
              <Users className="w-4 h-4 inline mr-1 -mt-0.5" />
              50 pracowników · Sektor: finanse · Data audytu: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
          <div className="sm:ml-auto shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-mula-accent/10 text-mula-accent">
              <CheckCircle className="w-3.5 h-3.5" />
              Wstępny audyt
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="mula-card p-8 flex flex-col items-center justify-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-mula-border"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallScore / 100) * 352} 352`}
                  className="text-mula-warning"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{overallScore}%</span>
              </div>
            </div>
            <p className="text-lg font-semibold">zgodności z NIS2</p>
            <p className="text-mula-text-dim text-sm mt-1">Wynik ogólny</p>
          </div>

          <div className="mula-card p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-mula-accent" />
              <h2 className="text-lg font-semibold">Wyniki według kategorii</h2>
            </div>
            <div className="space-y-5">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4 text-mula-text-muted" />
                      <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                    <span className="text-sm font-semibold">
                      {cat.percentage}% <span className="text-mula-text-dim font-normal">({cat.score}/{cat.maxScore})</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-mula-border overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${cat.percentage}%`,
                        backgroundColor:
                          cat.percentage <= 25
                            ? '#ef4444'
                            : cat.percentage <= 50
                              ? '#f59e0b'
                              : '#10b981',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-mula-warning" />
            <h2 className="text-xl font-bold">Znalezione niezgodności (12)</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
              <XCircle className="w-4 h-4" />
              Krytyczne ({criticalCount})
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Wysokie ({highCount})
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Średnie ({mediumCount})
            </div>
          </div>

          <div className="mula-card p-6">
            <div className="space-y-2">
              {findings.map((finding, idx) => {
                const config = severityConfig[finding.severity]
                const Icon = config.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${config.badge}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{finding.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-mula-success" />
            <h2 className="text-xl font-bold">Rekomendowany plan działania</h2>
          </div>
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.priority} className="mula-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-mula-accent text-white flex items-center justify-center shrink-0 text-sm font-bold">
                    {rec.priority}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{rec.title}</h3>
                    <p className="text-mula-text-muted text-sm leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mula-card p-8 text-center bg-gradient-to-br from-mula-accent/5 to-mula-purple/5 border-blue-200">
          <Shield className="w-10 h-10 text-mula-accent mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Chcesz pełny audyt dla swojej firmy?</h2>
          <p className="text-mula-text-muted mb-6 max-w-lg mx-auto">
            MULA Guardian AI przeprowadzi audyt NIS2 dopasowany do Twojej organizacji. Otrzymasz
            szczegółowy raport, ocenę ryzyka i konkretny plan wdrożenia.
          </p>
          <a
            href="https://app.guardian.mulagroup.eu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mula-accent text-white rounded-xl font-semibold hover:bg-mula-accent-light transition-colors"
          >
            Rozpocznij audyt
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  )
}
