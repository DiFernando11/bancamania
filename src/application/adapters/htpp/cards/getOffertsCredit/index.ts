import { apiRoutes } from '@/routes/apiRoutes'
import { GetOffertsResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getOffertsCredit = async (): Promise<GetOffertsResponse> => {
  const response = apiRequest<GetOffertsResponse>({
    method: 'GET',
    url: apiRoutes.ofertCredit,
  })

  return response
}
