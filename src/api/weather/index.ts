import request from '../request'

export const getWeatherByCity = async (city: string) => {
  return await request.get('/weather', {
    params: { city_name: city }
  })
}
