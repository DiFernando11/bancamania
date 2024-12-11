"use client";
import { useAuthentication, useRegisterPhone } from "@/application/hooks";
import { useAuthStoreLs } from "@/application/zustand/stores";
import { clientRoutes } from "@/routes/clientRoutes";
import { RegisterPhone } from "@/shared";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useRegisterPhoneCase = () => {
  const router = useRouter();
  const { flushHasValidCode } = useAuthStoreLs();
  const { handleActionService: registerPhone } = useRegisterPhone();
  const { handleActionService: register } = useAuthentication();

  const handleSubmit = ({ idToken, phone }: RegisterPhone) => {
    registerPhone(
      { phone: phone as string, idToken },
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
                flushHasValidCode();
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
  return { handleActionService: handleSubmit };
};
