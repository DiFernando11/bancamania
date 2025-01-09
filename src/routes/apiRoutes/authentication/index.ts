import { apiRoutesAuthCredentials } from './methodCredentials'
import { apiRoutesAuthGoogle } from './methodGoogle'
import { apiRoutesAuthPhone } from './methodPhone'

const baseAuth = 'auth'

export const apiRoutesAuth = {
  auth: {
    refreshToken: `${baseAuth}/refresh`,
    validateToken: `${baseAuth}/validateToken`,
    ...apiRoutesAuthPhone,
    ...apiRoutesAuthGoogle,
    ...apiRoutesAuthCredentials,
  },
}
