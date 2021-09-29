import React from 'react'
import { render, screen } from '../../utils/test-utils'

import Weather from '.'

describe('<Weather />', () => {
  it('should render the Weather', () => {
    const { container } = render(
      <Weather
        city="são paulo, sp"
        temperature="27°C Parcialmente nublado"
        min="18°"
        max="30°"
        sensation=""
        wind="0.45 km/h"
        humidity="57%"
        forecast={[
          {
            day: 'Qui',
            min: '17°',
            max: '25°'
          }
        ]}
      />
    )

    expect(
      screen.getByRole('heading', { name: /são paulo, sp/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /27°c parcialmente nublado/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/qui/i)).toBeInTheDocument()
    expect(screen.getByText(/17° 25°/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
