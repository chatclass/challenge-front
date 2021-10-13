import styled from 'styled-components';
import Image from 'next/image';

interface ForecastWeatherValueProps {
  weight?: string;
}

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const ForecastHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 32px;
  margin-bottom: 16px;

  @media screen and (max-width: 500px) {
    margin-top: 16px;
    padding-right: 16px;
  }
`;

export const ForecastCity = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #505050;
`;

export const Close = styled(Image)`
  cursor: pointer;
`;

export const ActualWeather = styled.p`
  font-size: 3rem;
  color: #505050;
  font-weight: 700;
  text-align: left;
  margin-left: 32px;
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const ForecastWeatherInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 32px;
  margin-top: 16px;
`;

export const ForecastWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 16px;
  gap: 16px;
`;

export const ForecastWeatherMinMaxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ForecastWeatherInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 8px;
`;

export const ForecastWeatherValue = styled.p<ForecastWeatherValueProps>`
  font-size: 1rem;
  color: #505050;
  font-weight: ${props => props.weight || 600};
`;

export const ForecastWeatherLabel = styled.p`
  font-size: 1rem;
  color: #505050;
  font-weight: 300;
  margin-right: 8px;
`;

export const ForecastDays = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    overflow-x: scroll;
    gap: 32px;
    padding: 0 32px;
    margin-bottom: 16px;
  }
`;

export const ForecastDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ForecastDayWeatherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ForecastDaysHeader = styled.p`
  font-size: 1rem;
  color: #505050;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ForecastDayWeather = styled.p`
  font-size: 1rem;
  color: #ff7f00;
  font-weight: 700;
`;
