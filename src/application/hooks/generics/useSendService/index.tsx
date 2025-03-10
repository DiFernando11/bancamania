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
    onSuccess: (data, variables, context) => {
      if (options?.cacheKey) {
        const dynamicKey = options.cacheKey(variables)
        queryClient.setQueryData(dynamicKey, data)
      }

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context)
      }
    },
  })
}
