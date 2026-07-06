/**
 * Single source of truth for static graphics and media assets.
 *
 * Prefer importing paths from here instead of hardcoding URLs in components.
 * This makes audits, renames, and A/B swaps much safer.
 */

export const GRAPHICS = {
  competencies: {
    ai: {
      card: '/images/competencies/ai-card.webp',
      desktop: '/images/competencies/ai-desktop.webp',
      mobile: '/images/competencies/ai-mobile.webp',
      og: '/images/competencies/ai-og.webp',
    },
    digital: {
      card: '/images/competencies/digital-card.webp',
      desktop: '/images/competencies/digital-desktop.webp',
      mobile: '/images/competencies/digital-mobile.webp',
      og: '/images/competencies/digital-og.webp',
    },
    ecommerce: {
      card: '/images/competencies/ecommerce-card.webp',
      desktop: '/images/competencies/ecommerce-desktop.webp',
      mobile: '/images/competencies/ecommerce-mobile.webp',
      og: '/images/competencies/ecommerce-og.webp',
    },
    marketing: {
      card: '/images/competencies/marketing-card.webp',
      desktop: '/images/competencies/marketing-desktop.webp',
      mobile: '/images/competencies/marketing-mobile.webp',
      og: '/images/competencies/marketing-og.webp',
    },
    cyber: {
      card: '/images/competencies/cyber-card.webp',
      desktop: '/images/competencies/cyber-desktop.webp',
      mobile: '/images/competencies/cyber-mobile.webp',
      og: '/images/competencies/cyber-og.webp',
    },
    construction: {
      card: '/images/competencies/construction-card.webp',
      desktop: '/images/competencies/construction-desktop.webp',
      mobile: '/images/competencies/construction-mobile.webp',
      og: '/images/competencies/construction-og.webp',
    },
    innovation: {
      card: '/images/competencies/innovation-card.webp',
      desktop: '/images/competencies/innovation-desktop.webp',
      mobile: '/images/competencies/innovation-mobile.webp',
      og: '/images/competencies/innovation-og.webp',
    },
  },
  landing: {
    home: {
      card: '/images/competencies/home-card.webp',
      desktop: '/images/competencies/home-desktop.webp',
      mobile: '/images/competencies/home-mobile.webp',
      og: '/images/competencies/home-og.webp',
      poster: '/images/competencies/home-hero-poster.webp',
    },
    method: {
      card: '/images/competencies/method-card.webp',
      desktop: '/images/competencies/method-desktop.webp',
      mobile: '/images/competencies/method-mobile.webp',
      og: '/images/competencies/method-og.webp',
    },
    about: {
      card: '/images/competencies/about-card.webp',
      desktop: '/images/competencies/about-desktop.webp',
      mobile: '/images/competencies/about-mobile.webp',
      og: '/images/competencies/about-og.webp',
    },
    contact: {
      card: '/images/competencies/contact-card.webp',
      desktop: '/images/competencies/contact-desktop.webp',
      mobile: '/images/competencies/contact-mobile.webp',
      og: '/images/competencies/contact-og.webp',
    },
  },
  backgrounds: {
    heroGrid: '/images/backgrounds/bg-hero-grid.webp',
    subtleGrid: '/images/backgrounds/bg-subtle-grid.webp',
    gradientMesh: '/images/backgrounds/bg-gradient-mesh.webp',
    darkSurface: '/images/backgrounds/bg-dark-surface.webp',
  },
} as const

export const VIDEOS = {
  hero: '/videos/hero.mp4',
} as const

export const OG = {
  home: GRAPHICS.landing.home.og,
} as const
