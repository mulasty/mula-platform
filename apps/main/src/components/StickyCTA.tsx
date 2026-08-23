'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)
  const t = useTranslations('hero')

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Hide the bar when the footer is reached so it never covers the
  // footer's last row (including the privacy-policy link).
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: '0px 0px -20% 0px' }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const show = visible && !nearFooter

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.a
            href="#contact"
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30">
              <div className="flex items-center justify-center gap-3 px-6 py-4">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">
                  {t('cta')}
                </span>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
      {/* Reserve space on mobile so the bar never overlaps the footer */}
      <div aria-hidden="true" className={`md:hidden h-16 transition-all duration-300 ${show ? 'opacity-100' : 'opacity-0 h-0'}`} />
    </>
  )
}
