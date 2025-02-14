'use client'
import { useEffect } from 'react'
import {
  useCreateAccount,
  useI18Text,
  useSetStepOnBoarding,
} from '@/application/hooks'
import { useChangeLang } from '@/shared/hooks'
import { Box, LottiePlayer, Text } from '@/ui/atoms'
import { ChangeLanguageButton } from '@/ui/molecules'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import NextStep from '../../nextStep'

export const StepAccountCreate = ({ next }: StepProps) => {
  const t = useI18Text('onBoarding')
  const { handleActionService } = useSetStepOnBoarding()
  const { handleActionService: createAccount } = useCreateAccount()
  const { changeLang, handleChangeLanguage } = useChangeLang()

  const handleNextStep = () => {
    next()
    createAccount({})
  }

  useEffect(() => {
    handleActionService({ step: 0 })
  }, [])

  return (
    <Box className='flex flex-col sm:flex-row h-full w-full'>
      <ChangeLanguageButton
        handleClick={handleChangeLanguage}
        locale={changeLang.toUpperCase()}
      />
      <Box className='flex px-4 flex-1 flex-col justify-center items-center'>
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          variant='h1'
          className='text-center'
        >
          {t('welcome', { name: 'Diego Apolo' })}
        </Text>
        <LottiePlayer
          name='createAccount'
          isCursorPointer={false}
          className='w-full h-full'
        />
        <Text
          textType='font_16_18_fw_bold_fm_rob'
          className='text-center'
          variant='h2'
        >
          {t('benefits')}
        </Text>
      </Box>
      <NextStep next={handleNextStep} />
    </Box>
  )
}
