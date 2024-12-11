import { AuthenticationResponse, LoginType } from "@/shared";
import axios from "axios";

const API_BASE_URL = "/api/auth/authentication";

export const AuthenticationApi = async ({
  token,
}: LoginType): Promise<AuthenticationResponse> => {
  try {
    const body = {
      token,
    };

    const response = await axios.post(`${API_BASE_URL}`, body);

    if (response.status === 200) {
      return response.data;
    }

    throw new Error(`Error al establecer la session`);
  } catch (error) {
    console.error("Error en Login", error);
    throw error;
  }
};
