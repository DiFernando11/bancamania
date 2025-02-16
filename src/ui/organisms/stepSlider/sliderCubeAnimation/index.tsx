'use client'
import React from 'react'
import StepSlider from '..'
import { AwesomeSliderWrapperProps } from '../types'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

const SliderCubeAnimation: React.FC<
  Omit<AwesomeSliderWrapperProps, 'animation'>
> = props => {
  return <StepSlider {...props} animation='cubeAnimation' />
}

export default SliderCubeAnimation
