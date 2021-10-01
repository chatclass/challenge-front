import { useContext, useEffect, useRef, useState } from 'react';

import HeaderStyles from './styles';

import Context from '../../providers/Context';
import CityDetails from '../CityDetails';
import Loading from '../Loading';
import getCityId from './logic/get-city-id';

const Header = () => {
  const [value, setValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { setCitySearch, isOpenDetails, setIsOpenDetails } =
    useContext(Context);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValue('');
    setIsLoading(true);

    const id = await getCityId(value);

    if (id === 'Cidade não encontrado') {
      setIsLoading(false);
      setIsError(true);
    } else {
      setIsLoading(false);
      setCitySearch(id);
      setIsOpenDetails(true);
    }
  };

  return (
    <HeaderStyles>
      <h1 className={`header__title ${isOpenDetails && 'opened-details'}`}>
        Previsão do tempo
      </h1>

      {isLoading && <Loading />}

      {!isLoading && isError && (
        <h3 className="header__error-message">Cidade não encontrada</h3>
      )}

      {!isLoading && !isError && isOpenDetails && <CityDetails />}

      <form onSubmit={handleSubmit} className="header__form">
        <label
          className={`form__label ${isOpenDetails && 'opened-details'}`}
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
