'use client'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/ui/molecules'
import { SkeletonSliderAwesomeProps } from './types'

const SkeletonSliderAwesome: React.FC<SkeletonSliderAwesomeProps> = ({
  children,
  className,
}) => {
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
  }, [children])

  return (
    <div className={classNames('relative', className)}>
      {isLoading && (
        <Skeleton
          className={classNames(
            'absolute inset-0 flex items-center justify-center rounded-md'
          )}
        />
      )}
      <div
        ref={sliderRef}
        className={classNames({ invisible: isLoading, 'opacity-0': isLoading })}
      >
        {children}
      </div>
    </div>
  )
}

export default SkeletonSliderAwesome
