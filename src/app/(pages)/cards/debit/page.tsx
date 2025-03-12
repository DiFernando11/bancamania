'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import AccountAsociate from './components/accountAsociate'
import DataDebit from './components/dataDebit'

const DebitPage = () => {
  const t = useI18Text('tarjetas')

  return (
    <LayoutAuthenticationPage i18nTitle={t('debitTitle')}>
      <DataDebit />
      <AccountAsociate />
    </LayoutAuthenticationPage>
  )
}

export default DebitPage
