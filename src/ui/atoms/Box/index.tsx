import React, { forwardRef } from 'react'
import { BoxProps } from '@/ui/atoms/box/types'

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, ...rest },
  ref
) {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
})

export default Box
