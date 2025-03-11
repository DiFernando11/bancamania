'use client'
import { getContactsService } from '@/application/adapters/htpp/contact'
import { ContactData, GetContactRequest, GetContactResponse } from '@/shared'
import { GET_CONTACTS } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetContacts = ({
  limit,
  alias,
  enabled,
}: GetContactRequest & { enabled: boolean }) => {
  const queryResult = useInfiniteFetchService<
    GetContactResponse,
    Error,
    ContactData[],
    [typeof GET_CONTACTS, string | undefined],
    number
  >({
    enabled: enabled,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      getContactsService({ alias, limit, page: pageParam }),
    queryKey: [GET_CONTACTS, alias],
    select: data => data.pages.flatMap(page => page.contacts),
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
