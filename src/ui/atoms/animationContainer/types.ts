import { MotionProps } from 'framer-motion'
import { ElementType } from 'react'

export interface AnimatedWrapperProps<T extends ElementType>
  extends MotionProps {
  children?: React.ReactNode
  className?: string
}
