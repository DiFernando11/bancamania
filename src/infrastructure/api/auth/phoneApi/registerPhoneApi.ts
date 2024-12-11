// src/infrastructure/api/accountAPI.ts
import apiAxios from "@/application/axios";
import { apiRoutes } from "@/routes/apiRoutes";
import { RegisterPhone, ValidateCodePhoneResponse } from "@/shared";

export const registerPhoneApi = async ({
  phone,
  idToken,
}: RegisterPhone): Promise<ValidateCodePhoneResponse> => {
  try {
    const body = {
      phone,
      idToken,
    };
    const response = await apiAxios.post(
      `${apiRoutes.auth.registerPhone}`,
      body
    );

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Error al hacer login method phone");
  } catch (error) {
    console.error("Error en FetchVerifyCodePhone:", error);
    throw error;
  }
};
