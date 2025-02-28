import { useQueryClient } from '@tanstack/react-query'

export function useGetDataByKey<T>(key: readonly unknown[]): T | undefined {
  const queryClient = useQueryClient()

  return queryClient.getQueryData<T>(key)
}
