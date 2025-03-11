import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataTransfer } from '../../types'
import MyContacts from './components/myContacts'

const SelectedContact = ({ goToStep, updateData }: StepProps<DataTransfer>) => {
  const t = useI18Text('transfer')

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple />}
      i18nTitle={t('stepSelectedTitle')}
    >
      <MyContacts updateData={updateData} goToStep={goToStep} />
    </LayoutAuthenticationPage>
  )
}

export default SelectedContact
