import { getWeatherByCity } from '../weather'
import { normalizeData } from '../../utils/data'

const cities = [
  'Rio de Janeiro',
  'São Paulo',
  'Belo Horizonte',
  'Brasília',
  'Belem'
]

const requests = cities.map((city) => getWeatherByCity(city))

export const getCapitals = async () => {
  return Promise.all(requests).then((responses) =>
    responses.map((response) => ({ ...normalizeData(response.data.results) }))
  )
}
