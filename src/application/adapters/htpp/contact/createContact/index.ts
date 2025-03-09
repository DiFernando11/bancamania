import { apiRoutes } from '@/routes/apiRoutes'
import { CreateContactRequest, CreateContactResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const createContactService = async ({
  accountId,
  alias,
}: CreateContactRequest): Promise<CreateContactResponse> => {
  const response = apiRequest<CreateContactResponse, CreateContactRequest>({
    data: { accountId, alias },
    url: apiRoutes.contact,
  })

  return response
}
