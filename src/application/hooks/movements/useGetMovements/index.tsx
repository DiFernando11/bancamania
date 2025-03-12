'use client'
import { getMovementsService } from '@/application/adapters/htpp'
import { GetMovementRequest, GetMovementsResponse, Movement } from '@/shared'
import { GET_MOVEMENTS } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetMovements = ({
  limit,
  accountId,
  debitCardId,
  enabled = true,
}: GetMovementRequest) => {
  const queryResult = useInfiniteFetchService<
    GetMovementsResponse,
    Error,
    Movement[],
    [typeof GET_MOVEMENTS, string | number, string | number],
    number
  >({
    enabled: enabled,
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getMovementsService({ accountId, debitCardId, limit, page: pageParam }),
    queryKey: [GET_MOVEMENTS, accountId ?? '', debitCardId ?? ''],
    select: data => data.pages.flatMap(page => page.movements),
  })

  return {
    data: queryResult.data,
    fetchNextPage: queryResult.fetchNextPage,
    fetchPreviousPage: queryResult.fetchPreviousPage,
    hasNextPage: queryResult.hasNextPage,
    hasPreviousPage: queryResult.hasPreviousPage,
    isError: queryResult.isError,
    isFetchingNextPage: queryResult.isFetchingNextPage,
    isFetchingPreviousPage: queryResult.isFetchingPreviousPage,
    isLoading: queryResult.isLoading,
    isSuccess: queryResult.isSuccess,
  }
}
