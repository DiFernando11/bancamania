import { useEffect, useRef } from 'react'
import { ScrollIntoViewWrapperProps } from './types'

const ScrollIntoView: React.FC<ScrollIntoViewWrapperProps> = ({
  isVisible,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }, [isVisible])

  return (
    <div ref={ref} key={isVisible ? 'visible' : 'hidden'}>
      {children}
    </div>
  )
}

export default ScrollIntoView
