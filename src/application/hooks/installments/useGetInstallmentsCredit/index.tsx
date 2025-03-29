'use client'
import { getInstallmentsCredit } from '@/application/adapters/htpp'
import {
  GetInstallmentsCreditsRequest,
  GetInstallmentsCreditsResponse,
} from '@/shared/types/installments'
import { isValidUUIDv4 } from '@/shared/utils'
import { GET_INSTALLMENT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetInstallmentsCredit = ({
  creditId,
}: GetInstallmentsCreditsRequest) => {
  const queryResult = useFetchService<GetInstallmentsCreditsResponse>(
    [GET_INSTALLMENT, creditId],
    () => getInstallmentsCredit({ creditId }),
    {
      enabled: isValidUUIDv4(creditId),
    }
  )

  return {
    data: queryResult.data,
    error: queryResult.error,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
