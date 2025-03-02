import React from 'react'
import Skeleton from '@/app/components/lastMovements/skeleton'
import PaginationMoves from '@/app/components/paginationMoves'
import { useGetAccount, useGetMovements } from '@/application/hooks'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { PaginationWrapper } from '@/ui/layouts'
import { BitcoinSymbol, Movements } from '@/ui/molecules'

const Movement = () => {
  const { data, isLoading: loadingAccount } = useGetAccount()
  const LIMIT = 10
  const {
    data: movements,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMovements({
    accountId: data?.id,
    enabled: Boolean(data?.id),
    limit: LIMIT,
  })

  const loadingFull = isLoading || loadingAccount

  return (
    <PaginationMoves
      isInitialLoading={loadingFull}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      movements={movements}
      countSkeleton={LIMIT}
    />
  )
}

export default Movement
