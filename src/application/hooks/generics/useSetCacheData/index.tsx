import { useQueryClient } from '@tanstack/react-query'

export function useSetCacheData<T>() {
  const queryClient = useQueryClient()

  return (key: readonly unknown[], data: T) => {
    queryClient.setQueryData(key, data)
  }
}
