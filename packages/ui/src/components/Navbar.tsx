'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Building2 } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logo: string
  logoHref: string
  links: NavLink[]
  ctaText?: string
  ctaHref?: string
  variant?: 'dark' | 'light'
}

export function Navbar({
  logo,
  logoHref,
  links,
  ctaText,
  ctaHref,
  variant = 'dark',
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isLight = variant === 'light'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const textClass = isLight ? 'text-gray-900' : 'text-white'
  const mutedClass = isLight ? 'text-gray-500 hover:text-gray-900' : 'text-mula-text-muted hover:text-white'
  const bgScrolled = isLight
    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
    : 'bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3'
  const bgTransparent = 'bg-transparent py-5'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? bgScrolled : bgTransparent
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href={logoHref}
            className={`flex items-center gap-2 font-bold text-xl tracking-tight ${textClass}`}
          >
            <Building2 className="w-6 h-6 text-mula-accent" />
            <span>{logo}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${mutedClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {ctaText && ctaHref && (
            <div className="hidden md:block">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {ctaText}
              </a>
            </div>
          )}

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${textClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textClass}`} />
            )}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-mula-text-muted hover:text-white transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            {ctaText && ctaHref && (
              <motion.a
                href={ctaHref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all"
              >
                {ctaText}
              </motion.a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
