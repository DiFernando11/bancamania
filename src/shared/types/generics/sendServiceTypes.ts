import { UseMutateFunction } from '@tanstack/react-query'
import { ApiResponseError } from './apiRequest'

export interface SendServiceTypes<TData, TVariables = unknown> {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  handleActionService: UseMutateFunction<TData, unknown, TVariables, unknown>
  data?: TData
  error?: ApiResponseError | null
  reset: () => void
}

export interface SendFechTypes<TData> {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  data?: TData
}
