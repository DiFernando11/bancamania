'use client'
import React, { useEffect } from 'react'
import FlipCardAccount from '@/app/components/flipCardAccount'
import { useI18Text, useSetStepOnBoarding } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import NextStep from '../../nextStep'

const StepShowAccount = ({ next }: StepProps) => {
  const t = useI18Text('onBoarding')
  const { handleActionService } = useSetStepOnBoarding()

  useEffect(() => {
    handleActionService({ step: 2 })
  }, [])

  return (
    <Box className='flex flex-col lg:flex-row h-full w-full'>
      <Box className='p-4 flex flex-1 flex-col justify-center items-center gap-5'>
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          className='text-center'
          variant='h1'
        >
          {t('yourAccount')}
        </Text>
        <Box className='max-w-[30rem] w-full'>
          <FlipCardAccount isNextStep={false} />
        </Box>
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
