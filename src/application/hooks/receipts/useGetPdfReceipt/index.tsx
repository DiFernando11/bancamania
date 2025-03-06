'use client'
import { getReceiptPdf } from '@/application/adapters/htpp'
import { GetReceiptsByUUIDRequest } from '@/shared'
import { convertPdfToImage, downloadBlob } from '@/shared/utils'
import { PDF_RECEIPT } from '@/shared/utils/constantsQuery'
import {
  useLazyGetDataByKey,
  useSendService,
  useSetCacheData,
} from '../../generics'

export const useGetPdfReceipt = () => {
  const setCache = useSetCacheData()
  const getData = useLazyGetDataByKey<Blob>()

  const queryResult = useSendService<Blob, GetReceiptsByUUIDRequest>(
    async ({ receiptId }) => {
      const cacheKey = [PDF_RECEIPT, receiptId]
      const cachedBlob = getData(cacheKey)
      if (cachedBlob) return cachedBlob
      const pdfBlob = await getReceiptPdf({ receiptId })
      setCache(cacheKey, pdfBlob)

      return pdfBlob
    }
  )

  const downloadPdf = async ({ receiptId }: GetReceiptsByUUIDRequest) => {
    await queryResult.mutate(
      { receiptId },
      {
        onSuccess: pdfBlob => {
          downloadBlob({
            blob: pdfBlob,
            fileName: `comprobante.pdf`,
          })
        },
      }
    )
  }

  return {
    data: queryResult.data,
    downloadPdf,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
