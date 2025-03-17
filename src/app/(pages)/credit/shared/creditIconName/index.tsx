import React, { ReactNode } from 'react'
import { TypeCardCredit } from '@/shared'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { NAME_ICONS } from '../../components/yourCardsCredit/constants'

const CreditIconName = ({
  marca,
  children,
}: {
  marca: TypeCardCredit
  children: ReactNode
}) => {
  return (
    <Box className='flex gap-4 items-center self-start'>
      <Icon
        name={NAME_ICONS[marca] as IconNames}
        className='w-12 h-12 min-w-12'
      />
      <Box>{children}</Box>
    </Box>
  )
}

export default CreditIconName
