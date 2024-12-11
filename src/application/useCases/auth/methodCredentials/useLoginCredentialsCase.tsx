"use-client";
import { useAuthentication, useLoginCredentials } from "@/application/hooks";
import { clientRoutes } from "@/routes/clientRoutes";
import {
  AuthenticationResponse,
  LoginCredentials,
  SendServiceTypes,
} from "@/shared";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useLoginCredentialsCase = (): SendServiceTypes<
  AuthenticationResponse,
  LoginCredentials
> => {
  const router = useRouter();
  const {
    handleActionService: loginCredentials,
    isError,
    isLoading,
    isSuccess,
  } = useLoginCredentials();
  const { handleActionService: register } = useAuthentication();

  const handleSubmit = ({ email, password }: LoginCredentials) => {
    loginCredentials(
      { email, password },
      {
        onSuccess: async (data) => {
          register(
            {
              token: data.token,
            },
            {
              onSuccess: async () => {
                await signIn("credentials", {
                  ...data.user,
                  redirect: false,
                });
                router.push(clientRoutes.home);
              },
            }
          );
        },
        onError: () => {
          router.push(clientRoutes.login);
        },
      }
    );
  };
  return {
    handleActionService: handleSubmit,
    isError,
    isLoading,
    isSuccess,
  };
};
