import { apiRoutes } from '@/routes/apiRoutes'
import { DownloadStatementRequest } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const downloadStatement = async ({
  fechaDesde,
}: DownloadStatementRequest): Promise<Blob> => {
  const response = apiRequest<Blob, DownloadStatementRequest>({
    method: 'GET',
    params: {
      fechaDesde,
    },
    responseType: 'blob',
    url: apiRoutes.downloadStatement,
  })

  return response
}
