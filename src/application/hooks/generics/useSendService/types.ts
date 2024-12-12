export type MutationFunction<TData, TVariables> = (
  variables: TVariables
) => Promise<TData>
