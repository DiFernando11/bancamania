'use client'
import { getContactsService } from '@/application/adapters/htpp/contact'
import { ContactData, GetContactRequest, GetContactResponse } from '@/shared'
import { GET_CONTACTS } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetContacts = ({ limit, alias }: GetContactRequest) => {
  const queryResult = useInfiniteFetchService<
    GetContactResponse,
    Error,
    ContactData[],
    [typeof GET_CONTACTS],
    number
  >({
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getContactsService({ alias, limit, page: pageParam }),
    queryKey: [GET_CONTACTS],
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
  }
}
