import axios from "axios";

const server = `api.openweathermap.org/data/2.5/weather?apiappid=${process.env.API_KEY}&units=metric&lang=pt_br&`;

const api = axios.create({
  baseURL: server,
});


export default api;