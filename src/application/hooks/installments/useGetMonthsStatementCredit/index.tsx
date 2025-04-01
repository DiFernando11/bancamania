'use client'
import { getMonthsStatementCredit } from '@/application/adapters/htpp'
import {
  GetInstallmentsCreditsRequest,
  GetMonthsStatementCreditResponse,
} from '@/shared/types/installments'
import { isValidUUIDv4 } from '@/shared/utils'
import { GET_MONTH_STAT_CREDIT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetMonthsStatementCredit = ({
  creditId,
}: GetInstallmentsCreditsRequest) => {
  const queryResult = useFetchService<GetMonthsStatementCreditResponse>(
    [GET_MONTH_STAT_CREDIT, creditId],
    () => getMonthsStatementCredit({ creditId }),
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
