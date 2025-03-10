'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { VerifyAccountResponse } from '@/shared'
import { Box, ScrollIntoView, Text } from '@/ui/atoms'
import { AnimationVisible, PairText } from '@/ui/molecules'

const DataAccount = ({ data }: { data?: VerifyAccountResponse }) => {
  const t = useI18Text('transfer')
  const tCommon = useI18Text()

  return (
    <ScrollIntoView isVisible={Boolean(data)}>
      <AnimationVisible isVisible={Boolean(data)}>
        <Box className='space-y-1'>
          <Text textType='font_18_fw_bold_fm_rob'>{t('addresseeKey')}</Text>
          <PairText
            textKey={tCommon('nameKey')}
            textValue={data?.owner || ''}
          />
          <PairText
            textKey={t('numberAccountKey')}
            textValue={data?.accountNumber || ''}
          />
          <PairText textKey={tCommon('email')} textValue={data?.email || ''} />
        </Box>
      </AnimationVisible>
    </ScrollIntoView>
  )
}

export default DataAccount
