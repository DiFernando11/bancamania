'use client'
import { useSearchParams } from 'next/navigation'
import { StepSlider } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import { StepAccountCreate } from './steps/stepAccountCreate'
import { StepGiftAccountCreate } from './steps/stepGiftAccountCreate'
import StepShowAccount from './steps/stepShowAccount'
import './styles/index.css'
import StepShowCardDebit from './steps/stepShowCardDebit'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <StepAccountCreate {...props} />,
  props => <StepGiftAccountCreate {...props} />,
  StepShowAccount,
  StepShowCardDebit,
]

const OnBoardingPage = () => {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  return (
    <StepSlider.SliderCubeAnimation
      className='w-full h-screen onBoardingCards'
      classNameStep='w-full h-full flex justify-center relative'
      steps={steps}
      startupScreen={
        <StepSlider.PresentationLogo iconClass='w-24 h-24 sm:w-32 sm:h-32' />
      }
      initialStep={Number(step) || 0}
    />
  )
}

export default OnBoardingPage
