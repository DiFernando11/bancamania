import { UseMutateFunction } from "@tanstack/react-query";

export interface SendServiceTypes<TData, TVariables = unknown> {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  handleActionService: UseMutateFunction<TData, unknown, TVariables, unknown>;
}
