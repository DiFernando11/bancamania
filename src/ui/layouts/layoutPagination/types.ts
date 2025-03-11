import { ReactNode } from 'react'

export interface PaginationWrapperProps {
  children: ReactNode
  hasNextPage: boolean
  fetchNextPage?: () => void
  isFetchingNextPage?: boolean
  isInitialLoading: boolean
  Skeleton: ReactNode
}
