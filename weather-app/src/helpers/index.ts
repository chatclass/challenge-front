export const bindingCapitalsWeatherData = (weather: ApiWeatherResponse) => {
  const weatherData = {
    min: weather.main.temp_min.toFixed(0),
    max: weather.main.temp_max.toFixed(0),
    name: weather.name,
  };

  return weatherData;
};
