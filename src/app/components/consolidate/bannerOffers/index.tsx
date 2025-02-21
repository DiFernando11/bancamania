import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import { StepAutoPlaySlider, StepSlider } from '@/ui/organisms'
import { StepProps } from '@/ui/organisms/stepSlider/types'
import CardOffert from './cardOffert'
import './index.css'

const steps: (() => JSX.Element)[] = [
  () => <CardOffert>Primer Step</CardOffert>,
  () => <CardOffert>Segudno Step</CardOffert>,
]

const BannerOffers = () => {
  return <StepAutoPlaySlider.fallAnimation isStopHover steps={steps} />
}

export default BannerOffers
