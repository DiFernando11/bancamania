import { apiRoutes } from '@/routes/apiRoutes'
import { GetReceiptsByUUIDRequest, GetReceiptsByUUIDResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getReceiptByUUID = async ({
  receiptId,
}: GetReceiptsByUUIDRequest): Promise<GetReceiptsByUUIDResponse> => {
  const url = apiRoutes.receiptByUUID.replace(':id', receiptId)
  const response = apiRequest<
    GetReceiptsByUUIDResponse,
    GetReceiptsByUUIDRequest
  >({
    method: 'GET',
    url,
  })

  return response
}
