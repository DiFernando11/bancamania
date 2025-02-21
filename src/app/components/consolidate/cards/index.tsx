import React from 'react'
import { StepSlider } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import FlipCardAccount from '../../flipCardAccount'
import FlipCardDebit from '../../flipCardDebit'
import '../../../styles/sliderCards.css'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <FlipCardAccount {...props} isNextStep />,
  props => <FlipCardDebit {...props} isNextStep />,
]

const Cards = () => {
  return (
    <StepSlider.SliderFallAnimation
      startupDelay={0}
      classNameStep='w-full'
      steps={steps}
      className='awesome-card'
    />
  )
}

export default Cards
