import Link from 'next/link'
import { ArrowRight, Bot, CheckCircle2, ClipboardCheck, FileText, Gauge, LockKeyhole, ShieldCheck, Siren, Users } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const appUrl = 'https://app.guardian.mulagroup.eu'

const modules = [
  { icon: ClipboardCheck, title: 'Audit Manager', text: 'Tworzenie audytów, checklisty NIS2/ISO, scoring, findings i raporty dla zarządu.', status: 'działa w MVP' },
  { icon: Gauge, title: 'Compliance Manager', text: 'Mapa wymogów NIS2, RODO, DORA i ISO 27001 z analizą luk i planem dostosowania.', status: 'następny moduł' },
  { icon: FileText, title: 'Document Generator', text: 'Polityki bezpieczeństwa, procedury incydentów, analiza ryzyka i dokumentacja SZBI.', status: 'roadmap' },
  { icon: ShieldCheck, title: 'Risk Manager', text: 'Rejestr ryzyk, heatmapa, prawdopodobieństwo × wpływ i rekomendacje remediacyjne.', status: 'roadmap' },
  { icon: Siren, title: 'Incident Center', text: 'Klasyfikacja incydentów, playbooki reakcji i raportowanie NIS2 24h/72h.', status: 'roadmap' },
  { icon: Bot, title: 'AI Cyber Officer', text: 'Asystent AI, który tłumaczy wymagania, priorytetyzuje działania i wspiera decyzje.', status: 'AI layer' },
]

const outcomes = [
  'Pierwszy audyt NIS2 i lista luk w kilka godzin, nie tygodni.',
  'Jeden dashboard dla CEO, IT i compliance officera.',
  'Mniej pracy ręcznej przy dokumentacji i raportach.',
  'Stały model abonamentowy zamiast drogich projektów ad hoc.',
]

export function GuardianLandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="relative overflow-hidden pt-36 pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
          <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                <ShieldCheck className="h-4 w-4" />
                Produkt flagowy Mula Group
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                MULA Guardian AI — wirtualny dyrektor cyberbezpieczeństwa dla MŚP.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Platforma vCISO as a Service, która pomaga firmom przygotować się do NIS2,
                prowadzić audyty, analizować ryzyka, generować dokumentację i podejmować
                lepsze decyzje bezpieczeństwa z pomocą AI.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`${appUrl}/login`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700">
                  Zaloguj się do aplikacji
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300">
                  Umów demo
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-100/70">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-200">Guardian Console</p>
                    <p className="mt-1 text-2xl font-bold">Audit & Compliance MVP</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Live beta</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ['NIS2', 'compliance'],
                    ['AI', 'risk'],
                    ['PDF', 'reports'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Moduły produktu</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Od audytu NIS2 do pełnego systemu cyber-GRC.</h2>
              <p className="mt-4 text-lg text-slate-600">Budujemy produkt etapami: najpierw Audit + Compliance Pack, potem Risk, dokumenty, incydenty, integracje i AI Cyber Officer.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => {
                const Icon = module.icon
                return (
                  <article key={module.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100/60">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{module.status}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">{module.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{module.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Dla kogo</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Dla firm, które muszą ogarnąć cyberbezpieczeństwo bez budowania własnego SOC.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
              {[
                ['CEO', 'Widzi ryzyka, decyzje i priorytety w języku biznesowym.'],
                ['IT Manager', 'Dostaje checklisty, findings i konkretny plan remediacji.'],
                ['Compliance', 'Porządkuje wymogi, dowody, raporty i dokumentację.'],
              ].map(([role, text]) => (
                <div key={role} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Users className="mb-4 h-6 w-6 text-blue-300" />
                  <h3 className="font-bold">{role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <LockKeyhole className="mx-auto mb-5 h-10 w-10 text-blue-700" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Gotowy zobaczyć aplikację?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Obecny MVP działa jako beta: dashboard, audyty, GraphQL i podstawowe AI scoring. Dostęp aplikacyjny jest wydzielony na osobnej subdomenie.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`${appUrl}/login`} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500">Przejdź do logowania<ArrowRight className="h-5 w-5" /></a>
              <a href={appUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300">Otwórz demo aplikacji</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
