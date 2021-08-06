import {
    WeatherForecastContainer,
    SearchCities,
    CitySearched,
    ClimeInfos,
} from "./styles";

import searchImg from "../../assets/search-icon.svg";
import arrowUpImg from "../../assets/arrow-up-icon.svg";
import arrowDownImg from "../../assets/arrow-down-icon.svg";

import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

export function WeatherForecast() {
    const { weatherData, getData, getCityName } = useContext(WeatherContext);

    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    function formatSpeed(speed: number) {
        return speed * 3.6;
    }

    return (
        <WeatherForecastContainer>
            <h1>Previsão do tempo</h1>

            {weatherData !== null ? (
                <CitySearched>
                    <div className="day-state">
                        <span className="location">
                            {weatherData.name} - {weatherData.sys.country}
                        </span>

                        <div className="clime-container">
                            <span className="temperature">
                                {Math.round(weatherData.main.temp)}&deg;C
                            </span>

                            <span className="climate">
                                {capitalize(weatherData.weather[0].description)}
                            </span>
                        </div>

                        <ClimeInfos>
                            <div className="min-max-temperature">
                                <span className="min">
                                    <img
                                        src={arrowDownImg}
                                        alt="Temperatura mínima"
                                    />
                                    <strong>
                                        {Math.round(weatherData.main.temp_min)}
                                        &deg;
                                    </strong>
                                </span>

                                <span className="max">
                                    <img
                                        src={arrowUpImg}
                                        alt="Temperatura máxima"
                                    />
                                    <strong>
                                        {Math.round(weatherData.main.temp_max)}
                                        &deg;
                                    </strong>
                                </span>
                            </div>

                            <span className="feels-like">
                                Sensação
                                <strong>
                                    {Math.round(weatherData.main.feels_like)}
                                    &deg;C
                                </strong>
                            </span>

                            <span className="wind">
                                Vento
                                <strong>
                                    {Math.round(
                                        formatSpeed(weatherData.wind.speed)
                                    )}
                                    km/h
                                </strong>
                            </span>

                            <span className="humidity">
                                Umidade
                                <strong>{weatherData.main.humidity}%</strong>
                            </span>
                        </ClimeInfos>
                    </div>
                </CitySearched>
            ) : null}

            <SearchCities>
                <input
                    type="search"
                    id="city-search"
                    name="search"
                    placeholder="Insira aqui o nome da cidade"
                    onChange={(input) => getCityName(input.target.value)}
                />
                <button onClick={() => getData()}>
                    <img src={searchImg} alt="Buscar nome da cidade" />
                </button>
            </SearchCities>
        </WeatherForecastContainer>
    );
}
