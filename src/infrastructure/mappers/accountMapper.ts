
import { Account } from "@/shared/types/accountTypes";

interface AccountAPIResponse {
  id: string;
  name: string;
  image: string;
}

export const AccountMapper = {
  toDomain(apiData: AccountAPIResponse): Account {
    return {
      id: apiData.id,
      name: apiData.name,
      image: apiData.image,
    };
  },
};
