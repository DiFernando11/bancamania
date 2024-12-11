"use client";
import { create } from "zustand";
import { createReducer, createReducerLs } from "../../reducers";
import { AuthStore } from "./types";
import { definitions } from "./definitions";
import { flushStoredValue } from "../../reducers/createReducerLs";
import { HasValidCode } from "@/shared";

export const useAuthStore = create<AuthStore>((set) => ({
  ...createReducer(definitions.phoneAuth, null, set),
}));

const initialAuthPersist = {
  hasValidCode: null,
  hasValidCodeGoogle: null,
};

export const useAuthStoreLs = () => {
  const STORAGE_KEY = "auth-persist-store";

  return {
    ...createReducerLs(
      STORAGE_KEY,
      "hasValidCode",
      initialAuthPersist.hasValidCode as HasValidCode | null
    ),
    flushAll: () => flushStoredValue(STORAGE_KEY),
  };
};

export default useAuthStore;
