import { createReducer } from "../../reducers";
import { definitions } from "./definitions";

export type AuthStore = ReturnType<
  typeof createReducer<typeof definitions.phoneAuth, string | null>
>;
// &
//   ReturnType<
//     typeof createReducer<typeof definitions.googleAuth, string | null>
//   >;
