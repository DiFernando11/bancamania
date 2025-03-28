'use client'
import { getMovementsService } from '@/application/adapters/htpp'
import { GetMovementRequest, GetMovementsResponse, Movement } from '@/shared'
import { GET_MOVEMENTS } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetMovements = ({
  limit,
  accountId,
  debitCardId,
  creditCardId,
  enabled = true,
}: GetMovementRequest) => {
  const queryResult = useInfiniteFetchService<
    GetMovementsResponse,
    Error,
    Movement[],
    [typeof GET_MOVEMENTS, string | number, string | number, string | number],
    number
  >({
    enabled: enabled,
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getMovementsService({
        accountId,
        creditCardId,
        debitCardId,
        limit,
        page: pageParam,
      }),
    queryKey: [
      GET_MOVEMENTS,
      accountId ?? '',
      debitCardId ?? '',
      creditCardId ?? '',
    ],
    select: data => data.pages.flatMap(page => page.movements),
  })

  return {
    data: queryResult.data,
    error: queryResult.error,
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
