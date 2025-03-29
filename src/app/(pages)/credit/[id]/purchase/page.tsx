'use client'
import React from 'react'
import ValidUUIDShow from '@/app/components/validUUIDShow'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import InstallmentsPending from './components/installmentsPending'

const PurchasePage = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return (
    <LayoutAuthenticationPage i18nTitle='Pagar tarjeta'>
      <ValidUUIDShow id={id}>
        <InstallmentsPending id={id} />
      </ValidUUIDShow>
    </LayoutAuthenticationPage>
  )
}

export default PurchasePage
