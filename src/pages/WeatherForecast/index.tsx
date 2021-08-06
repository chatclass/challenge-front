import { WeatherForecastContainer, SearchCities } from "./styles";

import searchImg from "../../assets/search-icon.svg";

export function WeatherForecast() {
    return (
        <WeatherForecastContainer>
            <h1>Previsão do tempo</h1>

            <SearchCities>
                <input
                    type="search"
                    id="city-search"
                    name="search"
                    placeholder="Insira aqui o nome da cidade"
                />
                <button>
                    <img src={searchImg} alt="Buscar nome da cidade" />
                </button>
            </SearchCities>
        </WeatherForecastContainer>
    );
}
