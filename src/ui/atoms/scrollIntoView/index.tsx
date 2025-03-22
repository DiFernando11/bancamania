'use client'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { ScrollIntoViewWrapperProps } from './types'

const ScrollIntoView: React.FC<ScrollIntoViewWrapperProps> = ({
  isVisible,
  children,
  isNotScroll = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }, [isVisible])

  if (isNotScroll) return null

  return (
    <div
      ref={ref}
      className={classNames({ block: isVisible, hidden: !isVisible })}
    >
      {children}
    </div>
  )
}

export default ScrollIntoView
