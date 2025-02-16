'use client'
import { useEffect, useState } from 'react'
import { useI18Text, useSetStepOnBoarding } from '@/application/hooks'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import GiftLottie from './GiftLottie'
import NextStep from '../../nextStep'

export const StepGiftAccountCreate = ({ next }: StepProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { handleActionService } = useSetStepOnBoarding()

  const t = useI18Text('onBoarding')
  useEffect(() => {
    handleActionService({ step: 1 })
  }, [])

  return (
    <Box className='flex flex-col lg:flex-row h-full w-full'>
      <Box
        className='flex flex-1 flex-col justify-center
        items-center w-full h-full px-4'
      >
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          className='text-center'
          variant='h1'
        >
          {t(isOpen ? 'congratulation' : 'giftWelcome')}
        </Text>
        <GiftLottie setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && (
          <AnimationContainer
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className='flex gap-2 items-center mb-5'
          >
            <Text textType='font_30_48_fw_bold_fm_rob_text-200'>50</Text>
            <Icon name='Bitcoin' className='w-8 h-8 sm:w-12 sm:h-12' />
          </AnimationContainer>
        )}
        <Text
          textType='font_16_18_fw_bold_fm_rob'
          variant='h2'
          className='text-center'
        >
          {t(isOpen ? 'giftMessage' : 'surprise')}
        </Text>
      </Box>
      {isOpen && <NextStep next={next} />}
    </Box>
  )
}
