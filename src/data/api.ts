import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
// const baseUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?";
const apiKey = "c511609c285a9dc6078dd55993aea144";
const lang = "pt_br";
const units = "metric";
// const cnt = 6;

export const getWeatherData = async (cityname: string) => {
    try {
        const { data } = await axios.get(
            baseUrl +
                `q=${cityname}&appid=${apiKey}&lang=${lang}&units=${units}`
        );
        return data;
    } catch (error) {
        throw error;
    }
};
