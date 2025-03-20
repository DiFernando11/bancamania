'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../types'

const PurchaseItems = ({ prevStep }: StepProps<DataItemsPurchase>) => {
  const t = useI18Text('store')

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('selectCardType')}
      footerBox={<ButtonActionSimple secondaryOnClick={prevStep} />}
    >
      PurchaseItems
    </LayoutAuthenticationPage>
  )
}

export default PurchaseItems
