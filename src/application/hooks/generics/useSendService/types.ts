export type MutationFunction<TData, TVariables> = (
  variables: TVariables
) => Promise<TData>

export type QueryFunction<TData> = () => Promise<TData>
