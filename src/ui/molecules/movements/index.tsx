import React, { ReactNode } from 'react'
import { Box, Text } from '@/ui/atoms'
import IconMovement from './iconMovement'
import SkeletonMovement from './skeleton'

const Movements = ({
  leftIconMovement,
  textMain,
  textDescription,
  balanceComponent,
}: {
  leftIconMovement: ReactNode
  textMain: string
  textDescription: string
  balanceComponent: ReactNode
}) => {
  return (
    <Box className='flex justify-between gap-8 border-b border-primary-100 pb-4'>
      <Box className='flex gap-4 items-center'>
        {leftIconMovement && leftIconMovement}
        <Box>
          <Text>{textMain}</Text>
          <Text textType='font_12_10_fw_bold_fm_rob'>{textDescription}</Text>
        </Box>
      </Box>
      {balanceComponent && balanceComponent}
    </Box>
  )
}

Movements.Icon = IconMovement
Movements.Skeleton = SkeletonMovement

export default Movements
