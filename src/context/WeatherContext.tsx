import { useState } from "react";
import { useEffect } from "react";
import { createContext, ReactNode } from "react";
import { getWeatherData } from "../data/api";

type WeatherContextData = {
    weatherData: any;
    getData: () => void;
    getCityName: (cityName: string) => void;
    capitalsData: any;
    isSearched: boolean;
};

type WeatherContextProviderProps = {
    children: ReactNode;
};

type CapitalsProps = {
    name: string;
};

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherContextProvider({
    children,
}: WeatherContextProviderProps) {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");
    const [capitalsData, setCapitalsData] = useState<any>([]);
    const [isSearched, setIsSearched] = useState(false);

    const getData = async () => {
        try {
            const data = await getWeatherData(city);
            setWeatherData(data);
            setIsSearched(true);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getCapitalsData = async (cityName: string) => {
        try {
            const data = await getWeatherData(cityName);
            capitalsData.push(data);
            setCapitalsData(capitalsData);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getCapitals();
        console.log("capitals >>>>", capitalsData);
    }, []);

    function getCityName(cityName: string) {
        setCity(cityName);
    }

    async function getCapitals() {
        const capitals: CapitalsProps[] = [
            { name: "Rio de Janeiro" },
            { name: "São Paulo" },
            { name: "Belo Horizonte" },
            { name: "Brasília" },
            { name: "Belém" },
            { name: "Porto Alegre" },
            { name: "Curitiba" },
            { name: "Fortaleza" },
            { name: "Manaus" },
            { name: "João Pessoa" },
        ];

        for (const capital of capitals) {
            getCapitalsData(capital.name);
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                getData,
                getCityName,
                capitalsData,
                isSearched,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
