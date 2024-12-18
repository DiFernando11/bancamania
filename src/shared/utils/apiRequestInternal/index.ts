import axios, { AxiosError } from 'axios'
import { ApiRequestOptions } from '@/shared/types/generics/apiRequest'

export const apiRequestInternal = async <T, D = unknown>({
  url,
  method = 'POST',
  data,
  params = {},
  headers = {},
}: ApiRequestOptions<D>): Promise<T> => {
  try {
    const response = await axios({
      url,
      method,
      data,
      params,
      headers,
    })

    if (response.status === 200) {
      return response.data
    }

    throw new Error(`Error: ${url}`)
  } catch (error) {
    const axiosError = error as AxiosError<T>

    if (axiosError.response?.data) {
      throw axiosError.response.data
    }

    throw new Error(axiosError.message)
  }
}
