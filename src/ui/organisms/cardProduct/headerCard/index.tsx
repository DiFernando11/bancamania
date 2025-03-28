import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'

const HeaderCard = ({
  text,
  iconName = 'MasterCard',
}: {
  text: string
  iconName?: IconNames
}) => {
  return (
    <Box className='-mt-2 flex flex-col items-center'>
      <Icon name={iconName} className='w-12 h-12' />
      <Text textType='font_14_fw_bold_fm_rob' className='text-center'>
        {text}
      </Text>
    </Box>
  )
}

export default HeaderCard
