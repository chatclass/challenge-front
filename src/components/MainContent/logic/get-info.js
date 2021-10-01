const getInfo = (dataFetch) => ({
  id: dataFetch.id,
  name: dataFetch.name,
  min: dataFetch.main.temp_min,
  max: dataFetch.main.temp_max,
});

export default getInfo;
