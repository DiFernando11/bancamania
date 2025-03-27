import { ReactNode } from 'react'

export interface PaginationWrapperProps {
  children: ReactNode
  hasNextPage: boolean
  isInitialLoading: boolean
  Skeleton: ReactNode
  isFetchingNextPage: boolean
  fetchNextPage?: () => void
  limit: number
  enabledInfinityScroll?: boolean
  classNameContainer?: string
  itemsClassName?: string
}
