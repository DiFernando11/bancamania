'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import FlipCardAccount from '@/app/components/flipCardAccount'
import FlipCardDebit from '@/app/components/flipCardDebit'
import {
  useDeleteStepOnBoarding,
  useI18Text,
  useSetStepOnBoarding,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { Box, Text } from '@/ui/atoms'
import NextStep from '../../nextStep'

const StepShowCardDebit = () => {
  const t = useI18Text('onBoarding')
  const { handleActionService: deleteStep } = useDeleteStepOnBoarding()
  const { handleActionService } = useSetStepOnBoarding()
  const router = useRouter()

  const handleRedirect = () => {
    deleteStep(
      {},
      {
        onSuccess: () => router.push(clientRoutes.consolidada.path),
      }
    )
  }

  useEffect(() => {
    handleActionService({ step: 3 })
  }, [])

  return (
    <Box className='flex flex-col lg:flex-row h-full w-full'>
      <Box className='p-4 flex flex-1 flex-col justify-center items-center gap-5'>
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          className='text-center'
          variant='h1'
        >
          {t('yourCardDebit')}
        </Text>
        <Box className='max-w-[480px] w-full'>
          <FlipCardDebit isNextStep={false} />
        </Box>
        <Text
          textType='font_16_18_fw_bold_fm_rob'
          variant='h2'
          className='text-center'
        >
          {t('activeCard')}
        </Text>
      </Box>
      <NextStep toHome next={handleRedirect} />
    </Box>
  )
}

export default StepShowCardDebit
