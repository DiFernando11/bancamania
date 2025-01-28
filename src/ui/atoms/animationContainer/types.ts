import { MotionProps } from 'framer-motion'
import { ElementType } from 'react'

export interface AnimatedWrapperProps<T extends ElementType>
  extends MotionProps {
  as?: T
  children: React.ReactNode
  className?: string
}
