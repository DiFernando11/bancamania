'use client'
import React, { useState, useEffect, useRef } from 'react'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { StepAutoPlaySlider } from '../..'
import SkeletonSliderAwesome from '../../skeletonSliderAwesome'
import { AwesomeSliderAutoWrapperProps } from '../types'

const SliderFallAnimation: React.FC<
  Omit<AwesomeSliderAutoWrapperProps, 'animation'>
> = props => {
  return (
    <SkeletonSliderAwesome>
      <StepAutoPlaySlider {...props} animation='fallAnimation' />
    </SkeletonSliderAwesome>
  )
}

export default SliderFallAnimation
