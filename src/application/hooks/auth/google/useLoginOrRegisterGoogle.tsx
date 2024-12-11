"use client";
import {
  AuthenticationResponse,
  RegisterOrLoginGoogle,
  SendServiceTypes,
} from "@/shared";
import { useSendService } from "../../generics";
import { loginOrRegisterGoogleService } from "@/application/adapters/htpp";

export const useLoginOrRegisterGoogle = (): SendServiceTypes<
  AuthenticationResponse,
  RegisterOrLoginGoogle
> => {
  const queryResult = useSendService<
    AuthenticationResponse,
    RegisterOrLoginGoogle
  >(async ({ idToken }) => loginOrRegisterGoogleService({ idToken }));
  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  };
};
