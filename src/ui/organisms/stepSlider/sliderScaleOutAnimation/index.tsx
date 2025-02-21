'use client'
import React from 'react'
import StepSlider from '..'
import { AwesomeSliderWrapperProps } from '../types'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

const SliderScaleOutAnimation: React.FC<
  Omit<AwesomeSliderWrapperProps, 'animation'>
> = props => {
  return <StepSlider {...props} animation='scaleOutAnimation' />
}

export default SliderScaleOutAnimation
