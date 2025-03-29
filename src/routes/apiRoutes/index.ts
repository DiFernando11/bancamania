import { apiAccount } from './accounts'
import { apiRoutesAuth } from './authentication'
import { apiCards } from './cards'
import { apiContact } from './contact'
import { apiInstallments } from './installments'
import { apiRoutesInternalAuth } from './internal'
import { apiMovements } from './movements'
import { apiReceipts } from './receipts'
import { apiStore } from './store'
import { apiTransfers } from './transfers'

export const apiRoutes = {
  ...apiRoutesAuth,
  ...apiRoutesInternalAuth,
  ...apiAccount,
  ...apiCards,
  ...apiMovements,
  ...apiReceipts,
  ...apiTransfers,
  ...apiContact,
  ...apiStore,
  ...apiInstallments,
}
