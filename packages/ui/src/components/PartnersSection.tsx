'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Partner {
  name: string
  logo: string
  url?: string
}

interface PartnersSectionProps {
  title?: string
  subtitle?: string
  partners: Partner[]
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export function PartnersSection({ title, subtitle, partners }: PartnersSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-mula-text mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-mula-text-muted max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {partners.map((partner, index) => {
            const content = (
              <motion.div
                className="flex flex-col items-center justify-center rounded-2xl bg-mula-surface border border-mula-border/60 aspect-[3/2] p-6 transition-all duration-300 group"
                variants={cardVariant}
                whileHover={{ borderColor: '#3b82f640', y: -4 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
                {partner.url && (
                  <ExternalLink className="w-3.5 h-3.5 text-mula-text-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2" />
                )}
              </motion.div>
            )

            if (partner.url) {
              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              )
            }

            return <div key={index}>{content}</div>
          })}
        </motion.div>
      </div>
    </section>
  )
}
