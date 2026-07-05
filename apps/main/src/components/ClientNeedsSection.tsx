'use client'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, ShoppingCart, RefreshCw, Shield, Building2, Lightbulb, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

const clientNeeds = [
  { icon: Brain, title: 'Chcesz wykorzystać AI w firmie', desc: 'Od audytu po wdrożenie agentów', href: 'https://ai.mulagroup.eu', color: '#3b82f6' },
  { icon: TrendingUp, title: 'Chcesz zdobywać więcej klientów', desc: 'Marketing, SEO, kampanie, lejek sprzedażowy', href: 'https://marketing.mulagroup.eu', color: '#ec4899' },
  { icon: ShoppingCart, title: 'Chcesz rozwijać sprzedaż online', desc: 'E-commerce, marketplace, automatyzacja', href: 'https://ecommerce.mulagroup.eu', color: '#f59e0b' },
  { icon: RefreshCw, title: 'Chcesz zautomatyzować procesy', desc: 'Workflow, integracje, eliminacja ręcznej pracy', href: 'https://digital.mulagroup.eu', color: '#8b5cf6' },
  { icon: Shield, title: 'Chcesz zabezpieczyć firmę', desc: 'NIS2, audyty, monitoring, zgodność', href: 'https://cyber.mulagroup.eu', color: '#10b981' },
  { icon: Building2, title: 'Potrzebujesz hali lub konstrukcji', desc: 'Projekt, produkcja, montaż', href: 'https://construction.mulagroup.eu', color: '#ef4444' },
  { icon: Lightbulb, title: 'Chcesz stworzyć nowy produkt', desc: 'MVP, prototyp, SaaS, startup studio', href: 'https://innovation.mulagroup.eu', color: '#06b6d4' },
]

export function ClientNeedsSection() {
  return (
    <section id="needs" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="W czym możemy pomóc?" subtitle="Nie sprzedajemy usług — rozwiązujemy problemy biznesowe" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {clientNeeds.map((need, i) => (
            <motion.a
              key={need.title}
              href={need.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-mula-surface border border-mula-border hover:border-white/10 transition-all duration-300"
              style={{ ['--hover-color' as string]: need.color }}
            >
              <need.icon className="w-5 h-5 mt-0.5 shrink-0 text-mula-text-dim group-hover:text-white transition-colors" style={{ color: need.color }} />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-mula-text group-hover:text-white transition-colors">{need.title}</h3>
                <p className="text-xs text-mula-text-dim mt-1">{need.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-mula-text-dim opacity-0 group-hover:opacity-100 transition-all shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
