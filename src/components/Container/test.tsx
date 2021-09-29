import React from 'react'
import { render, screen } from '../../utils/test-utils'

import Container from '.'

describe('<Container />', () => {
  it('should render the Container with a children', () => {
    const { container } = render(<Container>Children</Container>)

    screen.getByText('Children')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Container with an element', () => {
    const { container } = render(
      <Container>
        <dl>
          <dt>Head</dt>
          <dd>Body</dd>
        </dl>
      </Container>
    )

    screen.getByText('Head')
    screen.getAllByText('Body')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
