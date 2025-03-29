'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
// @ts-expect-error No type definitions for autoplay module
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import SliderCubeAnimation from './sliderCubeAnimation'
import SliderFallAnimation from './sliderFallAnimation'
import SliderScaleOutAnimation from './sliderScaleOutAnimation'
import { AwesomeSliderAutoWrapperProps } from './types'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const AutoPlaySlider = ({
  steps,
  classNameStep,
  interval = 3000,
  isStopHover = false,
  className,
  ...restProps
}: AwesomeSliderAutoWrapperProps) => {
  const [isPlaying, setIsPlaying] = useState(true)

  const handleInteraction = () => {
    setIsPlaying(true)
  }

  const handleMouseEnter = () => {
    if (isStopHover) setIsPlaying(false)
  }

  const handleMouseLeave = () => {
    if (isStopHover) setIsPlaying(true)
  }

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AutoplaySlider
        play={isPlaying}
        interval={interval}
        animation='cubeAnimation'
        {...restProps}
        onTransitionStart={handleInteraction}
      >
        {steps.map((StepComponent, index) => (
          <div key={index} className={classNames(classNameStep)}>
            <StepComponent />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  )
}
AutoPlaySlider.fallAnimation = SliderFallAnimation
AutoPlaySlider.cubeAnimation = SliderCubeAnimation
AutoPlaySlider.sacaleOutAnimation = SliderScaleOutAnimation

export default AutoPlaySlider
