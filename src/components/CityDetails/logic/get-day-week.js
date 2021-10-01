import getWeekName from './get-week-name';

const getDayWeek = (when) => {
  const date = new Date();

  if (Number(when) > 0) {
    const tomorrow = new Date(date);

    tomorrow.setDate(date.getDate() + Number(when));

    return getWeekName(tomorrow.getDay().toLocaleString());
  }

  return getWeekName(date.getDay().toLocaleString());
};

export default getDayWeek;
