'use client'
import React, { useState } from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetCardCreditID, useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataCredit } from '../../types'
import ActiveCardCredit from './components/activeCardCredit'
import DetailCredit from './components/detailCredit'
import MovementsCredit from './components/movementsCredit'
import NewVersion from './components/newVersion'

const DetailCardTc = ({ prevStep, stepData }: StepProps<DataCredit>) => {
  const formID = 'FORM_DETAIL_TC'
  const t = useI18Text('tarjetas')
  const { data, isLoading } = useGetCardCreditID({ creditID: stepData.id })
  const [isChecked, setChecked] = useState<boolean>(false)

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('titleDetail')}
      footerBox={<ButtonActionSimple secondaryOnClick={prevStep} />}
    >
      <DetailCredit
        formID={formID}
        data={data}
        isLoading={isLoading}
        isChecked={isChecked}
      />
      <ActiveCardCredit
        isChecked={isChecked}
        setChecked={setChecked}
        isLoadingCard={isLoading}
        status={data?.status}
        stepData={stepData}
      />
      <NewVersion stepData={stepData} />
      <MovementsCredit id={stepData.id} isLoadingCredit={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default DetailCardTc
