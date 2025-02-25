'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { ButtonText } from '@/ui/molecules'
import { ButtonFormSimpleProps } from './types'

const ButtonActionSimple: React.FC<ButtonFormSimpleProps> = ({
  formId,
  secondaryText,
  primaryText,
  secondaryOnClick,
  primaryOnClick,
  disablePrimary = false,
  disableSecondary = false,
}) => {
  const router = useRouter()
  const t = useI18Text()

  const textBack = secondaryText || t('back')
  const textNext = primaryText || t('next')

  const handleBack = () => {
    if (secondaryOnClick) {
      secondaryOnClick()
    } else {
      router.back()
    }
  }

  return (
    <Box className='flex w-full gap-4 my-4'>
      <ButtonText
        variant='secondary'
        className='flex-1'
        onClick={handleBack}
        text={textBack}
        disabled={disableSecondary}
      />
      <ButtonText
        className='flex-1'
        onClick={primaryOnClick}
        form={formId}
        type={formId ? 'submit' : 'button'}
        text={textNext}
        disabled={disablePrimary}
      />
    </Box>
  )
}

export default ButtonActionSimple
