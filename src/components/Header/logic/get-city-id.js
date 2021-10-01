const getCityId = async (cityName) => {
  const response = await fetch('./city.list.json');
  const data = await response.json();
  const cities = await data.cities;
  const cityData = cities.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase(),
  );

  if (typeof cityData === 'undefined') return 'Cidade não encontrado';

  return cityData.id;
};

export default getCityId;
