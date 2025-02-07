import publics from './commun.json'
import cuentas from './cuentas.json'
import commun from './public.json'
import tarjetas from './tarjetas.json'

export const clientRoutes = {
  ...publics,
  ...commun,
  ...tarjetas,
  ...cuentas,
}
