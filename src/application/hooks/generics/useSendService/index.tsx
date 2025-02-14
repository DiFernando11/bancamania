import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import { MutationFunction } from './types'

export function useSendService<TData = unknown, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, unknown, TVariables, unknown>
): UseMutationResult<TData, unknown, TVariables, unknown> {
  return useMutation({
    mutationFn,
    ...options,
  })
}
