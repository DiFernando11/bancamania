import { registerPhoneApi } from "@/infrastructure/api";
import { RegisterPhone, ValidateCodePhoneResponse } from "@/shared";

export const registerPhoneService = async ({
  phone,
  idToken,
}: RegisterPhone): Promise<ValidateCodePhoneResponse> => {
  const data = await registerPhoneApi({ phone, idToken });
  return data;
};
