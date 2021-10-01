/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import MainStyled from './styles';

import apiKey from '../../data/api-key';
import getCapitals from './logic/get-capitals';
import getInfo from './logic/get-info';
import Loading from '../Loading';

const MainContent = () => {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    // const dataCapitals = getCapitals().map((capital) =>
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?id=${capital.id}&appid=${apiKey}&units=metric`,
    //   )
    //     .then((response) => response.json())
    //     .then((data) => getInfo(data)),
    // );
    // Promise.all(dataCapitals).then((data) => {
    //   setCapitals(data);
    // });
  }, []);

  return (
    <MainStyled>
      <h2 className="main__title">Capitais</h2>

      <section className="main__section">
        {capitals.length === 0 ? (
          <Loading />
        ) : (
          <table
            className="table"
            aria-label="Tabela de temperatura mínima e máxima das capitais"
          >
            <thead className="table__head">
              <tr>
                <th className="table__head-title">min</th>
                <th className="table__head-title">max</th>
              </tr>
            </thead>

            <tbody>
              {capitals.map((capital) => (
                <tr className="table__row" key={capital.id}>
                  <td className="table__cell">{capital.min}°C</td>
                  <td className="table__cell">{capital.max}°C</td>
                  <td className="table__cell">{capital.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </MainStyled>
  );
};

export default MainContent;
