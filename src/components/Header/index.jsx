import { useContext, useEffect, useRef, useState } from 'react';

import HeaderStyles from './styles';

import Context from '../../providers/Context';
import getCityId from './logic/get-city-id';
import apiKey from '../../data/api-key';
import Loading from '../Loading';

const Header = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { setCitySearch } = useContext(Context);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    const cityID = await getCityId(value);

    if (cityID === 'Cidade não encontrado') {
      setLoading(false);
      setError(true);
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric`,
      );

      if (response.ok) {
        const data = await response.json();

        setLoading(false);
        setCitySearch(data);
      }

      if (!response.ok) {
        setLoading(false);
        setError(true);
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue('');
    fetchData();
  };

  return (
    <HeaderStyles>
      <h1 className="header__title">Previsão do tempo</h1>

      {loading && <Loading />}

      {!loading && error && (
        <h2 className="header__error-message">Cidade não encontrada</h2>
      )}

      <form onSubmit={handleSubmit} className="header__form">
        <label
          className="form__label"
          htmlFor="input-search"
          aria-label="Pesquisar por clima de cidade"
        >
          <input
            className="form__input"
            type="search"
            name="input-search"
            id="input-search"
            placeholder="Insira aqui o nome da cidade"
            ref={inputRef}
            value={value}
            onChange={handleChange}
          />

          <button
            className="form__btn"
            type="submit"
            aria-label="Clique para pesquisar por cidade"
          >
            <img
              className="form__img"
              width="25"
              height="25"
              src="./svg/search-solid.svg"
              alt="Clique para pesquisar cidade"
              aria-label="Clique para pesquisar por cidade"
            />
          </button>
        </label>
      </form>
    </HeaderStyles>
  );
};

export default Header;
