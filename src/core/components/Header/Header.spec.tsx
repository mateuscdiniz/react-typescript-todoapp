import { render, screen } from '@testing-library/react'

import React from 'react'

import Header from './Header'

describe('Testing Header', () => {
  it('should be able to show the Header text', () => {
    render(<Header />)
    const header = screen.getByText(/Todo List/i)

    expect(header).toBeInTheDocument()
  })
})
