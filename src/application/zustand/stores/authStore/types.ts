import { definitions } from './definitions'
import { createReducer } from '../../reducers'

export type AuthStore = ReturnType<
  typeof createReducer<typeof definitions.phoneAuth, string | null>
>
// &
//   ReturnType<
//     typeof createReducer<typeof definitions.googleAuth, string | null>
//   >;
