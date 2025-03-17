import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetOffertsCredit, useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { AlertErrorService } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataCredit } from '../../types'
import FormNewTC from './components/formNewTC'
import YourCardsCredit from './components/yourCardsCredit'

const SelectedCardTc = ({ nextStep, updateData }: StepProps<DataCredit>) => {
  const t = useI18Text('tarjetas')
  const formID = 'FORM_NEW_TC'
  const { data, isLoading, isError, error } = useGetOffertsCredit()
  const isNewCards = data?.newCards && data?.newCards?.length > 0

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('myCardsTc')}
      footerBox={
        <ButtonActionSimple
          formId={formID}
          isLoading={isLoading}
          isError={isError || !isNewCards}
          primaryText={t('getCard')}
        />
      }
    >
      <YourCardsCredit nextStep={nextStep} updateData={updateData} />
      {isNewCards && (
        <FormNewTC
          formID={formID}
          nextStep={nextStep}
          newCards={data?.newCards}
        />
      )}
      <AlertErrorService isError={isError} error={error} />
    </LayoutAuthenticationPage>
  )
}

export default SelectedCardTc
