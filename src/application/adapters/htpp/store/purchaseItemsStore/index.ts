import { apiRoutes } from '@/routes/apiRoutes'
import { PurchaseItemsStoreRequest, PurchaseItemsStoreResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const purchaseItemsStore = async ({
  deferredMonth,
  idCard,
  methodPay,
  products,
  typeCard,
}: PurchaseItemsStoreRequest): Promise<PurchaseItemsStoreResponse> => {
  const response = apiRequest<
    PurchaseItemsStoreResponse,
    PurchaseItemsStoreRequest
  >({
    data: {
      deferredMonth,
      idCard,
      methodPay,
      products,
      typeCard,
    },
    url: apiRoutes.purchaseItems,
  })

  return response
}
