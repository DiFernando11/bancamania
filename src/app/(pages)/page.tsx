'use client'
import React from 'react'
import { Box } from '@/ui/atoms'
import { StepSlider } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import FlipCardAccount from '../components/flipCardAccount'
import './styles/index.css'
import FlipCardDebit from '../components/flipCardDebit'

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <FlipCardAccount {...props} isNextStep />,
  props => <FlipCardDebit {...props} isNextStep />,
]

const ConsolidadaPage = () => {
  return (
    <main className='w-full flex flex-col h-full p-6 lg:p-0'>
      <Box className='w-full flex flex-col gap-8 max-w-content self-center'>
        <StepSlider.SliderFallAnimation
          startupDelay={0}
          classNameStep='w-full'
          steps={steps}
        />
      </Box>
    </main>
  )
}

export default ConsolidadaPage
