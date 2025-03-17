import classNames from 'classnames'
import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { PairTextProps } from './types'

const PairText = ({
  textValue,
  textKey,
  textTypeKey = 'font_16_fw_bold_fm_rob',
  textTypeValue = 'font_16_fm_rob',
  className,
}: PairTextProps) => {
  return (
    <Box className={classNames('flex justify-between gap-4', className)}>
      <Text className='break-all' textType={textTypeKey}>
        {textKey}
      </Text>
      <Text className='break-all' textType={textTypeValue}>
        {textValue}
      </Text>
    </Box>
  )
}

export default PairText
