import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { ApiResponseError } from '@/shared'
import { MutationFunction, UseSendServiceOptions } from './types'

export function useSendService<TData = unknown, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseSendServiceOptions<TData, TVariables>
): UseMutationResult<TData, ApiResponseError, TVariables, unknown> {
  const queryClient = useQueryClient()

  return useMutation<TData, ApiResponseError, TVariables, unknown>({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      if (options?.cacheKey) {
        queryClient.setQueryData([options.cacheKey], data)
      }

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context)
      }
    },
  })
}
