const mock = {
  coord: { lon: -56.0967, lat: -15.5961 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' },
  ],
  base: 'stations',
  main: {
    temp: 312.11,
    feels_like: 313.93,
    temp_min: 312.11,
    temp_max: 312.11,
    pressure: 1008,
    humidity: 29,
  },
  visibility: 10000,
  wind: { speed: 5.14, deg: 320 },
  clouds: { all: 40 },
  dt: 1633024322,
  sys: {
    type: 1,
    id: 8352,
    country: 'BR',
    sunrise: 1632994049,
    sunset: 1633038058,
  },
  timezone: -14400,
  id: 3465038,
  name: 'Cuiabá',
  cod: 200,
};

export default mock;
