'use client'
import { getItemsStoreService } from '@/application/adapters/htpp'
import {
  GetItemsStoreRequest,
  GetItemsStoreResponse,
  ItemStore,
} from '@/shared'
import { GET_ITEMS_STORE } from '@/shared/utils/constantsQuery'
import { useInfiniteFetchService } from '../../generics'

export const useGetItemsStore = ({ limit }: GetItemsStoreRequest) => {
  const queryResult = useInfiniteFetchService<
    GetItemsStoreResponse,
    Error,
    ItemStore[],
    [typeof GET_ITEMS_STORE],
    number
  >({
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getItemsStoreService({
        limit,
        page: pageParam,
      }),
    queryKey: [GET_ITEMS_STORE],
    select: data => data.pages.flatMap(page => page.store),
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
