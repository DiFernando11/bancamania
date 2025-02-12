'use client'
import { StepWizard } from '@/ui/molecules'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import { StepAccountCreate } from './steps/stepAccountCreate'
import { StepGiftAccountCreate } from './steps/stepGiftAccountCreate'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <StepAccountCreate {...props} />,
  props => <StepGiftAccountCreate {...props} />,
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
