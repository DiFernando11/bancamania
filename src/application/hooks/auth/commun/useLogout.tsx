"use client";
import { SendServiceTypes } from "@/shared";
import { useSendService } from "../../generics";
import { logoutService } from "@/application/adapters/htpp";

export const useLogout = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService(async () => logoutService());

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  };
};
