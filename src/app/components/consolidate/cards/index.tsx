/* eslint-disable react/display-name */
'use client'
import React from 'react'
import { useGetCardsCredit } from '@/application/hooks'
import { StepSlider } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import FlipCardAccount from '../../flipCardAccount'
import FlipCardCredit from '../../flipCardCredit'
import FlipCardDebit from '../../flipCardDebit'
import '../../../styles/sliderCards.css'

const Cards = () => {
  const { data = [], isLoading } = useGetCardsCredit()

  const creditsCard = data.map(
    credit =>
      function (props: StepProps) {
        return (
          <FlipCardCredit
            {...props}
            isNextStep
            data={credit}
            isLoading={isLoading}
          />
        )
      }
  )

  const steps: ((props: StepProps) => JSX.Element)[] = [
    props => <FlipCardAccount {...props} isNextStep />,
    props => <FlipCardDebit {...props} isNextStep />,
    ...creditsCard,
  ]

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
