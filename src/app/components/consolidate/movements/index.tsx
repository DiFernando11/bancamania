import React from 'react'
import { useGetMovements, useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { Card } from '@/ui/molecules'
import PaginationMoves from '../../paginationMoves'

const Movements = () => {
  const LIMIT = 3
  const { data: movements, isLoading } = useGetMovements({
    limit: LIMIT,
  })
  const t = useI18Text('home')

  return (
    <Card className='flex flex-col gap-4 cursor-pointer'>
      <Box className='flex items-center gap-3'>
        <Text textType='font_16_18_fw_bold_fm_rob'>{t('lastMoves')}</Text>
        <Icon name='Arrown' className='w-3 h-3 sm:w-4 sm:h-4 -rotate-90' />
      </Box>
      <PaginationMoves
        isInitialLoading={isLoading}
        hasNextPage={false}
        isFetchingNextPage={false}
        movements={movements}
        countSkeleton={LIMIT}
      />
    </Card>
  )
}
export default Movements
