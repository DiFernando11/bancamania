'use client'
import { getInstallmentsCredit } from '@/application/adapters/htpp'
import {
  GetInstallmentsCreditsRequest,
  GetInstallmentsCreditsResponse,
} from '@/shared/types/installments'
import { GET_INSTALLMENT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetInstallmentsCredit = ({
  creditId,
}: GetInstallmentsCreditsRequest) => {
  const queryResult = useFetchService<GetInstallmentsCreditsResponse>(
    [GET_INSTALLMENT],
    () => getInstallmentsCredit({ creditId })
  )

  return {
    data: queryResult.data,
    error: queryResult.error,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
