import { useQueryClient } from '@tanstack/react-query'

export function useLazyGetDataByKey<T>() {
  const queryClient = useQueryClient()

  return (key: readonly unknown[]): T | undefined => {
    return queryClient.getQueryData<T>(key)
  }
}
