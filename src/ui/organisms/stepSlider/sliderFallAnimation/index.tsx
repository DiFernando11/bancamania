'use client'
import React from 'react'
import StepSlider from '..'
import { AwesomeSliderWrapperProps } from '../types'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

const SliderFallAnimation: React.FC<
  Omit<AwesomeSliderWrapperProps, 'animation'>
> = props => {
  return <StepSlider {...props} animation='fallAnimation' />
}

export default SliderFallAnimation
