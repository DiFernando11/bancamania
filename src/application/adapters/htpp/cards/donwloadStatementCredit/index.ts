import { apiRoutes } from '@/routes/apiRoutes'
import { DownloadStatementCreditRequest } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const donwloadStatementCredit = async ({
  period,
  creidtID,
}: DownloadStatementCreditRequest): Promise<Blob> => {
  const url = apiRoutes.downloadStatementeCredit.replace(':id', creidtID)

  const response = apiRequest<Blob, DownloadStatementCreditRequest>({
    method: 'GET',
    params: {
      period,
    },
    responseType: 'blob',
    url,
  })

  return response
}
