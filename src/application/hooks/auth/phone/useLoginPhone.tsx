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
  >(async ({ phone, code }) => loginPhoneService({ phone, code }))

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
