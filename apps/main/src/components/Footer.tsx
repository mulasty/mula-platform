import Link from 'next/link'
import { Building2, Mail, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { COMPANY, PILLARS } from '@/lib/data'

const firstPillarCol = PILLARS.slice(0, 4)
const secondPillarCol = PILLARS.slice(4)

export function Footer() {
  const currentYear = new Date().getFullYear()
  const tf = useTranslations('footer')
  const tc = useTranslations('company')

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="#hero" className="flex items-center gap-2 text-slate-950 font-bold text-xl tracking-tight mb-4">
              <Building2 className="w-6 h-6 text-mula-accent" />
              <span>{tc('name')}</span>
            </Link>
            <p className="text-mula-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              {tc('tagline')}
            </p>
            <div className="space-y-1 text-xs text-mula-text-dim">
              <p>
                {COMPANY.fullName}
              </p>
              <p>
                KRS: {COMPANY.krs} | NIP: {COMPANY.nip} | REGON: {COMPANY.regon}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-slate-950 text-sm font-semibold mb-4 uppercase tracking-wider">
              {tf('services')}
            </h3>
            <ul className="space-y-3">
              {firstPillarCol.map((pillar) => (
                <li key={pillar.id}>
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-700 text-sm transition-colors"
                  >
                    {pillar.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-950 text-sm font-semibold mb-4 uppercase tracking-wider invisible sm:visible">
              &nbsp;
            </h3>
            <ul className="space-y-3">
              {secondPillarCol.map((pillar) => (
                <li key={pillar.id}>
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-700 text-sm transition-colors"
                  >
                    {pillar.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-950 text-sm font-semibold mb-4 uppercase tracking-wider">
              {tf('contact')}
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2 text-mula-text-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-mula-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mula-text-dim text-xs">
            &copy; {currentYear} {tc('name')}. {tf('rights')}
          </p>
          <Link
            href="/polityka-prywatnosci"
            className="text-mula-text-dim hover:text-mula-text-muted text-xs transition-colors"
          >
            {tf('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
