import { useQueryClient, InvalidateQueryFilters } from '@tanstack/react-query'
import { InvalidateParams } from './types'

export const useRemoveQueries = () => {
  const queryClient = useQueryClient()

  const invalidate = ({
    queryKey,
    refetchType = 'inactive',
    exact,
  }: InvalidateParams) => {
    queryClient.removeQueries({
      exact,
      queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
      refetchType,
    } as InvalidateQueryFilters)
  }

  return { invalidate }
}
