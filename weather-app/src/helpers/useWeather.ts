import { useState, useEffect } from 'react';
import axios from 'axios';
import { bindingWeatherAndLatLon, bindingForecastAndWeather } from '.';

const fetchLatLon = async (city: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_WEATHER_URL}?q=${city}&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  const res = await axios.get<ApiWeatherResponse>(url);
  return bindingWeatherAndLatLon(res.data);
};

const fetchForecast = async (lat: number, lon: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_FORECAST_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  const res = await axios.get<ApiForecastResponse>(url);
  return res.data;
};

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<ForecastWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setWeather(null);
      setLoading(true);
      setError(false);

      fetchLatLon(city)
        .then(actualWeatherRes => {
          fetchForecast(actualWeatherRes.lat, actualWeatherRes.lon)
            .then(forecastRes => {
              const data = bindingForecastAndWeather(
                actualWeatherRes,
                forecastRes,
              );
              setWeather(data);
            })
            .catch(err => {
              console.log('Error fetching forecast', err);
              setError(true);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch(err => {
          console.log('Error fetching weather', err);
          setError(true);
          setLoading(false);
        });
    };

    fetchData();
  }, [city]);

  return { weather, error, loading };
};
