'use client'
import React from 'react'
import { StepWizard } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import PurchaseItems from './steps/purchaseItems'
import SelectedItems from './steps/selectedItems'
import { DataItemsPurchase } from './steps/types'

const steps: Array<(props: StepProps<DataItemsPurchase>) => JSX.Element> = [
  props => <SelectedItems {...props} />,
  props => <PurchaseItems {...props} />,
]

const StorePage = () => {
  return <StepWizard steps={steps} initialStep={0} />
}

export default StorePage
