import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { bindingCapitalsWeatherData } from '.';

type UseWeathersData = {
  cities: Array<string>;
};

type WeatherState = Array<CapitalsWeatherData> | null;

export const useWeathers = ({ cities }: UseWeathersData) => {
  const [weathers, setWeathers] = useState<WeatherState>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const stringifiedCities = JSON.stringify(cities);

  useEffect(() => {
    const fetchWeathers = async () => {
      try {
        const weathers = await Promise.all(
          cities.map(async city => {
            const url = `${process.env.NEXT_PUBLIC_API_URL}?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
            const response = await axios.get<ApiWeatherResponse>(url);
            const data = bindingCapitalsWeatherData(response.data);
            return data;
          }),
        );

        setWeathers(weathers);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeathers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedCities]);

  return { weathers, loading, error };
};
