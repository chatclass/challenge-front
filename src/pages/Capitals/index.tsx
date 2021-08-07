import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { CapitalsWeather, CapitalsContainer } from "./styles";

export function Capitals() {
    const { capitalsData } = useContext(WeatherContext);

    return (
        <CapitalsContainer>
            <h2>Capitais</h2>
            <CapitalsWeather>
                <div>
                    <div className="min-max-labels">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                    {capitalsData.lenght !== 0
                        ? capitalsData.map((capital: any, index: number) => {
                              if (index < 5) {
                                  return (
                                      <div key={index} className="cities">
                                          <span>
                                              {Math.round(
                                                  capital.main.temp_min
                                              )}
                                              &deg;
                                          </span>
                                          <span>
                                              {Math.round(
                                                  capital.main.temp_max
                                              )}
                                              &deg;
                                          </span>
                                          <span>{capital.name}</span>
                                      </div>
                                  );
                              }
                          })
                        : null}
                </div>

                <div>
                    <div className="min-max-labels second">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                    {capitalsData.lenght !== 0
                        ? capitalsData.map((capital: any, index: number) => {
                              if (index >= 5) {
                                  return (
                                      <div key={index} className="cities">
                                          <span>
                                              {Math.round(
                                                  capital.main.temp_min
                                              )}
                                              &deg;
                                          </span>
                                          <span>
                                              {Math.round(
                                                  capital.main.temp_max
                                              )}
                                              &deg;
                                          </span>
                                          <span>{capital.name}</span>
                                      </div>
                                  );
                              }
                          })
                        : null}
                </div>
            </CapitalsWeather>
        </CapitalsContainer>
    );
}
