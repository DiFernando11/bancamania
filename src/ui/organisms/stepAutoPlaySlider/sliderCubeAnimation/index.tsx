'use client'
import React from 'react'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import { StepAutoPlaySlider } from '../..'
import SkeletonSliderAwesome from '../../skeletonSliderAwesome'
import { AwesomeSliderAutoWrapperProps } from '../types'

const SliderCubeAnimation: React.FC<
  Omit<AwesomeSliderAutoWrapperProps, 'animation'>
> = props => {
  return (
    <SkeletonSliderAwesome>
      <StepAutoPlaySlider {...props} animation='cubeAnimation' />
    </SkeletonSliderAwesome>
  )
}

export default SliderCubeAnimation
