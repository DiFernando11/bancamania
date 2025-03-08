'use client'
import React from 'react'
import { StepWizard } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import ValidateAccountStep from './steps/validateAccountStep'
import { DataTransfer } from './types'

const Step2 = ({ prevStep, nextStep, updateData }: StepProps<DataTransfer>) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-200'>
      <h1 className='text-3xl font-bold'>Paso 2</h1>
      <button
        className='mt-4 p-2 bg-blue-500 text-white rounded'
        onClick={() => {
          prevStep()
          updateData({ numberAccount: '' })
        }}
      >
        Anterior
      </button>
      <button
        className='mt-4 p-2 bg-blue-500 text-white rounded'
        onClick={nextStep}
      >
        Siguiente
      </button>
    </div>
  )
}

const steps: Array<(props: StepProps<DataTransfer>) => JSX.Element> = [
  props => <ValidateAccountStep {...props} />,
  props => <Step2 {...props} />,
]

const TransferPage = () => {
  return <StepWizard steps={steps} initialStep={0} />
}

export default TransferPage
