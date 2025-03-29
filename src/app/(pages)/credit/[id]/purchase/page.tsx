'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import ValidUUIDShow from '@/app/components/validUUIDShow'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import InstallmentsPending from './components/installmentsPending'

const PurchasePage = ({ params }: { params: { id: string } }) => {
  const t = useI18Text('tarjetas')
  const { id } = params
  const formID = 'FORM_PAY_CREDIT'

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('cardPay')}
      footerBox={
        <ButtonActionSimple formId={formID} primaryText={t('cardPay')} />
      }
    >
      <ValidUUIDShow id={id}>
        <InstallmentsPending id={id} />
      </ValidUUIDShow>
    </LayoutAuthenticationPage>
  )
}

export default PurchasePage
