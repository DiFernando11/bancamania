'use client'
import { getContactsService } from '@/application/adapters/htpp/contact'
import { ContactDataMap, GetContactRequest, GetContactResponse } from '@/shared'
import { GET_CONTACTS } from '@/shared/utils/constantsQuery'
import { mapFirstElement } from './mapFirstElement'
import { useInfiniteFetchService } from '../../generics'

export const useGetContacts = ({
  limit,
  search,
  enabled,
}: GetContactRequest & { enabled: boolean }) => {
  const queryResult = useInfiniteFetchService<
    GetContactResponse,
    Error,
    ContactDataMap[],
    [typeof GET_CONTACTS, string | undefined],
    number
  >({
    enabled: enabled,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      getContactsService({ limit, page: pageParam, search }),
    queryKey: [GET_CONTACTS, search],
    select: data => {
      const contacts = data.pages.flatMap(page => page.contacts)

      return mapFirstElement(contacts)
    },
  })

  return {
    data: queryResult.data,
    fetchNextPage: queryResult.fetchNextPage,
    fetchPreviousPage: queryResult.fetchPreviousPage,
    hasNextPage: queryResult.hasNextPage,
    hasPreviousPage: queryResult.hasPreviousPage,
    isError: queryResult.isError,
    isFetchingNextPage: queryResult.isFetchingNextPage,
    isFetchingPreviousPage: queryResult.isFetchingPreviousPage,
    isLoading: queryResult.isLoading,
    isSuccess: queryResult.isSuccess,
    refetch: queryResult.refetch,
  }
}
