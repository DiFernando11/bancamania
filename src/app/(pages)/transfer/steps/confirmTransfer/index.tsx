import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataTransfer } from '../../types'
import FormConfirmTransfer from './components/FormConfirmTransfer'

const ConfirmTransfer = ({ prevStep }: StepProps<DataTransfer>) => {
  const t = useI18Text('transfer')
  const formID = 'FORM_CONFIRM_TRANSFER'

  return (
    <LayoutAuthenticationPage
      footerBox={
        <ButtonActionSimple secondaryOnClick={prevStep} formId={formID} />
      }
      i18nTitle={t('title')}
    >
      <FormConfirmTransfer formID={formID} />
    </LayoutAuthenticationPage>
  )
}

export default ConfirmTransfer
