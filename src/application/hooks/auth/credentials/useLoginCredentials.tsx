'use client'
import { loginCredentialsService } from '@/application/adapters/htpp'
import {
  AuthenticationResponse,
  LoginCredentials,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useLoginCredentials = (): SendServiceTypes<
  AuthenticationResponse,
  LoginCredentials
> => {
  const queryResult = useSendService<AuthenticationResponse, LoginCredentials>(
    async ({ email, password }) => loginCredentialsService({ email, password })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
