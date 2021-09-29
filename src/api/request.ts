import axios from 'axios'

export default axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  params: {
    format: 'json-cors',
    key: `${import.meta.env.VITE_APP_ID}`
  }
})
