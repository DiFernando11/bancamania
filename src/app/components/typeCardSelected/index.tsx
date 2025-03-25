import React from 'react'
import { Mastercard, TYPE_CARD, TypeCardCredit, VisaCard } from '@/shared'
import { CardCredit, CardDebit, SkeletonLoader } from '@/ui/organisms'
import { TypeCardSelectedProps } from './types'

const TypeCardSelected = ({
  onClick,
  isLoading,
  selectedCard,
}: TypeCardSelectedProps) => {
  const isCredit = selectedCard?.typeCard === TYPE_CARD.CREDIT

  return (
    <>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-48 w-full'>
        {isCredit ? (
          <CardCredit
            className='!h-48 !min-h-48 cursor-pointer'
            textAccount={selectedCard?.cardNumber}
            onClick={onClick}
            isLoading={false}
            version={selectedCard?.version as VisaCard | Mastercard}
            brand={selectedCard?.brand as TypeCardCredit}
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
