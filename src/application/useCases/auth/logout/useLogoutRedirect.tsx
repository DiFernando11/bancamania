"use-client";
import { useLogout } from "@/application/hooks";
import { clientRoutes } from "@/routes/clientRoutes";
import { AuthenticationResponse, SendServiceTypes } from "@/shared";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useLogoutRedirect = (): SendServiceTypes<
  AuthenticationResponse,
  unknown
> => {
  const router = useRouter();

  const { handleActionService, isError, isLoading, isSuccess } = useLogout();
  return {
    handleActionService: () => {
      handleActionService(
        {},
        {
          onSuccess: async () => {
            await signOut();
            router.push(clientRoutes.login);
          },
        }
      );
    },
    isLoading,
    isError,
    isSuccess,
  };
};
