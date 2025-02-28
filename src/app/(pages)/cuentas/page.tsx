'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Actions from './actions'
import Description from './description'

const CuentasPage = () => {
  const t = useI18Text()
  const { data, isLoading } = useGetAccount()

  return (
    <LayoutAuthenticationPage
      i18nTitle={'account'}
      footerBox={
        <ButtonActionSimple
          primaryOnClick={() => console.log('hola')}
          primaryText={t('share')}
        />
      }
    >
      <Description isLoading={isLoading} data={data} />
      <Actions accountId={data?.id} isLoading={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default CuentasPage
