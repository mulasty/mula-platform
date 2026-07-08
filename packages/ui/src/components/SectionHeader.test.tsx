import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeader } from './SectionHeader'

describe('SectionHeader', () => {
  it('renders title and subtitle', () => {
    render(<SectionHeader title="Test Title" subtitle="Test Subtitle" />)

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders without subtitle', () => {
    render(<SectionHeader title="Title Only" />)

    expect(screen.getByRole('heading', { name: 'Title Only' })).toBeInTheDocument()
    expect(screen.queryByText('Subtitle')).not.toBeInTheDocument()
  })
})
