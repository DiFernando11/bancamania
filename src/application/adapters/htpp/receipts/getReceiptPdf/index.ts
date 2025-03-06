import { apiRoutes } from '@/routes/apiRoutes'
import { GetReceiptsByUUIDRequest } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getReceiptPdf = async ({
  receiptId,
}: GetReceiptsByUUIDRequest): Promise<Blob> => {
  const url = apiRoutes.receiptPdf.replace(':id', receiptId)
  const response = apiRequest<Blob, GetReceiptsByUUIDRequest>({
    method: 'GET',
    responseType: 'blob',
    url,
  })

  return response
}
