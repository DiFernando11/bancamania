'use client'
import React from 'react'
import { useGetReceipts } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import { PaginationWrapper } from '@/ui/layouts'
import ReceiptPreview from '../receiptPreview'
import SkeletonsReceipts from '../skeletonsReceipts'

const PaginationReceipts = () => {
  const route = useNavigation()
  const LIMIT = 3
  const {
    data: receipts,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetReceipts({
    limit: LIMIT,
  })

  return (
    <PaginationWrapper
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isInitialLoading={isLoading}
      Skeleton={<SkeletonsReceipts count={LIMIT} />}
    >
      {receipts?.map(rec => (
        <ReceiptPreview
          onClick={() =>
            route.push(
              replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
                id: rec.id,
              })
            )
          }
          key={rec.id}
          description={rec.description}
          title={rec.title}
        />
      ))}
    </PaginationWrapper>
  )
}

export default PaginationReceipts
