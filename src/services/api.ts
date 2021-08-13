import axios from 'axios';

const server = `https://api.openweathermap.org/data/2.5`;

const api = axios.create({
  baseURL: server,
});

export default api;
