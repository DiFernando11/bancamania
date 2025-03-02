import React from 'react'
import { useGetMovements, useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import LastMovements from '../../lastMovements'

const Movements = () => {
  const { data: movements, isLoading } = useGetMovements({
    limit: 3,
  })
  const t = useI18Text('home')

  return (
    <Box className='flex flex-col p-4 shadow-all-accent rounded-lg gap-4'>
      <Box className='flex items-center gap-3'>
        <Text>{t('lastMoves')}</Text>
        <Icon name='Arrown' className='w-3 h-3 sm:w-4 sm:h-4 -rotate-90' />
      </Box>
      <LastMovements movements={movements} isLoading={isLoading} />
    </Box>
  )
}
export default Movements
