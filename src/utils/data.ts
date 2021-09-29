/* eslint-disable @typescript-eslint/no-explicit-any */
const LIMIT = 6

export const normalizeData = (results: any) => {
  return {
    city: results.city,
    temperature: `${results.temp}°C ${results.description}`,
    min: `${
      results.forecast.find((f: any) => results.date.includes(f.date)).min
    }°`,
    max: `${
      results.forecast.find((f: any) => results.date.includes(f.date)).max
    }°`,
    wind: results.wind_speedy,
    humidity: `${results.humidity}%`,
    forecast: results.forecast
      .map((cast: any) => ({
        day: cast.weekday,
        min: `${cast.min}°`,
        max: `${cast.max}°`
      }))
      .filter((_cast: any, index: number) => index <= LIMIT)
  }
}
