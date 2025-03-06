'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'

const TransferPage = () => {
  const t = useI18Text('transfer')

  return (
    <LayoutAuthenticationPage i18nTitle={t('title')}>
      <Box>Transfer</Box>
    </LayoutAuthenticationPage>
  )
}

export default TransferPage
