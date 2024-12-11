import {
  useMutation,
  UseMutationResult,
  UseMutationOptions,
} from "@tanstack/react-query";

type MutationFunction<TData, TVariables> = (
  variables: TVariables
) => Promise<TData>;

export const useSendService = <TData, TVariables>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, unknown, TVariables, unknown>
): UseMutationResult<TData, unknown, TVariables, unknown> => {
  return useMutation({
    mutationFn,
    ...options,
  });
};
