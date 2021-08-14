import { forecastDay } from '../store/ducks/weather/types';

export const unique = (
  value: forecastDay,
  index: number,
  self: forecastDay[],
) => {
  return (
    self
      .map(e => new Date(e.dt_txt).getDay())
      .indexOf(new Date(value.dt_txt).getDay()) === index
  );
};

export const capitalize = (str: string) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};
