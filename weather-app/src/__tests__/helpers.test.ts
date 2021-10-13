const {
  bindingCapitalsWeatherData,
  bindingWeatherAndLatLon,
  bindingForecastAndWeather,
} = require('../helpers/');

const { weatherMock, forecastMock } = require('../helpers/mocks/helpers.mock');

describe('bindingCapitalsWeatherData', () => {
  it('shoud return the expected data', () => {
    expect(bindingCapitalsWeatherData(weatherMock)).toEqual({
      min: '28',
      max: '28',
      name: 'Aracaju',
    });
  });
});

describe('bindingWeatherAndLatLon', () => {
  it('shoud return the expected data', () => {
    expect(bindingWeatherAndLatLon(weatherMock)).toEqual({
      min: '28',
      max: '28',
      name: 'Aracaju',
      lat: -10.9111,
      lon: -37.0717,
      actual: '28',
      weather_description: 'nuvens dispersas',
      feels_like: '31',
      humidity: '74',
      wind_speed: '7',
    });
  });
});

describe('bindingForecastAndWeather', () => {
  it('shoud return the expected data', () => {
    expect(
      bindingForecastAndWeather(
        {
          min: '28',
          max: '28',
          name: 'Aracaju',
          lat: -10.9111,
          lon: -37.0717,
          actual: '28',
          weather_description: 'nuvens dispersas',
          feels_like: '31',
          humidity: '74',
          wind_speed: '7',
        },
        forecastMock,
      ),
    ).toEqual({
      min: '28',
      max: '28',
      name: 'Aracaju',
      lat: -10.9111,
      lon: -37.0717,
      actual: '28',
      weather_description: 'nuvens dispersas',
      feels_like: '31',
      humidity: '74',
      wind_speed: '7',
      forecast: [
        { day: 'Quinta', min: '24', max: '31' },
        { day: 'Sexta', min: '25', max: '30' },
        { day: 'Sábado', min: '24', max: '30' },
        { day: 'Domingo', min: '25', max: '30' },
        { day: 'Segunda', min: '25', max: '30' },
      ],
    });
  });
});

export {};
