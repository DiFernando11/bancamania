import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconTextProps } from './types'

const IconText = ({
  text,
  nameIcon,
  classIcon,
  textType,
  iconColor,
  classText,
}: IconTextProps) => {
  return (
    <Box className='flex w-full items-center gap-2'>
      <Icon name={nameIcon} className={classIcon} color={iconColor} />
      <Text className={classText} textType={textType}>
        {text}
      </Text>
    </Box>
  )
}

export default IconText
