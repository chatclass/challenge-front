import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import { fetchWeatherCapitalsRequest } from '../../store/ducks/weather/actions';
import { breakpoint } from '../../theme';

import { Container } from './styles';

const Capitals: React.FC = () => {
  const dispatch = useDispatch();
  const { dataCapitals } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(
      fetchWeatherCapitalsRequest([
        'rio de janeiro',
        'sao paulo',
        'belo horizonte',
        'brasilia',
        'belem',
        'goiania',
        'curitiba',
        'fortaleza',
        'manaus',
        'joao pessoa',
      ]),
    );
  }, []);
  return (
    <Container>
      {(!dataCapitals || dataCapitals?.length === 0) && <h3>Loading...</h3>}
      {dataCapitals && dataCapitals?.length > 0 && (
        <div>
          <span className="caption">Min </span>
          <span className="caption">Max</span>
          {dataCapitals
            ?.filter((e, i) => i < 5)
            ?.map(city => (
              <div className="city">
                <span className="body">
                  {Math.round(city?.main.temp_max)}º{' '}
                </span>
                <span className="body">
                  {Math.round(city?.main.temp_min)}º{' '}
                </span>
                <span className="body">{city.name}</span>
              </div>
            ))}
        </div>
      )}
      {dataCapitals && dataCapitals?.length > 0 && (
        <div>
          {window.screen.width > breakpoint.sm && (
            <>
              <span className="caption">Min </span>
              <span className="caption">Max</span>
            </>
          )}
          {dataCapitals
            ?.filter((e, i) => i >= 5)
            ?.map(city => (
              <div className="city">
                <span className="body">
                  {Math.round(city?.main.temp_max)}º{' '}
                </span>
                <span className="body">
                  {Math.round(city?.main.temp_min)}º{' '}
                </span>
                <span className="body">{city.name}</span>
              </div>
            ))}
        </div>
      )}
    </Container>
  );
};

export default Capitals;
