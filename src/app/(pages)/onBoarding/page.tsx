'use client'
import { useSearchParams } from 'next/navigation'
import { Box } from '@/ui/atoms'
import { StepWizard } from '@/ui/molecules'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import { StepAccountCreate } from './steps/stepAccountCreate'
import { StepGiftAccountCreate } from './steps/stepGiftAccountCreate'
import StepShowAccount from './steps/stepShowAccount'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <StepAccountCreate {...props} />,
  props => <StepGiftAccountCreate {...props} />,
  StepShowAccount,
]

const OnBoardingPage = () => {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  return (
    <Box className='w-full h-screen flex justify-center relative'>
      <StepWizard
        className='w-full'
        steps={steps}
        initialStep={Number(step) || 0}
      />
    </Box>
  )
}

export default OnBoardingPage
