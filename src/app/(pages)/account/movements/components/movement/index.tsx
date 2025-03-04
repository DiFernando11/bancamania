import React from 'react'
import PaginationMoves from '@/app/components/paginationMoves'
import { useGetAccount, useGetMovements } from '@/application/hooks'

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
