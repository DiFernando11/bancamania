'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Actions from './actions'
import Description from './description'

const CuentasPage = () => {
  const t = useI18Text()

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
      <Description />
      <Actions />
    </LayoutAuthenticationPage>
  )
}

export default CuentasPage
