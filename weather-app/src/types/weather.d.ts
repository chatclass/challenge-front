type ApiWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<ForecastDayWeather>;
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
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type CapitalsWeatherData = { min: string; max: string; name: string };

type ApiForecastResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: Array<ForecastDailyData>;
};

type ForecastDailyData = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Array<ForecastDayWeather>;
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

type ForecastDayWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type ActualWeatherData = {
  name: string;
  lat: number;
  lon: number;
  min: string;
  max: string;
  actual: string;
  weather_description: string;
  feels_like: string;
  humidity: string;
  wind_speed: string;
};

type ForecastWeatherData = {
  name: string;
  lat: number;
  lon: number;
  min: string;
  max: string;
  actual: string;
  weather_description: string;
  feels_like: string;
  humidity: string;
  wind_speed: string;
  forecast: Array<ForecastDailyResumedData>;
};

type ForecastDailyResumedData = {
  day: string;
  min: string;
  max: string;
};
