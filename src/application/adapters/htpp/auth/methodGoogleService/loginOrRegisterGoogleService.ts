import { loginOrRegisterGoogleApi } from "@/infrastructure/api";
import { AuthenticationResponse } from "@/shared";
import { User } from "next-auth";

export const loginOrRegisterGoogleService = async ({
  idToken,
}: Pick<User, "idToken">): Promise<AuthenticationResponse> => {
  const data = await loginOrRegisterGoogleApi({ idToken });
  return data;
};
