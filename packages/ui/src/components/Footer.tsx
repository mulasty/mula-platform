import Link from 'next/link'
import { Building2, Mail, MapPin } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface CompanyInfo {
  name: string
  krs: string
  nip: string
  regon: string
  address: string
}

interface FooterProps {
  companyInfo: CompanyInfo
  columns: FooterColumn[]
  contactEmail: string
}

export function Footer({ companyInfo, columns, contactEmail }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mula-surface border-t border-mula-border" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight mb-4">
              <Building2 className="w-6 h-6 text-mula-accent" />
              <span>{companyInfo.name}</span>
            </Link>
            <div className="space-y-1 text-xs text-mula-text-dim">
              <p>KRS: {companyInfo.krs}</p>
              <p>NIP: {companyInfo.nip}</p>
              <p>REGON: {companyInfo.regon}</p>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-mula-text-muted hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-mula-text-muted hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactEmail}</span>
              </a>
              <div className="flex items-start gap-2 text-mula-text-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-mula-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mula-text-dim text-xs">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <a
            href="#"
            className="text-mula-text-dim hover:text-mula-text-muted text-xs transition-colors"
          >
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  )
}
