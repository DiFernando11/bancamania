'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { ArrowButtonAnimation } from '@/ui/molecules'
import { ArrowButtonNext } from './buttonStep'
import PresentationLogo from './presentationLogo'
import SliderCubeAnimation from './sliderCubeAnimation'
import SliderFallAnimation from './sliderFallAnimation'
import { AwesomeSliderWrapperProps } from './types'

const StepSlider = ({
  steps,
  initialStep = 0,
  classNameStep,
  bullets = false,
  buttons = false,
  mobileTouch = false,
  organicArrows = false,
  startupDelay = 500,
  ...sliderProps
}: AwesomeSliderWrapperProps) => {
  const [stepCurrent, setStepCurrent] = useState(initialStep)
  const isLastStep = stepCurrent === steps.length - 1

  const handleNext = (stepIndex?: number) => {
    setStepCurrent(prev => {
      if (
        typeof stepIndex === 'number' &&
        stepIndex >= 0 &&
        stepIndex < steps.length
      )
        return stepIndex

      return isLastStep ? 0 : prev + 1
    })
  }

  const handlePrev = () => {
    setStepCurrent(prev => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  return (
    <AwesomeSlider
      {...sliderProps}
      selected={stepCurrent}
      style={{
        '--content-background-color': 'transparent',
        ...sliderProps.style,
      }}
      onTransitionEnd={e => setStepCurrent(e.currentIndex)}
      mobileTouch={mobileTouch}
      organicArrows={organicArrows}
      bullets={bullets}
      buttons={buttons}
      startupDelay={startupDelay}
    >
      {steps.map((StepComponent, index) => (
        <div key={index} className={classNames(classNameStep)}>
          <StepComponent
            next={handleNext}
            prev={handlePrev}
            stepCurrent={stepCurrent}
            stepIsActive={stepCurrent === index}
            isLastStep={isLastStep}
          />
        </div>
      ))}
    </AwesomeSlider>
  )
}

StepSlider.PresentationLogo = PresentationLogo
StepSlider.SliderCubeAnimation = SliderCubeAnimation
StepSlider.SliderFallAnimation = SliderFallAnimation
StepSlider.ArrowButtonNext = ArrowButtonNext

export default StepSlider
