import { apiRoutesAuth } from './authentication'
import { apiRoutesInternalAuth } from './internal'

export const apiRoutes = {
  ...apiRoutesAuth,
  ...apiRoutesInternalAuth,
}
