'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useI18Text, useSetStepOnBoarding } from '@/application/hooks'
import { useDeleteStepOnBoarding } from '@/application/hooks/auth/commun/useDeleteStepOnBoarding'
import { clientRoutes } from '@/routes/clientRoutes'
import { Box, Text } from '@/ui/atoms'
import { CardAccount } from '@/ui/organisms'
import NextStep from '../../nextStep'

const StepShowAccount = () => {
  const t = useI18Text('onBoarding')
  const { handleActionService: deleteStep } = useDeleteStepOnBoarding()
  const router = useRouter()

  const handleRedirect = () => {
    deleteStep(
      {},
      {
        onSuccess: () => {
          console.log('REDIRIGIENDO ?')
          router.push(clientRoutes.consolidada.path)
        },
      }
    )
  }

  const { handleActionService } = useSetStepOnBoarding()

  useEffect(() => {
    handleActionService({ step: 2 })
  }, [])

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
          className='max-w-[800px] sm:max-w-[400px] min-h-[240px] lg:max-w-[480px]'
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
      <NextStep toHome next={handleRedirect} />
    </Box>
  )
}

export default StepShowAccount
