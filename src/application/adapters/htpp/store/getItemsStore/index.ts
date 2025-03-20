import { apiRoutes } from '@/routes/apiRoutes'
import { GetItemsStoreRequest, GetItemsStoreResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getItemsStoreService = async ({
  limit = 10,
  page = 1,
}: GetItemsStoreRequest): Promise<GetItemsStoreResponse> => {
  const response = apiRequest<GetItemsStoreResponse, GetItemsStoreRequest>({
    method: 'GET',
    params: {
      limit,
      page,
    },
    url: apiRoutes.getItems,
  })

  return response
}
