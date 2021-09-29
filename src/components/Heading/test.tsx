import React from 'react'
import { render, screen } from '../../utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the Heading h2 as default', () => {
    const { container } = render(<Heading>Heading 2</Heading>)

    screen.getByRole('heading', { name: /heading 2/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '3.5rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h1', () => {
    const { container } = render(<Heading as="h1">Heading 1</Heading>)

    screen.getByRole('heading', { name: /heading 1/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '4.5rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h2', () => {
    const { container } = render(<Heading as="h2">Heading 2</Heading>)

    screen.getByRole('heading', { name: /heading 2/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '3.5rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h3', () => {
    const { container } = render(<Heading as="h3">Heading 3</Heading>)

    screen.getByRole('heading', { name: /heading 3/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '2.5rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h4', () => {
    const { container } = render(<Heading as="h4">Heading 4</Heading>)

    screen.getByRole('heading', { name: /heading 4/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1.5rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h5', () => {
    const { container } = render(<Heading as="h5">Heading 5</Heading>)

    screen.getByRole('heading', { name: /heading 5/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1rem',
      'font-weight': '700'
    })
  })

  it('should render the Heading as h6', () => {
    const { container } = render(<Heading as="h6">Heading 6</Heading>)

    screen.getByRole('heading', { name: /heading 6/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '0.875rem',
      'font-weight': '700'
    })
  })
})
