'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../types'
import FormPurchase from './components/formPurchase'

const PurchaseItems = ({
  prevStep,
  stepData,
}: StepProps<DataItemsPurchase>) => {
  const t = useI18Text('store')
  const formID = 'FORM_PURCHASE'

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('selectCardType')}
      footerBox={
        <ButtonActionSimple
          secondaryOnClick={prevStep}
          primaryText={t('confirmBuy')}
          formId={formID}
        />
      }
    >
      <FormPurchase formID={formID} stepData={stepData} />
    </LayoutAuthenticationPage>
  )
}

export default PurchaseItems
