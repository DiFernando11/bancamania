"use client";
import { PhoneType, SendCodePhoneResponse, SendServiceTypes } from "@/shared";
import { useSendCodePhone } from "@/application/hooks";
import { useRouter } from "next/navigation";
import { clientRoutes } from "@/routes/clientRoutes";
import { useAuthStoreLs } from "@/application/zustand/stores";
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from "@/shared/utils/globalConstants";
import { addMinutesToDate } from "@/shared/utils";

export const useSendCodeSavePhone = (): SendServiceTypes<
  SendCodePhoneResponse,
  PhoneType
> => {
  const router = useRouter();
  const { isLoading, isError, isSuccess, handleActionService } =
    useSendCodePhone();
  const { setHasValidCode } = useAuthStoreLs();

  return {
    handleActionService: ({ phone }) => {
      handleActionService(
        { phone },
        {
          onSuccess: () => {
            setHasValidCode({
              expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
              lasTimeForwardCode: ForwarTimeCode,
              isSuccessForward: false,
              phone,
              type: "registerPhone",
            });
            router.push(clientRoutes.loginValidateCode);
          },
        }
      );
    },
    isLoading,
    isError,
    isSuccess,
  };
};
