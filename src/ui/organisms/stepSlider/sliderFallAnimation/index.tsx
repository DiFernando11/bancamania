'use client'
import classNames from 'classnames'
import React, { useState, useEffect, useRef } from 'react'
import { Skeleton } from '@/ui/molecules'
import StepSlider from '..'
import { AwesomeSliderWrapperProps } from '../types'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

const SliderFallAnimation: React.FC<
  Omit<AwesomeSliderWrapperProps, 'animation'>
> = props => {
  const [isLoading, setIsLoading] = useState(true)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkIfLoaded = () => {
      if (sliderRef.current?.children.length) {
        setIsLoading(false)
      }
    }
    checkIfLoaded()
    const observer = new MutationObserver(() => {
      checkIfLoaded()
    })
    if (sliderRef.current) {
      observer.observe(sliderRef.current, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      setIsLoading(true)
    }
  }, [props])

  return (
    <div className='relative'>
      {isLoading && (
        <Skeleton
          className={classNames(
            'absolute inset-0 flex items-center justify-center rounded-md'
          )}
        />
      )}
      <div ref={sliderRef} className={classNames({ invisible: isLoading })}>
        <StepSlider {...props} animation='fallAnimation' />
      </div>
    </div>
  )
}

export default SliderFallAnimation
