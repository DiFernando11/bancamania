'use client'
import { purchaseItemsStore } from '@/application/adapters/htpp'
import {
  PurchaseItemsStoreRequest,
  PurchaseItemsStoreResponse,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const usePurchaseItemsStore = (): SendServiceTypes<
  PurchaseItemsStoreResponse,
  PurchaseItemsStoreRequest
> => {
  const queryResult = useSendService<
    PurchaseItemsStoreResponse,
    PurchaseItemsStoreRequest
  >(async ({ deferredMonth, idCard, methodPay, products, typeCard }) =>
    purchaseItemsStore({
      deferredMonth,
      idCard,
      methodPay,
      products,
      typeCard,
    })
  )

  return {
    error: queryResult.error,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
