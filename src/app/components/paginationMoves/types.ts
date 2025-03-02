import { Movement } from '@/shared'
import { PaginationWrapperProps } from '@/ui/layouts/layoutPagination/types'

export interface PaginationMovesProps
  extends Omit<PaginationWrapperProps, 'children' | 'Skeleton'> {
  movements?: Movement[]
  countSkeleton?: number
}
