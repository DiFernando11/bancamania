import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { TextType } from '@/ui/atoms/text/types'

const PairText = ({
  textValue,
  textKey,
  textTypeKey = 'font_16_fw_bold_fm_rob',
  textTypeValue = 'font_16_fm_rob',
}: {
  textValue: string
  textKey: string
  textTypeKey?: TextType
  textTypeValue?: TextType
}) => {
  return (
    <Box className='flex justify-between gap-4'>
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
