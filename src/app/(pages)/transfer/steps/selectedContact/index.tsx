import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataTransfer } from '../../types'
import { STEPS } from '../contants'
import CardContact from './components/cardContact'
import NewContact from './components/newContact'

const SelectedContact = ({
  prevStep,
  goToStep,
  updateData,
}: StepProps<DataTransfer>) => {
  const t = useI18Text('transfer')
  const formID = 'FORM_CONFIRM_TRANSFER'

  const handleClick = () => {
    updateData({
      accountNumber: '1234567890',
      amount: 50,
      email: 'probando@',
      id: '1234',
      owner: 'Probando ando',
    })
    goToStep(STEPS.confirmTranfers)
  }

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple formId={formID} />}
      i18nTitle={t('title')}
    >
      <NewContact goToStep={goToStep} />
      <CardContact handleClick={handleClick} />
    </LayoutAuthenticationPage>
  )
}

export default SelectedContact
