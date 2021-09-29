import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  FunctionComponent,
  ReactElement,
  useContext,
  createContext
} from 'react'
import debounce from 'lodash.debounce'
import { DebouncedFunc } from 'lodash'
import { getWeatherByCity } from '../api/weather'
import { normalizeData } from '../utils/data'

type Forecast = {
  day: string
  min: string
  max: string
}

export type Weather = {
  city: string
  temperature: string
  min: string
  max: string
  sensation?: string
  wind: string
  humidity: string
  forecast: Forecast[]
}

type WeatherProps = {
  weather: Weather
  handleSearch: DebouncedFunc<(city: Weather['city']) => void>
  setWeather: React.Dispatch<React.SetStateAction<Weather | undefined>>
  error: string | null
}

const TIMEOUT = 60 * 5

const WeatherContext = createContext<WeatherProps>({} as WeatherProps)

const WeatherProvider: FunctionComponent = ({ children }): ReactElement => {
  const [weather, setWeather] = useState<Weather>()
  const [error, setError] = useState<string | null>(null)

  const handleSearch = useCallback((city: Weather['city']) => {
    if (!city) return

    getWeatherByCity(city)
      .then(({ data: { results } }) => setWeather(normalizeData(results)))
      .catch((error) => setError(error.message))
  }, [])

  const debouncedEventHandler = useMemo(
    () => debounce(handleSearch, TIMEOUT),
    [handleSearch]
  )

  useEffect(() => {
    return () => {
      debouncedEventHandler.cancel()
    }
  }, [debouncedEventHandler])

  return (
    <WeatherContext.Provider
      value={{
        weather: weather!,
        handleSearch: debouncedEventHandler,
        setWeather,
        error
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  const context = useContext(WeatherContext)

  if (context === null) {
    throw new Error('Hook useWeather must be used within a WeatherProvider')
  }

  return context
}

export default WeatherProvider
