import axios from 'axios'
import { ENV } from '@/config/envConfig'
import { apiRoutes } from '@/routes/apiRoutes'

const apiAxios = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
})

const apiAxiosWithoutInterceptor = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
})

apiAxios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.response?.data?.error?.isTokenExpired &&
      !originalRequest._retry
    ) {
      try {
        const data = await apiAxiosWithoutInterceptor.post(
          apiRoutes.auth.refreshToken,
          {},
          { withCredentials: true }
        )
        if (!data?.data?.ok) {
          throw new Error(data?.data?.message)
        }
        await axios.put(apiRoutes.internas.internalRefreshToken, {
          token: data?.data?.data?.accessToken,
        })
        originalRequest._retry = true

        return apiAxios(originalRequest)
      } catch (refreshError) {
        await axios.delete(apiRoutes.internas.internalLogout)
        window.location.href = '/login'

        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default apiAxios
