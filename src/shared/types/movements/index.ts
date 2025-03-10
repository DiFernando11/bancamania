import { IconNames } from '@/ui/atoms/icons/icon/types'
import { PaginationData } from '../generics'

export interface Movement {
  id: number
  balance: number | null
  title: string
  description: string
  typeMovement: IconNames
  createdAt: string
}

export interface GetMovementsResponse extends PaginationData {
  movements: Movement[]
}

export interface GetMovementRequest {
  limit?: number
  page?: number
  accountId?: string | number
  debitCardId?: string | number
  enabled?: boolean
}

export type GetMonthMovementsResponse = { text: string; id: string }[]

export interface GetMonthMovementRequest {
  accountId?: string | number
}

export interface DownloadStatementRequest {
  fechaDesde: string | Date
}
