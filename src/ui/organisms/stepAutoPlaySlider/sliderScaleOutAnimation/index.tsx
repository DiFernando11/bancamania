'use client'
import React from 'react'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import { StepAutoPlaySlider } from '../..'
import SkeletonSliderAwesome from '../../skeletonSliderAwesome'
import { AwesomeSliderAutoWrapperProps } from '../types'

const SliderScaleOutAnimation: React.FC<
  Omit<AwesomeSliderAutoWrapperProps, 'animation'>
> = props => {
  return (
    <SkeletonSliderAwesome>
      <StepAutoPlaySlider {...props} animation='sacaleOutAnimation' />
    </SkeletonSliderAwesome>
  )
}

export default SliderScaleOutAnimation
