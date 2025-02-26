'use client'
import { getMonthMovements } from '@/application/adapters/htpp'
import { GetMonthMovementsResponse } from '@/shared'
import { useFetchService } from '../../generics'

export const useGetMonthMovements = () => {
  const queryResult = useFetchService<GetMonthMovementsResponse>(
    ['monthMovements'],
    getMonthMovements,
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
