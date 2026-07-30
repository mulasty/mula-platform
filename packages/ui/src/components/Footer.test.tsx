import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders company name and registration data', () => {
    render(<Footer />)

    expect(screen.getByText('Mula Group')).toBeInTheDocument()
    expect(screen.getByText(/KRS: 0001010842/)).toBeInTheDocument()
  })

  it('renders navigation columns', () => {
    render(
      <Footer
        columns={[
          {
            title: 'Usługi',
            links: [
              { label: 'AI', href: '/ai' },
              { label: 'Marketing', href: '/marketing' },
            ],
          },
        ]}
      />,
    )

    expect(screen.getByText('Usługi')).toBeInTheDocument()
    expect(screen.getByText('AI')).toBeInTheDocument()
  })

  it('renders footer column headings', () => {
    render(
      <Footer
        columns={[
          { title: 'Usługi', links: [{ label: 'Test', href: '/test' }] },
        ]}
      />,
    )

    expect(screen.getByText('Usługi')).toBeInTheDocument()
    expect(screen.getByText('Kontakt')).toBeInTheDocument()
  })

  it('shows current year in copyright', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders contact email and privacy link', () => {
    render(<Footer contactEmail="test@example.com" />)

    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('Polityka prywatności')).toBeInTheDocument()
  })
})
