import React from 'react'
import { useGetMovements, useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { BitcoinSymbol, Card, Movements } from '@/ui/molecules'

const MovementsConsolidate = () => {
  const LIMIT = 3
  const { data: movements } = useGetMovements({
    limit: LIMIT,
  })
  const t = useI18Text('home')

  return (
    <Card className='flex flex-col gap-4 cursor-pointer'>
      <Box className='flex items-center gap-3'>
        <Text textType='font_16_18_fw_bold_fm_rob'>{t('lastMoves')}</Text>
        <Icon name='Arrown' className='w-3 h-3 sm:w-4 sm:h-4 -rotate-90' />
      </Box>
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
    </Card>
  )
}
export default MovementsConsolidate
