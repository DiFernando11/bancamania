import {
  DefaultError,
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

export interface CursorPagination<TCursor = unknown> {
  nextCursor?: TCursor
  prevCursor?: TCursor
}

export interface UseInfiniteQueryWrapperOptions<
  TQueryFnData extends CursorPagination<TPageParam>,
  TError = DefaultError,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
> extends Omit<
    UseInfiniteQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryFnData,
      TQueryKey,
      TPageParam
    >,
    'select' | 'getNextPageParam' | 'getPreviousPageParam'
  > {
  select?: (data: InfiniteData<TQueryFnData, TPageParam>) => TData
  getNextPageParam?: (
    lastPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => TPageParam | undefined
  getPreviousPageParam?: (
    firstPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => TPageParam | undefined
}
