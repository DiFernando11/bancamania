import { apiRoutes } from '@/routes/apiRoutes'
import { GetReceiptsRequest, GetReceiptsResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getPreviewReceipt = async ({
  limit = 10,
  page = 1,
  fechaDesde,
  fechaHasta,
}: GetReceiptsRequest): Promise<GetReceiptsResponse> => {
  const response = apiRequest<GetReceiptsResponse, GetReceiptsRequest>({
    method: 'GET',
    params: {
      fechaDesde,
      fechaHasta,
      limit,
      page,
    },
    url: apiRoutes.receipts,
  })

  return response
}
