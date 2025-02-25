'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Description from './description'

const CuentasPage = () => {
  return (
    <LayoutAuthenticationPage
      i18nTitle={'account'}
      footerBox={
        <ButtonActionSimple primaryOnClick={() => console.log('hola')} />
      }
    >
      <Description />
    </LayoutAuthenticationPage>
  )
}

export default CuentasPage
