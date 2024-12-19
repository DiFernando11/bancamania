'use client'
import { registerPhoneService } from '@/application/adapters/htpp'
import {
  AuthenticationResponse,
  RegisterPhone,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useRegisterPhone = (): SendServiceTypes<
  AuthenticationResponse,
  RegisterPhone
> => {
  const queryResult = useSendService<AuthenticationResponse, RegisterPhone>(
    async ({ phone, idToken }) => registerPhoneService({ idToken, phone })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
