import account from './account.json'
import cards from './cards.json'
import publics from './commun.json'
import commun from './public.json'
import receipts from './receipts.json'
import transfer from './transfer.json'

export const clientRoutes = {
  ...publics,
  ...commun,
  ...cards,
  ...account,
  ...transfer,
  ...receipts,
}
