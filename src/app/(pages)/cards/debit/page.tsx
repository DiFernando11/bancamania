'use client'
import React, { useState } from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import AccountAsociate from './components/accountAsociate'
import ActiveCard from './components/activeCard'
import DataDebit from './components/dataDebit'
import MovementsDebit from './components/movementsDebit'

const DebitPage = () => {
  const t = useI18Text('tarjetas')
  const { data, isLoading } = useGetCardDebit()
  const [isChecked, setChecked] = useState<boolean>(false)

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('debitTitle')}
      footerBox={<ButtonActionSimple />}
    >
      <DataDebit data={data} isLoading={isLoading} isChecked={isChecked} />
      <ActiveCard
        status={data?.status}
        isLoading={isLoading}
        isChecked={isChecked}
        setChecked={setChecked}
      />
      <AccountAsociate />
      <MovementsDebit id={data?.id} isLoadingDebit={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default DebitPage
