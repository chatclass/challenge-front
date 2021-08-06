import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { CapitalsWeather, CapitalsContainer } from "./styles";

export function Capitals() {
    const { capitalsData } = useContext(WeatherContext);
    console.log(capitalsData);

    return (
        <CapitalsContainer>
            <h2>Capitais</h2>
            <CapitalsWeather>
                <div className="min-max-labels">
                    <span>Min</span>
                    <span>Max</span>
                </div>
                {capitalsData.lenght !== 0
                    ? capitalsData.map((capital: any, index: string) => {
                          return (
                              <div key={index} className="cities">
                                  <span>
                                      {Math.round(capital.main.temp_min)}
                                      &deg;
                                  </span>
                                  <span>
                                      {Math.round(capital.main.temp_max)}
                                      &deg;
                                  </span>
                                  <span>{capital.name}</span>
                              </div>
                          );
                      })
                    : null}
            </CapitalsWeather>
        </CapitalsContainer>
    );
}
