"use-client";
import { useSendCodeCredentialsRegister } from "@/application/hooks";
import { useAuthStoreLs } from "@/application/zustand/stores";
import { clientRoutes } from "@/routes/clientRoutes";
import { Email, SendCodeCredentialsResponse, SendServiceTypes } from "@/shared";
import { addMinutesToDate } from "@/shared/utils";
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from "@/shared/utils/globalConstants";
import { useRouter } from "next/navigation";

export const useSendCodeCredentialsSaveMail = (): SendServiceTypes<
  SendCodeCredentialsResponse,
  Email
> => {
  const router = useRouter();
  const {
    handleActionService: sendCode,
    isError,
    isLoading,
    isSuccess,
  } = useSendCodeCredentialsRegister();
  const { setHasValidCode } = useAuthStoreLs();

  const handleSubmit = ({ email }: Required<Email>) => {
    console.log(email, "NO ESTOY ENVIANDO NADA ??");
    sendCode(
      { email },
      {
        onSuccess: async (data) => {
          setHasValidCode({
            isSuccessForward: false,
            expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
            lasTimeForwardCode: ForwarTimeCode,
            type: "registerCredentials",
            mail: email,
            firstName: data?.firstName,
            lastName: data?.lastName,
          });
          router.push(clientRoutes.registerCredentialsConfirmCode);
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
