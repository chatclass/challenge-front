import { useState, useEffect } from 'react';
import axios from 'axios';

type WeatherData = {
  city: string;
};

export const useWeather = ({ city }: WeatherData) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const url = `${process.env.NEXT_PUBLIC_API_URL}?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

      axios
        .get<ApiWeatherResponse>(url)
        .then(res => {
          setWeather(res.data);
        })
        .catch(err => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    };
    fetchData();
  }, [city]);

  return { weather, error, loading };
};
