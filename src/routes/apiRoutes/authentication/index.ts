import { apiRoutesAuthCredentials } from './methodCredentials'
import { apiRoutesAuthGoogle } from './methodGoogle'
import { apiRoutesAuthPhone } from './methodPhone'

export const apiRoutesAuth = {
  auth: {
    ...apiRoutesAuthPhone,
    ...apiRoutesAuthGoogle,
    ...apiRoutesAuthCredentials,
  },
}
