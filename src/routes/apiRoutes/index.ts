import { apiAccount } from './accounts'
import { apiRoutesAuth } from './authentication'
import { apiCards } from './cards'
import { apiRoutesInternalAuth } from './internal'

export const apiRoutes = {
  ...apiRoutesAuth,
  ...apiRoutesInternalAuth,
  ...apiAccount,
  ...apiCards,
}
