import { apiRoutes } from '@/routes/apiRoutes'
import { GetContactRequest, GetContactResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getContactsService = async ({
  limit = 10,
  page = 1,
  alias,
}: GetContactRequest): Promise<GetContactResponse> => {
  const response = apiRequest<GetContactResponse, GetContactRequest>({
    method: 'GET',
    params: {
      alias,
      limit,
      page,
    },
    url: apiRoutes.contact,
  })

  return response
}
