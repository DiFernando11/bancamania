'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import FormTransfer from './components/formTransfer'

const TransferPage = () => {
  const t = useI18Text('transfer')
  const formID = 'FORM_TRANSFER'

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple formId={formID} />}
      i18nTitle={t('title')}
    >
      <FormTransfer formID={formID} />
    </LayoutAuthenticationPage>
  )
}

export default TransferPage
