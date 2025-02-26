import {
  QueryFunction,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

export function useFetchService<
  TData = unknown,
  TQueryKey extends readonly unknown[] = readonly [unknown],
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TData, unknown, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<TData, unknown> {
  return useQuery({
    queryFn,
    queryKey,
    ...options,
  })
}
