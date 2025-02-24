import React, { ReactNode } from 'react'
import { Box, Text } from '@/ui/atoms'
import IconMovement from './iconMovement'

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
    <Box className='flex justify-between gap-4'>
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

export default Movements
