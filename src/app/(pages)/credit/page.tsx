'use client'
import React from 'react'
import { StepWizard } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import DetailCardTc from './steps/detailCardTc'
import SelectedCardTc from './steps/selectedCardTc'
import { DataTransfer } from '../transfer/types'

const steps: Array<(props: StepProps<DataTransfer>) => JSX.Element> = [
  props => <SelectedCardTc {...props} />,
  props => <DetailCardTc {...props} />,
]

const CreditPage = () => {
  return <StepWizard steps={steps} initialStep={0} />
}

export default CreditPage
