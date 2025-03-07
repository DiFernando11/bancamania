import React from 'react'
import { VerifyAccountResponse } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { AnimationVisible, PairText } from '@/ui/molecules'

const DataAccount = ({ data }: { data: VerifyAccountResponse }) => {
  return (
    <AnimationVisible>
      <Box className='space-y-1'>
        <Text textType='font_18_fw_bold_fm_rob'>Destinatario</Text>
        <PairText textKey='Owner: ' textValue={data.owner} />
        <PairText textKey='Account number: ' textValue={data.accountNumber} />
        <PairText textKey='Email: ' textValue={data.email} />
      </Box>
    </AnimationVisible>
  )
}

export default DataAccount
