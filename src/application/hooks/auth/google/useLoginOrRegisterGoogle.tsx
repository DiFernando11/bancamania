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
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
