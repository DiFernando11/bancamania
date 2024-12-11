import { sendCodeRegisterCredentialsApi } from "@/infrastructure/api";
import { SendCodePhoneResponse } from "@/shared";
import { User } from "next-auth";

export const sendCodeRegisterCredentialsService = async ({
  email,
}: Pick<User, "email">): Promise<SendCodePhoneResponse> => {
  const data = await sendCodeRegisterCredentialsApi({ email });
  return data;
};
