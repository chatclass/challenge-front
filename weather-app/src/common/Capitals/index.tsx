import { useWeathers } from '@/helpers/useWeathers';
import { Text } from '..';
import { Loading } from '../Loading';
import {
  CapitalsList,
  CapitalsListHeader,
  CapitalsListHeaderText,
  CapitalsListItem,
  CapitalsListItemText,
  CapitalsListWrapper,
  CapitalsWrapper,
} from './styles';

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
    <CapitalsWrapper>
      <Text text="Capitais" type={'h2'} />
      <CapitalsListWrapper>
        {[weathers.slice(0, 5), weathers.slice(5)].map((capitals, i) => (
          <CapitalsList key={i}>
            <CapitalsListHeader>
              <CapitalsListHeaderText>Min</CapitalsListHeaderText>
              <CapitalsListHeaderText>Máx</CapitalsListHeaderText>
            </CapitalsListHeader>
            {capitals.map((capital, j) => (
              <CapitalsListItem key={j}>
                <CapitalsListItemText>{`${capital.min}°`}</CapitalsListItemText>
                <CapitalsListItemText>{`${capital.max}°`}</CapitalsListItemText>
                <CapitalsListItemText>{`${capital.name}`}</CapitalsListItemText>
              </CapitalsListItem>
            ))}
          </CapitalsList>
        ))}
      </CapitalsListWrapper>
    </CapitalsWrapper>
  );
};
