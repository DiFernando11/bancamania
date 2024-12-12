'use client'
import { loginOrRegisterGoogleService } from '@/application/adapters/htpp'
import {
  AuthenticationResponse,
  RegisterOrLoginGoogle,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useLoginOrRegisterGoogle = (): SendServiceTypes<
  AuthenticationResponse,
  RegisterOrLoginGoogle
> => {
  const queryResult = useSendService<
    AuthenticationResponse,
    RegisterOrLoginGoogle
  >(async ({ idToken }) => loginOrRegisterGoogleService({ idToken }))

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
