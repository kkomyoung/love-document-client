import axios from 'axios'

const BASE_URL = 'https://api-dev.love-document.com'

export function getToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return token ? `bearer ${token}` : ''
  }
  return ''
}

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    Authorization: getToken(),
  },
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
