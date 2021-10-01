const mock = {
  coord: { lon: -56.0967, lat: -15.5961 },
  weather: [{ id: 800, main: 'Clear', description: 'céu limpo', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 32.96,
    feels_like: 35.13,
    temp_min: 32.96,
    temp_max: 32.96,
    pressure: 1011,
    humidity: 46,
  },
  visibility: 10000,
  wind: { speed: 8.75, deg: 310 },
  clouds: { all: 0 },
  dt: 1633093469,
  sys: {
    type: 1,
    id: 8352,
    country: 'BR',
    sunrise: 1633080403,
    sunset: 1633124464,
  },
  timezone: -14400,
  id: 3465038,
  name: 'Cuiabá',
  cod: 200,
};

export default mock;
