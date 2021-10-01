const getWeekName = (weekNumber) =>
  ({
    0: 'domingo',
    1: 'segunda',
    2: 'terça',
    3: 'quarta',
    4: 'quinta',
    5: 'sexta',
    6: 'sábado',
  }[weekNumber]);

export default getWeekName;
