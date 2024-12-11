"use client";

import { AuthenticationResponse, LoginType, SendServiceTypes } from "@/shared";
import { authenticationService } from "@/application/adapters/htpp";
import { useSendService } from "../../generics";

export const useAuthentication = (): SendServiceTypes<
  AuthenticationResponse,
  LoginType
> => {
  const queryResult = useSendService<AuthenticationResponse, LoginType>(
    async ({ token }) => authenticationService({ token })
  );

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  };
};
