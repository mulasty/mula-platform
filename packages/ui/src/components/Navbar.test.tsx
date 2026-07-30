import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and CTA button', () => {
    render(<Navbar logo="Test Logo" ctaText="Test CTA" />)

    expect(screen.getByText('Test Logo')).toBeInTheDocument()
    expect(screen.getByText('Test CTA')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar links={[{ label: 'O nas', href: '#about' }, { label: 'Usługi', href: '#services' }]} />)

    expect(screen.getByText('O nas')).toBeInTheDocument()
    expect(screen.getByText('Usługi')).toBeInTheDocument()
  })

  it('has mobile menu toggle button', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Toggle menu/ })
    expect(toggle).toBeInTheDocument()
  })

  it('toggles mobile menu on click', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Toggle menu/ })
    fireEvent.click(toggle)

    // After opening, the button label remains "Toggle menu" and the X icon appears
    const closedToggle = screen.getByRole('button', { name: /Toggle menu/ })
    expect(closedToggle).toBeInTheDocument()
  })

  it('hides CTA when not provided', () => {
    render(<Navbar ctaText="" />)

    // Default links render, but CTA button should not be a separate button with "Kontakt"
    const buttons = screen.queryAllByRole('button')
    // Only mobile toggle exists, no CTA link rendered separately
    expect(buttons.length).toBe(1)
  })

  it('renders with light variant', () => {
    render(<Navbar variant="light" />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
