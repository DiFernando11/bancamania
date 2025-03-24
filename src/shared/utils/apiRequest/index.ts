import { AxiosError } from 'axios'
import apiAxios from '@/application/axios'
import {
  ApiRequestOptions,
  ApiResponse,
} from '@/shared/types/generics/apiRequest'

export const apiRequest = async <T, D = unknown>({
  url,
  method = 'POST',
  data,
  params = {},
  headers = {},
  responseType = 'json',
}: ApiRequestOptions<D>): Promise<T> => {
  try {
    const response: ApiResponse<T> = await apiAxios({
      data,
      headers,
      method,
      params,
      responseType,
      url,
    })

    if (responseType === 'blob') {
      return response.data as unknown as T
    }

    if (response?.data?.ok) {
      return response.data.data
    }

    throw new Error(`Error: ${url}`)
  } catch (error) {
    const axiosError = error as AxiosError<T>
    console.log(error, axiosError)

    if (axiosError.response?.data) {
      throw axiosError.response.data
    }

    throw new Error(axiosError.message)
  }
}
