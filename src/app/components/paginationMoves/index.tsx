'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { PaginationWrapper } from '@/ui/layouts'
import { BitcoinSymbol, Movements } from '@/ui/molecules'
import { AlertInfoAnimation } from '@/ui/organisms'
import SkeletonMoves from './skeletonMoves'
import { PaginationMovesProps } from './types'

const PaginationMoves = ({
  movements,
  fetchNextPage,
  isFetchingNextPage,
  isInitialLoading,
  hasNextPage,
  limit = 10,
}: PaginationMovesProps) => {
  const t = useI18Text('movements')

  return (
    <>
      <AlertInfoAnimation
        isVisible={movements?.length === 0}
        message={t('movementsNotFound')}
      />
      <PaginationWrapper
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isInitialLoading={isInitialLoading}
        Skeleton={<SkeletonMoves count={limit} />}
      >
        {movements?.map(mov => (
          <Movements
            key={mov.id}
            balanceComponent={
              mov.balance && (
                <BitcoinSymbol
                  balance={mov.balance.toString()}
                  classIcon='w-4 h-4 sm:w-5 sm:h-5'
                />
              )
            }
            leftIconMovement={
              <Movements.Icon iconName={mov.typeMovement as IconNames} />
            }
            textMain={mov.title}
            textDescription={mov.description}
          />
        ))}
      </PaginationWrapper>
    </>
  )
}

export default PaginationMoves
