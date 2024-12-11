import { StoragePrimitive } from "../generics";
export type HasValidCodeType = "registerPhone" | "registerCredentials";

export interface HasValidCode extends Record<string, StoragePrimitive> {
  lasTimeForwardCode: number;
  expireAt: Date;
  isSuccessForward: boolean;
  type: HasValidCodeType;
  phone?: string;
  mail?: string;
  lastName?: string;
  firstName?: string;
}
