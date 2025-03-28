import React from 'react'
import { Mastercard, TYPE_CARD, TypeCardCredit, VisaCard } from '@/shared'
import { formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import {
  BalanceCredit,
  CardCredit,
  CardDebit,
  SkeletonLoader,
} from '@/ui/organisms'
import { TypeCardSelectedProps } from './types'

const TypeCardSelected = ({
  onClick,
  isLoading,
  selectedCard,
  isBitcoinMethod,
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
            nextStepComponent={
              <BalanceCredit
                isBitcoin={isBitcoinMethod}
                miles={selectedCard.miles}
                quota={selectedCard.quota}
              />
            }
          />
        ) : (
          <CardDebit
            className='bg-debit !h-48 !min-h-48 cursor-pointer'
            textAccount={selectedCard?.cardNumber}
            isLoading={false}
            onClick={onClick}
            nextStepComponent={
              <BitcoinSymbol
                classIcon='w-5 h-5'
                balance={formatMoney({ value: selectedCard?.account?.balance })}
                textType='font_20_fw_bold_fm_rob'
              />
            }
          />
        )}
      </SkeletonLoader>
    </>
  )
}

export default TypeCardSelected
