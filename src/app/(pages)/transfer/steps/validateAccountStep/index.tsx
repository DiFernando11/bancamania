'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import FormTransfer from '../../components/formTransfer'
import { DataTransfer } from '../../types'

const ValidateAccountStep = ({
  nextStep,
  updateData,
}: StepProps<DataTransfer>) => {
  const t = useI18Text('transfer')
  const formID = 'FORM_TRANSFER'

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple formId={formID} />}
      i18nTitle={t('title')}
    >
      <FormTransfer
        formID={formID}
        nextStep={nextStep}
        updateData={updateData}
      />
    </LayoutAuthenticationPage>
  )
}

export default ValidateAccountStep
