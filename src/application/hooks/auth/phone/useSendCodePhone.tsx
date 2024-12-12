'use client'
import { sendCodePhoneService } from '@/application/adapters/htpp'
import { PhoneType, SendCodePhoneResponse, SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useSendCodePhone = (): SendServiceTypes<
  SendCodePhoneResponse,
  PhoneType
> => {
  const queryResult = useSendService<SendCodePhoneResponse, PhoneType>(
    async ({ phone }) => sendCodePhoneService({ phone })
  )

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
