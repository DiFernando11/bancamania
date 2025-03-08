'use client'
import React from 'react'
import { StepWizard } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import ConfirmTransfer from './steps/confirmTransfer'
import ValidateAccountStep from './steps/validateAccountStep'
import { DataTransfer } from './types'

const steps: Array<(props: StepProps<DataTransfer>) => JSX.Element> = [
  props => <ValidateAccountStep {...props} />,
  props => <ConfirmTransfer {...props} />,
]

const TransferPage = () => {
  return <StepWizard steps={steps} initialStep={0} />
}

export default TransferPage
