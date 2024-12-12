'use client'
import { registerCredentialsService } from '@/application/adapters/htpp'
import {
  AuthenticationResponse,
  RegisterCredentials,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useRegisterCredentials = (): SendServiceTypes<
  AuthenticationResponse,
  RegisterCredentials
> => {
  const queryResult = useSendService<
    AuthenticationResponse,
    RegisterCredentials
  >(async ({ code, firstName, lastName, email, password }) =>
    registerCredentialsService({ code, firstName, lastName, email, password })
  )

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
