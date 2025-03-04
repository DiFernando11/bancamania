'use client'

import { getReceiptByUUID } from '@/application/adapters/htpp'
import { GetReceiptsByUUIDRequest, GetReceiptsByUUIDResponse } from '@/shared'
import { useFetchService } from '../../generics'

export const useGetReceiptByUUID = ({
  receiptId,
}: GetReceiptsByUUIDRequest) => {
  const queryResult = useFetchService<GetReceiptsByUUIDResponse>(
    ['monthMovements'],
    () => getReceiptByUUID({ receiptId })
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
