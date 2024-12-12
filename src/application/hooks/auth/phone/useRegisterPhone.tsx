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
    async ({ phone, idToken }) => registerPhoneService({ phone, idToken })
  )

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
