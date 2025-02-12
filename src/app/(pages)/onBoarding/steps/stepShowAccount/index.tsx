import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import { CardAccount } from '@/ui/organisms'
import NextStep from '../../nextStep'

const StepShowAccount = ({ next }: StepProps) => {
  const t = useI18Text('onBoarding')

  return (
    <Box className='flex flex-col sm:flex-row h-full w-full'>
      <Box className='p-4 flex flex-1 flex-col justify-center items-center gap-5'>
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          className='text-center'
          variant='h1'
        >
          {t('yourAccount')}
        </Text>
        <CardAccount
          className='max-w-[800px] sm:max-w-[480px] min-h-[240px]'
          balance={t('initialBalance')}
          textAccount={'1234567890'}
        />
        <Text
          textType='font_16_18_fw_bold_fm_rob'
          variant='h2'
          className='text-center'
        >
          {t('thanksTrusting')}
        </Text>
      </Box>
      <NextStep next={next} />
    </Box>
  )
}

export default StepShowAccount
