/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react';

import SectionStyled from './styles';
import ArticleCurrent from './styles/ArticleCurrent';
import SectionFuture from './styles/SectionFuture';

import apiKey from '../../data/api-key';
import Context from '../../providers/Context';
import getDayWeek from './logic/get-day-week';
import Loading from '../Loading';

const CityDetails = () => {
  const [isLoadingNow, setIsLoadingNow] = useState(true);
  const [isLoadingFuture, setIsLoadingFuture] = useState(true);

  const [tempNow, setTempNow] = useState({});
  const [tempFuture, setTempFuture] = useState({});

  const { citySearch, setIsOpenDetails } = useContext(Context);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${citySearch}&appid=${apiKey}&units=metric&lang=pt_br`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length > 0) {
          setTempNow(data);
          setIsLoadingNow(false);
        }
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${citySearch}&appid=${apiKey}&units=metric&lang=pt_br`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length > 0) {
          setTempFuture(data);
          setIsLoadingFuture(false);
        }
      });
  }, []);

  const handleClick = () => {
    setIsOpenDetails((prev) => !prev);
  };

  return (
    <SectionStyled>
      <ArticleCurrent>
        {isLoadingNow ? (
          <Loading orange />
        ) : (
          <>
            <button
              className="article__btn"
              type="button"
              aria-label="Clique para fechar detalhe"
              onClick={handleClick}
            >
              <img
                width="25"
                height="25"
                src="./svg/times-solid.svg"
                alt="Icone de fechar detalhe"
                aria-label="Icone de fechar detalhe"
              />
            </button>

            <header className="article__header">
              <h2 className="header__location">
                {tempNow.name} - {tempNow.sys.country}
              </h2>
              <h3 className="header__temp-current">
                {String(tempNow.main.temp).slice(0, 2)}°C{' '}
                {tempNow.weather[0].description}
              </h3>
            </header>

            <section className="article__temp-info">
              <p className="temp-current__min">
                <img
                  width="14"
                  height="14"
                  src="./svg/arrow-down-solid.svg"
                  alt="seta para baixo"
                />
                {String(tempNow.main.temp_max).slice(0, 2)}°
              </p>

              <p className="temp-current__max">
                <img
                  width="14"
                  height="14"
                  src="./svg/arrow-up-solid.svg"
                  alt="seta para baixo"
                />
                {String(tempNow.main.temp_min).slice(0, 2)}°
              </p>

              <p className="temp-current__feel">
                sensação{' '}
                <span>{String(tempNow.main.feels_like).slice(0, 2)}°</span>
              </p>
            </section>

            <section className="article__temp-info2">
              <p className="temp-info2__wind">
                vento <span>{String(tempNow.wind.speed).slice(0, 4)}km/h</span>
              </p>

              <p className="temp-info2__humidity">
                humidade{' '}
                <span>{String(tempNow.main.humidity).slice(0, 2)}%</span>
              </p>
            </section>
          </>
        )}
      </ArticleCurrent>

      <SectionFuture>
        {isLoadingFuture ? (
          <Loading orange />
        ) : (
          <>
            <p className="section__day-week">
              {getDayWeek(1)}{' '}
              <span>
                {String(tempFuture.list[0].main.temp_min).slice(0, 2)}°{' '}
                {String(tempFuture.list[0].main.temp_max).slice(0, 2)}°
              </span>
            </p>

            <p className="section__day-week">
              {getDayWeek(2)}{' '}
              <span>
                {String(tempFuture.list[1].main.temp_min).slice(0, 2)}°{' '}
                {String(tempFuture.list[1].main.temp_max).slice(0, 2)}°
              </span>
            </p>

            <p className="section__day-week">
              {getDayWeek(3)}{' '}
              <span>
                {String(tempFuture.list[2].main.temp_min).slice(0, 2)}°{' '}
                {String(tempFuture.list[2].main.temp_max).slice(0, 2)}°
              </span>
            </p>

            <p className="section__day-week">
              {getDayWeek(4)}{' '}
              <span>
                {String(tempFuture.list[3].main.temp_min).slice(0, 2)}°{' '}
                {String(tempFuture.list[3].main.temp_max).slice(0, 2)}°
              </span>
            </p>

            <p className="section__day-week">
              {getDayWeek(5)}{' '}
              <span>
                {String(tempFuture.list[4].main.temp_min).slice(0, 2)}°{' '}
                {String(tempFuture.list[4].main.temp_max).slice(0, 2)}°
              </span>
            </p>
          </>
        )}
      </SectionFuture>
    </SectionStyled>
  );
};

export default CityDetails;
