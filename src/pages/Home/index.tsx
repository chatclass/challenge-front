import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../../store/ducks/weather/actions';
import { RootState } from '../../store/ducks/rootReducer';
import { forecast } from '../../store/ducks/weather/types';
import WeatherCard from '../../components/WeatherCard';
import { breakpoint, colors } from '../../theme';
import { Container, CustomInput, IconButton } from './styles';
import Divider from '../../components/Divider';
import Capitals from '../../components/Capitals';

const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector(
    (state: RootState) => state.weather,
  );
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const searchCity = () => {
    if (search.length > 2) {
      dispatch(fetchWeatherRequest(search));
      setIsSearch(true);
    }
  };

  return (
    <Container>
      <div style={{ width: '100%', maxWidth: breakpoint.md }}>
        <div
          className={`header ${
            !loading && !error && data && isSearch && 'headerCompress'
          }`}
        >
          <h1 className="h1">Previsão do tempo</h1>
        </div>
        {loading && isSearch && <h1>Loading...</h1>}
        {!loading && error && <h1>Cidade não encontrada</h1>}
        {!loading && !error && data && isSearch && (
          <WeatherCard
            data={data as forecast}
            onClose={() => {
              setSearch('');
              setIsSearch(false);
            }}
          />
        )}
        <CustomInput>
          <input
            className="body"
            type="text"
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Insira aqui o nome da cidade"
          />
          <IconContext.Provider
            value={{ color: colors.darkOrange, size: '20' }}
          >
            <IconButton onClick={() => searchCity()}>
              <FaSearch />
            </IconButton>
          </IconContext.Provider>
        </CustomInput>
        <Divider color={colors.white} />
        <h2 className="h2">Capitais</h2>
        <Capitals />
      </div>
    </Container>
  );
};

export default Home;
