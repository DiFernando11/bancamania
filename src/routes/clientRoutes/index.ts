import { especialRoutes } from './especialRoutes'
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'

export const clientRoutes = {
  ...publicRoutes,
  ...privateRoutes,
  ...especialRoutes,
}
