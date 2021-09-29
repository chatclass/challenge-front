import React from 'react'
import { ThemeProvider } from 'styled-components'
import WeatherProvider from './hooks/useWeather'
import { GlobalStyles } from './styles/globalStyles'
import theme from './styles/theme'
import WeatherPage from './pages/Weather'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WeatherProvider>
        <WeatherPage />
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App
