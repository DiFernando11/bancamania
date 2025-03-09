'use client'
import { createContactService } from '@/application/adapters/htpp/contact'
import {
  CreateContactRequest,
  CreateContactResponse,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useCreateContact = (): SendServiceTypes<
  CreateContactResponse,
  CreateContactRequest
> => {
  const queryResult = useSendService<
    CreateContactResponse,
    CreateContactRequest
  >(async ({ accountId, alias }) => createContactService({ accountId, alias }))

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
