import React from 'react'
import { render, screen } from '../../utils/test-utils'
import SearchIcon from '../../pages/Weather/searchIcon'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders without Label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextField placeholder="Type your city here" />)

    expect(
      screen.getByPlaceholderText('Type your city here')
    ).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    render(<TextField icon={<SearchIcon data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    render(
      <TextField
        icon={<SearchIcon data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Renders with error', () => {
    const { container } = render(
      <TextField
        icon={<SearchIcon data-testid="icon" />}
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
