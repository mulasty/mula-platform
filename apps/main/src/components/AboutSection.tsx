'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Layers, Search, Play, TrendingUp, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@mula/ui'

const valueIcons = [Layers, Search, Play, TrendingUp]

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

/**
 * SECTION: Kim jesteśmy
 * BUSINESS GOAL: Build credibility. Show business understanding.
 * USER QUESTION: "Can I trust them?"
 * EMOTIONAL TARGET: "These people understand business, not just tech."
 */
export function AboutSection() {
  const t = useTranslations()
  const tc = useTranslations('company')
  return (
    <section id="about" className="relative py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={t('nav.about')} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.p
              className="text-lg text-mula-text-muted leading-relaxed mb-10"
              variants={fadeInVariant}
            >
              {t('aboutText')}
            </motion.p>

            <motion.div
              className="flex items-start gap-5 p-6 rounded-2xl bg-mula-surface border border-mula-border"
              variants={fadeInVariant}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-mula-accent/10 flex items-center justify-center">
                <User className="w-6 h-6 text-mula-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mula-text">
                  {tc('founderName')}
                </h3>
                <p className="text-sm text-mula-accent mb-2">{tc('founderRole')}</p>
                <p className="text-sm text-mula-text-muted leading-relaxed">
                  {tc('founderBio')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* Mission card */}
            <motion.div
              className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-mula-accent/10 to-mula-purple/10 border border-mula-border mb-10"
              variants={fadeInVariant}
            >
              <Image
                src="/images/competencies/about-card.webp"
                alt=""
                fill
                className="object-cover opacity-25"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-mula-bg/60" />
              <h3 className="relative z-10 text-sm uppercase tracking-wider text-mula-accent mb-3 font-semibold">
                Misja
              </h3>
              <p className="relative z-10 text-lg text-mula-text leading-relaxed">{tc('mission')}</p>
            </motion.div>

            {/* Values grid */}
            <motion.div className="grid sm:grid-cols-2 gap-4" variants={staggerContainer}>
              {t.raw('values').map((value: { title: string; description: string }, i: number) => {
                const Icon = valueIcons[i]
                return (
                  <motion.div
                    key={value.title}
                    className="p-5 rounded-xl bg-mula-surface border border-mula-border hover:border-mula-accent/30 transition-colors duration-300"
                    variants={fadeInVariant}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-mula-accent/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-mula-accent" />
                    </div>
                    <h4 className="text-sm font-semibold text-mula-text mb-1">{value.title}</h4>
                    <p className="text-xs text-mula-text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
