'use client'
import { getReceiptByUUID } from '@/application/adapters/htpp'
import { GetReceiptsByUUIDRequest, GetReceiptsByUUIDResponse } from '@/shared'
import { GET_MONTH_MOVEMENTS } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetReceiptByUUID = ({
  receiptId,
}: GetReceiptsByUUIDRequest) => {
  const queryResult = useFetchService<GetReceiptsByUUIDResponse>(
    [GET_MONTH_MOVEMENTS, receiptId],
    () => getReceiptByUUID({ receiptId }),
    {
      enabled: !!receiptId,
    }
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
