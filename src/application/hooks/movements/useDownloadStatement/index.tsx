'use client'
import { downloadStatement } from '@/application/adapters/htpp'
import { DownloadStatementRequest, SendServiceTypes } from '@/shared'
import { downloadBlob, formatDateReplace } from '@/shared/utils'
import { DOWNLOAD_STATEMENT } from '@/shared/utils/constantsQuery'
import {
  useLazyGetDataByKey,
  useSendService,
  useSetCacheData,
} from '../../generics'

export const useDownloadStatement = (): SendServiceTypes<
  unknown,
  DownloadStatementRequest
> => {
  const setCache = useSetCacheData()
  const getData = useLazyGetDataByKey<Blob>()

  const queryResult = useSendService<Blob, DownloadStatementRequest>(
    async ({ fechaDesde }) => {
      const cacheKey = [DOWNLOAD_STATEMENT, fechaDesde]
      const cachedBlob = getData(cacheKey)
      if (cachedBlob) return cachedBlob
      const pdfBlob = await downloadStatement({ fechaDesde })
      setCache(cacheKey, pdfBlob)

      return pdfBlob
    },
    {
      onSuccess: (pdfBlob, { fechaDesde }) =>
        downloadBlob({
          blob: pdfBlob,
          fileName: `statement-${formatDateReplace(fechaDesde, 'MMM yyyy')}.pdf`,
        }),
    }
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
