"use-client";
import { useAuthentication, useRegisterCredentials } from "@/application/hooks";
import { clientRoutes } from "@/routes/clientRoutes";
import { RegisterCredentials } from "@/shared";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useRegisterCredentialsCase = () => {
  const router = useRouter();
  const { handleActionService: registerCredentials } = useRegisterCredentials();
  const { handleActionService: register } = useAuthentication();

  const handleSubmit = ({
    code,
    firstName,
    lastName,
    email,
    password,
  }: RegisterCredentials) => {
    registerCredentials(
      { code, firstName, lastName, email, password },
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
  };
};
