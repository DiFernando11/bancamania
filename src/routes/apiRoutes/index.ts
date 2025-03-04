import { apiAccount } from './accounts'
import { apiRoutesAuth } from './authentication'
import { apiCards } from './cards'
import { apiRoutesInternalAuth } from './internal'
import { apiMovements } from './movements'
import { apiReceipts } from './receipts'

export const apiRoutes = {
  ...apiRoutesAuth,
  ...apiRoutesInternalAuth,
  ...apiAccount,
  ...apiCards,
  ...apiMovements,
  ...apiReceipts,
}
