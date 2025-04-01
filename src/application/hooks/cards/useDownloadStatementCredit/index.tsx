'use client'
import { donwloadStatementCredit } from '@/application/adapters/htpp/cards/donwloadStatementCredit'
import { DownloadStatementCreditRequest, SendServiceTypes } from '@/shared'
import { downloadBlob } from '@/shared/utils'
import { DOWNLOAD_STATEMENT_CREDIT } from '@/shared/utils/constantsQuery'
import {
  useLazyGetDataByKey,
  useSendService,
  useSetCacheData,
} from '../../generics'

export const useDownloadStatementCredit = (): SendServiceTypes<
  unknown,
  DownloadStatementCreditRequest
> => {
  const setCache = useSetCacheData()
  const getData = useLazyGetDataByKey<Blob>()

  const queryResult = useSendService<Blob, DownloadStatementCreditRequest>(
    async ({ period, creidtID }) => {
      const cacheKey = [DOWNLOAD_STATEMENT_CREDIT, creidtID, period]
      const cachedBlob = getData(cacheKey)
      if (cachedBlob) return cachedBlob
      const pdfBlob = await donwloadStatementCredit({ creidtID, period })
      setCache(cacheKey, pdfBlob)

      return pdfBlob
    },
    {
      onSuccess: (pdfBlob, { period }) =>
        downloadBlob({
          blob: pdfBlob,
          fileName: `statement-${period}.pdf`,
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
