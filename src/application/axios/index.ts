import axios from 'axios'
import { ENV } from '@/config/envConfig'

const apiAxios = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
})

export default apiAxios
