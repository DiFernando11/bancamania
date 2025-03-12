'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import AccountAsociate from './components/accountAsociate'
import DataDebit from './components/dataDebit'
import MovementsDebit from './components/movementsDebit'

const DebitPage = () => {
  const t = useI18Text('tarjetas')
  const { data, isLoading } = useGetCardDebit()

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('debitTitle')}
      footerBox={<ButtonActionSimple />}
    >
      <DataDebit data={data} isLoading={isLoading} />
      <AccountAsociate />
      <MovementsDebit id={data?.id} isLoadingDebit={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default DebitPage
