'use client'

import { authenticationService } from '@/application/adapters/htpp'
import { AuthenticationResponse, LoginType, SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useAuthentication = (): SendServiceTypes<
  AuthenticationResponse,
  LoginType
> => {
  const queryResult = useSendService<AuthenticationResponse, LoginType>(
    async ({ token, refreshToken }) =>
      authenticationService({ refreshToken, token })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
