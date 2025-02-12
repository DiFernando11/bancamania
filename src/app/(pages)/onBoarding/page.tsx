'use client'
import { StepWizard } from '@/ui/molecules'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import { StepAccountCreate } from './steps/stepAccountCreate'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <StepAccountCreate {...props} />,
]

const OnBoardingPage = () => {
  return (
    <StepWizard
      className='w-full h-screen flex justify-center relative'
      steps={steps}
      initialStep={0}
    />
  )
}

export default OnBoardingPage
