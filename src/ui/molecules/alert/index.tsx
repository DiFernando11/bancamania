import classNames from 'classnames'
import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { ICON_ALERT, TYPE_COLORS } from './constants'
import { AlertProps } from './types'

const Alert = ({
  type = 'success',
  textType,
  textClass,
  children,
}: AlertProps) => {
  const bgColor = TYPE_COLORS[type]
  const iconCurrent = ICON_ALERT[type]

  return (
    <Box
      className={classNames('flex gap-4 p-4 items-center rounded-lg', bgColor)}
    >
      <Icon
        name={iconCurrent as IconNames}
        className='w-8 h-8 min-w-8 sm:w-10 sm:h-10 sm:min-w-10 text-white'
      />
      <Text textType={textType} className={textClass}>
        {children}
      </Text>
    </Box>
  )
}

export default Alert
