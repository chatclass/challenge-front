export const bindingCapitalsWeatherData = (
  weather: ApiWeatherResponse,
): CapitalsWeatherData => {
  const weatherData = {
    min: weather.main.temp_min.toFixed(0),
    max: weather.main.temp_max.toFixed(0),
    name: weather.name,
  };

  return weatherData;
};

export const bindingWeatherAndLatLon = (
  weather: ApiWeatherResponse,
): ActualWeatherData => {
  const weatherData = {
    name: weather.name,
    lat: weather.coord.lat,
    lon: weather.coord.lon,
    min: weather.main.temp_min.toFixed(0),
    max: weather.main.temp_max.toFixed(0),
    actual: weather.main.temp.toFixed(0),
    weather_description: weather.weather[0].description,
    feels_like: weather.main.feels_like.toFixed(0),
    humidity: weather.main.humidity.toFixed(0),
    wind_speed: weather.wind.speed.toFixed(0),
  };

  return weatherData;
};

export const bindingForecastAndWeather = (
  weather: ActualWeatherData,
  forecast: ApiForecastResponse,
): ForecastWeatherData => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const forecastData = {
    ...weather,
    forecast: forecast.daily.slice(1, 6).map(day => {
      const forecastDay = {
        day: weekDays[new Date(day.dt * 1000).getDay()],
        min: day.temp.min.toFixed(0),
        max: day.temp.max.toFixed(0),
      };

      return forecastDay;
    }),
  };

  return forecastData;
};
