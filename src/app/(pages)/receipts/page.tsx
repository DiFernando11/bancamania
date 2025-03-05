'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import PaginationReceipts from './components/paginationReceipts'

const ReceiptsPage = () => {
  const t = useI18Text('receipts')

  return (
    <LayoutAuthenticationPage i18nTitle={t('title')}>
      <PaginationReceipts />
    </LayoutAuthenticationPage>
  )
}

export default ReceiptsPage
