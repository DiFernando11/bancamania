import { UseMutationOptions } from '@tanstack/react-query'

export type MutationFunction<TData, TVariables> = (
  variables: TVariables
) => Promise<TData>

export type QueryFunction<TData> = () => Promise<TData>

export type UseSendServiceOptions<TData, TVariables> = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
> & {
  cacheKey?: string
}
