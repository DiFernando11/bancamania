'use client'
import { getMonthMovements } from '@/application/adapters/htpp'
import { GetMonthMovementRequest, GetMonthMovementsResponse } from '@/shared'
import { useFetchService } from '../../generics'

export const useGetMonthMovements = ({
  accountId,
}: GetMonthMovementRequest) => {
  const queryResult = useFetchService<GetMonthMovementsResponse>(
    ['monthMovements'],
    () => getMonthMovements({ accountId }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
