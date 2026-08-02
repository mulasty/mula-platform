'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Building2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations('nav')
  const tc = useTranslations('company')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3'
            : 'bg-white/70 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="#hero"
            className="flex items-center gap-2 text-slate-950 font-bold text-xl tracking-tight"
          >
            <Building2 className="w-6 h-6 text-mula-accent" />
            <span>{tc('name')}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-slate-600 hover:text-blue-700 transition-colors">{t('about')}</a>
            <a href="#guardian-ai" className="text-sm text-slate-600 hover:text-blue-700 transition-colors">{t('guardianAI')}</a>
            <a href="#pillars" className="text-sm text-slate-600 hover:text-blue-700 transition-colors">{t('activities')}</a>
            <a href="#process" className="text-sm text-slate-600 hover:text-blue-700 transition-colors">{t('howWeWork')}</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-blue-700 transition-colors">{t('contact')}</a>
            <LanguageSwitcher />
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t('cta')}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-950"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {t('about')}
            </motion.a>
            <motion.a
              href="#guardian-ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {t('guardianAI')}
            </motion.a>
            <motion.a
              href="#pillars"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {t('activities')}
            </motion.a>
            <motion.a
              href="#process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {t('howWeWork')}
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {t('contact')}
            </motion.a>
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all"
            >
              {t('cta')}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
