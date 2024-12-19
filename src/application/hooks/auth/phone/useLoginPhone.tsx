'use client'
import { loginPhoneService } from '@/application/adapters/htpp'
import {
  SendServiceTypes,
  ValidateCodePhoneResponse,
  ValidateCodePhoneType,
} from '@/shared'
import { useSendService } from '../../generics'

export const useLoginPhone = (): SendServiceTypes<
  ValidateCodePhoneResponse,
  ValidateCodePhoneType
> => {
  const queryResult = useSendService<
    ValidateCodePhoneResponse,
    ValidateCodePhoneType
  >(async ({ phone, code }) => loginPhoneService({ code, phone }))

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
