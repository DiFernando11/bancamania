import React from 'react'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../types'

const PurchaseItems = ({ stepData }: StepProps<DataItemsPurchase>) => {
  console.log(stepData.selectedCards, 'stepData')

  return <div>PurchaseItems</div>
}

export default PurchaseItems
