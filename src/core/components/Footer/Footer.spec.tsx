import { render, screen } from '@testing-library/react'

import React from 'react'

import Footer from './Footer'

describe('Testing Footer', () => {
  it('should be able to show the footer text', () => {
    render(<Footer />)
    const footer = screen.getByText(/Created by Mateus César/i)

    expect(footer).toBeInTheDocument()
  })
})
