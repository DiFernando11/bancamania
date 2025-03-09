import classNames from 'classnames'
import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { BitcoinSymbolProps } from './types'

const BitcoinSymbol = ({
  textType,
  classIcon,
  balance,
  classText,
  classContainer,
}: BitcoinSymbolProps) => {
  return (
    <Box className={classNames('flex gap-1 items-center', classContainer)}>
      <Text textType={textType} className={classText}>
        {balance}
      </Text>
      <Icon name={'Bitcoin'} className={classIcon} />
    </Box>
  )
}

export default BitcoinSymbol
