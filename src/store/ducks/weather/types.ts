/**
 * Action types
 */
export enum weatherTypes {
  FETCH_WEATHER_REQUEST = '@weather/FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCCES = '@weather/FETCH_WEATHER_SUCCCES',
  FETCH_WEATHER_FAILURE = '@weather/FETCH_WEATHER_FAILURE',
}

/**
 * Data types
 */
export interface forecast {
  cod: number;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    },
  ];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface cityWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

/**
 * State type
 */
export interface weatherState {
  readonly data: cityWeather | forecast | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}
