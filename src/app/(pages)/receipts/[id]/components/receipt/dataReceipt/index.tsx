import React from 'react'
import { Box, Text } from '@/ui/atoms'

const DataReceipt = ({
  hr,
  value,
  keyText,
}: {
  hr?: boolean
  value?: string | number
  keyText: string
}) => {
  return (
    <Box>
      <Box className='flex gap-4 justify-between'>
        <Text textType='font_16_fw_bold_fm_rob'>{keyText}</Text>
        <Text textType='font_16_fm_rob' className='break-all text-end'>
          {value}
        </Text>
      </Box>
      {hr && <hr className='my-4' />}
    </Box>
  )
}

export default DataReceipt
