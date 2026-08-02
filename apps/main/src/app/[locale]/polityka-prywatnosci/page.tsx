import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: `Polityka prywatności i cookies ${COMPANY.name}. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-mula-bg text-mula-text py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-mula-text-muted hover:text-mula-text text-sm mb-8 transition-colors"
        >
          ← Powrót na stronę główną
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Polityka prywatności</h1>
        <p className="text-mula-text-muted mb-10">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

        <div className="space-y-8 text-mula-text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest {COMPANY.fullName} z siedzibą w {COMPANY.address}.
              Możesz skontaktować się z nami pod adresem e-mail:{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-mula-accent hover:underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">2. Jakie dane zbieramy?</h2>
            <p>
              Podczas korzystania ze strony internetowej możemy zbierać następujące dane:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>adres IP i dane techniczne przeglądarki,</li>
              <li>dane z plików cookies,</li>
              <li>dane kontaktowe przesłane za pośrednictwem formularza lub poczty e-mail.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">3. Cel i podstawa prawna przetwarzania</h2>
            <p>
              Twoje dane przetwarzamy w celu:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>udzielania odpowiedzi na zapytania (podstawa: art. 6 ust. 1 lit. b RODO),</li>
              <li>zapewnienia prawidłowego działania strony (podstawa: art. 6 ust. 1 lit. f RODO),</li>
              <li>prowadzenia analiz i statystyk ruchu (podstawa: art. 6 ust. 1 lit. a RODO, gdy wymagana jest zgoda).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">4. Pliki cookies</h2>
            <p>
              Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania, analizy ruchu
              oraz poprawy jakości usług. Możesz w każdej chwili zmienić ustawienia cookies w swojej
              przeglądarce internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">5. Twoje prawa</h2>
            <p>
              Przysługuje Ci prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. Możesz także wnieść skargę do
              Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">6. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych
              przed nieuprawnionym dostępem, utratą lub zniszczeniem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-mula-text mb-3">7. Kontakt</h2>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-mula-accent hover:underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
