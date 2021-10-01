import capitals from '../../../data/capitals';

const getCapitals = () => {
  const list = capitals.map((capital) => ({
    id: capital.id,
    name: capital.name,
  }));

  return list.sort((a, b) => a.name - b.name);
};

export default getCapitals;
