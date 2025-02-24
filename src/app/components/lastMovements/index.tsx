import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { BitcoinSymbol, Movements } from '@/ui/molecules'

const LastMovements = () => {
  const t = useI18Text('home')
  const movements = [
    {
      balance: '50',
      description: 'Cuenta de ahorros Creada 03 Feb',
      id: 1,
      mainText: 'Apolo Guachizaca Diego Fernando',
      typeMovement: 'Wallet',
    },
    {
      balance: '50',
      description: 'Cuenta de ahorros Creada 03 Feb',
      id: 2,
      mainText: 'Apolo Guachizaca Diego Fernando',
      typeMovement: 'Wallet',
    },
  ]

  return (
    <Box className='flex flex-col p-4 shadow-all-accent rounded-lg gap-8'>
      <Box className='flex items-center gap-3'>
        <Text>{t('lastMoves')}</Text>
        <Icon name='Arrown' className='w-3 h-3 sm:w-4 sm:h-4 -rotate-90' />
      </Box>
      {movements?.length &&
        movements.map(mov => (
          <Movements
            key={mov.id}
            balanceComponent={
              mov.balance && (
                <BitcoinSymbol
                  text={mov.balance}
                  classIcon='w-4 h-4 sm:w-5 sm:h-5'
                />
              )
            }
            leftIconMovement={
              <Movements.Icon iconName={mov.typeMovement as IconNames} />
            }
            textMain={mov.mainText}
            textDescription={mov.description}
          />
        ))}
    </Box>
  )
}

export default LastMovements
