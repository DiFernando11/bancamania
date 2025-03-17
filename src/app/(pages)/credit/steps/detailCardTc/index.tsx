import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataCredit } from '../../types'
import DetailCredit from './components/detailCredit'

const DetailCardTc = ({ prevStep, stepData }: StepProps<DataCredit>) => {
  const formID = 'FORM_DETAIL_TC'

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple secondaryOnClick={prevStep} />}
    >
      <DetailCredit formID={formID} stepData={stepData} />
    </LayoutAuthenticationPage>
  )
}

export default DetailCardTc
