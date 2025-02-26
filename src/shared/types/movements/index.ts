import { IconNames } from '@/ui/atoms/icons/icon/types'

export interface Movement {
  id: number
  balance: number | null
  title: string
  description: string
  typeMovement: IconNames
  createdAt: string
}

export interface GetMovementsResponse {
  currentPage: number
  isLastPage: boolean
  totalItems: number
  totalPages: number
  nextCursor?: number
  prevCursor?: number
  movements: Movement[]
}

export interface GetMovementRequest {
  limit?: number
  page?: number
  accountId?: string | number
  debitCardId?: string | number
}

export type GetMonthMovementsResponse = { text: string; id: string }[]
