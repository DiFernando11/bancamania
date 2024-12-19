'use client'
import { sendCodeRegisterCredentialsService } from '@/application/adapters/htpp'
import { SendCodeCredentialsResponse, SendServiceTypes, User } from '@/shared'
import { useSendService } from '../../generics'

export const useSendCodeCredentialsRegister = (): SendServiceTypes<
  SendCodeCredentialsResponse,
  Pick<User, 'email'>
> => {
  const queryResult = useSendService<
    // SendCodePhoneResponse,
    SendCodeCredentialsResponse,
    Pick<User, 'email'>
  >(async ({ email }) => sendCodeRegisterCredentialsService({ email }))

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
