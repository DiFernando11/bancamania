import React from 'react'
import { CardCredit, CardDebit, SkeletonLoader } from '@/ui/organisms'
import { TypeCardSelectedProps } from './types'

const TypeCardSelected = ({
  id,
  cardDebit,
  cardCredit,
  onClick,
  isLoading,
}: TypeCardSelectedProps) => {
  const selectedCard =
    cardDebit?.id === id ? cardDebit : cardCredit?.find(card => card.id === id)
  const isCredit = selectedCard && 'version' in selectedCard

  return (
    <>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-48 w-full'>
        {isCredit ? (
          <CardCredit
            className='!h-48 !min-h-48 cursor-pointer'
            textAccount={selectedCard.cardNumber}
            onClick={onClick}
            isLoading={false}
            version={selectedCard.version}
            brand={selectedCard.marca}
          />
        ) : (
          <CardDebit
            className='bg-debit !h-48 !min-h-48 cursor-pointer'
            textAccount={selectedCard?.cardNumber}
            isLoading={false}
            onClick={onClick}
          />
        )}
      </SkeletonLoader>
    </>
  )
}

export default TypeCardSelected
