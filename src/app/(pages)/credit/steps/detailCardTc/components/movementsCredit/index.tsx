import React from 'react'
import PaginationMoves from '@/app/components/paginationMoves'
import { useGetMovements, useI18Text } from '@/application/hooks'
import { Text } from '@/ui/atoms'

const MovementsCredit = ({
  id,
  isLoadingCredit,
}: {
  id?: string
  isLoadingCredit: boolean
}) => {
  const tMov = useI18Text('movements')

  const LIMIT = 5
  const {
    data: movements,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMovements({
    creditCardId: id,
    enabled: Boolean(id),
    limit: LIMIT,
  })

  const loadingFull = isLoading || isLoadingCredit

  return (
    <>
      <Text textType='font_20_24_fw_bold_fm_rob_text-100'>
        {tMov('titleCard')}
      </Text>
      <PaginationMoves
        isInitialLoading={loadingFull}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        movements={movements}
        limit={LIMIT}
      />
    </>
  )
}

export default MovementsCredit
