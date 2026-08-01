import { ArrowRight, Bot, CheckCircle2, ClipboardCheck, FileText, Gauge, LockKeyhole, ShieldCheck, Siren, Users } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { GuardianTrackedLink } from '@/components/GuardianTrackedLink'
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
                <GuardianTrackedLink
                  href={`${appUrl}/login`}
                  eventName="guardian_login_click"
                  eventProperties={{ location: 'hero' }}
                  external
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Zaloguj się do aplikacji
                  <ArrowRight className="h-5 w-5" />
                </GuardianTrackedLink>
                <GuardianTrackedLink
                  href="/#contact"
                  eventName="guardian_demo_click"
                  eventProperties={{ location: 'hero' }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300"
                >
                  Umów demo
                </GuardianTrackedLink>
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

        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cennik</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Jeden abonament. Pełne cyber-GRC dla MŚP.</h2>
              <p className="mt-4 text-lg text-slate-600">Bez ukrytych kosztów. Bez długich wdrożeń. Subskrypcja miesięczna z możliwością rezygnacji w każdej chwili.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: 'Starter',
                  price: '2 490',
                  unit: 'zł / mc',
                  desc: 'Dla małych firm, które potrzebują pierwszego audytu i podstaw compliance.',
                  features: ['Audit Manager — 1 audyt / mc', 'Checklisty NIS2', 'Dashboard z wynikami', 'Wsparcie e-mail'],
                  cta: 'Zacznij za darmo',
                  highlight: false,
                },
                {
                  name: 'Essential',
                  price: '4 990',
                  unit: 'zł / mc',
                  desc: 'Dla firm 50–250 pracowników, które muszą spełnić NIS2 i zbudować dokumentację.',
                  features: ['Wszystko ze Startera', 'Compliance Manager (NIS2/RODO/DORA)', 'Document Generator', 'Risk Manager', 'AI Cyber Officer (beta)', 'Wsparcie priorytetowe'],
                  cta: 'Wybierz Essential',
                  highlight: true,
                },
                {
                  name: 'Professional',
                  price: '9 900',
                  unit: 'zł / mc',
                  desc: 'Dla organizacji z wymaganiami audytowanymi — ISO 27001, DORA, sektor krytyczny.',
                  features: ['Wszystko z Essentiala', 'Incident Center', 'Integracje API / SIEM', 'Dedykowany opiekun techniczny', 'SLA 4h', 'Onboarding i szkolenie zespołu'],
                  cta: 'Skontaktuj się',
                  highlight: false,
                },
              ].map((plan) => (
                <article key={plan.name} className={`rounded-3xl border p-8 shadow-sm transition-shadow hover:shadow-xl ${plan.highlight ? 'border-blue-200 bg-white ring-2 ring-blue-600' : 'border-slate-200 bg-white'}`}>
                  {plan.highlight ? <span className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">Najczęściej wybierany</span> : null}
                  <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{plan.desc}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-slate-950">{plan.price}</span>
                    <span className="ml-2 text-sm text-slate-500">{plan.unit}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <GuardianTrackedLink
                    href="/#contact"
                    eventName="guardian_pricing_click"
                    eventProperties={{ plan: plan.name }}
                    className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-500' : 'border border-slate-300 bg-white text-slate-800 hover:border-blue-400'}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </GuardianTrackedLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Najczęściej zadawane pytania</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Czy MULA Guardian AI zastępuje pełnoetatowego CISO?', a: 'Dla większości MŚP — tak. Guardian działa jako wirtualny CISO (vCISO): prowadzi audyty, monitoruje compliance, generuje dokumentację i priorytetyzuje działania. Dla dużych organizacji może wspierać zespół security jako platforma GRC.' },
                { q: 'Jak szybko mogę zacząć?', a: 'Dostęp do platformy otrzymujesz od razu po rejestracji. Pierwszy audyt NIS2 możesz przeprowadzić tego samego dnia. Nie wymagamy długich wdrożeń ani integracji — wszystko działa w przeglądarce.' },
                { q: 'Czy platforma jest zgodna z NIS2 i RODO?', a: 'Tak. Compliance Manager mapuje wymogi NIS2, RODO i DORA na konkretne działania. Document Generator tworzy polityki i procedury zgodne z tymi regulacjami. Platforma sama w sobie jest zgodna z RODO — dane hostowane są w UE.' },
                { q: 'Co się stanie, gdy zrezygnuję z abonamentu?', a: 'Eksportujesz wszystkie swoje dane (audyty, dokumenty, rejestry) w formacie PDF/CSV. Po zakończeniu subskrypcji dane są przechowywane przez 30 dni, a następnie trwale usuwane. Możesz wrócić w dowolnym momencie.' },
                { q: 'Czy oferujecie wsparcie techniczne?', a: 'W planie Essential i Professional — tak. Starter ma wsparcie e-mail w ciągu 48h. Essential dodaje priorytetowe wsparcie w ciągu 24h. Professional obejmuje dedykowanego opiekuna technicznego i SLA 4h.' },
                { q: 'Czy mogę przetestować platformę przed zakupem?', a: 'Tak — Starter przez pierwsze 14 dni jest darmowy. Dodatkowo możesz umówić demo na żywo, gdzie pokażemy pełną funkcjonalność i odpowiemy na pytania. Wypełnij formularz kontaktowy poniżej.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-950">
                    {item.q}
                    <span className="ml-4 shrink-0 text-blue-500 transition-transform group-open:rotate-180">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-slate-950 text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Demo</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Umów prezentację Guardian AI</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Zobacz, jak platforma może działać w Twojej firmie. Demo trwa około 30 minut — bez zobowiązań.</p>
            </div>
            <form action="/api/contact" method="POST" className="space-y-5">
              <input type="hidden" name="competency" value="Cyberbezpieczeństwo" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-name" className="mb-2 block text-sm font-medium text-slate-200">Imię i nazwisko</label>
                  <input id="demo-name" name="name" type="text" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30" placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label htmlFor="demo-email" className="mb-2 block text-sm font-medium text-slate-200">E-mail służbowy</label>
                  <input id="demo-email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30" placeholder="jan@firma.pl" />
                </div>
              </div>
              <div>
                <label htmlFor="demo-company" className="mb-2 block text-sm font-medium text-slate-200">Firma</label>
                <input id="demo-company" name="company" type="text" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30" placeholder="Nazwa firmy" />
              </div>
              <div>
                <label htmlFor="demo-message" className="mb-2 block text-sm font-medium text-slate-200">Co chcesz omówić na demo?</label>
                <textarea id="demo-message" name="message" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30" placeholder="Interesuje mnie NIS2 / chcę zobaczyć moduł compliance / potrzebuję wyceny..." />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto">
                Wyślij zgłoszenie
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-xs text-slate-500">Przesyłając formularz, zgadzasz się na politykę prywatności Mula Group.</p>
            </form>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <LockKeyhole className="mx-auto mb-5 h-10 w-10 text-blue-700" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Gotowy zobaczyć aplikację?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Obecny MVP działa jako beta: dashboard, audyty, GraphQL i podstawowe AI scoring. Dostęp aplikacyjny jest wydzielony na osobnej subdomenie.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <GuardianTrackedLink
                href={`${appUrl}/login`}
                eventName="guardian_login_click"
                eventProperties={{ location: 'final_cta' }}
                external
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Przejdź do logowania<ArrowRight className="h-5 w-5" />
              </GuardianTrackedLink>
              <GuardianTrackedLink
                href={appUrl}
                eventName="guardian_app_open_click"
                eventProperties={{ location: 'final_cta' }}
                external
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-300"
              >
                Otwórz demo aplikacji
              </GuardianTrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
