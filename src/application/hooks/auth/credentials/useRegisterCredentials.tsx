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
    registerCredentialsService({ code, email, firstName, lastName, password })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
