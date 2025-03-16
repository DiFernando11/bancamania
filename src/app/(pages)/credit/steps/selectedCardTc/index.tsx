import React from 'react'
import { DataTransfer } from '@/app/(pages)/transfer/types'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import FormNewTC from '../../components/formNewTC'
import YourCardsCredit from '../../components/yourCardsCredit'

const SelectedCardTc = ({ goToStep }: StepProps<DataTransfer>) => {
  const t = useI18Text('tarjetas')
  const formID = 'FORM_NEW_TC'

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('myCardsTc')}
      footerBox={
        <ButtonActionSimple formId={formID} primaryText={t('getCard')} />
      }
    >
      <YourCardsCredit />
      <FormNewTC formID={formID} goToStep={goToStep} />
    </LayoutAuthenticationPage>
  )
}

export default SelectedCardTc
