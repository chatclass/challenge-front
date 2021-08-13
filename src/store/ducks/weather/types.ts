/**
 * Action types
 */
 export enum WeatherTypes {
  LOAD_REQUEST = '@Weather/LOAD_REQUEST',
  LOAD_SUCCCES = '@Weather/LOAD_SUCCCES',
  LOAD_FAILURE = '@Weather/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface CityWeather {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
  }                    

/**
 * State type
 */
export interface WeatherState {
  readonly data: CityWeather | undefined
  readonly loading: boolean
  readonly error: boolean
}
