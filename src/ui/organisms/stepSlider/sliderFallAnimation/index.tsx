'use client'
import React from 'react'
import StepSlider from '..'
import SkeletonSliderAwesome from '../../skeletonSliderAwesome'
import { AwesomeSliderWrapperProps } from '../types'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

const SliderFallAnimation: React.FC<
  Omit<AwesomeSliderWrapperProps, 'animation'>
> = props => {
  return (
    <SkeletonSliderAwesome>
      <StepSlider {...props} animation='fallAnimation' />
    </SkeletonSliderAwesome>
  )
}

export default SliderFallAnimation
