import apiAxios from "@/application/axios";
import { apiRoutes } from "@/routes/apiRoutes";
import { RegisterCredentials } from "@/shared";

export const registerCredentialsApi = async ({
  code,
  firstName,
  lastName,
  email,
  password,
}: RegisterCredentials) => {
  try {
    const response = await apiAxios.post(apiRoutes.auth.registerCredentials, {
      code,
      firstName,
      lastName,
      email,
      password,
    });

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Error al cerrar la session del usuario");
  } catch (error) {
    console.error("Error en FetchLogoutSession:", error);
    throw error;
  }
};
