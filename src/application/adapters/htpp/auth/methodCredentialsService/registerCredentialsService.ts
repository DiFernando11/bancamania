import { registerCredentialsApi } from "@/infrastructure/api";
import { AuthenticationResponse, RegisterCredentials } from "@/shared";

export const registerCredentialsService = async ({
  code,
  firstName,
  lastName,
  email,
  password,
}: RegisterCredentials): Promise<AuthenticationResponse> => {
  const data = await registerCredentialsApi({
    code,
    firstName,
    lastName,
    email,
    password,
  });
  return data;
};
