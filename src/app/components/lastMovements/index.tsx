import React from 'react'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { BitcoinSymbol, Movements } from '@/ui/molecules'
import Skeleton from './skeleton'
import { LastMovementsProps } from './types'

const LastMovements = ({ movements, isLoading }: LastMovementsProps) => {
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        movements?.length &&
        movements.map(mov => (
          <Movements
            key={mov.id}
            balanceComponent={
              mov.balance && (
                <BitcoinSymbol
                  text={mov.balance.toString()}
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
        ))
      )}
    </>
  )
}

export default LastMovements
