import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  DefaultError,
  InfiniteData,
  QueryKey,
} from '@tanstack/react-query'
import { CursorPagination, UseInfiniteQueryWrapperOptions } from './types'

export function useInfiniteFetchService<
  TQueryFnData extends CursorPagination<TPageParam>,
  TError = DefaultError,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
>(
  options: UseInfiniteQueryWrapperOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >
): UseInfiniteQueryResult<TData, TError> {
  return useInfiniteQuery<TQueryFnData, TError, TData, TQueryKey, TPageParam>({
    ...options,
    getNextPageParam:
      options.getNextPageParam ??
      (lastPage => lastPage.nextCursor as TPageParam | undefined),
    getPreviousPageParam:
      options.getPreviousPageParam ??
      (firstPage => firstPage.prevCursor as TPageParam | undefined),
    select: options.select ?? (data => data as unknown as TData),
  })
}
