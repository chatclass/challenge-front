import { useWeathers } from '@/helpers/useWeathers';
import { Text } from '..';
import { Loading } from '../Loading';
import {
  CapitalsList,
  CapitalsListHeaderText,
  CapitalsListLine,
  CapitalsListItemText,
  CapitalsListWrapper,
  CapitalsWrapper,
} from './styles';
import { Fade } from 'react-awesome-reveal';

export const Capitals = () => {
  const { weathers, loading, error } = useWeathers({
    cities: [
      'Rio de Janeiro,BR',
      'São Paulo,BR',
      'Belo Horizonte,BR',
      'Brasília,BR',
      'Belém,BR',
      'Salvador,BR',
      'Curitiba,BR',
      'Fortaleza,BR',
      'Aracaju,BR',
      'João Pessoa,BR',
    ],
  });

  return loading ? (
    <Loading />
  ) : !weathers || error ? (
    <Text text="Algo de inesperado aconteceu, por favor, tente novamente!" />
  ) : (
    <Fade direction="up" triggerOnce>
      <CapitalsWrapper>
        <Text text="Capitais" type={'h2'} />
        <CapitalsListWrapper>
          {[weathers.slice(0, 5), weathers.slice(5)].map((capitals, i) => (
            <CapitalsList key={i}>
              <thead>
                <CapitalsListLine>
                  <CapitalsListHeaderText>Min</CapitalsListHeaderText>
                  <CapitalsListHeaderText>Máx</CapitalsListHeaderText>
                </CapitalsListLine>
              </thead>
              <tbody>
                {capitals.map((capital, j) => (
                  <CapitalsListLine key={j}>
                    <CapitalsListItemText>{`${capital.min}°`}</CapitalsListItemText>
                    <CapitalsListItemText>{`${capital.max}°`}</CapitalsListItemText>
                    <CapitalsListItemText>{`${capital.name}`}</CapitalsListItemText>
                  </CapitalsListLine>
                ))}
              </tbody>
            </CapitalsList>
          ))}
        </CapitalsListWrapper>
      </CapitalsWrapper>
    </Fade>
  );
};
