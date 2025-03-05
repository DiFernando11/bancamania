'use client'
import { getPreviewReceipt } from '@/application/adapters/htpp'
import { GetReceiptsRequest, GetReceiptsResponse, ReceiptI } from '@/shared'
import { GET_PREVIEW_RECEIPT } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetReceipts = ({
  limit,
  fechaDesde,
  fechaHasta,
}: GetReceiptsRequest) => {
  const queryResult = useInfiniteFetchService<
    GetReceiptsResponse,
    Error,
    ReceiptI[],
    [typeof GET_PREVIEW_RECEIPT],
    number
  >({
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getPreviewReceipt({ fechaDesde, fechaHasta, limit, page: pageParam }),
    queryKey: [GET_PREVIEW_RECEIPT],
    select: data => data.pages.flatMap(page => page.receipts),
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
